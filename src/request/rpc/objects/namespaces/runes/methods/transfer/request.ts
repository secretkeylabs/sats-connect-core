import { createRequestSchema } from 'src/request/createRequestSchema';
import { runesMethods } from 'src/request/methods';
import { BitcoinNetworkType } from 'src/types';
import * as v from 'valibot';

export const runesTransferParamsSchema = v.object({
  recipients: v.array(
    v.object({
      runeName: v.string(),
      amount: v.string(),
      address: v.string(),
    })
  ),
  network: v.optional(v.enum(BitcoinNetworkType)),
});

export type RunesTransferParams = v.InferOutput<typeof runesTransferParamsSchema>;

export const runesTransferRequestSchema = createRequestSchema({
  paramsSchema: runesTransferParamsSchema,
  method: runesMethods.runes_transfer,
});

export type RunesTransferRequest = v.InferOutput<typeof runesTransferRequestSchema>;
