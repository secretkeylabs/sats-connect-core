import { BitcoinNetworkType, MethodParamsAndResult } from '../../../types';
import { RBFOrderRequest } from '../../../runes/types';

interface RunesRbfOrderParams extends RBFOrderRequest {
  network?: BitcoinNetworkType;
}

interface RunesRbfOrderResult {
  orderId: string;
  fundRBFTransactionId: string;
  fundingAddress: string;
}

export type RunesRbfOrder = MethodParamsAndResult<RunesRbfOrderParams, RunesRbfOrderResult>;
