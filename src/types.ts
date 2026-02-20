import type { BitcoinProvider } from './provider';

export enum BitcoinNetworkType {
  Mainnet = 'Mainnet',
  Testnet = 'Testnet',
  Testnet4 = 'Testnet4',
  Signet = 'Signet',
  Regtest = 'Regtest',
}

export enum StacksNetworkType {
  Mainnet = 'mainnet',
  Testnet = 'testnet',
}

export enum StarknetNetworkType {
  Mainnet = 'mainnet',
  Sepolia = 'sepolia',
}

export enum SparkNetworkType {
  Mainnet = 'mainnet',
  Regtest = 'regtest',
}

export interface BitcoinNetwork {
  type: BitcoinNetworkType;
  address?: string;
}

export interface RequestPayload {
  network: BitcoinNetwork;
}

export interface RequestOptions<Payload extends RequestPayload, Response> {
  onFinish: (response: Response) => void;
  onCancel: () => void;
  payload: Payload;
  getProvider?: () => Promise<BitcoinProvider | undefined>;
}

/**
 * @enum {number} RpcErrorCode
 * @description JSON-RPC error codes
 * @see https://www.jsonrpc.org/specification#error_object
 */
export enum RpcErrorCode {
  /**
   * Parse error Invalid JSON
   **/
  PARSE_ERROR = -32700,
  /**
   * The JSON sent is not a valid Request object.
   **/
  INVALID_REQUEST = -32600,
  /**
   * The method does not exist/is not available.
   **/
  METHOD_NOT_FOUND = -32601,
  /**
   * Invalid method parameter(s).
   */
  INVALID_PARAMS = -32602,
  /**
   * Internal JSON-RPC error.
   * This is a generic error, used when the server encounters an error in performing the request.
   **/
  INTERNAL_ERROR = -32603,
  /**
   * user rejected/canceled the request
   */
  USER_REJECTION = -32000,
  /**
   * method is not supported for the address provided
   */
  METHOD_NOT_SUPPORTED = -32001,
  /**
   * The client does not have permission to access the requested resource.
   */
  ACCESS_DENIED = -32002,
}
