/*
 * Copyright 2019 Google Inc. All Rights Reserved.
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

/**
 * An utility class to print nice Log messages.
 */
export default interface Log {
  /**
   * Prints a debug message to the Log. message is ignored if the Log is not set to verbose.
   * @param message the message the be printed.
   * @param args extra arguments for the console.
   */
  debug(message: string, ...args: string[]): void 

  /**
   * Prints an info message to the Log. message is ignored if the Log is not set to verbose.
   * @param message the message the be printed.
   * @param args extra arguments for the console.
   */
  info(message: string, ...args: string[]): void

  /**
   * Prints an warning message to the Log. message is ignored if the Log is not set to verbose.
   * @param message the message the be printed.
   * @param args extra arguments for the console.
   */
  warn(message: string, ...args: string[]): void

  /**
   * Prints an error message to the Log. message is ignored if the Log is not set to verbose.
   * @param message the message the be printed.
   * @param args extra arguments for the console.
   */
  error(message: string, ...args: string[]): void

  /**
   * Creates a new Log using the same output and verbositity of the current Log.
   * @param newTag the tag the be used on the new Log instance.
   */
  newLog(newTag: string): Log
}
