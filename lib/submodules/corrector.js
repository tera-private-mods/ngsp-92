const x = require('util');
const y = x.promisify(require('child_process').exec);
const v = ['wtfast', 'mudfish', 'noping', 'killping', 'pingzapper', 'exitlag', 'haste', 'battleping'];
module.exports = async (_0xdb831, _0x1b46cb) => {
    let {
        stdout: e
    } = await y('tasklist.exe /nh /fo csv');
    let _0x40bb7a = e.trim().split('\n');
    let _0xd3671f = [];
    _0x40bb7a.forEach(_0xdb831 => {
        _0xd3671f.push(_0xdb831.trim().split(',')[0].toLowerCase());
    });
    let _0x395d27 = !1;
    if (_0xd3671f.forEach(_0xdb831 => {
            for (let _0x466acf in v) {
                _0xdb831.includes(_0x466acf) && (_0x395d27 = !0);
            }
        }), _0xdb831.history.length < _0x1b46cb.config.pingHistoryMax) {
        return !1;
    }
    let _0x1d9c4e = {};
    return _0x1d9c4e.pingMethod = _0x395d27 ? 'internal' : 'hybrid', _0x1d9c4e.defaultPingValue = _0xdb831.min, _0x1d9c4e.serverTimeout = Math.min(150, 2 * _0xdb831.min), _0x1d9c4e.pingHistoryMax = _0xdb831.avg > 100 ? 20 : 35, _0x1d9c4e.pingHelperTimeout = _0xdb831.avg >= 140 ? 800 : 1250, _0x1d9c4e.ingameUIPing = _0xdb831.avg - _0xdb831.min >= 40 ? _0xdb831.avg : _0xdb831.min, _0x1d9c4e.backstabsSpoof = !(_0xdb831.max - _0xdb831.min >= 35), _0xdb831.avg - _0xdb831.min >= 30 && _0xdb831.min >= 160 && (_0x1d9c4e.forceResyncReactions = !1), _0x1d9c4e.skillRetryMs = _0xdb831.max - _0xdb831.min >= 30 ? 30 : 25, _0x1d9c4e.fastCastSkillsCalibrationTime = (() => {
        const _0x466acf = _0xdb831.max - _0xdb831.min;
        return _0x466acf >= 40 && _0xdb831.min > 200 ? 20 : _0x466acf >= 30 && _0xdb831.min > 200 ? 17 : _0x466acf < 30 && _0x466acf > 15 && _0xdb831.min <= 200 ? 15 : _0x466acf <= 20 && _0x466acf > 10 ? 10 : _0x466acf < 10 && _0xdb831.min <= 150 ? 8 : 10;
    })(), _0x1d9c4e;
};