# Network contracts and Core alignment

Do not import `@secretkeylabs/xverse-core` into this SDK. Network schemas are intentionally copied to keep the SDK lightweight. On every Core network-schema change, manually copy corresponding fields, validation and comments into `src/request/rpc/objects/namespaces/wallet/shared/networks.ts`, and test the same boundaries. The Core source is `persistentStoreManager/stores/networks/networks/stacks.ts`.

`chainId` is an optional unsigned 32-bit override, including zero; omission means use the selected mode's default. Never infer transaction version from an override. Wallets resolve signing parameters in Core. Coordinate SDK and wallet releases so RPC validation does not discard newly supported fields.

`stx_getNetworks` returns Stacks-only configuration IDs and required numeric effective signing parameters. It does not alias `wallet_getNetwork`. `wallet_getNetworks` returns the full multi-chain configuration structure; its `active.stacks.id` and `all[].id` use the same identifiers as SIP discovery. Use `stacksApiUrl` for endpoint lookup. IDs are not necessarily URLs or blockchain identities.

`provider.listen('stx_networkChange', cb)` passes the SIP result, not the legacy event envelope, and returns an unlisten function. It coexists with `addListener`; legacy callback payloads and argument conventions are unchanged. Account/Gaia event support is separate.

Existing stored configurations and legacy response shapes remain valid. Adding optional chain-ID input support does not require populating missing fields in legacy responses.
