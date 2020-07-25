import { Space_Separator, ID_Start, ID_Continue } from '../lib/unicode.js'

export const util = {
    isSpaceSeparator(c) {
        return typeof c === 'string' && Space_Separator.test(c)
    },

    isIdStartChar(c) {
        return typeof c === 'string' && (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c === '$') || (c === '_') ||
            ID_Start.test(c)
        )
    },

    isIdContinueChar(c) {
        return typeof c === 'string' && (
            (c >= 'a' && c <= 'z') ||
            (c >= 'A' && c <= 'Z') ||
            (c >= '0' && c <= '9') ||
            (c === '$') || (c === '_') ||
            (c === '\u200C') || (c === '\u200D') ||
            ID_Continue.test(c)
        )
    },

    isDigit(c) {
        return typeof c === 'string' && /[0-9]/.test(c)
    },

    isHexDigit(c) {
        return typeof c === 'string' && /[0-9A-Fa-f]/.test(c)
    },
}
