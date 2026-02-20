import type { MessageSigningProtocols } from 'src/request/rpc/objects/namespaces/bitcoin/shared';
import type { RequestOptions, RequestPayload } from '../types';

export interface SignMessagePayload extends RequestPayload {
  address: string;
  message: string;
  protocol?: MessageSigningProtocols;
}

export type SignMessageResponse = string;

export type SignMessageOptions = RequestOptions<SignMessagePayload, SignMessageResponse>;
