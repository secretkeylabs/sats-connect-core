import { createSuccessResponseSchema } from 'src/request/createSuccessResponseSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { sendTransferResultSchema } from '../../shared/sendTransfer';

export const bitcoinSendTransferV2ResultSchema = sendTransferResultSchema;

export type BitcoinSendTransferV2Result = v.InferOutput<typeof bitcoinSendTransferV2ResultSchema>;

export const bitcoinSendTransferV2SuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: bitcoinSendTransferV2ResultSchema,
  method: bitcoinMethods.bitcoin_sendTransferV2,
});

export type BitcoinSendTransferV2SuccessResponse = v.InferOutput<
  typeof bitcoinSendTransferV2SuccessResponseSchema
>;
