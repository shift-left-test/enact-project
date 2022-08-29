/*
 * Copyright (c) 2022 LG Electronics Inc.
 * SPDX-License-Identifier: MIT
 */

import {minus} from '../src/minus';

test('testShouldReturnExpectedValue', () => {
    expect(minus(1, 2)).toBe(-1);
});

test('testShouldAlsoFail', () => {
    expect(minus(1, 2)).toBe(3);
});
