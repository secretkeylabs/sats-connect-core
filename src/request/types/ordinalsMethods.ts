import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../types';
import * as v from 'valibot';

export const getInscriptionsMethodName = 'ord_getInscriptions';
export const getInscriptionsParamsSchema = v.object({
  offset: v.number(),
  limit: v.number(),
});
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
export const getInscriptionsSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(getInscriptionsMethodName),
    params: getInscriptionsParamsSchema,
    id: v.string(),
  }).entries,
});

export type GetInscriptions = MethodParamsAndResult<
  v.InferOutput<typeof getInscriptionsParamsSchema>,
  v.InferOutput<typeof getInscriptionsResultSchema>
>;

export const sendInscriptionsMethodName = 'ord_sendInscriptions';
export const sendInscriptionsParamsSchema = v.object({
  transfers: v.array(
    v.object({
      address: v.string(),
      inscriptionId: v.string(),
    })
  ),
});
export const sendInscriptionsResultSchema = v.object({
  txid: v.string(),
});
export const sendInscriptionsSchema = v.object({
  ...rpcRequestMessageSchema.entries,
  ...v.object({
    method: v.literal(sendInscriptionsMethodName),
    params: sendInscriptionsParamsSchema,
    id: v.string(),
  }).entries,
});

export type SendInscriptions = MethodParamsAndResult<
  v.InferOutput<typeof sendInscriptionsParamsSchema>,
  v.InferOutput<typeof sendInscriptionsResultSchema>
>;
