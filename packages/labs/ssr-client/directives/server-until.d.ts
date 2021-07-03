/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { UntilDirective } from 'lit/directives/until.js';
declare class ServerUntilDirective extends UntilDirective {
    static $litServerUntil: boolean;
}
/**
 */
export declare const serverUntil: (...values: unknown[]) => import("lit/directive.js").DirectiveResult<typeof ServerUntilDirective>;
export declare const isServerUntilDirective: (value: unknown) => boolean;
export {};
//# sourceMappingURL=server-until.d.ts.map