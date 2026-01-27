import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { runesMethods } from '../../../../methods';

export const runesTransferRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    recipients: v.array(
      v.object({
        runeName: v.string(),
        amount: v.string(),
        address: v.string(),
      })
    ),
  }),
  method: runesMethods.runes_transfer,
});

export type RunesTransferRequest = v.InferOutput<typeof runesTransferRequestSchema>;
