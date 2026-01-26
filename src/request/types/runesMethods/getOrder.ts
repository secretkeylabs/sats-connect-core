import { BitcoinNetworkType, MethodParamsAndResult } from '../../../types';
import { GetOrderRequest, GetOrderResponse } from '../../../runes/types';

export const runesGetOrderMethodName = 'runes_getOrder';

interface RunesGetOrderParams extends GetOrderRequest {
  network?: BitcoinNetworkType;
}

export type RunesGetOrder = MethodParamsAndResult<RunesGetOrderParams, GetOrderResponse>;
