import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../types';
import * as v from 'valibot';

export const getInscriptionsMethodName = 'ord_getInscriptions';

export const getInscriptionsParamsSchema = v.object({
  offset: v.number(),
  limit: v.number(),
});
export type GetInscriptionsParams = v.InferOutput<typeof getInscriptionsParamsSchema>;

export const getInscriptionsResultSchema = v.object({
  total: v.number(),
  limit: v.number(),
  offset: v.number(),
  inscriptions: v.array(
    v.object({
      inscriptionId: v.string(),
      inscriptionNumber: v.string(),
      address: v.string(),
      collectionName: v.optional(v.string()),
      postage: v.string(),
      contentLength: v.string(),
      contentType: v.string(),
      timestamp: v.number(),
      offset: v.number(),
      genesisTransaction: v.string(),
      output: v.string(),
    })
  ),
});
export type GetInscriptionsResult = v.InferOutput<typeof getInscriptionsResultSchema>;

export const getInscriptionsRequestMessageSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getInscriptionsMethodName),
    params: getInscriptionsParamsSchema,
    id: v.string(),
  }).entries,
});
export type GetInscriptionsRequestMessage = v.InferOutput<
  typeof getInscriptionsRequestMessageSchema
>;

export type GetInscriptions = MethodParamsAndResult<GetInscriptionsParams, GetInscriptionsResult>;

export const sendInscriptionsMethodName = 'ord_sendInscriptions';

export const sendInscriptionsParamsSchema = v.object({
  transfers: v.array(
    v.object({
      address: v.string(),
      inscriptionId: v.string(),
    })
  ),
});
export type SendInscriptionsParams = v.InferOutput<typeof sendInscriptionsParamsSchema>;

export const sendInscriptionsResultSchema = v.object({
  txid: v.string(),
});
export type SendInscriptionsResult = v.InferOutput<typeof sendInscriptionsResultSchema>;

export const sendInscriptionsSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sendInscriptionsMethodName),
    params: sendInscriptionsParamsSchema,
    id: v.string(),
  }).entries,
});
export type SendInscriptionsRequestMessage = v.InferOutput<typeof sendInscriptionsSchema>;

export type SendInscriptions = MethodParamsAndResult<
  SendInscriptionsParams,
  SendInscriptionsResult
>;
