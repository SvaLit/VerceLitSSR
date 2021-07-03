/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { directive } from 'lit/directive.js';
import { getDirectiveClass } from 'lit/directive-helpers.js';
import { UntilDirective } from 'lit/directives/until.js';
class ServerUntilDirective extends UntilDirective {
}
ServerUntilDirective.$litServerUntil = true;
/**
 */
export const serverUntil = directive(ServerUntilDirective);
export const isServerUntilDirective = (value) => { var _a; return (_a = getDirectiveClass(value)) === null || _a === void 0 ? void 0 : _a.$litServerUntil; };
//# sourceMappingURL=server-until.js.map