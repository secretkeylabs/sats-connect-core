/**
 * These types allow expressing type constraints akin to exact or sealed types
 * available in other type systems. Start by defining a union of the keys the
 * object should have, and then build the final type with `ExactObject`.
 *
 * Example:
 *
 * ```ts
 * type Fruit = "apple" | "banana" | "cherry";
 * type PackagingContainer = ExactObject<Fruit, {
 *   apple: "bag";
 *   banana: "box";
 *   cherry: "bag" | "box"
 * }>;
 * ```
 *
 * If the keys union and those used in ExactObject don't match, the resulting
 * type will safely evaluate to `never`.
 */

// Base template for required keys
type KeysTemplate<Keys extends string> = { [K in Keys]: unknown };

// Utility to enforce exact keys at the type level
type ExactKeys<T, U> = keyof T extends keyof U ? (keyof U extends keyof T ? T : never) : never;

// Exact type that only allows keys from Items
export type ExactObject<Keys extends string, T extends KeysTemplate<Keys>> = ExactKeys<
  T,
  KeysTemplate<Keys>
>;
