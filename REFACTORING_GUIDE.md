# Refactoring Guide: Sats Connect Core Request Structure

This guide documents the refactoring pattern to migrate from the current `/home/aryzing/workspace/xverse/sats-connect-core/src/request/types` structure to the new pattern inspired by `/home/aryzing/workspace/aryzing/explore-better-method-types/src`.

## Completed Infrastructure

### Core Files Created

1. **`/src/request/exact.ts`** - ExactObject type utility for type-safe method mapping
2. **`/src/request/methods.ts`** - Centralized method name definitions organized by namespace
3. **`/src/request/rpc.ts`** - JSON RPC 2.0 base schemas
4. **`/src/request/createRequestSchema.ts`** - Helper to create request schemas
5. **`/src/request/createSuccessResponseSchema.ts`** - Helper to create response schemas with `~sats-connect-method` discriminator

### Sample Implementation

Created example structure for bitcoin methods:

- `/src/request/rpc/methodSchemas/bitcoin/getAccounts/request.ts`
- `/src/request/rpc/methodSchemas/bitcoin/getAccounts/response.ts`
- `/src/request/rpc/methodSchemas/bitcoin/getAccountsV2/request.ts`
- `/src/request/rpc/methodSchemas/bitcoin/getAccountsV2/response.ts`

## Migration Pattern for Each Method

### Old Structure (Current)

```
/src/request/types/bitcoinMethods/getAccounts.ts
```

Contains:

- Method name constant
- Params schema and type
- Result schema and type
- Request message schema and type
- MethodParamsAndResult type

### New Structure (Target)

```
/src/request/rpc/methodSchemas/bitcoin/getAccounts/
  ├── request.ts
  └── response.ts
```

#### request.ts Template

```typescript
import * as v from 'valibot';
import { createRequestSchema } from '../../../../createRequestSchema';
import { bitcoinMethods } from '../../../../methods';
// Import any domain schemas needed

export const methodNameRequestSchema = createRequestSchema({
  paramsSchema: v.object({
    // Define params
  }),
  method: bitcoinMethods.methodName,
});

export type MethodNameRequest = v.InferOutput<typeof methodNameRequestSchema>;
```

#### response.ts Template

```typescript
import * as v from 'valibot';
import { createSuccessResponseSchema } from '../../../../createSuccessResponseSchema';
import { bitcoinMethods } from '../../../../methods';
// Import any domain schemas needed

export const methodNameSuccessResponseSchema = createSuccessResponseSchema({
  resultSchema: v.object({
    // Define result
  }),
  method: bitcoinMethods.methodName,
});

export type MethodNameSuccessResponse = v.InferOutput<typeof methodNameSuccessResponseSchema>;
```

## Methods to Migrate

### Bitcoin Methods (16 methods)

- [ ] getAccounts ✅ (sample done)
- [ ] bitcoin_getAccountsV2 ✅ (sample done)
- [ ] getAddresses
- [ ] bitcoin_getAddressesV2
- [ ] getBalance
- [ ] bitcoin_getBalanceV2
- [ ] getInfo
- [ ] bitcoin_getInfoV2
- [ ] sendTransfer
- [ ] bitcoin_sendTransferV2
- [ ] signMessage
- [ ] bitcoin_signMessageV2
- [ ] signMultipleMessages
- [ ] bitcoin_signMultipleMessagesV2
- [ ] signPsbt
- [ ] bitcoin_signPsbtV2

### Stacks Methods (10 methods)

- [ ] stx_callContract
- [ ] stx_deployContract
- [ ] stx_getAccounts
- [ ] stx_getAddresses
- [ ] stacks_getAddressesV2
- [ ] stx_signMessage
- [ ] stx_signStructuredMessage
- [ ] stx_signTransaction
- [ ] stx_signTransactions
- [ ] stx_transferStx

### Spark Methods (13 methods)

- [ ] spark_getAddresses
- [ ] spark_getAddressesV2
- [ ] spark_getBalance
- [ ] spark_transfer
- [ ] spark_transferToken
- [ ] spark_signMessage
- [ ] spark_flashnet_getJwt
- [ ] spark_flashnet_signIntent
- [ ] spark_flashnet_signStructuredMessage
- [ ] spark_flashnet_executeSwap
- [ ] spark_flashnet_executeRouteSwap
- [ ] spark_flashnet_clawbackFunds
- [ ] spark_getClawbackEligibleTransfers

### Runes Methods (9 methods)

- [ ] runes_estimateEtch
- [ ] runes_estimateMint
- [ ] runes_estimateRbfOrder
- [ ] runes_etch
- [ ] runes_getBalance
- [ ] runes_getOrder
- [ ] runes_mint
- [ ] runes_rbfOrder
- [ ] runes_transfer

### Ordinals Methods (2 methods)

- [ ] ord_getInscriptions
- [ ] ord_sendInscriptions

### Wallet Methods (19 methods)

- [ ] wallet_addNetwork
- [ ] wallet_addNetworkV2
- [ ] wallet_changeNetworkById
- [ ] wallet_changeNetwork
- [ ] wallet_connect
- [ ] wallet_connectV2
- [ ] wallet_disconnect
- [ ] wallet_getAccount
- [ ] wallet_getAccountV2
- [ ] wallet_getCurrentPermissions
- [ ] wallet_getNetwork
- [ ] wallet_getNetworks
- [ ] wallet_getWalletType
- [ ] wallet_openBridge
- [ ] wallet_openBuy
- [ ] wallet_openReceive
- [ ] wallet_renouncePermissions
- [ ] wallet_requestPermissions

## Remaining Tasks

### 1. Complete Method Migrations

Create request.ts and response.ts files for all 69 methods listed above following the pattern.

### 2. Create Aggregated Request/Response Files

Create `/src/request/rpc/requests.ts`:

```typescript
import * as v from 'valibot';
import { bitcoinMethods, stacksMethods, /* ... */ type Method } from '../methods';
import type { ExactObject } from '../exact';
// Import all request types and schemas

export type RpcRequests = ExactObject<
  Method,
  {
    [bitcoinMethods.getAccounts]: GetAccountsRequest;
    [bitcoinMethods.bitcoin_getAccountsV2]: BitcoinGetAccountsV2Request;
    // ... all methods
  }
>;

export type RpcRequestParams<M extends Method> = RpcRequests[M]['params'];

export const rpcRequestSchema = v.variant('method', [
  getAccountsRequestSchema,
  bitcoinGetAccountsV2RequestSchema,
  // ... all request schemas
]);

export type RpcRequest = v.InferOutput<typeof rpcRequestSchema>;
```

Create `/src/request/rpc/responses.ts` similarly.

### 3. Create Method Support File

Create `/src/request/rpc/methodSupport.ts`:

```typescript
import { bitcoinMethods, stacksMethods, /* ... */ type Method } from '../methods';

const supportStates = {
  active: 'active',
  deprecated: 'deprecated',
  removed: 'removed',
} as const;

const { active, deprecated, removed } = supportStates;

export type SupportState = (typeof supportStates)[keyof typeof supportStates];

export const methodSupport: Record<Method, SupportState> = {
  [bitcoinMethods.getAccounts]: active,
  [bitcoinMethods.bitcoin_getAccountsV2]: active,
  // ... all methods with their support states
};
```

### 4. Update Exports

Update `/src/request/index.ts` to export the new structure while maintaining backwards compatibility during migration.

## Key Differences from Old Pattern

1. **Centralized Methods**: All method names defined in single `methods.ts` file
2. **Separation of Concerns**: Each method has separate request.ts and response.ts files
3. **Helper Functions**: Use `createRequestSchema` and `createSuccessResponseSchema`
4. **Type Discrimination**: Response schemas include `~sats-connect-method` property
5. **Exact Types**: Use `ExactObject` utility for type-safe method mapping
6. **Aggregated Types**: Single source of truth for all requests/responses in `rpc/requests.ts` and `rpc/responses.ts`
7. **Method Support**: Explicit tracking of method lifecycle states

## Benefits

- Better organization with clear separation
- Easier to find and maintain individual methods
- Type-safe method name references
- Centralized method support tracking
- Better discoverability and testing
