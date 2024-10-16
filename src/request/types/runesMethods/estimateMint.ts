import { BitcoinNetworkType, MethodParamsAndResult } from '../../../types';
import { EstimateMintOrderRequest, EstimateOrderResponse } from '../../../runes/types';

export interface runesEstimateMintParams extends EstimateMintOrderRequest {
  network?: BitcoinNetworkType;
}

export type runesEstimateMintResult = EstimateOrderResponse;

export type RunesEstimateMint = MethodParamsAndResult<
  runesEstimateMintParams,
  runesEstimateMintResult
>;
