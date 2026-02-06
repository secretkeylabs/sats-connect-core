import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { signPsbtParamsSchema } from '../../shared/signPsbt';

export const bitcoinSignPsbtParamsSchema = signPsbtParamsSchema;

export type BitcoinSignPsbtParams = v.InferOutput<typeof bitcoinSignPsbtParamsSchema>;

export const bitcoinSignPsbtRequestSchema = createRequestSchema({
  paramsSchema: bitcoinSignPsbtParamsSchema,
  method: bitcoinMethods.signPsbt,
});

export type BitcoinSignPsbtRequest = v.InferOutput<typeof bitcoinSignPsbtRequestSchema>;
