import {
  CreateEtchOrderRequest,
  CreateMintOrderRequest,
  CreateOrderResponse,
  EstimateEtchOrderRequest,
  EstimateMintOrderRequest,
  EstimateOrderResponse,
} from './types';
import { BitcoinNetworkType, RpcErrorCode, RpcResult } from '../types';

import axios, { Axios, AxiosError, AxiosInstance } from 'axios';

export const RUNES_API_BASE_URL = (network: BitcoinNetworkType = BitcoinNetworkType.Mainnet) =>
  `https://ordinals${network === BitcoinNetworkType.Testnet ? '-testnet' : ''}.xverse.app/v1/runes`;

export class RunesApi {
  client: AxiosInstance;

  constructor(network?: BitcoinNetworkType) {
    this.client = axios.create({
      baseURL: `${RUNES_API_BASE_URL(network)}`,
    });
  }

  estimateMintCost = async (mintParams: EstimateMintOrderRequest) => {
    try {
      const response = await this.client.post<EstimateOrderResponse>('/mint/estimate', {
        ...mintParams,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: {
          code: err.response?.status,
          message: error.data.message,
        },
      };
    }
  };

  estimateEtchCost = async (etchParams: EstimateEtchOrderRequest) => {
    try {
      const response = await this.client.post<EstimateOrderResponse>('/etch/estimate', {
        ...etchParams,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: {
          code: err.response?.status,
          message: error.data.message,
        },
      };
    }
  };

  createMintOrder = async (mintOrderParams: CreateMintOrderRequest) => {
    try {
      const response = await this.client.post<CreateOrderResponse>('/mint/orders', {
        ...mintOrderParams,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: {
          code: err.response?.status,
          message: error.data.message,
        },
      };
    }
  };

  createEtchOrder = async (etchOrderParams: CreateEtchOrderRequest) => {
    try {
      const response = await this.client.post<CreateOrderResponse>('/etch/orders', {
        ...etchOrderParams,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: {
          code: err.response?.status,
          message: error.data.message,
        },
      };
    }
  };

  executeMint = async (orderId: string, fundTransactionId: string) => {
    try {
      const response = await this.client.post(`/mint/orders/${orderId}/execute`, {
        fundTransactionId,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: {
          code: err.response?.status,
          message: error.data.message,
        },
      };
    }
  };

  executeEtch = async (orderId: string, fundTransactionId: string) => {
    try {
      const response = await this.client.post(`/etch/orders/${orderId}/execute`, {
        fundTransactionId,
      });
      return {
        data: response.data,
      };
    } catch (error) {
      const err = error as AxiosError;
      return {
        error: {
          code: err.response?.status,
          message: error.data.message,
        },
      };
    }
  };
}

const testnetClient = new RunesApi(BitcoinNetworkType.Testnet);
const mainnetClient = new RunesApi(BitcoinNetworkType.Mainnet);

export const getRunesApiClient = (network: BitcoinNetworkType = BitcoinNetworkType.Mainnet) =>
  network === BitcoinNetworkType.Mainnet ? mainnetClient : testnetClient;
