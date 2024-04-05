import {
  CreateEtchOrderRequest,
  CreateMintOrderRequest,
  EstimateEtchOrderRequest,
  EstimateMintOrderRequest,
  EstimateOrderResponse,
} from '../../runes/types';
import { BitcoinNetworkType, MethodParamsAndResult } from '../../types';

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
};

export type EtchRunes = MethodParamsAndResult<EtchRunesParams, EtchRunesResult>;
