"use strict";
/////////////////////
Object.defineProperty(exports, "__esModule", { value: true });
function get_UTC_timestamp_ms() {
    return (+Date.now());
}
exports.get_UTC_timestamp_ms = get_UTC_timestamp_ms;
function get_human_readable_UTC_timestamp_ms_v1(now = new Date()) {
    const YYYY = now.getUTCFullYear();
    const MM = ('0' + (now.getUTCMonth() + 1)).slice(-2);
    const DD = ('0' + now.getUTCDate()).slice(-2);
    const hh = ('0' + now.getUTCHours()).slice(-2);
    const mm = ('0' + now.getUTCMinutes()).slice(-2);
    const ss = ('0' + now.getUTCSeconds()).slice(-2);
    const mmm = ('00' + now.getUTCMilliseconds()).slice(-3);
    return `${YYYY}${MM}${DD}_${hh}:${mm}:${ss}.${mmm}`;
}
exports.get_human_readable_UTC_timestamp_ms_v1 = get_human_readable_UTC_timestamp_ms_v1;
function get_human_readable_UTC_timestamp_ms(now = new Date()) {
    return 'ts1_' + get_human_readable_UTC_timestamp_ms_v1(now);
}
exports.get_human_readable_UTC_timestamp_ms = get_human_readable_UTC_timestamp_ms;
//# sourceMappingURL=index.js.map