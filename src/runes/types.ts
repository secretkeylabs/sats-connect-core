export type EstimateMintOrderBody = {
  runeName: string;
  repeats: number;
  destinationAddress: string;
  feeRate: number;
  appServiceFee?: number;
  appServiceFeeAddress?: string;
};

export type EstimateMintOrderResponse = {
  totalSize: number;
  totalCost: number;
  costBreakdown: {
    postage: number;
    networkFee: number;
    serviceFee: number;
    appServiceFee: number;
  };
};

export type CreateMintOrder = {
  runeName: string;
  repeats: number;
  refundAddress: string;
  destinationAddress: string;
  feeRate: number;
  appServiceFee?: number;
  appServiceFeeAddress?: string;
};

export type CreateMintResponse = {
  orderId: string;
  fundAddress: string;
  fundAmount: number;
};

export type ExecuteMintOrderBody = {
  fundTransactionId: string;
};

export type ExecuteMintOrderResponse = {};

export type GetMintOrderResponse = {
  id: string;
  orderType: 'rune_mint';
  state: 'new' | 'pending' | 'executing' | 'complete' | 'failed' | 'refunded' | 'stale';
  reason: string;
  createdAt: string;
};
