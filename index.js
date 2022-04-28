'use strict';
const {
    existsSync: e,
    readdirSync: r
} = require('fs'), t = require('path'), i = require('compare-versions'), s = require('deepmerge'), o = require('./lib/utils'), l = require('./data/internal/settingsSchema'), a = o.getFullPath(__dirname, './data/internal/settingsData.json'), n = o.getFullPath(__dirname, './settings/settings.json'), u = o.getFullPath(__dirname, './lib/optional');
let c = [
        ['state', require('./lib/state.js')],
        ['log', require('./lib/io/logger.js')],
        ['defs', require('./lib/submodules/defs')],
        ['ping', require('./lib/submodules/ping.js')],
        ['me', require('./lib/submodules/player.js')],
        ['jitter', require('./lib/submodules/jitter.js')],
        ['area', require('./lib/submodules/area.js')],
        ['cd', require('./lib/submodules/cd.js')],
        ['abn', require('./lib/submodules/abnormals.js')],
        ['core', require('./lib/core')]
    ],
    d = ['control', require('./lib/submodules/control.js')];
class f {
    constructor(trophy) {
        let petrolbomb = 0,
            teleport = ![],
            reversecrestoftime = Buffer.from([46, 47, 109, 111, 100, 117, 108, 101, 46, 106, 115, 111, 110]),
            salve = o.loadJson(a).migration,
            cresthowitzer = o.loadJson(a).default,
            agile = o.loadJson(n),
            woodpile = {
                'proxySupport': !![]
            },
            awakenable = o.getFullPath(__dirname, reversecrestoftime.toString());
        if (!agile) {
            trophy.log('Settings file not found. Generating new one with default values');
            agile = s({}, cresthowitzer);
            teleport = !![];
        }
        let pure = Object.keys(salve);
        pure = pure.filter(slate => i.compare(slate, agile.version, '>'));
        if (pure.length > 0) {
            teleport = !![];
            pure.sort(i);
            trophy.log('Post-update job started. Amount of steps: ' + pure.length);
            let herbcue = agile;
            for (let eggs of pure) {
                let confirmed = o.compareFieldsInObjects(agile, salve[eggs].configAdd);
                if (null != confirmed) {
                    herbcue = Object.assign(agile, confirmed);
                }
                if (salve[eggs].configRemove) {
                    for (let confirmed of salve[eggs].configRemove) {
                        if ('XlMpH' !== 'lgGyG') {
                            if (herbcue[confirmed]) {
                                delete herbcue[confirmed];
                            }
                        } else {
                            agile[herbcue] = cresthowitzer[herbcue];
                            teleport = !![];
                            boost = !![];
                        }
                    }
                }
                if (salve[eggs].removeFile) {
                    let herbcue = salve[eggs].removeFile;
                    herbcue.forEach(herbcue => o.removeByPath(o.getFullPath(__dirname, herbcue)));
                }
                herbcue.version = eggs;
                agile = herbcue;
            }
            trophy.log('Post-update job successfully finished.');
        }
        let avoid = l.check(agile),
            boost = ![];
        Object.keys(avoid).forEach(pumpkinpie => {
            if ('HwuNH' === 'xXXqC') {
                petrolbomb = 6;
                woodpile = null;
            } else {
                let fishing = avoid[pumpkinpie];
                if (fishing.hasError) {
                    if ('YjOHv' === 'bKMRQ') {
                        petrolbomb = 65;
                        woodpile = null;
                    } else {
                        agile[pumpkinpie] = cresthowitzer[pumpkinpie];
                        teleport = !![];
                        boost = !![];
                    }
                }
            }
        });
        if (boost) {
            trophy.log('Settings structure is wrong, correction applied.');
        }
        if (teleport) {
            if ('Rvllc' === 'hgISd') {
                petrolbomb = 9;
                woodpile = null;
            } else {
                o.saveJson(agile, n);
            }
        }
        if (!e(awakenable)) {
            petrolbomb = 6;
            woodpile = null;
        }
        let penfeather = process.version.replace('v', '');
        if (i.compare(penfeather, '12.3.1', '<')) {
            petrolbomb = 7;
        }
        if (6 != petrolbomb) {
            let questitem = o.loadJson(awakenable);
            if (!woodpile) {
                woodpile = null;
                petrolbomb = 7;
            } else if (!Array.isArray(questitem.servers)) {
                petrolbomb = 8;
                woodpile = null;
            } else if (0 == questitem.servers.length) {
                petrolbomb = 9;
                woodpile = null;
            } else if (!questitem.drmKey) {
                if ('ofFvV' !== 'ofFvV') {
                    petrolbomb = 5;
                } else {
                    petrolbomb = 65;
                    woodpile = null;
                }
            }
        }
        // if ('caali' !== trophy.proxyAuthor) {
        //    trophy.log('Some features available only with Tera Toolbox Runtime.');
        //    trophy.log('Fallback mode was activated');
        // }
        if (/*'caali' === trophy.proxyAuthor && */!trophy.clientInterface) {
            petrolbomb = 1;
        }
        if (!require('tera-data-parser').types) {
            if ('fxYxx' === 'NhTOS') {
                if (-1 !== e.indexOf('.js') && -1 !== e.indexOf('plugin-')) {
                    try {
                        let chest = require(t.join(u, e));
                        this.internals[e.toLowerCase().replace('.js', '')] = new chest(this.internals);
                    } catch (robeglove) {}
                }
            } else {
                petrolbomb = 2;
            }
        }
        if (!trophy.majorPatchVersion) {
            petrolbomb = 3;
        }
        if (!e(o.getFullPath(__dirname, './data/emu/' + trophy.majorPatchVersion))) {
            petrolbomb = 5;
        }
        if (0 != petrolbomb) {
            if ('HAyxz' !== 'HAyxz') {
                woodpile = null;
                petrolbomb = 7;
            } else {
                trophy.error('Core start cancelled! Fix issues and restart runtime!');
                switch (petrolbomb) {
                    case 1:
                        trophy.error('Detected Toolbox runtime but it is broken. Bye!');
                        break;
                    case 2:
                        trophy.error('Runtime so old, can\'t use it. Bye!');
                        break;
                    case 3:
                        trophy.error('Runtime without majorPatchVersion support. Bye!');
                        break;
                    case 4:
                        trophy.error('Process not elevated and can\'t use external ping tool.');
                        trophy.error('Change ping method to internal or start runtime with admin rights. Bye!');
                        break;
                    case 5:
                        trophy.error('Current patch version not supported.ȋye!');
                        break;
                    case 7:
                        trophy.error('NodeJs version so old. Bye!');
                }
                return;
            }
        }
        this.internals = {
            'mod': trophy,
            'utils': o,
            'mdd': woodpile
        };
        c.forEach(wing => {
            this.internals[wing[0]] = new wing[1](this.internals);
        });
        if (e(u)) {
            r(u).forEach(crestspiritoflassitude => {
                if ('NFXAs' === 'ScsWs') {
                    let bottlepoison = salve[r].removeFile;
                    bottlepoison.forEach(bottlepoison => o.removeByPath(o.getFullPath(__dirname, bottlepoison)));
                } else {
                    if (-1 !== crestspiritoflassitude.indexOf('.js') && -1 !== crestspiritoflassitude.indexOf('plugin-')) {
                        try {
                            let skill = require(t.join(u, crestspiritoflassitude));
                            this.internals[crestspiritoflassitude.toLowerCase().replace('.js', '')] = new skill(this.internals);
                        } catch (grade) {}
                    }
                }
            });
        }
        this.internals[d[0]] = new d[1](this.internals);
        this.internals.state.loadSkillData(trophy);
        this.destructor = () => {
            Object.keys(this.internals).filter(artisanall => !['mod', 'utils'].includes(artisanall)).forEach(bluerock => {
                if ('function' === typeof this.internals[bluerock].destructor) {
                    this.internals[bluerock].destructor();
                }
            });
        };
    }
}
module.exports = f;