/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { SSRTestSuite } from '../tests/ssr-test.js';
declare const modes: readonly ["vm", "global"];
export declare const setupTest: (tests: SSRTestSuite, testFile: string, mode?: typeof modes[number]) => Promise<void>;
export {};
//# sourceMappingURL=setup.d.ts.map