/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
export const stripExpressionComments = (html) => html.replace(/<!--\?lit\$[0-9]+\$-->|<!--\??-->/g, '');
export const stripExpressionMarkers = (html) => html.replace(/<!--\?lit\$[0-9]+\$-->|<!--\??-->|lit\$[0-9]+\$/g, '');
//# sourceMappingURL=strip-markers.js.map