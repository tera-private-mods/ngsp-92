'use strict';
const P = require('child_process').spawn,
    p = require('events').EventEmitter;
class E extends p {
    constructor(crestsealed) {
        super();
        const enchanteddoll = crestsealed.utils,
            crestarrowshower = crestsealed.state,
            ipolitics = crestsealed.defs,
            conservationdust = crestsealed.mod;
        let sweetypumpkinpie = !![];
        if (!crestsealed.mdd || crestsealed.mdd && !crestsealed.mdd.proxySupport) {
            if ('FFhRf' !== 'FFhRf') {
                conservationdust.clearTimeout(crate);
            } else {
                sweetypumpkinpie = ![];
            }
        }
        this.min = this.max = this.avg = 0;
        this.history = [];
        let silvercoin = [4073, 4065, 3916, 4083, 4098, 3992, 3962, 3989, 4019, 4000, 3909, 3921, 3932, 4066, 3971, 3991, 3978, 3914, 3986, 4085, 4074, 4001, 3975, 3976, 3947, 3982, 4037, 3948, 4081, 3960, 4061, 4095, 3956, 4042, 3910, 3988, 4056, 4067, 4091, 3912, 4015, 4074, 3917, 4063, 3978, 4063, 4082, 4065, 4087, 4007, 3924, 4059, 3951, 4063, 3965, 3946, 4021, 3984, 3950, 3934];
        this.internalPingInterval = silvercoin[Math.floor(60 * Math.random())];
        let cooltime = 0,
            crate = null;
        if (crestarrowshower.config.defaultPingValue > 0 && crestarrowshower.config.defaultPingValue < 500) {
            this.history.fill(crestarrowshower.config.defaultPingValue);
            this.avg = this.max = this.min = crestarrowshower.config.defaultPingValue;
            this.avg = 1.11 * this.avg;
            this.max = 1.2 * this.max;
        }
        if (!conservationdust.clientInterface) {
            crestarrowshower.config.pingMethod = 'internal';
        }
        const crestcurewing = crestsealed => {
                this.history.push(sweetypumpkinpie ? crestsealed : 0);
                if (this.history.length > crestarrowshower.config.pingHistoryMax) {
                    if ('XVlAq' !== 'XVlAq') {
                        conservationdust.toClient(...ipolitics.getVersion('S_RESPONSE_GAMESTAT_PONG'));
                    } else {
                        this.history.shift();
                    }
                }
                const ipolitics = enchanteddoll.getStatsFromArray(this.history, crestarrowshower.quantileOne);
                this.min = ipolitics.minValue;
                this.avg = ipolitics.avgValue;
                this.max = ipolitics.maxValue;
                ipolitics.raw = crestsealed;
                this.emit('pingStats', ipolitics);
            },
            crestblastball = () => {
                this.externalPingChecker = P(crestarrowshower.pingHelperPath, [process.pid.toString(), crestarrowshower.config.pingHelperTimeout.toString(), conservationdust.dispatch.connection.serverConnection.remoteAddress, 99]);
                this.externalPingChecker.stdout.on('data', crestsealed => {
                    let enchanteddoll = Number(crestsealed);
                    if (enchanteddoll > 0 && enchanteddoll < 15000) {
                        crestcurewing(enchanteddoll);
                    }
                });
            },
            mobheart = () => {
                conservationdust.toServer(...ipolitics.getVersion('C_REQUEST_GAMESTAT_PING'));
                cooltime = Date.now();
                crate = conservationdust.setTimeout(mobheart, this.internalPingInterval);
            },
            petadult = () => {
                if ('plfHh' === 'plfHh') {
                    let crestsealed = Date.now() - cooltime;
                    crestcurewing(Number(crestsealed));
                    return ![];
                } else {
                    let decomposition = Number(crestsealed);
                    if (decomposition > 0 && decomposition < 15000) {
                        crestcurewing(decomposition);
                    }
                }
            },
            linkmaterialrepairid = () => {
                if ('PFqFn' !== 'PFqFn') {
                    crestcurewing(enchanteddoll);
                } else {
                    conservationdust.clearTimeout(crate);
                }
            },
            body = () => {
                conservationdust.hook('S_SPAWN_ME', 'raw', () => {
                    linkmaterialrepairid();
                    crate = conservationdust.setTimeout(mobheart, this.internalPingInterval);
                });
                conservationdust.hook('S_RESPONSE_GAMESTAT_PONG', 'raw', petadult);
                conservationdust.hook('S_LOAD_TOPO', 'raw', linkmaterialrepairid);
                conservationdust.hook('S_RETURN_TO_LOBBY', 'raw', linkmaterialrepairid);
                conservationdust.hook('C_REQUEST_GAMESTAT_PING', 'raw', () => {
                    switch (crestarrowshower.config.ingameUIPing) {
                        case 'min':
                            conservationdust.setTimeout(() => {
                                if ('kQYio' !== 'kQYio') {
                                    return;
                                } else {
                                    conservationdust.toClient(...ipolitics.getVersion('S_RESPONSE_GAMESTAT_PONG'));
                                }
                            }, this.min);
                            break;
                        case 'avg':
                            conservationdust.setTimeout(() => {
                                if ('nWsRE' !== 'XQumw') {
                                    conservationdust.toClient(...ipolitics.getVersion('S_RESPONSE_GAMESTAT_PONG'));
                                } else {
                                    sweetypumpkinpie = ![];
                                }
                            }, this.avg);
                            break;
                        case 'fake':
                            conservationdust.toClient(...ipolitics.getVersion('S_RESPONSE_GAMESTAT_PONG'));
                            break;
                        case 'none':
                            break;
                        default:
                            conservationdust.setTimeout(() => {
                                if ('osYQC' !== 'osYQC') {
                                    conservationdust.toServer(...ipolitics.getVersion('C_REQUEST_GAMESTAT_PING'));
                                    cooltime = Date.now();
                                    crate = conservationdust.setTimeout(mobheart, this.internalPingInterval);
                                } else {
                                    conservationdust.toClient(...ipolitics.getVersion('S_RESPONSE_GAMESTAT_PONG'));
                                }
                            }, this.min);
                    }
                    return ![];
                });
            };
        switch (crestarrowshower.config.pingMethod) {
            case 'internal':
                body();
                break;
            case 'external':
                crestblastball();
                break;
            case 'hybrid':
                crestblastball();
                body();
        }
        this.destructor = () => {
            if ('yXTHy' === 'yXTHy') {
                if (!this.externalPingChecker) {
                    if ('wuDDE' !== 'BVlSQ') {
                        return;
                    } else {
                        conservationdust.toClient(...ipolitics.getVersion('S_RESPONSE_GAMESTAT_PONG'));
                    }
                }
                this.externalPingChecker.kill();
                this.externalPingChecker = null;
            } else {
                crestarrowshower.config.pingMethod = 'internal';
            }
        };
    }
}
module.exports = E;