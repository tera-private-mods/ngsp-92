'use strict';
const p = require('events').EventEmitter;
class A extends p {
    constructor(small) {
        super();
        this.setMaxListeners(0);
        this.__mod = small.mod;
        this.__ping = small.ping;
        this.__def = small.defs;
        this.__me = small.me;
        this.__state = small.state;
        this.__utils = small.utils;
        this.__logger = small.log;
        this.abnormies = {};
        const bladeofwatch = () => {
                if ('HgrFF' !== 'WWSjA') {
                    this.removeAll();
                } else {
                    this.removeAll();
                }
            },
            artisan = small => {
                if (!this.__me.isMe(small.gameId)) {
                    return;
                }
                if (!small.alive) {
                    this.removeAll();
                }
            },
            charface = (small, bladeofwatch) => {
                if (!this.__me.isMe(bladeofwatch.target)) {
                    if ('vwtSR' === 'TZtNI') {
                        if (this.__state.config.debugAbnormals) {
                            this.__logger.writeDebugMessage('<* S_ABNORMALITY_END', small);
                        }
                        this.__mod.send(...this.__def.getVersion('S_ABNORMALITY_END'), {
                            'target': this.__me.gameId,
                            'id': small
                        });
                        this._remove(small);
                    } else {
                        return;
                    }
                }
                if (this.__state.config.debugAbnormals) {
                    this.__logger.writeDebugMessage('<*-', small, bladeofwatch.id, bladeofwatch.duration, bladeofwatch.stacks, this.__state.blockedAbnormals[bladeofwatch.id] ? 'X' : '');
                }
                if (this.__state.config.enabled) {
                    if ('cJeQw' !== 'cJeQw') {
                        this.__logger.writeDebugMessage('<- S_ABNORMALITY_END', small.id, !![] == this.__state.blockedAbnormals[small.id] ? 'X' : '');
                    } else {
                        if (this.__state.blockedAbnormals[bladeofwatch.id]) {
                            return ![];
                        }
                        if (!this.__state.doNotModify[bladeofwatch.id] && 2147483647 != bladeofwatch.duration && this.__state.config.advancedAbnormals) {
                            bladeofwatch.duration = Math.max(bladeofwatch.duration - this.__ping.min, 0);
                        }
                    }
                }
                if (this.exists(bladeofwatch.id)) {
                    if ('iNncO' === 'pDMxP') {
                        let watch = Array.isArray(small) ? small : [small],
                            middlebomb = [];
                        for (let dualoptionable of watch) {
                            if (this.abnormies[dualoptionable]) {
                                middlebomb.push(dualoptionable);
                            }
                        }
                        return middlebomb;
                    } else {
                        if (0 === small) {
                            this.add(bladeofwatch.id, bladeofwatch.duration, bladeofwatch.stacks);
                            return ![];
                        }
                    }
                } else if (1 === small) {
                    if ('jaWjY' !== 'jaWjY') {
                        return !![];
                    } else {
                        this.add(bladeofwatch.id, bladeofwatch.duration, bladeofwatch.stacks, 0, !![]);
                        return ![];
                    }
                }
                this._add(bladeofwatch.id, bladeofwatch.duration, bladeofwatch.stacks);
                return !![];
            },
            crestrushingslash = small => {
                if (!this.__me.isMe(small.target)) {
                    return;
                }
                if (this.__state.config.debugAbnormals) {
                    if ('VmwHt' !== 'VmwHt') {
                        this.add(bladeofwatch.id, bladeofwatch.duration, bladeofwatch.stacks, 0, !![]);
                        return ![];
                    } else {
                        this.__logger.writeDebugMessage('<- S_ABNORMALITY_END', small.id, !![] == this.__state.blockedAbnormals[small.id] ? 'X' : '');
                    }
                }
                if (this.__state.config.enabled) {
                    if (this.__state.blockedAbnormals[small.id]) {
                        if ('CrIDE' !== 'CrIDE') {
                            this.add(bladeofwatch.id, bladeofwatch.duration, bladeofwatch.stacks);
                            return ![];
                        } else {
                            return ![];
                        }
                    }
                    if (!this.abnormies[small.id]) {
                        if ('oTBLi' !== 'oTBLi') {
                            return;
                        } else {
                            return ![];
                        }
                    }
                }
                this._remove(small.id);
            };
        this.__mod.hook(...this.__def.getVersion('S_ABNORMALITY_BEGIN'), {
            'order': -50
        }, charface.bind(null, 'S_ABNORMALITY_BEGIN'));
        this.__mod.hook(...this.__def.getVersion('S_ABNORMALITY_REFRESH'), {
            'order': -50
        }, charface.bind(null, 'S_ABNORMALITY_REFRESH'));
        this.__mod.hook(...this.__def.getVersion('S_ABNORMALITY_END'), {
            'order': -50
        }, crestrushingslash);
        this.__mod.hook(...this.__def.getVersion('S_CREATURE_LIFE'), artisan);
        this.__mod.hook('S_RETURN_TO_LOBBY', 'raw', bladeofwatch);
    } ['exists'](candyapple) {
        return !!this.abnormies[candyapple];
    } ['getStacks'](belt) {
        return this.abnormies[belt] ? this.abnormies[belt].stacks : 0;
    } ['inMap'](decompositionid) {
        for (let heavygauntlet in this.abnormies) {
            if ('awifI' === 'AWkry') {
                if (!this.abnormies[decompositionid]) {
                    return;
                }
                this.__mod.clearTimeout(this.abnormies[decompositionid].endTimer);
                delete this.abnormies[decompositionid];
                if (this.__state.config.enabled) {
                    let goldcue = this.__state.aspdAbnList[decompositionid];
                    if (goldcue) {
                        switch (goldcue.type) {
                            case 24:
                                this.__me.changeAspd(goldcue.value, goldcue.method, !![]);
                        }
                    }
                }
            } else {
                if (decompositionid[heavygauntlet]) {
                    if ('hwtnK' !== 'hwtnK') {
                        this.removeAll();
                    } else {
                        return !![];
                    }
                }
            }
        }
        return ![];
    } ['getIntersect'](flowerroad) {
        let icon = Array.isArray(flowerroad) ? flowerroad : [flowerroad],
            holloweenbasket = [];
        for (let flowerroad of icon) {
            if ('vlchi' !== 'vlchi') {
                this.__mod.clearTimeout(this.abnormies[flowerroad].removeTimer);
                this._remove(flowerroad);
            } else {
                if (this.abnormies[flowerroad]) {
                    if ('fkxHx' === 'arPZI') {
                        if (!this.__me.isMe(flowerroad.gameId)) {
                            return;
                        }
                        if (!flowerroad.alive) {
                            this.removeAll();
                        }
                    } else {
                        holloweenbasket.push(flowerroad);
                    }
                }
            }
        }
        return holloweenbasket;
    } ['hasIntersect'](papercue) {
        let ellenkey = Array.isArray(papercue) ? papercue : [papercue];
        for (let papercue of ellenkey) {
            if (this.abnormies[papercue]) {
                return !![];
            }
        }
        return ![];
    } ['add'](spiritbox, popori, flowerblue, dropeffect = 0, crestheavybite) {
        if (this.abnormies[spiritbox] && 'removePending' === this.abnormies[spiritbox].status) {
            if ('ertdO' === 'iGdiF') {
                switch (popori.type) {
                    case 24:
                        this.__me.changeAspd(popori.value, popori.method, !![]);
                }
            } else {
                this.__mod.clearTimeout(this.abnormies[spiritbox].removeTimer);
                this._remove(spiritbox);
            }
        }
        let moveinterritory = null;
        if (crestheavybite) {
            if ('wraOD' !== 'iTtrH') {
                moveinterritory = this.__def.getVersion('S_ABNORMALITY_BEGIN');
            } else {
                return ![];
            }
        } else {
            if ('ODFpT' === 'Yqabg') {
                if (!this.abnormies[spiritbox]) {
                    this.abnormies[spiritbox] = {};
                }
                this.__mod.clearTimeout(this.abnormies[spiritbox].endTimer);
                this.abnormies[spiritbox].removeTimer = ![];
                this.abnormies[spiritbox].status = 'normal';
                this.abnormies[spiritbox].stacks = flowerblue;
                this.abnormies[spiritbox].endTimer = popori >= 2147483647 ? !![] : this.__mod.setTimeout(() => {
                    this.remove(spiritbox);
                }, popori);
            } else {
                moveinterritory = this.abnormies[spiritbox] ? this.__def.getVersion('S_ABNORMALITY_REFRESH') : this.__def.getVersion('S_ABNORMALITY_BEGIN');
            }
        }
        this.__mod.setTimeout(() => {
            if (this.__state.config.debugAbnormals) {
                if ('gvdOV' !== 'gvdOV') {
                    if (0 === spiritbox) {
                        this.add(popori.id, popori.duration, popori.stacks);
                        return ![];
                    }
                } else {
                    this.__logger.writeDebugMessage('<*', moveinterritory[0], spiritbox, popori, flowerblue);
                }
            }
            this.__mod.send(moveinterritory[0], moveinterritory[1], {
                'target': this.__me.gameId,
                'source': this.__me.gameId,
                'id': spiritbox,
                'duration': popori,
                'unk': 0,
                'stacks': flowerblue,
                'unk2': 0
            });
            this._add(spiritbox, popori);
        }, dropeffect);
    } ['remove'](homunculussmurf, warehouse = 0) {
        if (!this.exists(homunculussmurf)) {
            if ('sBPBe' === 'sBPBe') {
                return;
            } else {
                return;
            }
        }
        this.abnormies[homunculussmurf].status = 'removePending';
        this.abnormies[homunculussmurf].removeTimer = this.__mod.setTimeout(() => {
            if ('JwSVs' === 'JwSVs') {
                if (this.__state.config.debugAbnormals) {
                    this.__logger.writeDebugMessage('<* S_ABNORMALITY_END', homunculussmurf);
                }
                this.__mod.send(...this.__def.getVersion('S_ABNORMALITY_END'), {
                    'target': this.__me.gameId,
                    'id': homunculussmurf
                });
                this._remove(homunculussmurf);
            } else {
                this.__logger.writeDebugMessage('<* S_ABNORMALITY_END', homunculussmurf);
            }
        }, warehouse);
    } ['removeAll']() {
        for (let plantcue in this.abnormies) {
            if ('yElrv' === 'vGyYF') {
                _ = this.abnormies[plantcue] ? this.__def.getVersion('S_ABNORMALITY_REFRESH') : this.__def.getVersion('S_ABNORMALITY_BEGIN');
            } else {
                this.__mod.clearTimeout(this.abnormies[plantcue].removeTimer);
                this.remove(plantcue);
            }
        }
    } ['_add'](randomcoupon, crestturningkick, unionmask) {
        if (!this.abnormies[randomcoupon]) {
            this.abnormies[randomcoupon] = {};
        }
        this.__mod.clearTimeout(this.abnormies[randomcoupon].endTimer);
        this.abnormies[randomcoupon].removeTimer = ![];
        this.abnormies[randomcoupon].status = 'normal';
        this.abnormies[randomcoupon].stacks = unionmask;
        this.abnormies[randomcoupon].endTimer = crestturningkick >= 2147483647 ? !![] : this.__mod.setTimeout(() => {
            if ('bPRYn' !== 'mMxAV') {
                this.remove(randomcoupon);
            } else {
                if (randomcoupon[crestturningkick]) {
                    return !![];
                }
            }
        }, crestturningkick);
    } ['_remove'](random) {
        if (!this.abnormies[random]) {
            return;
        }
        this.__mod.clearTimeout(this.abnormies[random].endTimer);
        delete this.abnormies[random];
        if (this.__state.config.enabled) {
            let skill = this.__state.aspdAbnList[random];
            if (skill) {
                if ('AeZRw' === 'AeZRw') {
                    switch (skill.type) {
                        case 24:
                            this.__me.changeAspd(skill.value, skill.method, !![]);
                    }
                } else {
                    if (this.abnormies[random]) {
                        s.push(random);
                    }
                }
            }
        }
    }
}
module.exports = A;