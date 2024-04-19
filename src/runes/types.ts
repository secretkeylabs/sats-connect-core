export type CreateMintOrderRequest = {
  runeName: string;
  repeats: number;
  refundAddress: string;
  destinationAddress: string;
  feeRate: number;
  appServiceFee?: number;
  appServiceFeeAddress?: string;
};

export type CreateOrderResponse = {
  orderId: string;
  fundAddress: string;
  fundAmount: number;
};

export type EstimateMintOrderRequest = Omit<CreateMintOrderRequest, 'refundAddress'>;

export type EstimateOrderResponse = {
  totalSize: number;
  totalCost: number;
  costBreakdown: {
    postage: number;
    networkFee: number;
    serviceFee: number;
    appServiceFee: number;
  };
};

export type ExecuteMintOrderRequest = {
  fundTransactionId: string;
};

export type ExecuteMintOrderResponse = {};

export type CreateEtchOrderRequest = {
  runeName: string;
  divisibility?: number;
  symbol?: string;
  premine?: string;
  isMintable: boolean;
  terms?: {
    amount?: string;
    cap?: string;
    heightStart?: string;
    heightEnd?: string;
    offsetStart?: string;
    offsetEnd?: string;
  };

  inscriptionDetails?: {
    contentType: string;
    contentBase64: string;
  };
  delegateInscriptionId?: string;

  destinationAddress: string;
  refundAddress: string;
  feeRate: number;
  appServiceFee?: number;
  appServiceFeeAddress?: string;
};

export type EstimateEtchOrderRequest = Omit<CreateEtchOrderRequest, 'refundAddress'>;

export type GetMintOrderResponse = {
  id: string;
  orderType: 'rune_mint';
  state: 'new' | 'pending' | 'executing' | 'complete' | 'failed' | 'refunded' | 'stale';
  reason: string;
  createdAt: string;
};

export type GetOrderRequest = {
  id: string;
};

export type GetOrderResponse = {
  id: string;
  orderType: 'rune_mint' | 'rune_etch';
  state: 'new' | 'pending' | 'executing' | 'complete' | 'failed' | 'refunded' | 'stale';
  reason?: string;
  createdAt: string;
};

export type RPFOrderRequest = {
  orderId: string;
  newFeeRate: number;
};

export type RPFOrderResponse = {
  rbfCost: number;
  fundingAddress: string;
};
