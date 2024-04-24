import {
  CreateEtchOrderRequest,
  CreateMintOrderRequest,
  CreateOrderResponse,
  EstimateEtchOrderRequest,
  EstimateMintOrderRequest,
  EstimateOrderResponse,
  GetOrderResponse,
  RBFOrderRequest,
  RBFOrderResponse,
} from './types';
import { BitcoinNetworkType } from '../types';

import axios, { AxiosError, AxiosInstance } from 'axios';

export const ORDINALS_API_BASE_URL = (network: BitcoinNetworkType = BitcoinNetworkType.Mainnet) =>
  `https://ordinals${network === BitcoinNetworkType.Testnet ? '-testnet' : ''}.xverse.app/v1`;

export class RunesApi {
  client: AxiosInstance;

  constructor(network?: BitcoinNetworkType) {
    this.client = axios.create({
      baseURL: ORDINALS_API_BASE_URL(network),
    });
  }

  private parseError = (error: AxiosError) => {
    return {
      code: error.response?.status,
      message: JSON.stringify(error.response?.data),
    };
  };

  estimateMintCost = async (mintParams: EstimateMintOrderRequest) => {
    try {
      const response = await this.client.post<EstimateOrderResponse>('/runes/mint/estimate', {
        ...mintParams,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: this.parseError(err),
      };
    }
  };

  estimateEtchCost = async (etchParams: EstimateEtchOrderRequest) => {
    try {
      const response = await this.client.post<EstimateOrderResponse>('/runes/etch/estimate', {
        ...etchParams,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: this.parseError(err),
      };
    }
  };

  createMintOrder = async (mintOrderParams: CreateMintOrderRequest) => {
    try {
      const response = await this.client.post<CreateOrderResponse>('/runes/mint/orders', {
        ...mintOrderParams,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: this.parseError(err),
      };
    }
  };

  createEtchOrder = async (etchOrderParams: CreateEtchOrderRequest) => {
    try {
      const response = await this.client.post<CreateOrderResponse>('/runes/etch/orders', {
        ...etchOrderParams,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: this.parseError(err),
      };
    }
  };

  executeMint = async (orderId: string, fundTransactionId: string) => {
    try {
      const response = await this.client.post(`/runes/mint/orders/${orderId}/execute`, {
        fundTransactionId,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: this.parseError(err),
      };
    }
  };

  executeEtch = async (orderId: string, fundTransactionId: string) => {
    try {
      const response = await this.client.post(`/runes/etch/orders/${orderId}/execute`, {
        fundTransactionId,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: this.parseError(err),
      };
    }
  };

  getOrder = async (orderId: string) => {
    try {
      const response = await this.client.get<GetOrderResponse>(`/orders/${orderId}`);
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: this.parseError(err),
      };
    }
  };

  rbfOrder = async (rbfRequest: RBFOrderRequest) => {
    const { orderId, newFeeRate } = rbfRequest;
    try {
      const response = await this.client.post<RBFOrderResponse>(`/orders/${orderId}/rbf-estimate`, {
        newFeeRate,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: this.parseError(err),
      };
    }
  };
}

const testnetClient = new RunesApi(BitcoinNetworkType.Testnet);
const mainnetClient = new RunesApi(BitcoinNetworkType.Mainnet);

export const getRunesApiClient = (network: BitcoinNetworkType = BitcoinNetworkType.Mainnet) =>
  network === BitcoinNetworkType.Mainnet ? mainnetClient : testnetClient;
