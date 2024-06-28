import { MethodParamsAndResult, rpcRequestMessageSchema } from '../../types';
import * as v from 'valibot';

export const getInscriptionsMethodName = 'ord_getInscriptions';
export const getInscriptionsParamsSchema = v.object({
  offset: v.number(),
  limit: v.number(),
});
export const getInscriptionsResultSchema = v.object({
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

// export type Inscription = {
//   // the id of inscription.
//   inscriptionId: string;
//   // the number of inscription.
//   inscriptionNumber: string;
//   // the address of inscription.
//   address: string;
//   collectionName: string;
//   // the size of the inscription’s parent UTXO
//   postage: string;
//   // the content url of inscription.
//   content: string;
//   // the content length of inscription.
//   contentLength: string;
//   // the content type of inscription.
//   contentType: number;
//   // the blocktime of inscription.
//   timestamp: number;
//   // the offset of inscription.
//   offset: number;
//   // the txid of genesis transaction
//   genesisTransaction: string;
//   // the txid and vout of current location
//   output: string;
// };

// type GetInscriptionsParams = {
//   offset: number;
//   limit: number;
// };

// interface GetInscriptionsResult {
//   inscriptions: Inscription[];
// }

// export type GetInscriptions = MethodParamsAndResult<GetInscriptionsParams, GetInscriptionsResult>;
