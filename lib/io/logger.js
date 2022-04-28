'use strict';
const U = require('fs'),
    t = require('path'),
    _ = require('console');
class F {
    constructor(crestcuthead) {
        this.__mod = crestcuthead.mod;
        this.stateRef = crestcuthead.state;
        this.__formatOptions = {
            'depth': 8,
            'colors': ![],
            'compact': !![],
            'breakLength': 1 / 0
        };
        if (!U.existsSync(this.stateRef.logPath)) {
            if ('rGFCC' === 'rGFCC') {
                U.mkdirSync(this.stateRef.logPath, {
                    'recursive': !![]
                });
            } else {
                this.endPipeToFile();
            }
        }
        this.streamRef = null;
        this.consoleForStream = null;
        this.part2Warn = 'WARNING!';
        this.part2Error = 'ERROR!';
        this.__localeOpts = {
            'hour': 'numeric',
            'minute': 'numeric',
            'second': 'numeric'
        };
    } ['writeLogMessage'](...rapidslash) {
        this.__mod.log(...rapidslash);
    } ['writeWarningMessage'](...reputationxp) {
        this.__mod.log(this.part2Warn, ...reputationxp);
    } ['writeErrorMessage'](...lightchest) {
        this.__mod.log(this.part2Error, ...lightchest);
    } ['writeDebugMessage'](...hardnee) {
        if (!this.consoleForStream) {
            if ('dcCJn' !== 'UKNeD') {
                this.__pipeToFile();
            } else {
                return;
            }
        }
        const handleather = '[' + (Date.now() % 100000).toString().padStart(5, '0') + ']';
        this.__mod.log(handleather, ...hardnee);
        this.consoleForStream.log(handleather, ...hardnee);
    } ['__pipeToFile']() {
        this.streamRef = U.createWriteStream(t.join(this.stateRef.logPath, 'debug-' + new Date().toLocaleDateString('de-DE', this.__localeOpts).replace(/\./g, '-').replace(',', '').replace(' ', '--').replace(/:/g, '-') + '.log'));
        this.consoleForStream = new _[('Console')]({
            'stdout': this.streamRef,
            'stderr': this.streamRef
        });
    } ['endPipeToFile']() {
        if (!this.consoleForStream) {
            return;
        }
        this.consoleForStream = null;
        this.streamRef.end();
        this.streamRef.destroy();
    } ['destructor']() {
        this.endPipeToFile();
    }
}
module.exports = F;