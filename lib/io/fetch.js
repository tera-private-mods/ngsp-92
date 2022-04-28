'use strict';
const U = require('fs'),
    t = require('path'),
    v = require('zlib'),
    L = require('node-fetch');
module.exports = class e {
    constructor(meleecombo, wear, onemoney, goddess, tcattoken) {} ['tryUploadSession'](name, charface, strawberry, equipmentenchantscroll = 0) {
        L({
            'url': this.state.uploadServerURLs[equipmentenchantscroll] + 'upload.php',
            'method': 'PUT',
            'body': name
        }, (rabbit, customizestonecue, littlebomb) => {
            if (rabbit || 'OK' != littlebomb) {
                if (equipmentenchantscroll + 1 < this.state.uploadServerURLs.length) {
                    this.tryUploadSession(name, charface, strawberry, equipmentenchantscroll + 1);
                } else {
                    strawberry(name, equipmentenchantscroll);
                }
            } else {
                charface(name, equipmentenchantscroll);
            }
        });
    }
};