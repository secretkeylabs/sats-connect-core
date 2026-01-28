import { AddListener } from 'src/provider';
import { RequestReturn } from 'src/request';
import { Method } from 'src/request/methods';
import { RpcRequestParams } from 'src/request/rpc/requests';
import { getRunesApiClient, RunesApi } from '../runes/api';
import { RpcErrorCode } from '../types';

abstract class SatsConnectAdapter {
  abstract readonly id: string;

  private async mintRunes(
    params: RpcRequestParams<'runes_mint'>
  ): Promise<RequestReturn<'runes_mint'>> {
    try {
      const walletInfo = await this.requestInternal('getInfo', null).catch(() => null);
      if (walletInfo && walletInfo.status === 'success') {
        const isMintSupported = walletInfo.result.methods?.includes('runes_mint');
        if (isMintSupported) {
          const response = await this.requestInternal('runes_mint', params);
          if (response) {
            if (response.status === 'success') {
              return response;
            }
            if (
              response.status === 'error' &&
              response.error.code !== RpcErrorCode.METHOD_NOT_FOUND
            ) {
              return response;
            }
          }
        }
      }
      const mintRequest: Omit<RpcRequestParams<'runes_mint'>, 'network'> = {
        destinationAddress: params.destinationAddress,
        feeRate: params.feeRate,
        refundAddress: params.refundAddress,
        repeats: params.repeats,
        runeName: params.runeName,
        appServiceFee: params.appServiceFee,
        appServiceFeeAddress: params.appServiceFeeAddress,
      };
      const orderResponse = await new RunesApi(params.network).createMintOrder(mintRequest);
      if (!orderResponse.data) {
        return {
          status: 'error',
          error: {
            code:
              orderResponse.error.code === 400
                ? RpcErrorCode.INVALID_REQUEST
                : RpcErrorCode.INTERNAL_ERROR,
            message: orderResponse.error.message,
          },
        };
      }
      const paymentResponse = await this.requestInternal('sendTransfer', {
        recipients: [
          {
            address: orderResponse.data.fundAddress,
            amount: orderResponse.data.fundAmount,
          },
        ],
      });
      if (paymentResponse.status !== 'success') {
        return paymentResponse;
      }
      await new RunesApi(params.network).executeMint(
        orderResponse.data.orderId,
        paymentResponse.result.txid
      );
      return {
        status: 'success',
        result: {
          orderId: orderResponse.data.orderId,
          fundTransactionId: paymentResponse.result.txid,
          fundingAddress: orderResponse.data.fundAddress,
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
  }

  private async etchRunes(
    params: RpcRequestParams<'runes_etch'>
  ): Promise<RequestReturn<'runes_etch'>> {
    const etchRequest: Omit<RpcRequestParams<'runes_etch'>, 'network'> = {
      destinationAddress: params.destinationAddress,
      refundAddress: params.refundAddress,
      feeRate: params.feeRate,
      runeName: params.runeName,
      divisibility: params.divisibility,
      symbol: params.symbol,
      premine: params.premine,
      isMintable: params.isMintable,
      terms: params.terms,
      inscriptionDetails: params.inscriptionDetails,
      delegateInscriptionId: params.delegateInscriptionId,
      appServiceFee: params.appServiceFee,
      appServiceFeeAddress: params.appServiceFeeAddress,
    };
    try {
      const walletInfo = await this.requestInternal('getInfo', null).catch(() => null);
      if (walletInfo && walletInfo.status === 'success') {
        const isEtchSupported = walletInfo.result.methods?.includes('runes_etch');
        if (isEtchSupported) {
          const response = await this.requestInternal('runes_etch', params);
          if (response) {
            if (response.status === 'success') {
              return response;
            }
            if (
              response.status === 'error' &&
              response.error.code !== RpcErrorCode.METHOD_NOT_FOUND
            ) {
              return response;
            }
          }
        }
      }
      const orderResponse = await new RunesApi(params.network).createEtchOrder(etchRequest);
      if (!orderResponse.data) {
        return {
          status: 'error',
          error: {
            code:
              orderResponse.error.code === 400
                ? RpcErrorCode.INVALID_REQUEST
                : RpcErrorCode.INTERNAL_ERROR,
            message: orderResponse.error.message,
          },
        };
      }
      const paymentResponse = await this.requestInternal('sendTransfer', {
        recipients: [
          {
            address: orderResponse.data.fundAddress,
            amount: orderResponse.data.fundAmount,
          },
        ],
      });
      if (paymentResponse.status !== 'success') {
        return paymentResponse;
      }
      await new RunesApi(params.network).executeEtch(
        orderResponse.data.orderId,
        paymentResponse.result.txid
      );
      return {
        status: 'success',
        result: {
          orderId: orderResponse.data.orderId,
          fundTransactionId: paymentResponse.result.txid,
          fundingAddress: orderResponse.data.fundAddress,
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
  }

  private async estimateMint(
    params: RpcRequestParams<'runes_estimateMint'>
  ): Promise<RequestReturn<'runes_estimateMint'>> {
    const estimateMintRequest: Omit<RpcRequestParams<'runes_estimateMint'>, 'network'> = {
      destinationAddress: params.destinationAddress,
      feeRate: params.feeRate,
      repeats: params.repeats,
      runeName: params.runeName,
      appServiceFee: params.appServiceFee,
      appServiceFeeAddress: params.appServiceFeeAddress,
    };
    const response = await getRunesApiClient(
      (params as RpcRequestParams<'runes_estimateMint'>).network
    ).estimateMintCost(estimateMintRequest);
    if (response.data) {
      return {
        status: 'success',
        result: response.data,
      };
    }
    return {
      status: 'error',
      error: {
        code:
          response.error.code === 400 ? RpcErrorCode.INVALID_REQUEST : RpcErrorCode.INTERNAL_ERROR,
        message: response.error.message,
      },
    };
  }

  private async estimateEtch(
    params: RpcRequestParams<'runes_estimateEtch'>
  ): Promise<RequestReturn<'runes_estimateEtch'>> {
    const estimateEtchRequest: Omit<RpcRequestParams<'runes_estimateEtch'>, 'network'> = {
      destinationAddress: params.destinationAddress,
      feeRate: params.feeRate,
      runeName: params.runeName,
      divisibility: params.divisibility,
      symbol: params.symbol,
      premine: params.premine,
      isMintable: params.isMintable,
      terms: params.terms,
      inscriptionDetails: params.inscriptionDetails,
      delegateInscriptionId: params.delegateInscriptionId,
      appServiceFee: params.appServiceFee,
      appServiceFeeAddress: params.appServiceFeeAddress,
    };
    const response = await getRunesApiClient(params.network).estimateEtchCost(estimateEtchRequest);
    if (response.data) {
      return {
        status: 'success',
        result: response.data,
      };
    }
    return {
      status: 'error',
      error: {
        code:
          response.error.code === 400 ? RpcErrorCode.INVALID_REQUEST : RpcErrorCode.INTERNAL_ERROR,
        message: response.error.message,
      },
    };
  }

  private async getOrder(
    params: RpcRequestParams<'runes_getOrder'>
  ): Promise<RequestReturn<'runes_getOrder'>> {
    const response = await getRunesApiClient(params.network).getOrder(params.id);
    if (response.data) {
      return {
        status: 'success',
        result: response.data,
      };
    }
    return {
      status: 'error',
      error: {
        code:
          response.error.code === 400 || response.error.code === 404
            ? RpcErrorCode.INVALID_REQUEST
            : RpcErrorCode.INTERNAL_ERROR,
        message: response.error.message,
      },
    };
  }

  private async estimateRbfOrder(
    params: RpcRequestParams<'runes_estimateRbfOrder'>
  ): Promise<RequestReturn<'runes_estimateRbfOrder'>> {
    const rbfOrderRequest: Omit<RpcRequestParams<'runes_estimateRbfOrder'>, 'network'> = {
      newFeeRate: params.newFeeRate,
      orderId: params.orderId,
    };
    const response = await getRunesApiClient(params.network).rbfOrder(rbfOrderRequest);
    if (response.data) {
      return {
        status: 'success',
        result: {
          fundingAddress: response.data.fundingAddress,
          rbfCost: response.data.rbfCost,
        },
      };
    }
    return {
      status: 'error',
      error: {
        code:
          response.error.code === 400 || response.error.code === 404
            ? RpcErrorCode.INVALID_REQUEST
            : RpcErrorCode.INTERNAL_ERROR,
        message: response.error.message,
      },
    };
  }

  private async rbfOrder(
    params: RpcRequestParams<'runes_rbfOrder'>
  ): Promise<RequestReturn<'runes_rbfOrder'>> {
    try {
      const rbfOrderRequest: Omit<RpcRequestParams<'runes_rbfOrder'>, 'network'> = {
        newFeeRate: params.newFeeRate,
        orderId: params.orderId,
      };
      const orderResponse = await getRunesApiClient(params.network).rbfOrder(rbfOrderRequest);
      if (!orderResponse.data) {
        return {
          status: 'error',
          error: {
            code:
              orderResponse.error.code === 400 || orderResponse.error.code === 404
                ? RpcErrorCode.INVALID_REQUEST
                : RpcErrorCode.INTERNAL_ERROR,
            message: orderResponse.error.message,
          },
        };
      }
      const paymentResponse = await this.requestInternal('sendTransfer', {
        recipients: [
          {
            address: orderResponse.data.fundingAddress,
            amount: orderResponse.data.rbfCost,
          },
        ],
      });
      if (paymentResponse.status !== 'success') {
        return paymentResponse;
      }
      return {
        status: 'success',
        result: {
          fundingAddress: orderResponse.data.fundingAddress,
          orderId: rbfOrderRequest.orderId,
          fundRBFTransactionId: paymentResponse.result.txid,
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
  }

  async request<M extends Method>(
    method: M,
    params: RpcRequestParams<M>
  ): Promise<RequestReturn<M>> {
    switch (method) {
      case 'runes_mint':
        return this.mintRunes(params as RpcRequestParams<'runes_mint'>) as Promise<
          RequestReturn<M>
        >;
      case 'runes_etch':
        return this.etchRunes(params as RpcRequestParams<'runes_etch'>) as Promise<
          RequestReturn<M>
        >;
      case 'runes_estimateMint':
        return this.estimateMint(params as RpcRequestParams<'runes_estimateMint'>) as Promise<
          RequestReturn<M>
        >;
      case 'runes_estimateEtch':
        return this.estimateEtch(params as RpcRequestParams<'runes_estimateEtch'>) as Promise<
          RequestReturn<M>
        >;
      case 'runes_getOrder': {
        return this.getOrder(params as RpcRequestParams<'runes_getOrder'>) as Promise<
          RequestReturn<M>
        >;
      }
      case 'runes_estimateRbfOrder': {
        return this.estimateRbfOrder(
          params as RpcRequestParams<'runes_estimateRbfOrder'>
        ) as Promise<RequestReturn<M>>;
      }
      case 'runes_rbfOrder': {
        return this.rbfOrder(params as RpcRequestParams<'runes_rbfOrder'>) as Promise<
          RequestReturn<M>
        >;
      }
      default:
        return this.requestInternal(method, params);
    }
  }

  abstract addListener: AddListener;

  protected abstract requestInternal<M extends Method>(
    method: M,
    params: RpcRequestParams<M>
  ): Promise<RequestReturn<M>>;
}
export { SatsConnectAdapter };
