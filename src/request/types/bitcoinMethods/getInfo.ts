import * as v from 'valibot';
import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../../types';

export enum ProviderPlatform {
  Web = 'web',
  Mobile = 'mobile',
}

export const getInfoMethodName = 'getInfo';
export const getInfoParamsSchema = v.nullish(v.null());
export type GetInfoParams = v.InferOutput<typeof getInfoParamsSchema>;
export const getInfoResultSchema = v.object({
  /**
   * Version of the wallet.
   */
  version: v.string(),

  /**
   * The platform the wallet is running on (web or mobile).
   */
  platform: v.optional(v.enum(ProviderPlatform)),

  /**
   * [WBIP](https://wbips.netlify.app/wbips/WBIP002) methods supported by the wallet.
   */
  methods: v.optional(v.array(v.string())),

  /**
   * List of WBIP standards supported by the wallet. Not currently used.
   */
  supports: v.array(v.string()),
});
export type GetInfoResult = v.InferOutput<typeof getInfoResultSchema>;
export const getInfoRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getInfoMethodName),
    params: getInfoParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetInfoRequestMessage = v.InferOutput<typeof getInfoRequestMessageSchema>;
export type GetInfo = MethodParamsAndResult<
  v.InferOutput<typeof getInfoParamsSchema>,
  v.InferOutput<typeof getInfoResultSchema>
>;

// ---- V2 ----

export const bitcoinGetInfoV2MethodName = 'bitcoin_getInfoV2';
export const bitcoinGetInfoV2ParamsSchema = v.nullish(v.null());
export type BitcoinGetInfoV2Params = v.InferOutput<typeof bitcoinGetInfoV2ParamsSchema>;
export const bitcoinGetInfoV2ResultSchema = v.object({
  /**
   * Version of the wallet.
   */
  version: v.string(),

  /**
   * The platform the wallet is running on (web or mobile).
   */
  platform: v.optional(v.enum(ProviderPlatform)),

  /**
   * [WBIP](https://wbips.netlify.app/wbips/WBIP002) methods supported by the wallet.
   */
  methods: v.optional(v.array(v.string())),

  /**
   * List of WBIP standards supported by the wallet. Not currently used.
   */
  supports: v.array(v.string()),
});
export type BitcoinGetInfoV2Result = v.InferOutput<typeof bitcoinGetInfoV2ResultSchema>;
export const bitcoinGetInfoV2RequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(bitcoinGetInfoV2MethodName),
    params: bitcoinGetInfoV2ParamsSchema,
    id: v.string(),
  }).entries,
});
export type BitcoinGetInfoV2RequestMessage = v.InferOutput<
  typeof bitcoinGetInfoV2RequestMessageSchema
>;
export type BitcoinGetInfoV2 = MethodParamsAndResult<
  v.InferOutput<typeof bitcoinGetInfoV2ParamsSchema>,
  v.InferOutput<typeof bitcoinGetInfoV2ResultSchema>
>;
