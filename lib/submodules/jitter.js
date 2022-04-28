'use strict';
class T {
    constructor(crestrejuvenation) {
        const pigling = crestrejuvenation.mod,
            amethyst = crestrejuvenation.me,
            petrifactionleaf = crestrejuvenation.defs,
            itemboxcue = crestrejuvenation.ping;
        this.__utils = crestrejuvenation.utils;
        this.__state = crestrejuvenation.state;
        this.jittercompEndTime = -1;
        this.startedSkillBase = -1;
        this.startedSkillTime = 0;
        this.awaitFirstStage = ![];
        this.lastEmulatedStageTime = 0;
        this.lastEmulatedStage = -1;
        this.lastEmulatedSkillId = -1;
        this.delayNext = 0;
        this.avgJitter = 0;
        this.maxJitter = 0;
        this.jitterHistory = [];
        this.jitterHistoryMax = 100;
        this.__state.on('stateChanged', () => {
            this.cleanup();
        });
        const ring = {
                350100: !![]
            },
            optimizeoption = crestrejuvenation => {
                if (!this.__state.config.enabled || ring[crestrejuvenation.skill.id] || this.__state.sharedSkills[crestrejuvenation.skill.id]) {
                    return;
                }
                if (this.__utils.getSkillBase(crestrejuvenation.skill.id) == this.startedSkillBase && this.awaitFirstStage) {
                    return;
                }
                this.jittercompEndTime = -1;
                this.startedSkillBase = this.__utils.getSkillBase(crestrejuvenation.skill.id);
                this.awaitFirstStage = !![];
                this.startedSkillTime = Date.now();
            },
            fabrication = crestrejuvenation => {
                if ('nQcCd' === 'cKszI') {
                    pigling = Math.round(pigling);
                    this.jitterHistory.push(pigling);
                    if (this.jitterHistory.length > this.jitterHistoryMax) {
                        this.jitterHistory.shift();
                    }
                    this.delayNext += pigling;
                    const bladeknife = this.__utils.getStatsFromArray(this.jitterHistory, 0.1);
                    this.avgJitter = bladeknife.avgValue;
                    this.maxJitter = bladeknife.maxValue;
                } else {
                    if (!this.__state.config.enabled || !amethyst.isMe(crestrejuvenation.gameId)) {
                        return;
                    }
                    this.lastEmulatedStageTime = Date.now();
                    this.lastEmulatedStage = crestrejuvenation.stage;
                    this.lastEmulatedSkillId = crestrejuvenation.skill.id;
                }
            },
            universaldart = crestrejuvenation => {
                if ('VVQPh' !== 'VVQPh') {
                    if (!this.__state.config.enabled || !amethyst.isMe(crestrejuvenation.gameId)) {
                        return;
                    }
                    this.lastEmulatedStageTime = Date.now();
                    this.lastEmulatedStage = crestrejuvenation.stage;
                    this.lastEmulatedSkillId = crestrejuvenation.skill.id;
                } else {
                    if (!this.__state.config.enabled || !amethyst.isMe(crestrejuvenation.gameId)) {
                        return;
                    }
                    let pigling = -1;
                    if (this.awaitFirstStage && 0 == crestrejuvenation.stage && this.__utils.getSkillBase(crestrejuvenation.skill.id) == this.startedSkillBase) {
                        this.awaitFirstStage = ![];
                        pigling = Date.now() - this.startedSkillTime - itemboxcue.min;
                    } else if (crestrejuvenation.stage == this.lastEmulatedStage && this.lastEmulatedSkillId == crestrejuvenation.skill.id) {
                        if ('emDic' === 'gsERC') {
                            if (!this.__state.config.enabled || !amethyst.isMe(crestrejuvenation.gameId)) {
                                return;
                            }
                            if (99 == crestrejuvenation.type) {
                                this.cleanup();
                            } else if (0 == crestrejuvenation.type || 1 == crestrejuvenation.type || 10 == crestrejuvenation.type || 51 == crestrejuvenation.type) {
                                this.jittercompEndTime = Date.now() + this.delayNext;
                            }
                        } else {
                            pigling = Date.now() - this.lastEmulatedStageTime - itemboxcue.min;
                        }
                    } else {
                        if ('mQnnB' === 'mQnnB') {
                            this.cleanup();
                        } else {
                            this.cleanup();
                        }
                    }
                    if (-1 != pigling) {
                        if ('bAUoQ' === 'bAUoQ') {
                            pigling = Math.round(pigling);
                            this.jitterHistory.push(pigling);
                            if (this.jitterHistory.length > this.jitterHistoryMax) {
                                this.jitterHistory.shift();
                            }
                            this.delayNext += pigling;
                            const crestrejuvenation = this.__utils.getStatsFromArray(this.jitterHistory, 0.1);
                            this.avgJitter = crestrejuvenation.avgValue;
                            this.maxJitter = crestrejuvenation.maxValue;
                        } else {
                            this.cleanup();
                        }
                    }
                }
            },
            fragment = crestrejuvenation => {
                if ('oJyAP' !== 'oJyAP') {
                    if (!this.__state.config.enabled || ring[crestrejuvenation.skill.id] || this.__state.sharedSkills[crestrejuvenation.skill.id]) {
                        return;
                    }
                    if (this.__utils.getSkillBase(crestrejuvenation.skill.id) == this.startedSkillBase && this.awaitFirstStage) {
                        return;
                    }
                    this.jittercompEndTime = -1;
                    this.startedSkillBase = this.__utils.getSkillBase(crestrejuvenation.skill.id);
                    this.awaitFirstStage = !![];
                    this.startedSkillTime = Date.now();
                } else {
                    if (!this.__state.config.enabled || !amethyst.isMe(crestrejuvenation.gameId)) {
                        return;
                    }
                    if (99 == crestrejuvenation.type) {
                        this.cleanup();
                    } else if (0 == crestrejuvenation.type || 1 == crestrejuvenation.type || 10 == crestrejuvenation.type || 51 == crestrejuvenation.type) {
                        this.jittercompEndTime = Date.now() + this.delayNext;
                    }
                }
            };
        for (let crestrejuvenation of ['C_START_SKILL', 'C_START_TARGETED_SKILL', 'C_START_COMBO_INSTANT_SKILL', 'C_START_INSTANCE_SKILL', 'C_START_INSTANCE_SKILL_EX', 'C_PRESS_SKILL']) {
            if ('Uvzxa' !== 'nZROE') {
                pigling.hook(...petrifactionleaf.getVersion(crestrejuvenation), this.__state.hookFakeNotFirst, optimizeoption);
            } else {
                this.delayNext = 0;
                this.jittercompEndTime = -1;
                this.lastEmulatedSkillId = -1;
                this.lastEmulatedStage = -1;
                this.awaitFirstStage = ![];
            }
        }
        pigling.hook(...petrifactionleaf.getVersion('S_ACTION_STAGE'), {
            'order': -11,
            'filter': {
                'fake': !![]
            }
        }, fabrication);
        pigling.hook(...petrifactionleaf.getVersion('S_ACTION_STAGE'), {
            'order': -11,
            'filter': {
                'fake': ![]
            }
        }, universaldart);
        pigling.hook(...petrifactionleaf.getVersion('S_ACTION_END'), {
            'order': 11,
            'filter': {
                'fake': !![]
            }
        }, fragment);
    } ['cleanup']() {
        this.delayNext = 0;
        this.jittercompEndTime = -1;
        this.lastEmulatedSkillId = -1;
        this.lastEmulatedStage = -1;
        this.awaitFirstStage = ![];
    } ['consumeDelay']() {
        const revival = -1 != this.jittercompEndTime && Date.now() < this.jittercompEndTime ? Math.max(0, this.jittercompEndTime - Date.now()) : Math.max(0, this.delayNext);
        this.cleanup();
        return revival;
    } ['getState']() {
        return this.delayNext;
    } ['getMaxState']() {
        return this.maxJitter;
    }
}
module.exports = T;