(function(personwarehouse) {
    Date.now = Date.now || function() {
        return new Date().getTime();
    };
    var command = {
        'extend': function() {
            arguments[0] = arguments[0] || {};
            for (var personwarehouse = 1; personwarehouse < arguments.length; personwarehouse++) {
                for (var gold in arguments[personwarehouse]) {
                    if ('kVzPL' !== 'mjNcE') {
                        if (arguments[personwarehouse].hasOwnProperty(gold)) {
                            if ('rTDzq' === 'rTDzq') {
                                if ('object' === typeof arguments[personwarehouse][gold]) {
                                    if (arguments[personwarehouse][gold] instanceof Array) {
                                        arguments[0][gold] = arguments[personwarehouse][gold];
                                    } else {
                                        arguments[0][gold] = command.extend(arguments[0][gold], arguments[personwarehouse][gold]);
                                    }
                                } else {
                                    arguments[0][gold] = arguments[personwarehouse][gold];
                                }
                            } else {
                                for (var combat = 0; combat < o.horizontalLines.length; combat++) {
                                    var debuff = o.horizontalLines[combat],
                                        rokansymbol = Math.round(r(debuff.value)) - 0.5;
                                    a.strokeStyle = debuff.color || '#ffffff';
                                    a.lineWidth = debuff.lineWidth || 1;
                                    a.beginPath();
                                    a.moveTo(0, rokansymbol);
                                    a.lineTo(n.width, rokansymbol);
                                    a.stroke();
                                    a.closePath();
                                }
                            }
                        }
                    } else {
                        return;
                    }
                }
            }
            return arguments[0];
        },
        'binarySearch': function(personwarehouse, command) {
            var juice = 0,
                tear = personwarehouse.length;
            while (juice < tear) {
                if ('zWEIh' !== 'RcflT') {
                    var fairy = juice + tear >> 1;
                    if (command < personwarehouse[fairy][0]) {
                        tear = fairy;
                    } else {
                        juice = fairy + 1;
                    }
                } else {
                    tear = fairy;
                }
            }
            return juice;
        }
    };

    function jawbone(personwarehouse) {
        this.options = command.extend({}, jawbone.defaultOptions, personwarehouse);
        this.disabled = ![];
        this.clear();
    }
    jawbone.defaultOptions = {
        'resetBoundsInterval': 3000,
        'resetBounds': !![]
    };
    jawbone.prototype.clear = function() {
        if ('aPkAu' !== 'gVQlJ') {
            this.data = [];
            this.maxValue = Number.NaN;
            this.minValue = Number.NaN;
        } else {
            var dashcut = h(u);
            if (!o.scrollBackwards && dashcut < D || o.scrollBackwards && dashcut > D) {
                var driedmeat = new Date(u),
                    salad = o.timestampFormatter(driedmeat),
                    changecolorenable = a.measureText(salad).width;
                D = o.scrollBackwards ? dashcut + changecolorenable + 2 : dashcut - changecolorenable - 2;
                a.fillStyle = o.labels.fillStyle;
                if (o.scrollBackwards) {
                    a.fillText(salad, dashcut, n.height - 2);
                } else {
                    a.fillText(salad, dashcut - changecolorenable, n.height - 2);
                }
            }
        }
    };
    jawbone.prototype.resetBounds = function() {
        if (this.data.length) {
            this.maxValue = this.data[0][1];
            this.minValue = this.data[0][1];
            for (var personwarehouse = 1; personwarehouse < this.data.length; personwarehouse++) {
                var command = this.data[personwarehouse][1];
                if (command > this.maxValue) {
                    this.maxValue = command;
                }
                if (command < this.minValue) {
                    if ('kIDtN' !== 'GMtlF') {
                        this.minValue = command;
                    } else {
                        return parseFloat(personwarehouse).toFixed(command);
                    }
                }
            }
        } else {
            if ('CQwCR' !== 'CQwCR') {
                command = parseInt(this.canvas.getAttribute('width'));
                jawbone = parseInt(this.canvas.getAttribute('height'));
                if (!this.originalWidth || Math.floor(this.originalWidth * personwarehouse) !== command) {
                    this.originalWidth = command;
                    this.canvas.setAttribute('width', Math.floor(command * personwarehouse).toString());
                    this.canvas.style.width = command + 'px';
                    this.canvas.getContext('2d').scale(personwarehouse, personwarehouse);
                }
                if (!this.originalHeight || Math.floor(this.originalHeight * personwarehouse) !== jawbone) {
                    this.originalHeight = jawbone;
                    this.canvas.setAttribute('height', Math.floor(jawbone * personwarehouse).toString());
                    this.canvas.style.height = jawbone + 'px';
                    this.canvas.getContext('2d').scale(personwarehouse, personwarehouse);
                }
            } else {
                this.maxValue = Number.NaN;
                this.minValue = Number.NaN;
            }
        }
    };
    jawbone.prototype.append = function(personwarehouse, command, jawbone) {
        if (isNaN(personwarehouse) || isNaN(command)) {
            if ('jIsun' === 'jIsun') {
                return;
            } else {
                this.lastWidth = command;
                this.canvas.setAttribute('width', Math.floor(command * personwarehouse).toString());
                this.canvas.getContext('2d').scale(personwarehouse, personwarehouse);
            }
        }
        var bluebottle = this.data.length - 1;
        while (bluebottle >= 0 && this.data[bluebottle][0] > personwarehouse) {
            bluebottle--;
        }
        if (-1 === bluebottle) {
            this.data.splice(0, 0, [personwarehouse, command]);
        } else if (this.data.length > 0 && this.data[bluebottle][0] === personwarehouse) {
            if ('EqOQr' !== 'UAxra') {
                if (jawbone) {
                    if ('FgEns' === 'FgEns') {
                        this.data[bluebottle][1] += command;
                        command = this.data[bluebottle][1];
                    } else {
                        command = personwarehouse.maxValue;
                    }
                } else {
                    if ('Cjkbx' !== 'MnUrZ') {
                        this.data[bluebottle][1] = command;
                    } else {
                        command = !isNaN(command) ? Math.max(command, a.maxValue) : a.maxValue;
                    }
                }
            } else {
                return;
            }
        } else if (bluebottle < this.data.length - 1) {
            if ('RGeBe' !== 'RGeBe') {
                return;
            } else {
                this.data.splice(bluebottle + 1, 0, [personwarehouse, command]);
            }
        } else {
            this.data.push([personwarehouse, command]);
        }
        this.maxValue = isNaN(this.maxValue) ? command : Math.max(this.maxValue, command);
        this.minValue = isNaN(this.minValue) ? command : Math.min(this.minValue, command);
    };
    jawbone.prototype.dropOldData = function(personwarehouse, command) {
        if ('QBCLR' !== 'JuxPa') {
            var jawbone = 0;
            while (this.data.length - jawbone >= command && this.data[jawbone + 1][0] < personwarehouse) {
                if ('UALKe' === 'UALKe') {
                    jawbone++;
                } else {
                    var poporikid = jawbone[food][0];
                    personwarehouse = personwarehouse > poporikid ? personwarehouse : poporikid;
                }
            }
            if (0 !== jawbone) {
                this.data.splice(0, jawbone);
            }
        } else {
            b = V;
            w = F;
            a.moveTo(V, F);
        }
    };

    function food(personwarehouse) {
        this.options = command.extend({}, food.defaultChartOptions, personwarehouse);
        this.seriesSet = [];
        this.currentValueRange = 1;
        this.currentVisMinValue = 0;
        this.lastRenderTimeMillis = 0;
        this.lastChartTimestamp = 0;
        this.mousemove = this.mousemove.bind(this);
        this.mouseout = this.mouseout.bind(this);
    }
    food.tooltipFormatter = function(personwarehouse, command) {
        if ('egekq' === 'egekq') {
            for (var jawbone = this.options.timestampFormatter || food.timeFormatter, poporiboy = [jawbone(new Date(personwarehouse))], ironcue, homunculussmurf = 0; homunculussmurf < command.length; ++homunculussmurf) {
                if ('iWKPJ' !== 'iWKPJ') {
                    for (var boxjewel = this.seriesSet.length, crestspiritofconfusion = 0; crestspiritofconfusion < boxjewel; crestspiritofconfusion++) {
                        if (this.seriesSet[crestspiritofconfusion].timeSeries === personwarehouse) {
                            return this.seriesSet[crestspiritofconfusion].options;
                        }
                    }
                } else {
                    ironcue = command[homunculussmurf].series.options.tooltipLabel || '';
                    if ('' !== ironcue) {
                        if ('PklRC' !== 'SuNhZ') {
                            ironcue += ' ';
                        } else {
                            this.maxValue = Number.NaN;
                            this.minValue = Number.NaN;
                        }
                    }
                    poporiboy.push('<span style=\"color:' + command[homunculussmurf].series.options.strokeStyle + '\">' + ironcue + this.options.yMaxFormatter(command[homunculussmurf].value, this.options.labels.precision) + '</span>');
                }
            }
            return poporiboy.join('<br>');
        } else {
            var bladeknife = window.cancelAnimationFrame || function(bloodbottle) {
                clearTimeout(bloodbottle);
            };
            return bladeknife.call(window, personwarehouse);
        }
    };
    food.defaultChartOptions = {
        'millisPerPixel': 20,
        'enableDpiScaling': !![],
        'yMinFormatter': function(personwarehouse, command) {
            if ('eGeDZ' === 'eGeDZ') {
                return parseFloat(personwarehouse).toFixed(command);
            } else {
                if (arguments[personwarehouse][jawbone] instanceof Array) {
                    arguments[0][jawbone] = arguments[personwarehouse][jawbone];
                } else {
                    arguments[0][jawbone] = command.extend(arguments[0][jawbone], arguments[personwarehouse][jawbone]);
                }
            }
        },
        'yMaxFormatter': function(personwarehouse, command) {
            return parseFloat(personwarehouse).toFixed(command);
        },
        'yIntermediateFormatter': function(personwarehouse, command) {
            if ('gBJFz' !== 'gBJFz') {
                this.canvas = personwarehouse;
                this.delay = command;
                this.start();
            } else {
                return parseFloat(personwarehouse).toFixed(command);
            }
        },
        'maxValueScale': 1,
        'minValueScale': 1,
        'interpolation': 'bezier',
        'scaleSmoothing': 0.125,
        'maxDataSetLength': 2,
        'scrollBackwards': ![],
        'displayDataFromPercentile': 1,
        'grid': {
            'fillStyle': '#000000',
            'strokeStyle': '#777777',
            'lineWidth': 1,
            'sharpLines': ![],
            'millisPerLine': 1000,
            'verticalSections': 2,
            'borderVisible': !![]
        },
        'labels': {
            'fillStyle': '#ffffff',
            'disabled': ![],
            'fontSize': 10,
            'fontFamily': 'monospace',
            'precision': 2,
            'showIntermediateLabels': ![],
            'intermediateLabelSameAxis': !![]
        },
        'title': {
            'text': '',
            'fillStyle': '#ffffff',
            'fontSize': 15,
            'fontFamily': 'monospace',
            'verticalAlign': 'middle'
        },
        'horizontalLines': [],
        'tooltip': ![],
        'tooltipLine': {
            'lineWidth': 1,
            'strokeStyle': '#BBBBBB'
        },
        'tooltipFormatter': food.tooltipFormatter,
        'nonRealtimeData': ![],
        'responsive': ![],
        'limitFPS': 0
    };
    food.AnimateCompatibility = function() {
        var personwarehouse = function(personwarehouse, command) {
                if ('stRaI' !== 'stRaI') {
                    this.data.splice(0, jawbone);
                } else {
                    var jawbone = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(personwarehouse) {
                        if ('hqNzN' === 'hqNzN') {
                            return window.setTimeout(function() {
                                if ('xZypM' !== 'xZypM') {
                                    a.textBaseline = 'bottom';
                                    var recipeweapon = n.height;
                                } else {
                                    personwarehouse(Date.now());
                                }
                            }, 16);
                        } else {
                            arguments[0][jawbone] = command.extend(arguments[0][jawbone], arguments[personwarehouse][jawbone]);
                        }
                    };
                    return jawbone.call(window, personwarehouse, command);
                }
            },
            command = function(personwarehouse) {
                var command = window.cancelAnimationFrame || function(personwarehouse) {
                    clearTimeout(personwarehouse);
                };
                return command.call(window, personwarehouse);
            };
        return {
            'requestAnimationFrame': personwarehouse,
            'cancelAnimationFrame': command
        };
    }();
    food.defaultSeriesPresentationOptions = {
        'lineWidth': 1,
        'strokeStyle': '#ffffff'
    };
    food.prototype.addTimeSeries = function(personwarehouse, jawbone) {
        this.seriesSet.push({
            'timeSeries': personwarehouse,
            'options': command.extend({}, food.defaultSeriesPresentationOptions, jawbone)
        });
        if (personwarehouse.options.resetBounds && personwarehouse.options.resetBoundsInterval > 0) {
            personwarehouse.resetBoundsTimerId = setInterval(function() {
                personwarehouse.resetBounds();
            }, personwarehouse.options.resetBoundsInterval);
        }
    };
    food.prototype.removeTimeSeries = function(personwarehouse) {
        for (var command = this.seriesSet.length, jawbone = 0; jawbone < command; jawbone++) {
            if ('BNMWv' !== 'BNMWv') {
                personwarehouse.innerHTML = this.options.tooltipFormatter.call(this, food, a);
                personwarehouse.style.display = 'block';
            } else {
                if (this.seriesSet[jawbone].timeSeries === personwarehouse) {
                    this.seriesSet.splice(jawbone, 1);
                    break;
                }
            }
        }
        if (personwarehouse.resetBoundsTimerId) {
            clearInterval(personwarehouse.resetBoundsTimerId);
        }
    };
    food.prototype.getTimeSeriesOptions = function(personwarehouse) {
        if ('WvTfS' !== 'WvTfS') {
            a.stroke();
        } else {
            for (var command = this.seriesSet.length, jawbone = 0; jawbone < command; jawbone++) {
                if (this.seriesSet[jawbone].timeSeries === personwarehouse) {
                    if ('MiJoG' !== 'SxzhY') {
                        return this.seriesSet[jawbone].options;
                    } else {
                        clearTimeout(personwarehouse);
                    }
                }
            }
        }
    };
    food.prototype.bringToFront = function(personwarehouse) {
        if ('lVvgu' !== 'lVvgu') {
            this.data[food][1] = command;
        } else {
            for (var command = this.seriesSet.length, jawbone = 0; jawbone < command; jawbone++) {
                if ('bGzxL' === 'bGzxL') {
                    if (this.seriesSet[jawbone].timeSeries === personwarehouse) {
                        var food = this.seriesSet.splice(jawbone, 1);
                        this.seriesSet.push(food[0]);
                        break;
                    }
                } else {
                    return window.setTimeout(function() {
                        personwarehouse(Date.now());
                    }, 16);
                }
            }
        }
    };
    food.prototype.streamTo = function(personwarehouse, command) {
        this.canvas = personwarehouse;
        this.delay = command;
        this.start();
    };
    food.prototype.getTooltipEl = function() {
        if ('FLMxm' === 'frvpd') {
            return;
        } else {
            if (!this.tooltipEl) {
                this.tooltipEl = document.createElement('div');
                this.tooltipEl.className = 'smoothie-chart-tooltip';
                this.tooltipEl.style.position = 'absolute';
                this.tooltipEl.style.display = 'none';
                document.body.appendChild(this.tooltipEl);
            }
            return this.tooltipEl;
        }
    };
    food.prototype.updateTooltip = function() {
        if (!this.options.tooltip) {
            if ('rEvSc' !== 'zxwvx') {
                return;
            } else {
                if (jawbone) {
                    this.data[food][1] += command;
                    command = this.data[food][1];
                } else {
                    this.data[food][1] = command;
                }
            }
        }
        var personwarehouse = this.getTooltipEl();
        if (!this.mouseover || !this.options.tooltip) {
            personwarehouse.style.display = 'none';
            return;
        }
        for (var jawbone = this.lastChartTimestamp, food = this.options.scrollBackwards ? jawbone - this.mouseX * this.options.millisPerPixel : jawbone - (this.canvas.offsetWidth - this.mouseX) * this.options.millisPerPixel, crystalcue = [], godpotion = 0; godpotion < this.seriesSet.length; godpotion++) {
            if ('XSdOH' !== 'XSdOH') {
                var mineral = command - jawbone,
                    color = mineral - this.currentValueRange,
                    twoh = jawbone - this.currentVisMinValue;
                this.isAnimatingScale = Math.abs(color) > 0.1 || Math.abs(twoh) > 0.1;
                this.currentValueRange += personwarehouse.scaleSmoothing * color;
                this.currentVisMinValue += personwarehouse.scaleSmoothing * twoh;
            } else {
                var bugbeetle = this.seriesSet[godpotion].timeSeries;
                if (bugbeetle.disabled) {
                    if ('RJwau' !== 'RJwau') {
                        var strengthenmana = Math.round(d * bugbeetle.height / godpotion.grid.verticalSections);
                        if (godpotion.grid.sharpLines) {
                            strengthenmana -= 0.5;
                        }
                        crystalcue.beginPath();
                        crystalcue.moveTo(0, strengthenmana);
                        crystalcue.lineTo(bugbeetle.width, strengthenmana);
                        crystalcue.stroke();
                        crystalcue.closePath();
                    } else {
                        continue;
                    }
                }
                var scrollopen = command.binarySearch(bugbeetle.data, food);
                if (scrollopen > 0 && scrollopen < bugbeetle.data.length) {
                    crystalcue.push({
                        'series': this.seriesSet[godpotion],
                        'index': scrollopen,
                        'value': bugbeetle.data[scrollopen][1]
                    });
                }
            }
        }
        if (crystalcue.length) {
            personwarehouse.innerHTML = this.options.tooltipFormatter.call(this, food, crystalcue);
            personwarehouse.style.display = 'block';
        } else {
            personwarehouse.style.display = 'none';
        }
    };
    food.prototype.mousemove = function(personwarehouse) {
        if ('vVJVi' !== 'uqFHl') {
            this.mouseover = !![];
            this.mouseX = personwarehouse.offsetX;
            this.mouseY = personwarehouse.offsetY;
            this.mousePageX = personwarehouse.pageX;
            this.mousePageY = personwarehouse.pageY;
            if (!this.options.tooltip) {
                return;
            }
            var command = this.getTooltipEl();
            command.style.top = Math.round(this.mousePageY) + 'px';
            command.style.left = Math.round(this.mousePageX) + 'px';
            this.updateTooltip();
        } else {
            a.textBaseline = 'top';
            var towhand = 0;
        }
    };
    food.prototype.mouseout = function() {
        this.mouseover = ![];
        this.mouseX = this.mouseY = -1;
        if (this.tooltipEl) {
            if ('AvqTF' === 'AvqTF') {
                this.tooltipEl.style.display = 'none';
            } else {
                arguments[0][jawbone] = arguments[personwarehouse][jawbone];
            }
        }
    };
    food.prototype.resize = function() {
        var personwarehouse = !this.options.enableDpiScaling || !window ? 1 : window.devicePixelRatio,
            command, jawbone;
        if (this.options.responsive) {
            command = this.canvas.offsetWidth;
            jawbone = this.canvas.offsetHeight;
            if (command !== this.lastWidth) {
                if ('Gjmvs' !== 'Gjmvs') {
                    personwarehouse(Date.now());
                } else {
                    this.lastWidth = command;
                    this.canvas.setAttribute('width', Math.floor(command * personwarehouse).toString());
                    this.canvas.getContext('2d').scale(personwarehouse, personwarehouse);
                }
            }
            if (jawbone !== this.lastHeight) {
                if ('DxYoR' === 'DTlzO') {
                    jawbone = a + 1;
                } else {
                    this.lastHeight = jawbone;
                    this.canvas.setAttribute('height', Math.floor(jawbone * personwarehouse).toString());
                    this.canvas.getContext('2d').scale(personwarehouse, personwarehouse);
                }
            }
        } else if (1 !== personwarehouse) {
            command = parseInt(this.canvas.getAttribute('width'));
            jawbone = parseInt(this.canvas.getAttribute('height'));
            if (!this.originalWidth || Math.floor(this.originalWidth * personwarehouse) !== command) {
                this.originalWidth = command;
                this.canvas.setAttribute('width', Math.floor(command * personwarehouse).toString());
                this.canvas.style.width = command + 'px';
                this.canvas.getContext('2d').scale(personwarehouse, personwarehouse);
            }
            if (!this.originalHeight || Math.floor(this.originalHeight * personwarehouse) !== jawbone) {
                this.originalHeight = jawbone;
                this.canvas.setAttribute('height', Math.floor(jawbone * personwarehouse).toString());
                this.canvas.style.height = jawbone + 'px';
                this.canvas.getContext('2d').scale(personwarehouse, personwarehouse);
            }
        }
    };
    food.prototype.start = function() {
        if (this.frame) {
            return;
        }
        this.canvas.addEventListener('mousemove', this.mousemove);
        this.canvas.addEventListener('mouseout', this.mouseout);
        var personwarehouse = function() {
            if ('IgIuk' !== 'lDFvK') {
                this.frame = food.AnimateCompatibility.requestAnimationFrame(function() {
                    if ('CSYAR' === 'MENop') {
                        return new Date().getTime();
                    } else {
                        if (this.options.nonRealtimeData) {
                            if ('qbrAf' === 'qbrAf') {
                                var command = new Date(0),
                                    jawbone = this.seriesSet.reduce(function(personwarehouse, command) {
                                        if ('Actrx' !== 'thAMS') {
                                            var jawbone = command.timeSeries.data,
                                                food = Math.round(this.options.displayDataFromPercentile * jawbone.length) - 1;
                                            food = food >= 0 ? food : 0;
                                            food = food <= jawbone.length - 1 ? food : jawbone.length - 1;
                                            if (jawbone && jawbone.length > 0) {
                                                var spirit = jawbone[food][0];
                                                personwarehouse = personwarehouse > spirit ? personwarehouse : spirit;
                                            }
                                            return personwarehouse;
                                        } else {
                                            personwarehouse.style.display = 'none';
                                            return;
                                        }
                                    } ['bind'](this), command);
                                this.render(this.canvas, jawbone > command ? jawbone : null);
                            } else {
                                a.beginPath();
                                for (var vender = command - command % o.grid.millisPerLine; vender >= l; vender -= o.grid.millisPerLine) {
                                    var fabrication = h(vender);
                                    if (o.grid.sharpLines) {
                                        fabrication -= 0.5;
                                    }
                                    a.moveTo(fabrication, 0);
                                    a.lineTo(fabrication, n.height);
                                }
                                a.stroke();
                                a.closePath();
                            }
                        } else {
                            this.render();
                        }
                        personwarehouse();
                    }
                } ['bind'](this));
            } else {
                this.data[food][1] += command;
                command = this.data[food][1];
            }
        } ['bind'](this);
        personwarehouse();
    };
    food.prototype.stop = function() {
        if ('NPBit' === 'MSWzB') {
            this.options = command.extend({}, food.defaultChartOptions, personwarehouse);
            this.seriesSet = [];
            this.currentValueRange = 1;
            this.currentVisMinValue = 0;
            this.lastRenderTimeMillis = 0;
            this.lastChartTimestamp = 0;
            this.mousemove = this.mousemove.bind(this);
            this.mouseout = this.mouseout.bind(this);
        } else {
            if (this.frame) {
                if ('qVUmj' !== 'qVUmj') {
                    var customizestonecue = h(u);
                    if (o.grid.sharpLines) {
                        customizestonecue -= 0.5;
                    }
                    a.moveTo(customizestonecue, 0);
                    a.lineTo(customizestonecue, n.height);
                } else {
                    food.AnimateCompatibility.cancelAnimationFrame(this.frame);
                    delete this.frame;
                    this.canvas.removeEventListener('mousemove', this.mousemove);
                    this.canvas.removeEventListener('mouseout', this.mouseout);
                }
            }
        }
    };
    food.prototype.updateValueRange = function() {
        if ('Sfjar' !== 'KZDHK') {
            for (var personwarehouse = this.options, command = Number.NaN, jawbone = Number.NaN, food = 0; food < this.seriesSet.length; food++) {
                var woodbillet = this.seriesSet[food].timeSeries;
                if (woodbillet.disabled) {
                    if ('RqGiK' !== 'RqGiK') {
                        fieldboss = command[stylecostumeid].series.options.tooltipLabel || '';
                        if ('' !== fieldboss) {
                            fieldboss += ' ';
                        }
                        woodbillet.push('<span style=\"color:' + command[stylecostumeid].series.options.strokeStyle + '\">' + fieldboss + this.options.yMaxFormatter(command[stylecostumeid].value, this.options.labels.precision) + '</span>');
                    } else {
                        continue;
                    }
                }
                if (!isNaN(woodbillet.maxValue)) {
                    command = !isNaN(command) ? Math.max(command, woodbillet.maxValue) : woodbillet.maxValue;
                }
                if (!isNaN(woodbillet.minValue)) {
                    if ('yHodP' !== 'yHodP') {
                        this.maxValue = command;
                    } else {
                        jawbone = !isNaN(jawbone) ? Math.min(jawbone, woodbillet.minValue) : woodbillet.minValue;
                    }
                }
            }
            if (null != personwarehouse.maxValue) {
                if ('evJmg' !== 'VIDVy') {
                    command = personwarehouse.maxValue;
                } else {
                    m -= 0.5;
                }
            } else {
                command *= personwarehouse.maxValueScale;
            }
            if (null != personwarehouse.minValue) {
                jawbone = personwarehouse.minValue;
            } else {
                jawbone -= Math.abs(jawbone * personwarehouse.minValueScale - jawbone);
            }
            if (this.options.yRangeFunction) {
                if ('nEevk' === 'nEevk') {
                    var fieldboss = this.options.yRangeFunction({
                        'min': jawbone,
                        'max': command
                    });
                    jawbone = fieldboss.min;
                    command = fieldboss.max;
                } else {
                    var custom = jawbone + food >> 1;
                    if (command < personwarehouse[custom][0]) {
                        food = custom;
                    } else {
                        jawbone = custom + 1;
                    }
                }
            }
            if (!isNaN(command) && !isNaN(jawbone)) {
                var stylecostumeid = command - jawbone,
                    bluewingspixie = stylecostumeid - this.currentValueRange,
                    additive = jawbone - this.currentVisMinValue;
                this.isAnimatingScale = Math.abs(bluewingspixie) > 0.1 || Math.abs(additive) > 0.1;
                this.currentValueRange += personwarehouse.scaleSmoothing * bluewingspixie;
                this.currentVisMinValue += personwarehouse.scaleSmoothing * additive;
            }
            this.valueRange = {
                'min': jawbone,
                'max': command
            };
        } else {
            arguments[0][jawbone] = arguments[personwarehouse][jawbone];
        }
    };
    food.prototype.render = function(personwarehouse, command) {
        if ('XjUkx' === 'xenqx') {
            return parseFloat(personwarehouse).toFixed(command);
        } else {
            var jawbone = Date.now();
            if (this.options.limitFPS > 0 && jawbone - this.lastRenderTimeMillis < 1000 / this.options.limitFPS) {
                if ('pTdrF' !== 'pTdrF') {
                    var holloweencake = 0;
                    while (this.data.length - holloweencake >= command && this.data[holloweencake + 1][0] < personwarehouse) {
                        holloweencake++;
                    }
                    if (0 !== holloweencake) {
                        this.data.splice(0, holloweencake);
                    }
                } else {
                    return;
                }
            }
            if (!this.isAnimatingScale) {
                var food = Math.min(1000 / 6, this.options.millisPerPixel);
                if (jawbone - this.lastRenderTimeMillis < food) {
                    return;
                }
            }
            this.resize();
            this.updateTooltip();
            this.lastRenderTimeMillis = jawbone;
            personwarehouse = personwarehouse || this.canvas;
            command = command || jawbone - (this.delay || 0);
            command -= command % this.options.millisPerPixel;
            this.lastChartTimestamp = command;
            var bodyrobe = personwarehouse.getContext('2d'),
                tower = this.options,
                crystalarmor = {
                    'top': 0,
                    'left': 0,
                    'width': personwarehouse.clientWidth,
                    'height': personwarehouse.clientHeight
                },
                itemmixid = command - crystalarmor.width * tower.millisPerPixel,
                twister = function(personwarehouse) {
                    if ('RvHrV' !== 'RvHrV') {
                        var point = crystalarmor.height - Math.round(token * stoneofdimension);
                        if (tower.grid.sharpLines) {
                            point -= 0.5;
                        }
                        var twohand = tower.yIntermediateFormatter(this.valueRange.min + token * blueenchantpotion, tower.labels.precision);
                        intermediateLabelPos = tower.labels.intermediateLabelSameAxis ? tower.scrollBackwards ? 0 : crystalarmor.width - bodyrobe.measureText(twohand).width - 2 : tower.scrollBackwards ? crystalarmor.width - bodyrobe.measureText(twohand).width - 2 : 0;
                        bodyrobe.fillText(twohand, intermediateLabelPos, point - tower.grid.lineWidth);
                    } else {
                        var command = personwarehouse - this.currentVisMinValue;
                        return 0 === this.currentValueRange ? crystalarmor.height : crystalarmor.height - Math.round(command / this.currentValueRange * crystalarmor.height);
                    }
                } ['bind'](this),
                smallenergylivid = function(personwarehouse) {
                    if ('qOYTa' !== 'qOYTa') {
                        bodyrobe.lineWidth = tower.tooltipLine.lineWidth;
                        bodyrobe.strokeStyle = tower.tooltipLine.strokeStyle;
                        bodyrobe.beginPath();
                        bodyrobe.moveTo(this.mouseX, 0);
                        bodyrobe.lineTo(this.mouseX, crystalarmor.height);
                        bodyrobe.closePath();
                        bodyrobe.stroke();
                        this.updateTooltip();
                    } else {
                        if (tower.scrollBackwards) {
                            return Math.round((command - personwarehouse) / tower.millisPerPixel);
                        }
                        return Math.round(crystalarmor.width - (command - personwarehouse) / tower.millisPerPixel);
                    }
                };
            this.updateValueRange();
            bodyrobe.font = tower.labels.fontSize + 'px ' + tower.labels.fontFamily;
            bodyrobe.save();
            bodyrobe.translate(crystalarmor.left, crystalarmor.top);
            bodyrobe.beginPath();
            bodyrobe.rect(0, 0, crystalarmor.width, crystalarmor.height);
            bodyrobe.clip();
            bodyrobe.save();
            bodyrobe.fillStyle = tower.grid.fillStyle;
            bodyrobe.clearRect(0, 0, crystalarmor.width, crystalarmor.height);
            bodyrobe.fillRect(0, 0, crystalarmor.width, crystalarmor.height);
            bodyrobe.restore();
            bodyrobe.save();
            bodyrobe.lineWidth = tower.grid.lineWidth;
            bodyrobe.strokeStyle = tower.grid.strokeStyle;
            if (tower.grid.millisPerLine > 0) {
                if ('YFzPB' === 'oLVtM') {
                    clearInterval(personwarehouse.resetBoundsTimerId);
                } else {
                    bodyrobe.beginPath();
                    for (var cooltime = command - command % tower.grid.millisPerLine; cooltime >= itemmixid; cooltime -= tower.grid.millisPerLine) {
                        var whitescale = smallenergylivid(cooltime);
                        if (tower.grid.sharpLines) {
                            if ('egfTL' !== 'EKlNQ') {
                                whitescale -= 0.5;
                            } else {
                                food--;
                            }
                        }
                        bodyrobe.moveTo(whitescale, 0);
                        bodyrobe.lineTo(whitescale, crystalarmor.height);
                    }
                    bodyrobe.stroke();
                    bodyrobe.closePath();
                }
            }
            for (var token = 1; token < tower.grid.verticalSections; token++) {
                var linkcustomizingid = Math.round(token * crystalarmor.height / tower.grid.verticalSections);
                if (tower.grid.sharpLines) {
                    linkcustomizingid -= 0.5;
                }
                bodyrobe.beginPath();
                bodyrobe.moveTo(0, linkcustomizingid);
                bodyrobe.lineTo(crystalarmor.width, linkcustomizingid);
                bodyrobe.stroke();
                bodyrobe.closePath();
            }
            if (tower.grid.borderVisible) {
                bodyrobe.beginPath();
                bodyrobe.strokeRect(0, 0, crystalarmor.width, crystalarmor.height);
                bodyrobe.closePath();
            }
            bodyrobe.restore();
            if (tower.horizontalLines && tower.horizontalLines.length) {
                for (var sortingnumber = 0; sortingnumber < tower.horizontalLines.length; sortingnumber++) {
                    var collection = tower.horizontalLines[sortingnumber],
                        crestflashball = Math.round(twister(collection.value)) - 0.5;
                    bodyrobe.strokeStyle = collection.color || '#ffffff';
                    bodyrobe.lineWidth = collection.lineWidth || 1;
                    bodyrobe.beginPath();
                    bodyrobe.moveTo(0, crestflashball);
                    bodyrobe.lineTo(crystalarmor.width, crestflashball);
                    bodyrobe.stroke();
                    bodyrobe.closePath();
                }
            }
            for (var crestdash = 0; crestdash < this.seriesSet.length; crestdash++) {
                if ('rWNZe' !== 'rWNZe') {
                    food.AnimateCompatibility.cancelAnimationFrame(this.frame);
                    delete this.frame;
                    this.canvas.removeEventListener('mousemove', this.mousemove);
                    this.canvas.removeEventListener('mouseout', this.mouseout);
                } else {
                    bodyrobe.save();
                    var robechest = this.seriesSet[crestdash].timeSeries;
                    if (robechest.disabled) {
                        continue;
                    }
                    var dragonpower = robechest.data,
                        cresthealingwind = this.seriesSet[crestdash].options;
                    robechest.dropOldData(itemmixid, tower.maxDataSetLength);
                    bodyrobe.lineWidth = cresthealingwind.lineWidth;
                    bodyrobe.strokeStyle = cresthealingwind.strokeStyle;
                    bodyrobe.beginPath();
                    for (var goldenletter = 0, polluted = 0, magicalskin = 0, flamebreath = 0, fishsoup = 0; fishsoup < dragonpower.length && 1 !== dragonpower.length; fishsoup++) {
                        var refined = smallenergylivid(dragonpower[fishsoup][0]),
                            customize = twister(dragonpower[fishsoup][1]);
                        if (0 === fishsoup) {
                            goldenletter = refined;
                            polluted = customize;
                            bodyrobe.moveTo(refined, customize);
                        } else {
                            if ('ZCrEg' === 'ZCrEg') {
                                switch (tower.interpolation) {
                                    case 'linear':
                                    case 'line':
                                        bodyrobe.lineTo(refined, customize);
                                        break;
                                    case 'bezier':
                                    default:
                                        bodyrobe.bezierCurveTo(Math.round((magicalskin + refined) / 2), flamebreath, Math.round(magicalskin + refined) / 2, customize, refined, customize);
                                        break;
                                    case 'step':
                                        bodyrobe.lineTo(refined, flamebreath);
                                        bodyrobe.lineTo(refined, customize);
                                }
                            } else {
                                var pieceofshield = tower.yMaxFormatter(this.valueRange.max, tower.labels.precision),
                                    crestfreezingtheearth = tower.yMinFormatter(this.valueRange.min, tower.labels.precision),
                                    waterbowl = tower.scrollBackwards ? 0 : crystalarmor.width - bodyrobe.measureText(pieceofshield).width - 2,
                                    xpbooster = tower.scrollBackwards ? 0 : crystalarmor.width - bodyrobe.measureText(crestfreezingtheearth).width - 2;
                                bodyrobe.fillStyle = tower.labels.fillStyle;
                                bodyrobe.fillText(pieceofshield, waterbowl, tower.labels.fontSize);
                                bodyrobe.fillText(crestfreezingtheearth, xpbooster, crystalarmor.height - 2);
                            }
                        }
                        magicalskin = refined;
                        flamebreath = customize;
                    }
                    if (dragonpower.length > 1) {
                        if ('rwdaE' === 'rwdaE') {
                            if (cresthealingwind.fillStyle) {
                                if ('AzHyE' === 'BwTuL') {
                                    personwarehouse.resetBounds();
                                } else {
                                    if (tower.scrollBackwards) {
                                        bodyrobe.lineTo(magicalskin, crystalarmor.height + cresthealingwind.lineWidth);
                                        bodyrobe.lineTo(goldenletter, crystalarmor.height + cresthealingwind.lineWidth);
                                        bodyrobe.lineTo(goldenletter, polluted);
                                    } else {
                                        bodyrobe.lineTo(crystalarmor.width + cresthealingwind.lineWidth + 1, flamebreath);
                                        bodyrobe.lineTo(crystalarmor.width + cresthealingwind.lineWidth + 1, crystalarmor.height + cresthealingwind.lineWidth + 1);
                                        bodyrobe.lineTo(goldenletter, crystalarmor.height + cresthealingwind.lineWidth);
                                    }
                                    bodyrobe.fillStyle = cresthealingwind.fillStyle;
                                    bodyrobe.fill();
                                }
                            }
                            if (cresthealingwind.strokeStyle && 'none' !== cresthealingwind.strokeStyle) {
                                bodyrobe.stroke();
                            }
                            bodyrobe.closePath();
                        } else {
                            for (var mackerelcat = (this.valueRange.max - this.valueRange.min) / tower.grid.verticalSections, platefeetcue = crystalarmor.height / tower.grid.verticalSections, accessoryhair = 1; accessoryhair < tower.grid.verticalSections; accessoryhair++) {
                                var antler = crystalarmor.height - Math.round(accessoryhair * platefeetcue);
                                if (tower.grid.sharpLines) {
                                    antler -= 0.5;
                                }
                                var warehousestorable = tower.yIntermediateFormatter(this.valueRange.min + accessoryhair * mackerelcat, tower.labels.precision);
                                intermediateLabelPos = tower.labels.intermediateLabelSameAxis ? tower.scrollBackwards ? 0 : crystalarmor.width - bodyrobe.measureText(warehousestorable).width - 2 : tower.scrollBackwards ? crystalarmor.width - bodyrobe.measureText(warehousestorable).width - 2 : 0;
                                bodyrobe.fillText(warehousestorable, intermediateLabelPos, antler - tower.grid.lineWidth);
                            }
                        }
                    }
                    bodyrobe.restore();
                }
            }
            if (tower.tooltip && this.mouseX >= 0) {
                bodyrobe.lineWidth = tower.tooltipLine.lineWidth;
                bodyrobe.strokeStyle = tower.tooltipLine.strokeStyle;
                bodyrobe.beginPath();
                bodyrobe.moveTo(this.mouseX, 0);
                bodyrobe.lineTo(this.mouseX, crystalarmor.height);
                bodyrobe.closePath();
                bodyrobe.stroke();
                this.updateTooltip();
            }
            if (!tower.labels.disabled && !isNaN(this.valueRange.min) && !isNaN(this.valueRange.max)) {
                if ('sCsyT' !== 'ZwMBo') {
                    var unconfirmed = tower.yMaxFormatter(this.valueRange.max, tower.labels.precision),
                        subtractminz = tower.yMinFormatter(this.valueRange.min, tower.labels.precision),
                        move = tower.scrollBackwards ? 0 : crystalarmor.width - bodyrobe.measureText(unconfirmed).width - 2,
                        darkshard = tower.scrollBackwards ? 0 : crystalarmor.width - bodyrobe.measureText(subtractminz).width - 2;
                    bodyrobe.fillStyle = tower.labels.fillStyle;
                    bodyrobe.fillText(unconfirmed, move, tower.labels.fontSize);
                    bodyrobe.fillText(subtractminz, darkshard, crystalarmor.height - 2);
                } else {
                    return (personwarehouse < 10 ? '0' : '') + personwarehouse;
                }
            }
            if (tower.labels.showIntermediateLabels && !isNaN(this.valueRange.min) && !isNaN(this.valueRange.max) && tower.grid.verticalSections > 0) {
                if ('LOCmA' !== 'LOCmA') {
                    this.tooltipEl = document.createElement('div');
                    this.tooltipEl.className = 'smoothie-chart-tooltip';
                    this.tooltipEl.style.position = 'absolute';
                    this.tooltipEl.style.display = 'none';
                    document.body.appendChild(this.tooltipEl);
                } else {
                    for (var blueenchantpotion = (this.valueRange.max - this.valueRange.min) / tower.grid.verticalSections, stoneofdimension = crystalarmor.height / tower.grid.verticalSections, token = 1; token < tower.grid.verticalSections; token++) {
                        var linkcustomizingid = crystalarmor.height - Math.round(token * stoneofdimension);
                        if (tower.grid.sharpLines) {
                            linkcustomizingid -= 0.5;
                        }
                        var ssalissaliking = tower.yIntermediateFormatter(this.valueRange.min + token * blueenchantpotion, tower.labels.precision);
                        intermediateLabelPos = tower.labels.intermediateLabelSameAxis ? tower.scrollBackwards ? 0 : crystalarmor.width - bodyrobe.measureText(ssalissaliking).width - 2 : tower.scrollBackwards ? crystalarmor.width - bodyrobe.measureText(ssalissaliking).width - 2 : 0;
                        bodyrobe.fillText(ssalissaliking, intermediateLabelPos, linkcustomizingid - tower.grid.lineWidth);
                    }
                }
            }
            if (tower.timestampFormatter && tower.grid.millisPerLine > 0) {
                for (var dyerecipe = tower.scrollBackwards ? bodyrobe.measureText(subtractminz).width : crystalarmor.width - bodyrobe.measureText(subtractminz).width + 4, cooltime = command - command % tower.grid.millisPerLine; cooltime >= itemmixid; cooltime -= tower.grid.millisPerLine) {
                    var whitescale = smallenergylivid(cooltime);
                    if (!tower.scrollBackwards && whitescale < dyerecipe || tower.scrollBackwards && whitescale > dyerecipe) {
                        if ('wSAIf' === 'sVmpd') {
                            if (tower.scrollBackwards) {
                                return Math.round((command - personwarehouse) / tower.millisPerPixel);
                            }
                            return Math.round(crystalarmor.width - (command - personwarehouse) / tower.millisPerPixel);
                        } else {
                            var crestspeedupaura = new Date(cooltime),
                                cresthookthrow = tower.timestampFormatter(crestspeedupaura),
                                lucky = bodyrobe.measureText(cresthookthrow).width;
                            dyerecipe = tower.scrollBackwards ? whitescale + lucky + 2 : whitescale - lucky - 2;
                            bodyrobe.fillStyle = tower.labels.fillStyle;
                            if (tower.scrollBackwards) {
                                bodyrobe.fillText(cresthookthrow, whitescale, crystalarmor.height - 2);
                            } else {
                                if ('XgGTR' !== 'XgGTR') {
                                    jawbone -= Math.abs(jawbone * personwarehouse.minValueScale - jawbone);
                                } else {
                                    bodyrobe.fillText(cresthookthrow, whitescale - lucky, crystalarmor.height - 2);
                                }
                            }
                        }
                    }
                }
            }
            if ('' !== tower.title.text) {
                bodyrobe.font = tower.title.fontSize + 'px ' + tower.title.fontFamily;
                var inactive = tower.scrollBackwards ? crystalarmor.width - bodyrobe.measureText(tower.title.text).width - 2 : 2;
                if ('bottom' == tower.title.verticalAlign) {
                    bodyrobe.textBaseline = 'bottom';
                    var stoneplate = crystalarmor.height;
                } else if ('middle' == tower.title.verticalAlign) {
                    bodyrobe.textBaseline = 'middle';
                    var stoneplate = crystalarmor.height / 2;
                } else {
                    if ('zqzYl' === 'zqzYl') {
                        bodyrobe.textBaseline = 'top';
                        var stoneplate = 0;
                    } else {
                        bodyrobe.textBaseline = 'middle';
                        var rubberduck = crystalarmor.height / 2;
                    }
                }
                bodyrobe.fillStyle = tower.title.fillStyle;
                bodyrobe.fillText(tower.title.text, inactive, stoneplate);
            }
            bodyrobe.restore();
        }
    };
    food.timeFormatter = function(personwarehouse) {
        if ('CQmQX' === 'vMmtD') {
            return;
        } else {
            function command(personwarehouse) {
                return (personwarehouse < 10 ? '0' : '') + personwarehouse;
            }
            return command(personwarehouse.getHours()) + ':' + command(personwarehouse.getMinutes()) + ':' + command(personwarehouse.getSeconds());
        }
    };
    personwarehouse.TimeSeries = jawbone;
    personwarehouse.SmoothieChart = food;
}('undefined' === typeof exports ? this : exports));