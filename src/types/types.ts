/**
 * Type aliases common to various features in the partic11e common package.
 *
 * For interfaces, see ./interfaces.ts
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//#region type-imports
import {
  Codebase,
  DecoratorTarget,
  FileSystemEntry,
  InternalOnlyOperation,
  InternalOperation,
  NumericFormat,
  Parser,
  PracticableOperation,
} from "./enums.ts";
//#endregion

//#region type-exports
export type CodeBaseType = Lowercase<keyof typeof Codebase>;
export type DecoratorTargetType = Lowercase<keyof typeof DecoratorTarget>;
export type FileSystemEntryType = Lowercase<keyof typeof FileSystemEntry>;
export type InternalOnlyOperationType = Lowercase<
  keyof typeof InternalOnlyOperation
>;
export type InternalOperationType = Lowercase<keyof typeof InternalOperation>;
export type NumericFormatType = Lowercase<keyof typeof NumericFormat>;
export type ParserType = Lowercase<keyof typeof Parser>;
export type PracticableOperationType = Lowercase<
  keyof typeof PracticableOperation
>;

export type AnonymousObject = Record<number | string | symbol, unknown>;
export type Scalar = boolean | bigint | number | string | symbol;
export type Falsy = false | 0 | "" | null | undefined;
export type Nullish = null | undefined;
export type Primitive = Scalar | Nullish;
export type Constructor<T> = new (...args: unknown[]) => T;
export type Dictionary<T, K extends keyof any = string> = Record<K, T>;

export type Defined<T> = T extends undefined ? never : T;


// deno-lint-ignore ban-types
export type Native = Primitive | Function | Date | Error | RegExp;
export type List<T> = T[];
export type OneOrMany<T> = T | List<T>;

//#endregion
