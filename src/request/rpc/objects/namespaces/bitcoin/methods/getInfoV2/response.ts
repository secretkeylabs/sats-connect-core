import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import * as v from 'valibot';
import { ProviderPlatform } from '../../shared';

export const bitcoinGetInfoV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
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
  }),
  method: bitcoinMethods.bitcoin_getInfoV2,
});

export type BitcoinGetInfoV2SuccessResponse = v.InferOutput<
  typeof bitcoinGetInfoV2SuccessResponseSchema
>;
