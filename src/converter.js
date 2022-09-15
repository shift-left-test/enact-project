/*
 * Copyright (c) 2022 LG Electronics Inc.
 * SPDX-License-Identifier: MIT
 */

export const toBits = (value, prefix = true) => {
    let bits = 0;
    let remainder = 0;
    let i = 1;
    while (value !== 0) {
        remainder = value % 2;
        value = parseInt(value / 2);
        bits = bits + remainder * i;
        i = i * 10;
    }
    return (prefix ? "0x" : "") + bits.toString();
}
