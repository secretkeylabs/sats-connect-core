import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { sendTransferParamsSchema } from '../../shared/sendTransfer';

export const bitcoinSendTransferParamsSchema = sendTransferParamsSchema;

export type BitcoinSendTransferParams = v.InferOutput<typeof bitcoinSendTransferParamsSchema>;

export const bitcoinSendTransferRequestSchema = createRequestSchema({
  paramsSchema: bitcoinSendTransferParamsSchema,
  method: bitcoinMethods.sendTransfer,
});

export type BitcoinSendTransferRequest = v.InferOutput<typeof bitcoinSendTransferRequestSchema>;
