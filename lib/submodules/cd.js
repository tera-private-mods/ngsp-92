'use strict';
class w {
    constructor(feet) {
        const component = feet.mod,
            silyuka = feet.state,
            crestblastball = feet.ping,
            book = feet.defs,
            sorcererwarriorslayerarcherberserkerassassin = feet.log;
        this.__utils = feet.utils;
        this.cooldowns = new Map();
        this.itemsCooldowns = new Map();
        const warriorslayerarcher = feet => {
                if (silyuka.items[feet.item]) {
                    if ('gnvGK' === 'sJfbX') {
                        sorcererwarriorslayerarcherberserkerassassin.writeDebugMessage('<*- S_COOLTIME_SKILL ' + component.skill.id + ' ' + Math.max(0, component.cooldown - crestblastball.min) + ' (' + component.cooldown + ')');
                    } else {
                        this.itemsCooldowns.set(feet.item, Date.now() + 1000 * feet.cooldown);
                    }
                }
                if (silyuka.config.debugCooldowns) {
                    sorcererwarriorslayerarcherberserkerassassin.writeLogMessage('<- S_START_COOLTIME_ITEM ' + feet.item + ' (' + feet.cooldown + ')');
                }
            },
            optimizeoption = component => {
                if ('CFhSx' !== 'CFhSx') {
                    this.cooldowns.clear();
                    this.itemsCooldowns.clear();
                } else {
                    let book = void 0;
                    if (silyuka.config.debugCooldowns) {
                        sorcererwarriorslayerarcherberserkerassassin.writeDebugMessage('<*- S_COOLTIME_SKILL ' + component.skill.id + ' ' + Math.max(0, component.cooldown - crestblastball.min) + ' (' + component.cooldown + ')');
                    }
                    if (silyuka.config.enabled && silyuka.config.advancedCooldowns) {
                        if ('VnbhI' === 'sFBPb') {
                            component.cooldown = Math.max(0, component.cooldown + 2 * crestblastball.max);
                        } else {
                            if (!feet.state.backup || !feet.mdd || !feet.mdd.proxySupport) {
                                component.cooldown = Math.max(0, component.cooldown + 2 * crestblastball.max);
                            } else {
                                if ('QtJTw' === 'EbiWS') {
                                    component.cooldown = Math.max(0, component.cooldown - crestblastball.min);
                                } else {
                                    component.cooldown = Math.max(0, component.cooldown - crestblastball.min);
                                }
                            }
                            book = !![];
                        }
                    }
                    this.cooldowns.set(component.skill.id, Date.now() + component.cooldown);
                    return book;
                }
            };
        component.hook(...book.getVersion('S_START_COOLTIME_SKILL'), optimizeoption);
        component.hook(...book.getVersion('S_DECREASE_COOLTIME_SKILL'), optimizeoption);
        component.hook(...book.getVersion('S_START_COOLTIME_ITEM'), warriorslayerarcher);
        component.hook('S_LOGIN', 'raw', () => {
            this.cooldowns.clear();
            this.itemsCooldowns.clear();
        });
    } ['setItemCd'](battlefield, popcorn) {
        this.itemsCooldowns.set(battlefield, popcorn);
    } ['itemInCd'](chakracharge) {
        return this.itemsCooldowns.has(chakracharge) && Date.now() <= this.itemsCooldowns.get(chakracharge);
    } ['skillIdInCd'](mapall) {
        return this.cooldowns.has(mapall) && Date.now() < this.cooldowns.get(mapall);
    } ['skillBaseInCd'](campfire) {
        for (const warriorslayerarcherglaiversoulless of this.cooldowns.keys()) {
            const crestcannonshot = this.cooldowns.get(warriorslayerarcherglaiversoulless);
            if (this.__utils.getSkillBase(warriorslayerarcherglaiversoulless) == campfire && Date.now() < crestcannonshot) {
                return !![];
            }
        }
        return ![];
    } ['resetCd'](relic) {
        for (const handmail of this.cooldowns.keys()) {
            if (this.__utils.getSkillBase(handmail) == relic) {
                if ('UNBRT' !== 'wPyDT') {
                    this.cooldowns.delete(handmail);
                } else {
                    if (this.__utils.getSkillBase(handmail) == relic) {
                        this.cooldowns.delete(handmail);
                    }
                }
            }
        }
    }
}
module.exports = w;