import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { bitcoinMethods } from '../../../../methods';

export enum ProviderPlatform {
  Web = 'web',
  Mobile = 'mobile',
}

export const bitcoinGetInfoSuccessResponseSchema = createSuccessResponseSchema({
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
  method: bitcoinMethods.getInfo,
});

export type BitcoinGetInfoSuccessResponse = v.InferOutput<
  typeof bitcoinGetInfoSuccessResponseSchema
>;
