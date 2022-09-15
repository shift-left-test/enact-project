/*
 * Copyright (c) 2022 LG Electronics Inc.
 * SPDX-License-Identifier: MIT
 */

export const toBits = (value) => {
    let result = 0;
    let remainder = 0;
    let i = 1;
    while (value != 0) {
        remainder = value % 2;
        value = parseInt(value / 2);
        result = result + remainder * i;
        i = i * 10;
    }
    return result.toString();
}
