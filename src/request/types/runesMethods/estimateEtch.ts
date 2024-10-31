import { BitcoinNetworkType, MethodParamsAndResult } from '../../../types';
import { EstimateEtchOrderRequest, EstimateOrderResponse } from '../../../runes/types';

export interface RunesEstimateEtchParams extends EstimateEtchOrderRequest {
  network?: BitcoinNetworkType;
}

export type RunesEstimateEtchResult = EstimateOrderResponse;

export type RunesEstimateEtch = MethodParamsAndResult<
  RunesEstimateEtchParams,
  RunesEstimateEtchResult
>;
