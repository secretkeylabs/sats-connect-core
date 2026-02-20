import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signPsbtResultSchema } from '../../shared/signPsbt';

export const bitcoinSignPsbtV2ResultSchema = signPsbtResultSchema;

export type BitcoinSignPsbtV2Result = v.InferOutput<typeof bitcoinSignPsbtV2ResultSchema>;

export const bitcoinSignPsbtV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSignPsbtV2ResultSchema,
  method: bitcoinMethods.bitcoin_signPsbtV2,
});

export type BitcoinSignPsbtV2SuccessResponse = v.InferOutput<
  typeof bitcoinSignPsbtV2SuccessResponseSchema
>;
