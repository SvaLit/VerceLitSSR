/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */
import { Readable } from 'stream';
async function* withAsync(iterable) {
    for (const value of iterable) {
        if (typeof value?.then === 'function') {
            yield* withAsync(await value);
        }
        else {
            yield value;
        }
    }
}
export const readableFrom = (ssrResult, handleAsync = false) => {
    return Readable.from(handleAsync ? withAsync(ssrResult) : ssrResult);
};
//# sourceMappingURL=readable.js.map