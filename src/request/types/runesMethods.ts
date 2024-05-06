import {
  CreateEtchOrderRequest,
  CreateMintOrderRequest,
  EstimateEtchOrderRequest,
  EstimateMintOrderRequest,
  EstimateOrderResponse,
  GetOrderRequest,
  GetOrderResponse,
  RBFOrderRequest,
  RBFOrderResponse,
} from '../../runes/types';
import { BitcoinNetworkType, MethodParamsAndResult, rpcRequestMessageSchema } from '../../types';
import * as v from 'valibot';

export interface EstimateRunesMintParams extends EstimateMintOrderRequest {
  network?: BitcoinNetworkType;
}

export type EstimateRunesMintResult = EstimateOrderResponse;

export type EstimateRunesMint = MethodParamsAndResult<
  EstimateRunesMintParams,
  EstimateRunesMintResult
>;

export interface MintRunesParams extends CreateMintOrderRequest {
  network?: BitcoinNetworkType;
}

export type MintRunesResult = {
  orderId: string;
  fundTransactionId: string;
  fundingAddress: string;
};

export type MintRunes = MethodParamsAndResult<MintRunesParams, MintRunesResult>;

export interface EstimateRunesEtchParams extends EstimateEtchOrderRequest {
  network?: BitcoinNetworkType;
}

export type EstimateRunesEtchResult = EstimateOrderResponse;

export type EstimateRunesEtch = MethodParamsAndResult<
  EstimateRunesEtchParams,
  EstimateRunesEtchResult
>;

export interface EtchRunesParams extends CreateEtchOrderRequest {
  network?: BitcoinNetworkType;
}

export type EtchRunesResult = {
  orderId: string;
  fundTransactionId: string;
  fundingAddress: string;
};

export type EtchRunes = MethodParamsAndResult<EtchRunesParams, EtchRunesResult>;

interface GetOrderParams extends GetOrderRequest {
  network?: BitcoinNetworkType;
}

export type GetOrder = MethodParamsAndResult<GetOrderParams, GetOrderResponse>;

interface EstimateRbfOrderParams extends RBFOrderRequest {
  network?: BitcoinNetworkType;
}

export type EstimateRbfOrder = MethodParamsAndResult<EstimateRbfOrderParams, RBFOrderResponse>;

interface RbfOrderParams extends RBFOrderRequest {
  network?: BitcoinNetworkType;
}

interface RbfOrderResult {
  orderId: string;
  fundRBFTransactionId: string;
  fundingAddress: string;
}

export type RbfOrder = MethodParamsAndResult<RbfOrderParams, RbfOrderResult>;

export const getRunesBalanceMethodName = 'runes_getBalance';
export const getRunesBalanceParamsSchema = v.nullish(v.null());
export type GetRunesBalanceParams = v.InferOutput<typeof getRunesBalanceParamsSchema>;
export const getRunesBalanceResultSchema = v.object({
  balances: v.array(
    v.object({
      runeName: v.string(),
      amount: v.string(),
      divisibility: v.number(),
      symbol: v.string(),
      inscriptionId: v.nullish(v.string()),
    })
  ),
});
export type GetRunesBalanceResult = v.InferOutput<typeof getRunesBalanceResultSchema>;
export const getRunesBalanceRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getRunesBalanceMethodName),
    params: getRunesBalanceParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetRunesBalanceRequestMessage = v.InferOutput<
  typeof getRunesBalanceRequestMessageSchema
>;
export type GetRunesBalance = MethodParamsAndResult<
  v.InferOutput<typeof getRunesBalanceParamsSchema>,
  v.InferOutput<typeof getRunesBalanceResultSchema>
>;

export type TransferRunesParams = {
  recipients: {
    runeName: string;
    amount: string;
    address: string;
  }[];
};
interface TransferRunesResult {
  txid: string;
}

export type TransferRunes = MethodParamsAndResult<TransferRunesParams, TransferRunesResult>;
