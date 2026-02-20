import type { Capability } from '../provider';
import type { RequestOptions, RequestPayload } from '../types';

export type GetCapabilitiesPayload = RequestPayload;

export type GetCapabilitiesResponse = Capability[];

export type GetCapabilitiesOptions = RequestOptions<
  GetCapabilitiesPayload,
  GetCapabilitiesResponse
>;
