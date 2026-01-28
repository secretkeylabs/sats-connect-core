/**
 * Legacy type exports.
 *
 * Re-exports from the new RPC structure to maintain backwards compatibility.
 */

// Re-export from new RPC structure
// export type { RpcRequestParams as Params, RpcRequests as Requests } from '../rpc/requests';

// export type { RpcSuccessResponseResult as Return } from '../rpc/responses';

// Common types exported from their new locations in the RPC structure
// export * from '../rpc/objects/namespaces/bitcoin/shared';

// Legacy *RequestMethod type aliases
export type {
  BitcoinMethod as BitcoinRequestMethod,
  OrdinalsMethod as OrdinalsRequestMethod,
  RunesMethod as RunesRequestMethod,
  SparkMethod as SparkRequestMethod,
  StacksMethod as StacksRequestMethod,
  WalletMethod as WalletRequestMethod,
} from '../methods';
