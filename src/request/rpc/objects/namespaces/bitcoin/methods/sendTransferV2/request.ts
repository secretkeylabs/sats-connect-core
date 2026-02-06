import { createRequestSchema } from 'src/request/createRequestSchema';
import { bitcoinMethods } from 'src/request/methods';
import type * as v from 'valibot';
import { sendTransferParamsSchema } from '../../shared/sendTransfer';

export const bitcoinSendTransferV2ParamsSchema = sendTransferParamsSchema;

export type BitcoinSendTransferV2Params = v.InferOutput<typeof bitcoinSendTransferV2ParamsSchema>;

export const bitcoinSendTransferV2RequestSchema = createRequestSchema({
  paramsSchema: bitcoinSendTransferV2ParamsSchema,
  method: bitcoinMethods.bitcoin_sendTransferV2,
});

export type BitcoinSendTransferV2Request = v.InferOutput<typeof bitcoinSendTransferV2RequestSchema>;
