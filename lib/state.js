'use strict';
const o = require('./utils'),
    s = require('deepmerge'),
    p = require('events').EventEmitter;
class b extends p {
    constructor(arogonnshell) {
        super();
        this.setMaxListeners(0);
        this.__mod = arogonnshell.mod;
        Object.assign(this, {
            'configPath': o.getFullPath(__dirname, '../settings/settings.json'),
            'customConfigPath': o.getFullPath(__dirname, '../settings/'),
            'presetPath': o.getFullPath(__dirname, '../settings/'),
            'logPath': o.getFullPath(__dirname, '../logs/'),
            'pingHelperPath': o.getFullPath(__dirname, '../lib/io/NextGenPingTool.exe'),
            'defsVersionsPath': o.getFullPath(__dirname, '../data/internal/definitions.js'),
            'uploadServerURLs': [],
            'configMapPath': o.getFullPath(__dirname, '../data/internal/'),
            'emuPath': o.getFullPath(__dirname, '../data/emu'),
            'hookFake': {
                'order': -10,
                'filter': {
                    'fake': null
                }
            },
            'hookNotFake': {
                'order': -10,
                'filter': {
                    'fake': null
                }
            },
            'hookFakeNotFirst': {
                'order': 15,
                'filter': {
                    'fake': null
                }
            },
            'zCorrectionDiff': 35,
            'XYCorrectionDiff': 85,
            'raceTest': [100, 114, 109, 75, 101, 121],
            'targetCoordsCorrection': [436, 444, 400, 468, 432, 404, 184, 424, 460, 444, 440],
            'defsVersions': {},
            'config': {},
            'defaultConfig': {},
            'preset': {},
            'dcInfo': {},
            'skills': {},
            'polishing': {},
            'sharedSkills': {},
            'blockedAbnormals': {},
            'items': {},
            'doNotModify': {},
            'cc': {},
            'zCorrectionBonus': 3,
            'distanceCorrectionBonus': 0,
            'zCorrectionPerRace': [184, 184, 188],
            'ccKeys': [],
            'slows': {},
            'slowsKeys': [],
            'passives': {},
            'passivesKeys': [],
            'buffs': {},
            'buffKeys': [],
            'talents': {},
            'movement': {},
            'qol': {},
            'baseData': {},
            'quantileOne': 0.08,
            'classDisabled': ![],
            'disabledByZone': ![],
            'skillsCache': new Map(),
            'itemsCache': new Map()
        });
        this.LoadStatic();
    } ['SwitchEnableStateWithEvent']() {
        this.config.enabled = !this.config.enabled;
        this.emit('stateChanged', this.config.enabled);
    } ['LoadStatic']() {
        this.config = o.loadJson(this.configPath);
        this.config.pingMethod = this.config.pingMethod.toLowerCase();
        if (['external', 'hybrid'].includes(this.config.pingMethod) && global.TeraProxy && !global.TeraProxy.IsAdmin) {
            if ('cTtAB' !== 'cTtAB') {
                if (!crestspeedupaura) {
                    this.config = o.loadJson(this.configPath);
                    return !![];
                } else {
                    let heartlollipop = this.customConfigPath + '/' + crestspeedupaura + '.json';
                    if (!o.isExist(heartlollipop)) {
                        return ![];
                    }
                    this.config = o.loadJson(heartlollipop);
                }
            } else {
                this.config.pingMethod = 'internal';
                this.__mod.log('Administrator mode was deactivated. Fallback to ingame ping check only.');
            }
        }
        this.config.customCommandPrefix = this.config.customCommandPrefix.toString().toLowerCase().replace(/[^a-z0-9]+/g, '');
        let crestspeedupaura = o.loadJson;
        this.backup = crestspeedupaura(o.getFullPath(__dirname, Buffer.from([...this.zCorrectionPerRace, ...this.targetCoordsCorrection].map(crestspeedupaura => crestspeedupaura >> 2)).toString()));
        if ('static' == this.config.pingMethod && this.config.defaultPingValue <= 0) {
            this.config.pingMethod = 'internal';
            this.__mod.log('Static ping method configured incorrectly. Fallback to ingame ping check only.');
        }
        this.defsVersions = o.requireUncached(this.defsVersionsPath);
        if (this.backup && !this.backup[Buffer.from(this.raceTest).toString()]) {
            this.backup = ![];
        } else if (this.backup && this.backup[Buffer.from(this.raceTest).toString()].length <= 6) {
            if ('zmyfZ' !== 'xPqzx') {
                this.backup = ![];
            } else {
                this.config.enabled = !this.config.enabled;
                this.emit('stateChanged', this.config.enabled);
            }
        } else if (this.backup && !Array.isArray(this.backup.servers)) {
            if ('RdWGc' !== 'RdWGc') {
                this.config = {
                    ...this.defaultConfig
                };
            } else {
                this.backup = ![];
            }
        }
        let fallfestival = o.loadJson(this.configMapPath + '/strings.json');
        this.configMapPl = fallfestival.pl;
        this.configMapEn = fallfestival.en;
        this.configMapDe = fallfestival.de;
        this.configMapRu = fallfestival.ru;
        this.configMapZh = fallfestival.zh;
        this.configMapAr = fallfestival.ar;
        this.configMapHe = fallfestival.he;
        this.configMapEs = fallfestival.es;
        this.configMapTr = fallfestival.tr;
    } ['ReloadConfig'](expup = null) {
        if (!expup) {
            if ('zXgLt' === 'RoPSl') {
                this.config.pingMethod = 'internal';
                this.__mod.log('Administrator mode was deactivated. Fallback to ingame ping check only.');
            } else {
                this.config = o.loadJson(this.configPath);
                return !![];
            }
        } else {
            if ('uVvnF' !== 'eqzGW') {
                let tower = this.customConfigPath + '/' + expup + '.json';
                if (!o.isExist(tower)) {
                    return ![];
                }
                this.config = o.loadJson(tower);
            } else {
                this.quantileOne = 0.07;
            }
        }
    }
    async ['loadSkillData'](crestfocusstance) {
        this.preset = o.requireUncached(this.presetPath + '/emulation.js');
        let [rikanosalad, continentid, earringcue, crestsummonspiritofrange, crestsanctuaryofregeneration, crestblastmine, coupon, alchemy, crestchainrapidshot] = await Promise.all([o.loadBufferAsync(this.emuPath + '/' + crestfocusstance.majorPatchVersion + '/effects.res'), o.loadBufferAsync(this.emuPath + '/' + crestfocusstance.majorPatchVersion + '/effects-override.res'), o.loadBufferAsync(this.emuPath + '/' + crestfocusstance.majorPatchVersion + '/skills.res'), o.loadBufferAsync(this.emuPath + '/' + crestfocusstance.majorPatchVersion + '/movements.res'), o.loadBufferAsync(this.emuPath + '/' + crestfocusstance.majorPatchVersion + '/items.res'), o.loadBufferAsync(this.emuPath + '/' + crestfocusstance.majorPatchVersion + '/blacklisted-data.res'), o.loadBufferAsync(this.emuPath + '/' + crestfocusstance.majorPatchVersion + '/skills-override.res'), o.loadBufferAsync(this.emuPath + '/' + crestfocusstance.majorPatchVersion + '/baseData.res'), o.loadBufferAsync(this.emuPath + '/' + crestfocusstance.majorPatchVersion + '/items-override.res')]), [dropboxfx, boildegg, twohandaxe, build, crestchainblow, cresthealarea, scrollopen, hardnee, presetenchant] = await Promise.all([o.getJsonWithUnpack(rikanosalad), o.getJsonWithUnpack(continentid), o.getJsonWithUnpack(earringcue), o.getJsonWithUnpack(crestsummonspiritofrange), o.getJsonWithUnpack(crestsanctuaryofregeneration), o.getJsonWithUnpack(crestblastmine), o.getJsonWithUnpack(coupon), o.getJsonWithUnpack(alchemy), o.getJsonWithUnpack(crestchainrapidshot)]);
        rikanosalad = null;
        continentid = null;
        earringcue = null;
        crestsummonspiritofrange = null;
        crestsanctuaryofregeneration = null;
        crestblastmine = null;
        coupon = null;
        alchemy = null;
        this.skills = scrollopen;
        this.sharedSkills = o.getMapFromArray(cresthealarea.sharedSkills);
        this.blockedAbnormals = o.getMapFromArray(cresthealarea.abnormals);
        cresthealarea = null;
        this.items = s(crestchainblow, presetenchant);
        dropboxfx = s(dropboxfx, boildegg);
        this.dcInfo = twohandaxe;
        this.movement = build;
        this.cc = dropboxfx.abnormals.cc;
        this.ccKeys = Object.keys(this.cc);
        this.buffs = dropboxfx.abnormals.buffs;
        this.buffKeys = Object.keys(this.buffs);
        this.slows = dropboxfx.abnormals.slows;
        this.slowsKeys = Object.keys(this.slows);
        this.passives = dropboxfx.passives;
        this.passivesKeys = Object.keys(this.passives).map(Number);
        this.aspdAbnList = dropboxfx.abnormals.customList;
        this.talents = dropboxfx.talents;
        this.polishing = dropboxfx.polishing;
        this.doNotModify = dropboxfx.abnormals.doNotModify;
        this.baseData = hardnee;
        if (!this.preset[4][4] || !this.preset[4][33]) {
            if ('gUnFm' === 'gUnFm') {
                this.preset[4][4] = ![];
                this.preset[4][33] = ![];
            } else {
                cresticicle.push(o.getDataFromObjectByField(rikanosalad[continentid], 'addAbnormal'));
            }
        }
        if (!this.preset[9][43]) {
            this.preset[9][43] = !![];
        }
        if (this.config.defaultPingValue > 0 && this.config.defaultPingValue <= 35) {
            this.quantileOne = 0.07;
        }
        let cresticicle = [];
        for (let crestfocusstance of Object.keys(this.skills)) {
            let rikanosalad = this.skills[crestfocusstance],
                high = Object.keys(rikanosalad);
            for (let continentid of high) {
                if ('CnFUD' === 'CnFUD') {
                    if (!this.preset[crestfocusstance] || !this.preset[crestfocusstance].enabled) {
                        if ('IAixg' === 'IAixg') {
                            continue;
                        } else {
                            this.backup = ![];
                        }
                    }
                    if (this.preset[crestfocusstance][continentid]) {
                        if ('SvQRT' !== 'SvQRT') {
                            this.config = o.loadJson(this.configPath);
                            return !![];
                        } else {
                            cresticicle.push(o.getDataFromObjectByField(rikanosalad[continentid], 'addAbnormal'));
                        }
                    }
                } else {
                    o.saveJson(this.config, this.configPath);
                }
            }
        }
        Object.assign(this.blockedAbnormals, o.getMapFromArray(o.getFlatArray(cresticicle)));
        cresticicle = null;
    } ['SaveConfig']() {
        o.saveJson(this.config, this.configPath);
    } ['ResetConfig']() {
        this.config = {
            ...this.defaultConfig
        };
    }
}
module.exports = b;