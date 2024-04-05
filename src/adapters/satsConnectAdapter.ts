import { RunesApi } from '../runes';
import { Params, Requests } from '../request';
import { RpcErrorCode, RpcResult } from '../types';
import { EstimateRunesEtchParams, EstimateRunesMintParams } from '../request/types/runesMethods';

abstract class SatsConnectAdapter {
  abstract readonly id: string;

  private async mintRunes(params: Params<'runes_mint'>): Promise<RpcResult<'runes_mint'>> {
    try {
      const orderResponse = await new RunesApi(params.network).createMintOrder(params);
      if (orderResponse.data) {
        const paymentResponse = await this.requestInternal('sendTransfer', {
          recipients: [
            {
              address: orderResponse.data.fundAddress,
              amount: orderResponse.data.fundAmount,
            },
          ],
        });
        if (paymentResponse?.status === 'success') {
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
        } else {
          return {
            status: 'error',
            error: {
              code: RpcErrorCode.USER_REJECTION,
              message: 'User rejected the payment request',
            },
          };
        }
      } else {
        return {
          status: 'error',
          error: {
            code: RpcErrorCode.INTERNAL_ERROR,
            message: orderResponse.error,
          },
        };
      }
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
    try {
      const orderResponse = await new RunesApi(params.network).createEtchOrder(params);
      if (orderResponse.data) {
        const paymentResponse = await this.requestInternal('sendTransfer', {
          recipients: [
            {
              address: orderResponse.data.fundAddress,
              amount: orderResponse.data.fundAmount,
            },
          ],
        });
        if (paymentResponse?.status === 'success') {
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
        } else {
          return {
            status: 'error',
            error: {
              code: RpcErrorCode.USER_REJECTION,
              message: 'User rejected the payment request',
            },
          };
        }
      } else {
        return {
          status: 'error',
          error: {
            code: RpcErrorCode.INTERNAL_ERROR,
            message: orderResponse.error,
          },
        };
      }
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
        return new RunesApi((params as EstimateRunesMintParams).network).estimateMintCost(
          params as EstimateRunesMintParams
        ) as Promise<RpcResult<Method>>;
      case 'runes_estimateEtch':
        return new RunesApi((params as EstimateRunesMintParams).network).estimateEtchCost(
          params as EstimateRunesEtchParams
        ) as Promise<RpcResult<Method>>;
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
