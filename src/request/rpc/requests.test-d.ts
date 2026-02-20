import type { Method } from '../methods';
import type { RpcRequest } from './requests';

// These two helper types are from:
//
// - https://frontendmasters.com/blog/testing-types-in-typescript/
type Expect<T extends true> = T;
type ShapesMatch<T, U> = [T] extends [U] ? ([U] extends [T] ? true : false) : false;

// Ensure RpcRequest includes a variant for all Methods
type AssertRpcRequestCoversAllMethods = Method extends RpcRequest['method'] ? true : false;

// Ensure RpcRequest does not include any extra Methods
type AssertRpcRequestMethodsAreValid = RpcRequest['method'] extends Method ? true : false;

// Ensure RpcRequest["method"] is exactly Method (no more, no less)
type AssertRpcRequestAndMethodsMatch = ShapesMatch<Method, RpcRequest['method']>;

type _Tests = [
  Expect<AssertRpcRequestCoversAllMethods>,
  Expect<AssertRpcRequestMethodsAreValid>,
  Expect<AssertRpcRequestAndMethodsMatch>,
];
