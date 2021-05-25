/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import * as vm from 'vm';
/**
 * Imports a module given by `path` into a new VM context with `contextGlobal` as the
 * global object.
 *
 * @param specifier
 * @param referrer
 * @param contextGlobal The object that will become the global, via vm.createContext
 */
export declare const importModule: (specifier: string, referrer: string, contextGlobal: vm.Context) => Promise<vm.Module>;
//# sourceMappingURL=import-module.d.ts.map