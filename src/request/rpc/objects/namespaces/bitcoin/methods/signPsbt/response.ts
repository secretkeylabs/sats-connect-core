import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signPsbtResultSchema } from '../../shared/signPsbt';

export const bitcoinSignPsbtResultSchema = signPsbtResultSchema;

export type BitcoinSignPsbtResult = v.InferOutput<typeof bitcoinSignPsbtResultSchema>;

export const bitcoinSignPsbtSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSignPsbtResultSchema,
  method: bitcoinMethods.signPsbt,
});

export type BitcoinSignPsbtSuccessResponse = v.InferOutput<
  typeof bitcoinSignPsbtSuccessResponseSchema
>;
