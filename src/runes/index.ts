import { request } from 'src/request';
import {
  CreateMintOrder,
  CreateMintResponse,
  EstimateMintOrderBody,
  EstimateMintOrderResponse,
} from './types';
import axios from 'axios';

const runesAPI = axios.create({
  baseURL: 'https://api.xverse.app/v1/runes',
  headers: {
    'Content-Type': 'application/json',
  },
});

const estimateMintCost = async (
  mintParams: EstimateMintOrderBody
): Promise<EstimateMintOrderResponse> => {
  const response = await runesAPI.post<EstimateMintOrderResponse>('/mint/estimate', {
    ...mintParams,
  });
  return response.data;
};

const estimateEtchCost = async (etchParams: EstimateMintOrderBody) => {
  const response = await runesAPI.post('/etch/estimate', {
    ...etchParams,
  });
  return response.data;
};

const createMintOrder = async (mintOrderParams: CreateMintOrder): Promise<CreateMintResponse> => {
  const response = await runesAPI.post<CreateMintResponse>('/mint/orders', {
    ...mintOrderParams,
  });
  return response.data;
};

const executeMint = async (orderId: string, fundTransactionId: string) => {
  const response = await runesAPI.post(`/mint/orders/${orderId}/execute`, {
    fundTransactionId,
  });
  return response.data;
};

const createEtchOrder = async (etchOrderParams: CreateMintOrder) => {
  const response = await axios.post('/etch/orders', {
    ...etchOrderParams,
  });
  return response.data();
};

const mint = async (mintParams: CreateMintOrder) => {
  const { fundAddress, fundAmount, orderId } = await createMintOrder(mintParams);
  const transferResponse = await request('sendTransfer', {
    recipients: [{ address: fundAddress, amount: fundAmount }],
  });
  if (transferResponse.status === 'error') {
    throw new Error(transferResponse.error.message);
  }
  await executeMint(orderId, transferResponse.result.txid);
  return transferResponse.result.txid;
};

const Runes = {
  estimateMintCost,
  mint,
};

export default Runes;
