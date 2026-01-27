import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { runesMethods } from '../../../../methods';

export const runesTransferSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    txid: v.string(),
  }),
  method: runesMethods.runes_transfer,
});

export type RunesTransferSuccessResponse = v.InferOutput<typeof runesTransferSuccessResponseSchema>;
