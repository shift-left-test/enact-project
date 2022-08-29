/*
 * Copyright (c) 2022 LG Electronics Inc.
 * SPDX-License-Identifier: MIT
 */

import {plus} from '../src/plus';

test('testShouldReturnExpectedValue', () => {
    expect(plus(1, 2)).toBe(3);
});

test('testShouldFail', () => {
    expect(plus(1, 2)).toBe(-1);
});
