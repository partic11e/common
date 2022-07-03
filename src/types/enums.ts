/**
 * Enums common to various features in the partic11e common package.
 *
 * @copyright 2022 integer11. All rights reserved. MIT license.
 */

//#region feature-exports

/**
 * Enum for the integer11 recognized types of codebases.
 */
export enum Codebase {
  /**
   * A module.
   */
  Module = "module",

  /**
   * A package.
   */
  Package = "package",

  /**
   * A library.
   */
  Library = "library",

  /**
   * An application.
   */
  Application = "application",

  /**
   * An extension.
   */
  Extension = "extension",

  /**
   * A framework.
   */
  Framework = "framework",

  /**
   * A plugin.
   */
  Plugin = "plugin",

  /**
   * An adapter.
   */
  Adapter = "adapter",

  /**
   * A toolkit.
   */
  Toolkit = "toolkit",

  /**
   * An SDK.
   */
  SDK = "sdk",

  /**
   * An API.
   */
  API = "api",

  /**
   * A platform.
   */
  Platform = "platform",

  /**
   * An engine.
   */
  Engine = "engine",

  /**
   * A theme.
   */
  Theme = "theme",
}

/**
 * Enum for the types of TypeScript decorator targets.
 */
export enum DecoratorTarget {
  /**
   * A class decorator.
   */
  Class = "class",

  /**
   * A method decorator.
   */
  Method = "method",

  /**
   * A property decorator.
   */
  Property = "property",

  /**
   * A parameter decorator.
   */
  Parameter = "parameter",

  /**
   * An accessor decorator.
   */
  Accessor = "accessor",
}
/**
 * Enum for the types of file system entries.
 */
export enum FileSystemEntry {
  /**
   * A directory, or equivalent to a directory.
   */
  Directory = "directory",

  /**
   * A file, or equivalent to a file.
   */
  File = "file",

  /**
   * A symbolic link, or equivalent to a symbolic link.
   */
  Symlink = "symlink",
}

/**
 * Enum for the types of internal-only operations.
 *
 * Internal operations are those that are pre-defined by software authors
 * and initiated by a pre-defined schedule or event.
 */
export enum InternalOnlyOperation {
  /**
   * A process running on the system.
   */
  Process = "process",

  /**
   * An HTTP request.
   */
  Request = "request",
}

/**
 * Enum for the types of practicable operations.
 *
 * Practicable operations are those in which a user can have direct
 * involvement.
 *
 * This involvement can include:
 * - Any operation created by a user either through code, or through a user
 *   interface, regardless of how the operation is initiated.
 * - Initiating an internal operation, either through a manual action, an event
 *   triggered by user action, or user-defined schedule.
 *
 * These operations can also be internal operations.
 */
export enum PracticableOperation {
  /**
   * A generic operation.
   */
  Operation = "operation",

  /**
   * An operation initiated by human intervention.
   */
  Action = "action",

  /**
   * An operation initiated by a schedule.
   *
   * Typically, a user is involved in the creation and scheduling of a task.
   */
  Task = "task",

  /**
   * A series of actions, trigger, and/or tasks working in conjuction over time.
   *
   * Typically, a user is involved in the creation of the workflow, or its
   * actions, trigger, and/or tasks; or in the execution of the workflow.
   */
  Workflow = "workflow",

  /**
   * An operation to take input and return output in a different form.
   *
   * Typically, a user is involved in the creation and/or execution of the
   * build.
   */
  Build = "build",

  /**
   * An operation initiated by an event.
   *
   * Typically, a user is involved when creating the handler for the trigger.
   */
  Trigger = "trigger",

  /**
   * A custom operation. Not expected to be used often.
   */
  Custom = "custom",
}

/*
DEV_NOTE:
This next bit is funky. It's a bit of a hack, but it works.
This combines the two enums into one, for the most part...
i.e. this will compile and lint.
`const t: InternalOperation = InternalOperation.Process;`
*/

/**
 * Enum for the types of internal operations.
 */
export type InternalOperation = PracticableOperation | InternalOnlyOperation;
export const InternalOperation = {
  ...PracticableOperation,
  ...InternalOnlyOperation,
} as const;

/**
 * Enum for the default supported formats for numeric values.
 */
export enum NumericFormat {
  /**
   * Format as an integer.
   */
  Int = "int",

  /**
   * Format as a floating point number.
   *
   * Formatters accept a precision.
   */
  Float = "float",

  /**
   * Format as a date, time, or datetime.
   *
   * Formatters accept a format string.
   */
  DateTime = "datetime",

  /**
   * Format as a currency.
   *
   * Formatters accept a locale, or currency symbol.
   */
  Currency = "currency",

  /**
   * Format as a percentage.
   *
   * Formatters accept a precision.
   */
  Percentage = "percentage",

  /**
   * Format as a string.
   */
  Text = "text",

  /**
   * Format as a fraction.
   *
   * Formatters accept a precision for the numerator.
   */
  Fraction = "fraction",

  /**
   * Format as a custom format.
   *
   * Will typically require a custom format function or registered name.
   */
  Custom = "custom",
}

/**
 * Enum for the default supported parsers for text.
 */
export enum Parser {
  /**
   * Parse JSON content into a JSON object.
   */
  JSON = "json",

  /**
   * Parse YAML content into a JSON object.
   */
  YAML = "yaml",

  /**
   * Parse TOML content into a JSON object.
   */
  TOML = "toml",

  /**
   * Parse XML content into a JSON object.
   */
  XML = "xml",

  /**
   * Parse a string into a Date.
   */
  DateTime = "datetime",

  /**
   * Custom parser.
   *
   * Will typically require a custom parser function or registered name.
   */
  Custom = "custom",
}

//  TODO: KeyCodes - Input, Navigation, Function, Media, NumberPad
export enum InputKeyCode {
  A = 65,
  B = 66,
  C = 67,
  D = 68,
  E = 69,
  F = 70,
  G = 71,
  H = 72,
  I = 73,
  J = 74,
  K = 75,
  L = 76,
  M = 77,
  N = 78,
  O = 79,
  P = 80,
  Q = 81,
  R = 82,
  S = 83,
  T = 84,
  U = 85,
  V = 86,
  W = 87,
  X = 88,
  Y = 89,
  Z = 90,
  Zero = 48,
  One = 49,
  Two = 50,
  Three = 51,
  Four = 52,
  Five = 53,
  Six = 54,
  Seven = 55,
  Eight = 56,
  Nine = 57,
  Hyphen = 189,
  Equal = 187,
  Tick = 192,
  OpenBracket = 219,
  CloseBracket = 221,
  BackSlash = 220,
  Semicolon = 186,
  Quote = 222,
  Comma = 188,
  Period = 190,
  Slash = 191,
  Backspace = 8,
  Tab = 9,
  Enter = 13,
  Space = 32,
  Delete = 46,
}

export enum NumPadKeyCode {
  Zero = 96,
  One = 97,
  Two = 98,
  Three = 99,
  Four = 100,
  Five = 101,
  Six = 102,
  Seven = 103,
  Eight = 104,
  Nine = 105,
  Decimal = 110,
  Divide = 111,
  Multiply = 106,
  Subtract = 109,
  Add = 107,
  Enter = 13,
}

export enum ControlKeyCode {
  Escape = 27,
  ScrollLock = 145,
  NumLock = 144,
  PrintScreen = 44,
  Pause = 19,
  Insert = 45,
  Control = 17,
  Alt = 18,
  Shift = 16,
  ContextMenu = 93,
  Meta = 91,
  Cancel = 3,
}

export enum NavigationKeyCode {
  ArrowLeft = 37,
  ArrowUp = 38,
  ArrowRight = 39,
  ArrowDown = 40,
  Home = 36,
  End = 35,
  PageUp = 33,
  PageDown = 34,
}

export enum FunctionKeyCode {
  F1 = 112,
  F2 = 113,
  F3 = 114,
  F4 = 115,
  F5 = 116,
  F6 = 117,
  F7 = 118,
  F8 = 119,
  F9 = 120,
  F10 = 121,
  F11 = 122,
  F12 = 123,
  F13 = 124,
  F14 = 125,
  F15 = 126,
  F16 = 127,
  F17 = 128,
  F18 = 129,
  F19 = 130,
  F20 = 131,
  F21 = 132,
  F22 = 133,
  F23 = 134,
  F24 = 135,
}

export enum VolumeKeyCode {
  Mute = 173,
  Down = 174,
  Up = 175,
}

export enum MediaKeyCode {
  Stop = 178,
  PlayPause = 179,
  PreviousTrack = 177,
  NextTrack = 176,
}

export type KeyCode =
  | InputKeyCode
  | NumPadKeyCode
  | ControlKeyCode
  | NavigationKeyCode
  | FunctionKeyCode
  | VolumeKeyCode
  | MediaKeyCode;
export const KeyCode = {
  ...InputKeyCode,
  ...NumPadKeyCode,
  ...ControlKeyCode,
  ...NavigationKeyCode,
  ...FunctionKeyCode,
  ...VolumeKeyCode,
  ...MediaKeyCode,
};

export enum DayOfWeek {
  Sunday,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
}

/**
 * @example
 * ```ts
 * import { DayOfWeekBitWise } from "./enums.ts";
 * 
 * const workdays = DayOfWeekBitWise.Monday | DayOfWeekBitWise.Tuesday | DayOfWeekBitWise.Wednesday | DayOfWeekBitWise.Thursday | DayOfWeekBitWise.Friday;
 * 
 * const isWorking = (day: DayOfWeekBitWise) => (workdays & day) !== 0;
 * 
 * console.log(isWorking(DayOfWeekBitWise.Monday));    // true
 * console.log(isWorking(DayOfWeekBitWise.Saturday));  // false
 * ```
 */
export enum DayOfWeekBitWise {
  Sunday = 1,
  Monday = 2,
  Tuesday = 4,
  Wednesday = 8,
  Thursday = 16,
  Friday = 32,
  Saturday = 64,
}

export enum Month {
  January,
  February,
  March,
  April,
  May,
  June,
  July,
  August,
  September,
  October,
  November,
  December,
}

export enum MonthBitWise {
  January = 1,
  February = 2,
  March = 4,
  April = 8,
  May = 16,
  June = 32,
  July = 64,
  August = 128,
  September = 256,
  October = 512,
  November = 1024,
  December = 2048,
}

export enum UriComponents {
  Scheme = 1,
  UserInfo = 2,
  Host = 4,
  Port = 8,
  Path = 16,
  Query = 32,
  Fragment = 64,
  Absolute = 127,
  Service = 13,
  PathQuery = 48,
}

export enum ConsoleColor {
  Black = 0,
  DarkBlue = 1,
  DarkGreen = 2,
  DarkCyan = 3,
  DarkRed = 4,
  DarkMagenta = 5,
  DarkYellow = 6,
  Gray = 7,
  DarkGray = 8,
  Blue = 9,
  Green = 10,
  Cyan = 11,
  Red = 12,
  Magenta = 13,
  Yellow = 14,
  White = 15,
  Custom = 16,
}

export enum ConsoleDecoration {
  None = 0,
  Bold = 1,
  Dim = 2,
  Underline = 2,
  Blink = 4,
  Reverse = 8,
  Invisible = 16,
  Italic = 32,
  Reset,
  Strikethrough = 64,
}

//#endregion
