import { BitcoinNetworkType, MethodParamsAndResult } from '../../../types';
import { RBFOrderRequest, RBFOrderResponse } from '../../../runes/types';

export const runesEstimateRbfOrderMethodName = 'runes_estimateRbfOrder';

interface RunesEstimateRbfOrderParams extends RBFOrderRequest {
  network?: BitcoinNetworkType;
}

export type RunesEstimateRbfOrder = MethodParamsAndResult<
  RunesEstimateRbfOrderParams,
  RBFOrderResponse
>;
