import type { Method } from '../methods';
import type { RpcSuccessResponse } from './responses';

// These two helper types are from:
//
// - https://frontendmasters.com/blog/testing-types-in-typescript/
type Expect<T extends true> = T;
type ShapesMatch<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;

// Ensure RpcSuccessResponse includes a variant for all Methods
type AssertRpcSuccessResponseCoversAllMethods =
  Method extends RpcSuccessResponse['~sats-connect-method'] ? true : false;

// Ensure RpcSuccessResponse does not include any extra Methods
type AssertRpcSuccessResponseMethodsAreValid =
  RpcSuccessResponse['~sats-connect-method'] extends Method ? true : false;

// Ensure RpcSuccessResponse["~sats-connect-method"] is exactly Method (no more, no less)
type AssertRpcSuccessResponseAndMethodsMatch = ShapesMatch<
  Method,
  RpcSuccessResponse['~sats-connect-method']
>;

type _Tests = [
  Expect<AssertRpcSuccessResponseCoversAllMethods>,
  Expect<AssertRpcSuccessResponseMethodsAreValid>,
  Expect<AssertRpcSuccessResponseAndMethodsMatch>,
];
