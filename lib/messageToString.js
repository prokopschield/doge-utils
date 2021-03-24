"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageToString = void 0;
function messageToString(tokens, { plain, } = {
    plain: false,
}) {
    return tokens
        .map(plain
        ? (a => a?.v || '')
        : (({ t, v = '' }) => {
            switch (t) {
                case 'mention':
                    return `@${v}`;
                case 'emote':
                    return `:${v}:`;
                case 'block':
                    return '`' + v + '`';
                default:
                    return v;
            }
        }))
        .join(' ')
        .replace(/[\x00-\x20]+/g, ' ')
        .trim();
}
exports.messageToString = messageToString;