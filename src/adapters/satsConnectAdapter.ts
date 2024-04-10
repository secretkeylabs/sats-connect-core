import { getRunesApiClient, RunesApi } from '../runes';
import { Params, Requests } from '../request';
import { RpcErrorCode, RpcResult } from '../types';

abstract class SatsConnectAdapter {
  abstract readonly id: string;

  private async mintRunes(params: Params<'runes_mint'>): Promise<RpcResult<'runes_mint'>> {
    try {
      const mintRequest: Omit<Params<'runes_mint'>, 'network'> = {
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
      if (paymentResponse?.status !== 'success') {
        return {
          status: 'error',
          error: {
            code: RpcErrorCode.USER_REJECTION,
            message: 'User rejected the payment request',
          },
        };
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

  private async etchRunes(params: Params<'runes_etch'>): Promise<RpcResult<'runes_etch'>> {
    const etchRequest: Omit<Params<'runes_etch'>, 'network'> = {
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
      if (paymentResponse?.status !== 'success') {
        return {
          status: 'error',
          error: {
            code: RpcErrorCode.USER_REJECTION,
            message: 'User rejected the payment request',
          },
        };
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
    params: Params<'runes_estimateMint'>
  ): Promise<RpcResult<'runes_estimateMint'>> {
    const estimateMintRequest: Omit<Params<'runes_estimateMint'>, 'network'> = {
      destinationAddress: params.destinationAddress,
      feeRate: params.feeRate,
      repeats: params.repeats,
      runeName: params.runeName,
      appServiceFee: params.appServiceFee,
      appServiceFeeAddress: params.appServiceFeeAddress,
    };
    const response = await getRunesApiClient(
      (params as Params<'runes_estimateMint'>).network
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
    params: Params<'runes_estimateEtch'>
  ): Promise<RpcResult<'runes_estimateEtch'>> {
    const estimateEtchRequest: Omit<Params<'runes_estimateEtch'>, 'network'> = {
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

  private async getOrder(params: Params<'runes_getOrder'>): Promise<RpcResult<'runes_getOrder'>> {
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
          response.error.code === 400 ? RpcErrorCode.INVALID_REQUEST : RpcErrorCode.INTERNAL_ERROR,
        message: response.error.message,
      },
    };
  }

  async request<Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined> {
    switch (method) {
      case 'runes_mint':
        return this.mintRunes(params as Params<'runes_mint'>) as Promise<RpcResult<Method>>;
      case 'runes_etch':
        return this.etchRunes(params as Params<'runes_etch'>) as Promise<RpcResult<Method>>;
      case 'runes_estimateMint':
        return this.estimateMint(params as Params<'runes_estimateMint'>) as Promise<
          RpcResult<Method>
        >;
      case 'runes_estimateEtch':
        return this.estimateEtch(params as Params<'runes_estimateEtch'>) as Promise<
          RpcResult<Method>
        >;
      case 'runes_getOrder': {
        return this.getOrder(params as Params<'runes_getOrder'>) as Promise<RpcResult<Method>>;
      }
      default:
        return this.requestInternal(method, params);
    }
  }

  protected abstract requestInternal<Method extends keyof Requests>(
    method: Method,
    params: Params<Method>
  ): Promise<RpcResult<Method> | undefined>;
}
export { SatsConnectAdapter };
