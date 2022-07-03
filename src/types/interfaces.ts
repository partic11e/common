/**
 * Interfaces common to various features in the partic11e common package.
 *
 * For type aliases, see ./types.ts.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//#region type-imports
//#endregion

//#region type-exports
export interface IDisposable {
  dispose(): void;
}

export interface ICloneable<T> {
  clone(): T;
}

export interface ICompareable<T> {
  compareTo(other: T): number;
}

export interface IFormattable<T> {
  format(format: string): string;
}

export interface IFormatProvider {
  format(format: string): string;
}

export interface ISerializable<T> {
  serialize(): T;
}

export interface IObservable<T> {
  subscribe(observer: IObserver<T>): void;
}

export interface IObserver<T> {
  next(value: T): void;
  error(error: Error): void;
  complete(): void;
}

export interface IConvertable<T> {
  convert(): T;
}

export interface IServicable<T> {
  service(): T;
}
//#endregion
