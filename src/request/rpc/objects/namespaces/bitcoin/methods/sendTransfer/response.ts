import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { sendTransferResultSchema } from '../../shared/sendTransfer';

export const bitcoinSendTransferResultSchema = sendTransferResultSchema;

export type BitcoinSendTransferResult = v.InferOutput<typeof bitcoinSendTransferResultSchema>;

export const bitcoinSendTransferSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSendTransferResultSchema,
  method: bitcoinMethods.sendTransfer,
});

export type BitcoinSendTransferSuccessResponse = v.InferOutput<
  typeof bitcoinSendTransferSuccessResponseSchema
>;
