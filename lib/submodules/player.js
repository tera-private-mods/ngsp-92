'use strict';
class k {
    constructor(gain) {
        const goddess = gain.mod,
            durion = gain.defs,
            crestwhirlwind = gain.utils,
            ride = gain.state;
        this.stateReference = gain.state;
        const broccolisoup = gain.log;
        let redemerald = null,
            gift = [];
        Object.assign(this, {
            'gameId': null,
            'templateId': -1,
            'race': -1,
            'job': -1,
            'mounted': !![],
            'vehicleEx': null,
            'attackSpeed': 1,
            'attackSpeedBonus': 0,
            'stamina': 0,
            'partyMembers': new Map(),
            'currentGlyphs': new Set(),
            'currentStamina': null,
            'lowStaminaSystemMessage': null,
            'aspd': 0,
            'passives': new Set(),
            'items': new Set(),
            'inCombat': ![],
            'equippedWeapon': ![],
            'bodyRolls': [],
            'categories': new Map(),
            'polishing': new Set(),
            'polishingLevelEffects': new Map(),
            'talents': new Map(),
            'totalRunSpeed': 0,
            'totalWalkSpeed': 0,
            'awookenedLevel': 0
        });
        const smile = gain => {
                if ('yijCx' === 'JwKxn') {
                    return this.items.has(gain);
                } else {
                    this.passives.clear();
                    for (let goddess of gain.skills) {
                        if ('UtVTZ' !== 'lYGsl') {
                            let gain = Number(goddess.id);
                            if (goddess.active) {} else {
                                this.passives.add(gain);
                            }
                        } else {
                            return this.talents.has(gain);
                        }
                    }
                }
            },
            darkmatter = gain => {
                this.gameId = gain.gameId;
                this.templateId = gain.templateId;
                this.race = crestwhirlwind.getRaceFromTemplateId(this.templateId);
                this.job = crestwhirlwind.getJobFromTemplateId(this.templateId);
                this.passives.clear();
                this.partyMembers.clear();
                this.currentGlyphs.clear();
                this.polishing.clear();
                this.items.clear();
                this.bodyRolls = [];
                this.blacklistedSkills = {};
                this.categories.clear();
                switch (this.job) {
                    case 9:
                        this.lowStaminaSystemMessage = 'SMT_BATTLE_SKILL_FAIL_LOW_ARCANE';
                        break;
                    case 10:
                        this.lowStaminaSystemMessage = 'SMT_BATTLE_SKILL_FAIL_LOW_FURY';
                        break;
                    case 11:
                        this.lowStaminaSystemMessage = 'SMT_BATTLE_SKILL_FAIL_LOW_CHAKRA';
                        break;
                    case 12:
                        this.lowStaminaSystemMessage = 'SMT_BATTLE_SKILL_FAIL_LOW_MOON_LIGHT';
                        break;
                    default:
                        this.lowStaminaSystemMessage = 'SMT_BATTLE_SKILL_FAIL_LOW_STAMINA';
                }
                this.awookenedLevel = gain.awakeningLevel;
            },
            charm = gain => {
                if (gain.target !== this.gameId) {
                    return;
                }
                this.inCombat = 1 === gain.status;
            },
            speedup = gain => {
                this.attackSpeed = gain.attackSpeed;
                this.attackSpeedBonus = gain.attackSpeedBonus;
                this.currentStamina = gain.stamina;
                this.totalRunSpeed = gain.runSpeed + gain.runSpeedBonus;
                this.totalWalkSpeed = gain.walkSpeed + gain.walkSpeedBonus;
                this.__recalculateAspd();
            },
            crestdivinelightning = gain => {
                redemerald = gain.first ? gain : redemerald.items.concat(gain.items);
                if (!gain.more) {
                    if ('YAUeR' !== 'IUbGx') {
                        if (14 == redemerald.container) {
                            gift = [];
                            redemerald.items.forEach(gain => {
                                if ('UCZCj' !== 'WSWcV') {
                                    gift.push(gain);
                                } else {
                                    return this.currentGlyphs.has(Number(gain));
                                }
                            });
                        } else if (0 == redemerald.container) {
                            if ('WvPVS' !== 'pSzCl') {
                                this.items.clear();
                                redemerald.items.forEach(gain => {
                                    if ('sExiw' !== 'EPgAm') {
                                        this.items.add(gain.id);
                                    } else {
                                        this.mounted = !![];
                                    }
                                });
                            } else {
                                this.vehicleEx = null;
                                this.mounted = ![];
                                this.zone = gain.zone;
                            }
                        }
                        if (gain.lastInBatch) {
                            this.equippedWeapon = gift.some(gain => 1 == gain.slot);
                            let gain = gift.find(gain => 3 == gain.slot);
                            if (gain) {
                                if ('EDIWY' === 'Okxmu') {
                                    broccolisoup.writeDebugMessage('S_LOAD_EP_INFO', gain.perks);
                                } else {
                                    let goddess = [];
                                    const durion = gain.passivitySets[gain.passivitySet];
                                    if (durion) {
                                        if ('xsPnA' !== 'xsPnA') {
                                            let crestthrowaxe = this.partyMembers.get(goddess);
                                            if (crestthrowaxe.pid === gain.playerId && crestthrowaxe.sid === gain.serverId) {
                                                this.partyMembers.delete(goddess);
                                            }
                                        } else {
                                            for (let gain of durion.passivities) {
                                                if ('SskGn' === 'SskGn') {
                                                    if (0 !== gain.id) {
                                                        if ('yjWtj' !== 'gMhdM') {
                                                            goddess.push(gain.id);
                                                        } else {
                                                            let changecolorenable = [];
                                                            const linksocialid = gain.passivitySets[gain.passivitySet];
                                                            if (linksocialid) {
                                                                for (let mirrorball of linksocialid.passivities) {
                                                                    if (0 !== mirrorball.id) {
                                                                        changecolorenable.push(mirrorball.id);
                                                                    }
                                                                }
                                                            }
                                                            this.bodyRolls = changecolorenable;
                                                        }
                                                    }
                                                } else {
                                                    this.talents.delete(goddess.id);
                                                }
                                            }
                                        }
                                    }
                                    this.bodyRolls = goddess;
                                }
                            }
                            let goddess = gift.find(gain => 20 == gain.slot);
                            if (goddess) {
                                if ('noBsc' !== 'noBsc') {
                                    this.items.add(gain.id);
                                } else {
                                    this.items.add(goddess.id);
                                }
                            }
                        }
                        redemerald = null;
                    } else {
                        broccolisoup.writeDebugMessage('S_CREST_INFO ' + gain.crests);
                    }
                }
            },
            middlebomb = gain => {
                this.currentStamina = gain.current;
            },
            combatitemsubtype = gain => {
                this.partyMembers.clear();
                gain.members.forEach(gain => {
                    if ('GmaLK' === 'GmaLK') {
                        if (!(gain.gameId === this.gameId)) {
                            this.partyMembers.set(gain.gameId, {
                                'pid': gain.playerId,
                                'sid': gain.serverId
                            });
                        }
                    } else {
                        this.talents.clear();
                    }
                });
            },
            heavyboots = gain => {
                [...this.partyMembers.keys()].forEach(goddess => {
                    let durion = this.partyMembers.get(goddess);
                    if (durion.pid === gain.playerId && durion.sid === gain.serverId) {
                        this.partyMembers.delete(goddess);
                    }
                });
            },
            crestoverhelm = () => {
                if ('IRSsk' === 'IRSsk') {
                    this.partyMembers.clear();
                } else {
                    if (!gain.successful) {
                        return;
                    }
                    for (let crestchainuppercut of gain.perks) {
                        if (this.talents.has(crestchainuppercut.id)) {
                            this.talents.delete(crestchainuppercut.id);
                        }
                        this.talents.set(crestchainuppercut.id, crestchainuppercut.level);
                    }
                }
            },
            fighter = gain => {
                this.currentGlyphs.clear();
                if (ride.config.debugGlyphs) {
                    if ('dgwMD' !== 'yBiEA') {
                        broccolisoup.writeDebugMessage('S_CREST_INFO ' + gain.crests);
                    } else {
                        this.currentStamina = gain.current;
                    }
                }
                for (let goddess of gain.crests) {
                    if ('nibIK' !== 'nibIK') {
                        if (gain.gameId === this.gameId) {
                            this.mounted = ![];
                        }
                    } else {
                        if (goddess.enable) {
                            if ('TqvrV' !== 'TqvrV') {
                                if (gain.target !== this.gameId) {
                                    return;
                                }
                                this.inCombat = 1 === gain.status;
                            } else {
                                this.currentGlyphs.add(goddess.id);
                            }
                        } else {
                            this.currentGlyphs.delete(goddess.id);
                        }
                    }
                }
            },
            king = gain => {
                if ('wnFQv' !== 'dyoDQ') {
                    if (ride.config.debugGlyphs) {
                        broccolisoup.writeDebugMessage('S_CREST_APPLY ' + gain.id + ' status: ' + gain.enable);
                    }
                    if (gain.enable) {
                        if ('XTavW' !== 'XTavW') {
                            this.vehicleEx = gain.vehicle;
                        } else {
                            this.currentGlyphs.add(gain.id);
                        }
                    } else {
                        if ('cYrud' !== 'cYrud') {
                            if (ride.config.debugGlyphs) {
                                broccolisoup.writeDebugMessage('S_CREST_APPLY ' + gain.id + ' status: ' + gain.enable);
                            }
                            if (gain.enable) {
                                this.currentGlyphs.add(gain.id);
                            } else {
                                this.currentGlyphs.delete(gain.id);
                            }
                        } else {
                            this.currentGlyphs.delete(gain.id);
                        }
                    }
                } else {
                    if (goddess.active) {
                        this.polishing.add(goddess.id);
                    } else {
                        this.polishing.delete(goddess.id);
                    }
                }
            },
            towhand = gain => {
                if (gain.target === this.gameId) {
                    this.vehicleEx = gain.vehicle;
                }
            },
            crystalcue = gain => {
                if (gain.target === this.gameId) {
                    this.vehicleEx = null;
                }
            },
            shellofblueargon = gain => {
                if (gain.gameId === this.gameId) {
                    if ('eREww' !== 'mIqVD') {
                        this.mounted = !![];
                    } else {
                        this.currentGlyphs.add(goddess.id);
                    }
                }
            },
            twohandaxe = gain => {
                if ('oSlnC' === 'SRQyp') {
                    if (ride.config.debugTalents) {
                        broccolisoup.writeDebugMessage('S_LOAD_EP_INFO', gain.perks);
                    }
                    for (let giftcard of gain.perks) {
                        this.talents.set(giftcard.id, giftcard.level);
                    }
                } else {
                    if (gain.gameId === this.gameId) {
                        this.mounted = ![];
                    }
                }
            },
            ironcue = gain => {
                this.categories.set(gain.category, gain.enabled);
            },
            debuff = gain => {
                this.polishing.clear();
                this.polishingLevelEffects.clear();
                if (ride.config.debugPolishing) {
                    if ('EBWjO' === 'pcNNG') {
                        this.partyMembers.clear();
                        gain.members.forEach(crestevasionattack => {
                            if (!(crestevasionattack.gameId === this.gameId)) {
                                this.partyMembers.set(crestevasionattack.gameId, {
                                    'pid': crestevasionattack.playerId,
                                    'sid': crestevasionattack.serverId
                                });
                            }
                        });
                    } else {
                        broccolisoup.writeDebugMessage('S_RP_SKILL_POLISHING_LIST', gain.optionEffects);
                    }
                }
                for (let goddess of gain.optionEffects) {
                    if ('hvLOK' === 'hvLOK') {
                        if (goddess.active) {
                            this.polishing.add(goddess.id);
                        } else {
                            if ('CGgVh' === 'CGgVh') {
                                this.polishing.delete(goddess.id);
                            } else {
                                this.polishing.delete(goddess.id);
                            }
                        }
                    } else {
                        this.passives.clear();
                        for (let darkbead of gain.skills) {
                            let hotfix = Number(darkbead.id);
                            if (darkbead.active) {} else {
                                this.passives.add(hotfix);
                            }
                        }
                    }
                }
                for (let goddess of gain.levelEffects) {
                    this.polishingLevelEffects.set(goddess.group, goddess.id);
                }
            },
            merchant = gain => {
                if (!gain.successful) {
                    return;
                }
                for (let goddess of gain.perks) {
                    if (this.talents.has(goddess.id)) {
                        this.talents.delete(goddess.id);
                    }
                    this.talents.set(goddess.id, goddess.level);
                }
            },
            cityrecall = gain => {
                if ('RgCmY' === 'mfruY') {
                    this.categories.set(gain.category, gain.enabled);
                } else {
                    if (ride.config.debugTalents) {
                        if ('hBrzm' === 'hBrzm') {
                            broccolisoup.writeDebugMessage('S_LOAD_EP_INFO', gain.perks);
                        } else {
                            [...this.partyMembers.keys()].forEach(reversewithdraw => {
                                let seren = this.partyMembers.get(reversewithdraw);
                                if (seren.pid === gain.playerId && seren.sid === gain.serverId) {
                                    this.partyMembers.delete(reversewithdraw);
                                }
                            });
                        }
                    }
                    for (let goddess of gain.perks) {
                        if ('QnmcV' !== 'QnmcV') {
                            if (gain.target === this.gameId) {
                                this.vehicleEx = null;
                            }
                        } else {
                            this.talents.set(goddess.id, goddess.level);
                        }
                    }
                }
            },
            useitem = () => {
                this.talents.clear();
            };
        goddess.hook(...durion.getVersion('S_SKILL_LIST'), smile);
        goddess.hook(...durion.getVersion('S_SKILL_CATEGORY'), ironcue);
        goddess.hook(...durion.getVersion('S_LOGIN'), ride.hookNotFake, darkmatter);
        goddess.hook(...durion.getVersion('S_USER_STATUS'), charm);
        goddess.hook(...durion.getVersion('S_ITEMLIST'), {
            'order': -10000000000,
            'filter': {
                'fake': ![]
            }
        }, crestdivinelightning);
        goddess.hook(...durion.getVersion('S_PLAYER_STAT_UPDATE'), speedup);
        goddess.hook(...durion.getVersion('S_PLAYER_CHANGE_STAMINA'), middlebomb);
        goddess.hook(...durion.getVersion('S_PARTY_MEMBER_LIST'), {
            'order': -10,
            'filter': {
                'fake': ![]
            }
        }, combatitemsubtype);
        goddess.hook(...durion.getVersion('S_LEAVE_PARTY_MEMBER'), {
            'order': -10,
            'filter': {
                'fake': ![]
            }
        }, heavyboots);
        goddess.hook(...durion.getVersion('S_BAN_PARTY_MEMBER'), {
            'order': -10,
            'filter': {
                'fake': ![]
            }
        }, heavyboots);
        goddess.hook(...durion.getVersion('S_CREST_INFO'), fighter);
        goddess.hook(...durion.getVersion('S_CREST_APPLY'), king);
        goddess.hook(...durion.getVersion('S_MOUNT_VEHICLE_EX'), {
            'order': -10,
            'filter': {
                'fake': null
            }
        }, towhand);
        goddess.hook(...durion.getVersion('S_UNMOUNT_VEHICLE_EX'), {
            'order': -10,
            'filter': {
                'fake': null
            }
        }, crystalcue);
        goddess.hook(...durion.getVersion('S_MOUNT_VEHICLE'), {
            'order': -10,
            'filter': {
                'fake': null
            }
        }, shellofblueargon);
        goddess.hook(...durion.getVersion('S_UNMOUNT_VEHICLE'), {
            'order': -10,
            'filter': {
                'fake': null
            }
        }, twohandaxe);
        goddess.hook(...durion.getVersion('S_RP_SKILL_POLISHING_LIST'), debuff);
        goddess.hook(...durion.getVersion('S_LEARN_EP_PERK'), merchant);
        goddess.hook(...durion.getVersion('S_LOAD_EP_INFO'), cityrecall);
        goddess.hook('S_RETURN_TO_LOBBY', 'raw', useitem);
        goddess.hook('S_RESET_EP_PERK', 'raw', useitem);
        goddess.hook('S_LEAVE_PARTY', 'raw', {
            'order': -10,
            'filter': {
                'fake': ![]
            }
        }, crestoverhelm);
        goddess.hook(...durion.getVersion('S_LOAD_TOPO'), gain => {
            if ('aWMhl' !== 'BXwVW') {
                this.vehicleEx = null;
                this.mounted = ![];
                this.zone = gain.zone;
            } else {
                return ![];
            }
        });
    } ['isMe'](robebodycue) {
        return this.gameId === robebodycue || this.vehicleEx && this.vehicleEx === robebodycue;
    } ['myChar']() {
        return this.vehicleEx ? this.vehicleEx : this.gameId;
    } ['changeAspd'](sackcue, ridinguseable, extract = ![]) {
        switch (ridinguseable) {
            case 2:
                this.attackSpeedBonus = extract ? this.attackSpeedBonus - sackcue : this.attackSpeedBonus + sackcue;
                break;
            case 3:
                this.attackSpeedBonus = extract ? this.attackSpeedBonus - (Math.round(this.attackSpeed * sackcue) - this.attackSpeed) : this.attackSpeedBonus + (Math.round(this.attackSpeed * sackcue) - this.attackSpeed);
        }
        this.__recalculateAspd();
    } ['isPartyMember'](reset) {
        return this.partyMembers.has(reset);
    } ['isPolishingExist'](twister) {
        return this.polishing.has(twister);
    } ['isTalentExist'](plantcue) {
        return this.talents.has(plantcue);
    } ['getTalentLevel'](extractrecipe) {
        return this.talents.get(extractrecipe);
    } ['isPolishingEffectExist'](songkran) {
        return this.polishingLevelEffects.has(songkran);
    } ['getPolishingEffectByGroup'](crystallized) {
        return this.polishingLevelEffects.get(crystallized);
    } ['isCategoriesEnabled'](decomposition) {
        for (const priority of decomposition) {
            if ('EvuBT' === 'EvuBT') {
                if (this.categories.has(Number(priority)) && !this.categories.get(Number(priority))) {
                    if ('IeaSN' !== 'FvdmX') {
                        return ![];
                    } else {
                        let unionextractorkey = Number(priority.id);
                        if (priority.active) {} else {
                            this.passives.add(unionextractorkey);
                        }
                    }
                }
            } else {
                return this.talents.get(decomposition);
            }
        }
        return !![];
    } ['isGlyphExists'](promotion) {
        return this.currentGlyphs.has(Number(promotion));
    } ['isItemFromInventory'](pendant) {
        return this.items.has(pendant);
    } ['__recalculateAspd']() {
        this.aspd = (this.attackSpeed + this.attackSpeedBonus) / (this.job >= 8 ? 100 : this.attackSpeed);
        if (!this.stateReference.backup) {
            this.aspd = this.aspd / 1.07;
        }
    }
}
module.exports = k;