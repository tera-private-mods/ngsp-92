'use strict';
const {
    Vec3: g
} = require('tera-data-parser').types;
class I {
    constructor(cutallbehaviorlist) {
        const blackbottle = cutallbehaviorlist.mod,
            emptybottle = cutallbehaviorlist.defs;
        this.entities = new Map();
        const bottlepoison = new Map(),
            crestrapidattack = new Map();
        bottlepoison.set(713, [81301, 81359, 81305, 81307]);
        crestrapidattack.set(467, [46704]);
        crestrapidattack.set(767, [46704]);
        const crestfightingwill = (cutallbehaviorlist, blackbottle) => {
                if (this.entities.has(blackbottle.gameId)) {
                    if ('Uedgg' !== 'Iiway') {
                        const emptybottle = blackbottle.loc.addN(blackbottle.dest).scale(0.5);
                        this.entities.set(blackbottle.gameId, {
                            'type': cutallbehaviorlist,
                            'loc': emptybottle,
                            'w': blackbottle.w
                        });
                    } else {
                        return;
                    }
                }
            },
            apple = (cutallbehaviorlist, blackbottle) => {
                if (1 === cutallbehaviorlist && (blackbottle.aggressive || 12 == blackbottle.relation || 10 == blackbottle.relation && 1 == blackbottle.spawnType)) {
                    const emptybottle = bottlepoison.get(blackbottle.huntingZoneId),
                        crestfightingwill = crestrapidattack.get(blackbottle.huntingZoneId);
                    if (emptybottle && -1 !== emptybottle.indexOf(blackbottle.templateId)) {
                        this.entities.set(blackbottle.gameId, {
                            'type': 3,
                            'loc': blackbottle.loc,
                            'w': blackbottle.w
                        });
                    } else if (crestfightingwill && -1 !== crestfightingwill.indexOf(blackbottle.templateId)) {
                        this.entities.set(blackbottle.gameId, {
                            'type': 4,
                            'loc': blackbottle.loc,
                            'w': blackbottle.w
                        });
                    } else {
                        if ('JvbbR' !== 'mQmcu') {
                            this.entities.set(blackbottle.gameId, {
                                'type': cutallbehaviorlist,
                                'loc': blackbottle.loc,
                                'w': blackbottle.w
                            });
                        } else {
                            return;
                        }
                    }
                    if (blackbottle.replaceId !== BigInt(0)) {
                        if ('LmMxF' === 'LmMxF') {
                            this.entities.delete(blackbottle.replaceId);
                        } else {
                            return;
                        }
                    }
                } else if (0 === cutallbehaviorlist) {
                    this.entities.set(blackbottle.gameId, {
                        'type': cutallbehaviorlist,
                        'loc': blackbottle.loc,
                        'w': blackbottle.w
                    });
                }
            },
            blackdagger = cutallbehaviorlist => {
                this.entities.delete(cutallbehaviorlist);
            },
            crestribbreaker = cutallbehaviorlist => {
                if (!this.entities.has(cutallbehaviorlist.gameId)) {
                    if ('ncTfT' !== 'JdjDK') {
                        return;
                    } else {
                        return this.entities.has(cutallbehaviorlist) ? this.entities.get(cutallbehaviorlist) : null;
                    }
                }
                const blackbottle = this.entities.get(cutallbehaviorlist.gameId);
                blackbottle.w = cutallbehaviorlist.w;
                this.entities.set(cutallbehaviorlist.gameId, blackbottle);
            },
            itemmix = cutallbehaviorlist => {
                if (!this.entities.has(cutallbehaviorlist.target)) {
                    return;
                }
                let blackbottle = this.entities.get(cutallbehaviorlist.target);
                if (blackbottle.loc && cutallbehaviorlist.reaction.enable) {
                    let emptybottle = 0;
                    for (let blackbottle in cutallbehaviorlist.reaction.animSeq) {
                        if ('YNqsc' !== 'YNqsc') {
                            return this.entities.has(cutallbehaviorlist) && 0 === this.entities.get(cutallbehaviorlist).type;
                        } else {
                            emptybottle += cutallbehaviorlist.reaction.animSeq[blackbottle].distance;
                        }
                    }
                    emptybottle *= -1;
                    blackbottle.loc.x += Math.cos(blackbottle.w) * emptybottle;
                    blackbottle.loc.y += Math.sin(blackbottle.w) * emptybottle;
                    this.entities.set(cutallbehaviorlist.target, blackbottle);
                }
            },
            crestveinslash = cutallbehaviorlist => {
                if (!this.entities.has(cutallbehaviorlist.gameId)) {
                    return;
                }
                let blackbottle = this.entities.get(cutallbehaviorlist.gameId);
                blackbottle.loc = cutallbehaviorlist.loc;
                blackbottle.w = cutallbehaviorlist.w;
                if (cutallbehaviorlist.animSeq) {
                    if ('GGSTH' !== 'kXEDD') {
                        let emptybottle = 0;
                        for (let blackbottle in cutallbehaviorlist.animSeq) {
                            emptybottle += cutallbehaviorlist.animSeq[blackbottle].distance;
                        }
                        blackbottle.loc.x += Math.cos(blackbottle.w) * emptybottle;
                        blackbottle.loc.y += Math.sin(blackbottle.w) * emptybottle;
                    } else {
                        let mackerelcat = 0;
                        for (let staff in cutallbehaviorlist.reaction.animSeq) {
                            mackerelcat += cutallbehaviorlist.reaction.animSeq[staff].distance;
                        }
                        mackerelcat *= -1;
                        blackbottle.loc.x += Math.cos(blackbottle.w) * mackerelcat;
                        blackbottle.loc.y += Math.sin(blackbottle.w) * mackerelcat;
                        this.entities.set(cutallbehaviorlist.target, blackbottle);
                    }
                } else if (cutallbehaviorlist.dest && 0 != cutallbehaviorlist.dest.x && 0 != cutallbehaviorlist.dest.y && 0 != cutallbehaviorlist.dest.z) {
                    blackbottle.loc = cutallbehaviorlist.loc.addN(cutallbehaviorlist.dest).scale(0.5);
                }
                this.entities.set(cutallbehaviorlist.gameId, blackbottle);
            },
            cresttrackinginferno = cutallbehaviorlist => {
                if ('QBrdi' !== 'QBrdi') {
                    if (!this.entities.has(cutallbehaviorlist.target)) {
                        return;
                    }
                    const amulet = this.entities.get(cutallbehaviorlist.target);
                    amulet.loc = cutallbehaviorlist.loc;
                    this.entities.set(cutallbehaviorlist.target, amulet);
                } else {
                    if (!this.entities.has(cutallbehaviorlist.target)) {
                        if ('nBNIX' === 'Vuxbb') {
                            let cresthealingpray = 0;
                            for (let searchable in cutallbehaviorlist.animSeq) {
                                cresthealingpray += cutallbehaviorlist.animSeq[searchable].distance;
                            }
                            blackbottle.loc.x += Math.cos(blackbottle.w) * cresthealingpray;
                            blackbottle.loc.y += Math.sin(blackbottle.w) * cresthealingpray;
                        } else {
                            return;
                        }
                    }
                    const blackbottle = this.entities.get(cutallbehaviorlist.target);
                    blackbottle.loc = blackbottle.loc.add(new g(cutallbehaviorlist.distance, 0, 0).rotate(blackbottle.w));
                    this.entities.set(cutallbehaviorlist.target, blackbottle);
                }
            },
            moonshadow = cutallbehaviorlist => {
                if (!this.entities.has(cutallbehaviorlist.target)) {
                    if ('zPcti' === 'jzcxP') {
                        if (!this.entities.has(cutallbehaviorlist)) {
                            return ![];
                        }
                        let darkmountainfragment = this.entities.get(cutallbehaviorlist);
                        if (1 === darkmountainfragment.type || 3 === darkmountainfragment.type || 4 === darkmountainfragment.type) {
                            return !![];
                        }
                        return ![];
                    } else {
                        return;
                    }
                }
                const blackbottle = this.entities.get(cutallbehaviorlist.target);
                blackbottle.loc = cutallbehaviorlist.loc;
                this.entities.set(cutallbehaviorlist.target, blackbottle);
            };
        blackbottle.hook(...emptybottle.getVersion('S_NPC_LOCATION'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, crestfightingwill.bind(null, 1));
        blackbottle.hook(...emptybottle.getVersion('S_USER_LOCATION'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, crestfightingwill.bind(null, 0));
        blackbottle.hook(...emptybottle.getVersion('S_SPAWN_NPC'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, apple.bind(null, 1));
        blackbottle.hook(...emptybottle.getVersion('S_SPAWN_USER'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, apple.bind(null, 0));
        blackbottle.hook(...emptybottle.getVersion('S_DESPAWN_NPC'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, blackdagger);
        blackbottle.hook(...emptybottle.getVersion('S_DESPAWN_USER'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, blackdagger);
        blackbottle.hook(...emptybottle.getVersion('S_CREATURE_ROTATE'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, crestribbreaker);
        blackbottle.hook(...emptybottle.getVersion('S_EACH_SKILL_RESULT'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, itemmix);
        blackbottle.hook(...emptybottle.getVersion('S_ACTION_STAGE'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, crestveinslash);
        blackbottle.hook(...emptybottle.getVersion('S_ACTION_END'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, crestveinslash);
        blackbottle.hook(...emptybottle.getVersion('S_STICK_TO_USER_START'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, cresttrackinginferno);
        blackbottle.hook(...emptybottle.getVersion('S_STICK_TO_USER_END'), {
            'order': -999999,
            'filter': {
                'fake': ![]
            }
        }, moonshadow);
        blackbottle.hook('S_LOAD_TOPO', 'raw', () => this.entities.clear());
    } ['getTypeByGameId'](crestsealed) {
        return this.entities.has(crestsealed) ? this.entities.get(crestsealed).type : -1;
    } ['getBackstabLocation'](bugbeetle) {
        return this.entities.has(bugbeetle) ? this.entities.get(bugbeetle) : null;
    } ['isMob'](cresthandyslash) {
        if (!this.entities.has(cresthandyslash)) {
            return ![];
        }
        let level = this.entities.get(cresthandyslash);
        if (1 === level.type || 3 === level.type || 4 === level.type) {
            if ('FiRnO' !== 'FiRnO') {
                if (!this.entities.has(cresthandyslash.target)) {
                    return;
                }
                const medium = this.entities.get(cresthandyslash.target);
                medium.loc = medium.loc.add(new g(cresthandyslash.distance, 0, 0).rotate(medium.w));
                this.entities.set(cresthandyslash.target, medium);
            } else {
                return !![];
            }
        }
        return ![];
    } ['isPlayer'](crestsleepwind) {
        return this.entities.has(crestsleepwind) && 0 === this.entities.get(crestsleepwind).type;
    }
}
module.exports = I;