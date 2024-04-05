import {
  CreateEtchOrderRequest,
  CreateMintOrderRequest,
  CreateOrderResponse,
  EstimateEtchOrderRequest,
  EstimateMintOrderRequest,
  EstimateOrderResponse,
} from './types';
import { BitcoinNetworkType, RpcErrorCode, RpcResult } from '../types';

import axios, { AxiosInstance } from 'axios';

export const RUNES_API_BASE_URL = (network: BitcoinNetworkType = BitcoinNetworkType.Mainnet) =>
  `https://ordinals${network === BitcoinNetworkType.Testnet ? '-testnet' : ''}.xverse.app/v1/runes`;

export class RunesApi {
  client: AxiosInstance;

  constructor(network?: BitcoinNetworkType) {
    this.client = axios.create({
      baseURL: `${RUNES_API_BASE_URL(network)}`,
    });
  }

  estimateMintCost = async (
    mintParams: EstimateMintOrderRequest
  ): Promise<RpcResult<'runes_estimateMint'>> => {
    try {
      const response = await this.client.post<EstimateOrderResponse>('/mint/estimate', {
        ...mintParams,
      });
      return {
        status: 'success',
        result: {
          costBreakdown: response.data.costBreakdown,
          totalCost: response.data.totalCost,
          totalSize: response.data.totalSize,
        },
      };
    } catch (error) {
      return {
        status: 'error',
        error: {
          code: RpcErrorCode.INTERNAL_ERROR,
          message: error.message,
        },
      };
    }
  };

  estimateEtchCost = async (
    etchParams: EstimateEtchOrderRequest
  ): Promise<RpcResult<'runes_estimateEtch'>> => {
    try {
      const response = await this.client.post<EstimateOrderResponse>('/etch/estimate', {
        ...etchParams,
      });
      return {
        status: 'success',
        result: {
          costBreakdown: response.data.costBreakdown,
          totalCost: response.data.totalCost,
          totalSize: response.data.totalSize,
        },
      };
    } catch (error) {
      return {
        status: 'error',
        error: {
          code: RpcErrorCode.INTERNAL_ERROR,
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
      return {
        error: error.data.message,
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
      return {
        error: error.data.message,
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
      return {
        error: error.data.message,
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
      return {
        error: error.data.message,
      };
    }
  };
}

export default RunesApi;
