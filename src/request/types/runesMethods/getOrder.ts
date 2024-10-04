import { BitcoinNetworkType, MethodParamsAndResult } from '../../../types';
import { GetOrderRequest, GetOrderResponse } from '../../../runes/types';

interface RunesGetOrderParams extends GetOrderRequest {
  network?: BitcoinNetworkType;
}

export type RunesGetOrder = MethodParamsAndResult<RunesGetOrderParams, GetOrderResponse>;
