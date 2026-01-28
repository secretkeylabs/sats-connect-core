/**
 * Legacy type exports.
 *
 * Re-exports from the new RPC structure to maintain backwards compatibility.
 */

import type { RpcSuccessResponseResult } from '../rpc/responses';
import { bitcoinMethods } from '../methods';

// Re-export from new RPC structure
export type { RpcRequests as Requests, RpcRequestParams as Params } from '../rpc/requests';

export type { RpcSuccessResponseResult as Return } from '../rpc/responses';

// Common types exported from their new locations in the RPC structure
export { ProviderPlatform } from '../rpc/methodSchemas/bitcoin/getInfo/response';
export { MessageSigningProtocols } from '../rpc/methodSchemas/bitcoin/signMessage/request';

// Legacy GetInfoResult type - the result of a getInfo call
export type GetInfoResult = RpcSuccessResponseResult<typeof bitcoinMethods.getInfo>;

// Legacy *RequestMethod type aliases
export type {
  BitcoinMethod as BitcoinRequestMethod,
  StacksMethod as StacksRequestMethod,
  SparkMethod as SparkRequestMethod,
  RunesMethod as RunesRequestMethod,
  OrdinalsMethod as OrdinalsRequestMethod,
  WalletMethod as WalletRequestMethod,
} from '../methods';
