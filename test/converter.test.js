/*
 * Copyright (c) 2022 LG Electronics Inc.
 * SPDX-License-Identifier: MIT
 */

import {toBits} from '../src/converter';

describe('test suite for converter', () => {
    it('test 0', () => {
        const result = toBits(0);
        expect(result).toBe('0x0');
    });

    it('test 1', () => {
        const result = toBits(1);
        expect(result).toBe('0x1');
    });

    it('test 8', () => {
        const result = toBits(8);
        expect(result).toBe('0x1000');
    });

    it('test 15', () => {
        const result = toBits(15);
        expect(result).toBe('0x1111');
    });
});
