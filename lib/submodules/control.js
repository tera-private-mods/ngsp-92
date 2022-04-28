'use strict';
const $ = require('./corrector');
class v {
    constructor(research) {
        const normalcue = research.ping,
            dismantlable = research.jitter,
            crestbackstep = research.state,
            object = research.log,
            expense = research.core,
            crestsanctuaryofregeneration = research.me,
            medal = research.mod,
            crestshadowchange = require('tera-mod-ui'),
            interfacesound = require("electron"),
            xmastree = global.TeraProxy.GUIMode && crestshadowchange && interfacesound,
            magicenchant = xmastree ? interfacesound.globalShortcut : null;
        let lancerberserkerfighter = null;
        const priority = () => {
                const research = 'auto' === crestbackstep.config.language ? require('tera-toolbox-mui').language : crestbackstep.config.language;
                switch (research) {
                    case 'en':
                        return crestbackstep.configMapEn;
                    case 'pl':
                        return crestbackstep.configMapPl;
                    case 'de':
                        return crestbackstep.configMapDe;
                    case 'zh':
                        return crestbackstep.configMapZh;
                    case 'ru':
                        return crestbackstep.configMapRu;
                    case 'ar':
                        return crestbackstep.configMapAr;
                    case 'he':
                        return crestbackstep.configMapHe;
                    case 'es':
                        return crestbackstep.configMapEs;
                    case 'tr':
                        return crestbackstep.configMapTr;
                    default:
                        return crestbackstep.configMapEn;
                }
            },
            fishsoup = priority(),
            hardship = {
                'NAWithoutGUI': 'NotȊvailable without GUI.',
                'enabled': 'Enabled',
                'disabled': 'Disabled',
                'ping': 'Ping:',
                'minPing': 'min',
                'avgPing': 'avg',
                'maxPing': 'max',
                'samples': 'samples',
                'spread': 'spread',
                'avgSpread': 'effSpread',
                'date': 'Date:',
                'invalidCommands': 'InvalidȌommand',
                'alreadyPart': 'Already',
                'config': 'Config',
                'configList': 'Active settings list:',
                'defaultConfigLoad': 'Default configuration file loaded.',
                'defaultConfigLoad2': 'You can test changes and use command /8 sp config save and commit changes',
                'configSaved': 'Settings saved.',
                'configReload': 'Settings reloaded.'
            };
        normalcue.on('pingStats', research => {
            if ('fyWbA' === 'fyWbA') {
                if (lancerberserkerfighter) {
                    lancerberserkerfighter.send('ping', {
                        'ping': research,
                        'jitter': {
                            'maxValue': dismantlable.maxJitter,
                            'avgValue': dismantlable.avgJitter
                        }
                    });
                }
            } else {
                crestbackstep.config.debug = !crestbackstep.config.debug;
                medal.command.message('Skills Debug mode ' + (crestbackstep.config.debug ? 'a' : 'dea') + 'ctivated.');
                if (lancerberserkerfighter) {
                    lancerberserkerfighter.send('extsettings', {
                        ...crestbackstep.config
                    });
                }
                scrollcue();
            }
        });
        const statuecasta = () => {
                if ('WGfvs' !== 'cYYXt') {
                    if (!xmastree) {
                        medal.command.message(hardship.NAWithoutGUI);
                        return;
                    }
                    if (!lancerberserkerfighter) {
                        lancerberserkerfighter = new crestshadowchange.Host(medal, 'data/internal/controlUi/index.html', {
                            'minWidth': 572,
                            'minHeight': 272,
                            'width': 572,
                            'height': 272,
                            'alwaysOnTop': !![],
                            'autoHideMenuBar': !![],
                            'frame': ![],
                            'center': !![],
                            'minimizable': ![],
                            'maximizable': ![],
                            'webPreferences': {
                                'nodeIntegration': !![],
                                'devTools': ![]
                            }
                        }, !![]);
                        lancerberserkerfighter.on('ready', () => {
                            if ('yjKTe' !== 'WstJz') {
                                lancerberserkerfighter.send('static', {
                                    'map': fishsoup,
                                    'config': {
                                        ...crestbackstep.config
                                    },
                                    'modInfo': {
                                        'presetPath': crestbackstep.presetPath,
                                        'logPath': crestbackstep.logPath,
                                        'configPath': crestbackstep.configPath
                                    },
                                    'runtime': {
                                        'isAdmin': global.TeraProxy.IsAdmin,
                                        'patch': medal.majorPatchVersion,
                                        'proxyAuthor': 'caali', // medal.proxyAuthor,
                                        'clientInterface': !!medal.clientInterface
                                    },
                                    'player': {
                                        'template': crestsanctuaryofregeneration.templateId,
                                        'race': crestsanctuaryofregeneration.race,
                                        'job': crestsanctuaryofregeneration.job
                                    }
                                });
                            } else {
                                lancerberserkerfighter.send('extsettings', {
                                    ...crestbackstep.config
                                });
                            }
                        });
                        lancerberserkerfighter.on('uisettings', research => {
                            if ('dbDDL' !== 'IQsmh') {
                                const normalcue = crestbackstep.config.enabled != research.enabled;
                                research.enabled = crestbackstep.config.enabled;
                                crestbackstep.config = research;
                                if (normalcue) {
                                    if ('RHFmv' !== 'gOfsL') {
                                        crestbackstep.SwitchEnableStateWithEvent();
                                    } else {
                                        lancerberserkerfighter.removeAllListeners();
                                        lancerberserkerfighter.close();
                                        lancerberserkerfighter = null;
                                    }
                                }
                                crestbackstep.SaveConfig();
                                scrollcue();
                            } else {
                                medal.command.message(hardship.NAWithoutGUI);
                                return;
                            }
                        });
                        lancerberserkerfighter.on('close', () => {
                            if ('iupSJ' !== 'iupSJ') {
                                lancerberserkerfighter.send('extsettings', {
                                    ...crestbackstep.config
                                });
                            } else {
                                lancerberserkerfighter.removeAllListeners();
                                lancerberserkerfighter.close();
                                lancerberserkerfighter = null;
                            }
                        });
                    } else {
                        lancerberserkerfighter.removeAllListeners();
                        lancerberserkerfighter.close();
                        lancerberserkerfighter = null;
                    }
                } else {
                    lancerberserkerfighter.send('ping', {
                        'ping': research,
                        'jitter': {
                            'maxValue': dismantlable.maxJitter,
                            'avgValue': dismantlable.avgJitter
                        }
                    });
                }
            },
            handrobe = () => {
                if ('Fdcdn' === 'YcNNv') {
                    lancerberserkerfighter.send('extsettings', {
                        ...crestbackstep.config
                    });
                } else {
                    if (expense.currentBehavior || expense.serverBehavior || crestbackstep.disabledByZone || crestbackstep.disabledByClass) {
                        medal.command.message('Command unavailable now. Possible reasons: you are in combat/casting skills or injector was disabled by class/area');
                        return;
                    }
                    if (crestbackstep.config.enabled) {
                        if ('UcAmC' === 'xDDJH') {
                            magicenchant.register(crestbackstep.config.shortcutUISettings, statuecasta);
                        } else {
                            medal.command.message(hardship.disabled);
                            crestbackstep.config.debug = ![];
                            crestbackstep.config.debugAbnormals = ![];
                            crestbackstep.config.debugLoc = ![];
                            crestbackstep.config.debugCooldowns = ![];
                            crestbackstep.config.debugItems = ![];
                        }
                    } else {
                        medal.command.message(hardship.enabled);
                    }
                    crestbackstep.SwitchEnableStateWithEvent();
                    if (lancerberserkerfighter) {
                        lancerberserkerfighter.send('extsettings', {
                            ...crestbackstep.config
                        });
                    }
                }
            },
            scrollcue = () => {
                if (!crestbackstep.config.debugGlyphs && !crestbackstep.config.debug && !crestbackstep.config.debugAbnormals && !crestbackstep.config.debugCooldowns && !crestbackstep.config.debugTalents && !crestbackstep.config.debugItems && !crestbackstep.config.debugPolishing && !crestbackstep.config.debugLoc) {
                    if ('Rllxi' !== 'AfbqL') {
                        object.endPipeToFile();
                    } else {
                        medal.command.message('NextGen SP. Version: ' + crestbackstep.config.version);
                        medal.command.message('Is activated: ' + crestbackstep.config.enabled);
                        // medal.command.message('Runtime: ' + ('caali' == medal.proxyAuthor && medal.clientInterface ? 'Toolbox' : 'fallback'));
                        medal.command.message('UI࿪tures: ' + xmastree);
                        medal.command.message('Game patch=' + medal.majorPatchVersion);
                        medal.command.message('Template=' + crestsanctuaryofregeneration.templateId + ', race=' + crestsanctuaryofregeneration.race + ', class=' + crestsanctuaryofregeneration.job);
                    }
                }
            };
        if (xmastree) {
            if (crestbackstep.config.shortcutEnable && crestbackstep.config.shortcutEnable.length > 0) {
                if ('qXxyF' === 'TRiIL') {
                    crestbackstep.config.debug = !![];
                    crestbackstep.config.debugAbnormals = !![];
                } else {
                    magicenchant.register(crestbackstep.config.shortcutEnable, handrobe);
                }
            }
            if (crestbackstep.config.shortcutUISettings && crestbackstep.config.shortcutUISettings.length > 0) {
                magicenchant.register(crestbackstep.config.shortcutUISettings, statuecasta);
            }
        }
        let blaster = ['sp', 'ngsp'];
        if (crestbackstep.config.customCommandPrefix.length > 0) {
            if ('KuCgv' !== 'yJoes') {
                blaster.push(crestbackstep.config.customCommandPrefix);
            } else {
                crestbackstep.SaveConfig();
                medal.command.message(hardship.configSaved);
            }
        }
        const robechest = {
            '$none': handrobe,
            'ui': {
                '$none': statuecasta
            },
            'matt': async () => {
                let result = await $(normalcue, crestbackstep);
                if (!result) {
                    medal.command.message("Not enough data to generate settings.");
                } else {
                    Object.assign(crestbackstep.config, result);
                    for (let [key, value] of Object.entries(crestbackstep.config)) {
                        medal.command.message(key + ' : ' + value);
                    }
                    medal.command.message("Use /8 ngsp settings save to save current settings.");
                }
            },
            'settings': {
                'print'() {
                    medal.command.message(hardship.configList);
                    for (let [research, normalcue] of Object.entries(crestbackstep.config)) {
                        if ('gOqhl' === 'gOqhl') {
                            medal.command.message(research + ' : ' + normalcue);
                        } else {
                            crestbackstep.config.debug = ![];
                            crestbackstep.config.debugAbnormals = ![];
                        }
                    }
                },
                'reset'() {
                    crestbackstep.ResetConfig();
                    medal.command.message(hardship.defaultConfigLoad);
                    medal.command.message(hardship.defaultConfigLoad2);
                    if (lancerberserkerfighter) {
                        lancerberserkerfighter.send('extsettings', {
                            ...crestbackstep.config
                        });
                    }
                },
                'save'() {
                    crestbackstep.SaveConfig();
                    medal.command.message(hardship.configSaved);
                },
                'reload'() {
                    if ('uKSvA' === 'XtNgE') {
                        lancerberserkerfighter.send('extsettings', {
                            ...crestbackstep.config
                        });
                    } else {
                        crestbackstep.ReloadConfig();
                        medal.command.message(hardship.configReload);
                        if (lancerberserkerfighter) {
                            lancerberserkerfighter.send('extsettings', {
                                ...crestbackstep.config
                            });
                        }
                    }
                }
            },
            'debug': {
                '$none'() {
                    if (!crestbackstep.config.debug) {
                        crestbackstep.config.debug = !![];
                        crestbackstep.config.debugAbnormals = !![];
                    } else {
                        crestbackstep.config.debug = ![];
                        crestbackstep.config.debugAbnormals = ![];
                    }
                    medal.command.message('Standard Debug mode ' + (crestbackstep.config.debug ? 'a' : 'dea') + 'ctivated.');
                    if (lancerberserkerfighter) {
                        lancerberserkerfighter.send('extsettings', {
                            ...crestbackstep.config
                        });
                    }
                    scrollcue();
                },
                'reset'() {
                    crestbackstep.config.debug = ![];
                    crestbackstep.config.debugAbnormals = ![];
                    crestbackstep.config.debugLoc = ![];
                    crestbackstep.config.debugCooldowns = ![];
                    crestbackstep.config.debugItems = ![];
                    medal.command.message('All෫ug modes�tivated');
                    if (lancerberserkerfighter) {
                        if ('FiEHZ' !== 'ikowA') {
                            lancerberserkerfighter.send('extsettings', {
                                ...crestbackstep.config
                            });
                        } else {
                            lancerberserkerfighter.removeAllListeners();
                            lancerberserkerfighter.close();
                            lancerberserkerfighter = null;
                        }
                    }
                    scrollcue();
                },
                'skills'() {
                    if ('wqiZm' !== 'wqiZm') {
                        object.endPipeToFile();
                    } else {
                        crestbackstep.config.debug = !crestbackstep.config.debug;
                        medal.command.message('Skills Debug mode ' + (crestbackstep.config.debug ? 'a' : 'dea') + 'ctivated.');
                        if (lancerberserkerfighter) {
                            lancerberserkerfighter.send('extsettings', {
                                ...crestbackstep.config
                            });
                        }
                        scrollcue();
                    }
                },
                'loc'() {
                    crestbackstep.config.debugLoc = !crestbackstep.config.debugLoc;
                    medal.command.message('Location Debug mode ' + (crestbackstep.config.debugLoc ? 'a' : 'dea') + 'ctivated.');
                    if (lancerberserkerfighter) {
                        if ('oLOSz' !== 'oLOSz') {
                            medal.command.message(hardship.configList);
                            for (let [diamond, artisanall] of Object.entries(crestbackstep.config)) {
                                medal.command.message(diamond + ' : ' + artisanall);
                            }
                        } else {
                            lancerberserkerfighter.send('extsettings', {
                                ...crestbackstep.config
                            });
                        }
                    }
                    scrollcue();
                },
                'eff'() {
                    crestbackstep.config.debugAbnormals = !crestbackstep.config.debugAbnormals;
                    medal.command.message('Abnormals Debug mode ' + (crestbackstep.config.debugAbnormals ? 'a' : 'dea') + 'ctivated.');
                    if (lancerberserkerfighter) {
                        if ('HibKt' === 'rZmjz') {
                            medal.command.message(hardship.ping + ': ' + hardship.minPing + '=' + normalcue.min + ' ' + hardship.avgPing + '=' + normalcue.avg + ' ' + hardship.maxPing + '=' + normalcue.max + ' EffSpread=' + (normalcue.avg - normalcue.min) + ' Spread=' + (normalcue.max - normalcue.min) + ' Samples=' + normalcue.history.length);
                        } else {
                            lancerberserkerfighter.send('extsettings', {
                                ...crestbackstep.config
                            });
                        }
                    }
                    scrollcue();
                },
                'cd'() {
                    crestbackstep.config.debugCooldowns = !crestbackstep.config.debugCooldowns;
                    medal.command.message('Cooldowns෫ug mode ' + (crestbackstep.config.debugCooldowns ? 'a' : 'dea') + 'ctivated.');
                    if (lancerberserkerfighter) {
                        if ('qgbGY' !== 'qgbGY') {
                            if (!crestbackstep.config.debug) {
                                crestbackstep.config.debug = !![];
                                crestbackstep.config.debugAbnormals = !![];
                            } else {
                                crestbackstep.config.debug = ![];
                                crestbackstep.config.debugAbnormals = ![];
                            }
                            medal.command.message('Standard Debug mode ' + (crestbackstep.config.debug ? 'a' : 'dea') + 'ctivated.');
                            if (lancerberserkerfighter) {
                                lancerberserkerfighter.send('extsettings', {
                                    ...crestbackstep.config
                                });
                            }
                            scrollcue();
                        } else {
                            lancerberserkerfighter.send('extsettings', {
                                ...crestbackstep.config
                            });
                        }
                    }
                    scrollcue();
                },
                'glyphs'() {
                    crestbackstep.config.debugGlyphs = !crestbackstep.config.debugGlyphs;
                    medal.command.message('Glyph Debug mode ' + (crestbackstep.config.debugGlyphs ? 'a' : 'dea') + 'ctivated.');
                    if (lancerberserkerfighter) {
                        lancerberserkerfighter.send('extsettings', {
                            ...crestbackstep.config
                        });
                    }
                    scrollcue();
                },
                'talents'() {
                    if ('kNLmo' === 'fUVNj') {
                        lancerberserkerfighter.removeAllListeners();
                        lancerberserkerfighter.close();
                        lancerberserkerfighter = null;
                    } else {
                        crestbackstep.config.debugTalents = !crestbackstep.config.debugTalents;
                        medal.command.message('Talents Debug mode ' + (crestbackstep.config.debugTalents ? 'a' : 'dea') + 'ctivated.');
                        if (lancerberserkerfighter) {
                            lancerberserkerfighter.send('extsettings', {
                                ...crestbackstep.config
                            });
                        }
                        scrollcue();
                    }
                },
                'polishing'() {
                    if ('RHWuO' === 'SuHsP') {
                        if (crestbackstep.config.shortcutEnable && crestbackstep.config.shortcutEnable.length > 0) {
                            magicenchant.register(crestbackstep.config.shortcutEnable, handrobe);
                        }
                        if (crestbackstep.config.shortcutUISettings && crestbackstep.config.shortcutUISettings.length > 0) {
                            magicenchant.register(crestbackstep.config.shortcutUISettings, statuecasta);
                        }
                    } else {
                        crestbackstep.config.debugPolishing = !crestbackstep.config.debugPolishing;
                        medal.command.message('Polishing Debug mode ' + (crestbackstep.config.debugPolishing ? 'a' : 'dea') + 'ctivated.');
                        if (lancerberserkerfighter) {
                            lancerberserkerfighter.send('extsettings', {
                                ...crestbackstep.config
                            });
                        }
                        scrollcue();
                    }
                },
                'items'() {
                    crestbackstep.config.debugItems = !crestbackstep.config.debugItems;
                    medal.command.message('Items Debug mode ' + (crestbackstep.config.debugItems ? 'a' : 'dea') + 'ctivated.');
                    if (lancerberserkerfighter) {
                        lancerberserkerfighter.send('extsettings', {
                            ...crestbackstep.config
                        });
                    }
                    scrollcue();
                }
            },
            'state'() {
                medal.command.message('NextGen SP. Version: ' + crestbackstep.config.version);
                medal.command.message('Is€tivated: ' + crestbackstep.config.enabled);
                // medal.command.message('Runtime: ' + ('caali' == medal.proxyAuthor && medal.clientInterface ? 'Toolbox' : 'fallback'));
                medal.command.message('UI࿪tures: ' + xmastree);
                medal.command.message('Game patch=' + medal.majorPatchVersion);
                medal.command.message('Template=' + crestsanctuaryofregeneration.templateId + ', race=' + crestsanctuaryofregeneration.race + ', class=' + crestsanctuaryofregeneration.job);
            },
            'ping': {
                'log'() {
                    medal.command.message(hardship.ping);
                    normalcue.history.forEach(research => medal.command.message('' + research));
                },
                '$none'() {
                    if ('IIAVf' !== 'IIAVf') {
                        crestbackstep.config.debugAbnormals = !crestbackstep.config.debugAbnormals;
                        medal.command.message('Abnormals Debug mode ' + (crestbackstep.config.debugAbnormals ? 'a' : 'dea') + 'ctivated.');
                        if (lancerberserkerfighter) {
                            lancerberserkerfighter.send('extsettings', {
                                ...crestbackstep.config
                            });
                        }
                        scrollcue();
                    } else {
                        medal.command.message(hardship.ping + ': ' + hardship.minPing + '=' + normalcue.min + ' ' + hardship.avgPing + '=' + normalcue.avg + ' ' + hardship.maxPing + '=' + normalcue.max + ' EffSpread=' + (normalcue.avg - normalcue.min) + ' Spread=' + (normalcue.max - normalcue.min) + ' Samples=' + normalcue.history.length);
                    }
                }
            }
        };
        Object.keys(research).forEach(normalcue => {
            if (-1 !== normalcue.indexOf('plugin-') && research[normalcue].commands) {
                robechest[research[normalcue].commands.subcommand] = research[normalcue].commands.body;
            }
        });
        medal.command.add(blaster, robechest);
        medal.hook('S_PREPARE_RETURN_TO_LOBBY', 'raw', () => {
            if (lancerberserkerfighter) {
                if ('qPBWi' !== 'qPBWi') {
                    crestbackstep.config.debugCooldowns = !crestbackstep.config.debugCooldowns;
                    medal.command.message('Cooldowns෫ug mode ' + (crestbackstep.config.debugCooldowns ? 'a' : 'dea') + 'ctivated.');
                    if (lancerberserkerfighter) {
                        lancerberserkerfighter.send('extsettings', {
                            ...crestbackstep.config
                        });
                    }
                    scrollcue();
                } else {
                    lancerberserkerfighter.removeAllListeners();
                    lancerberserkerfighter.close();
                    lancerberserkerfighter = null;
                }
            }
        });
        this.destructor = () => {
            if (lancerberserkerfighter) {
                lancerberserkerfighter.removeAllListeners();
                lancerberserkerfighter.close();
                lancerberserkerfighter = null;
            }
            if (magicenchant) {
                magicenchant.unregisterAll();
            }
        };
    }
}
module.exports = v;