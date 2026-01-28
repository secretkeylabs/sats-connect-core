import * as v from 'valibot';
import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';

export const runesTransferRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    recipients: v.array(
      v.object({
        runeName: v.string(),
        amount: v.string(),
        address: v.string(),
      })
    ),
    network: v.optional(v.enum(BitcoinNetworkType)),
  }),
  method: runesMethods.runes_transfer,
});

export type RunesTransferRequest = v.InferOutput<typeof runesTransferRequestSchema>;
