'use strict';
class V {
    constructor(ring) {
        this.__mod = ring.mod;
        this.__state = ring.state;
    } ['getVersion'](ignoreobstacleshorttel) {
        let normalcue = this.__state.defsVersions[ignoreobstacleshorttel][this.__mod.majorPatchVersion];
        return normalcue ? [ignoreobstacleshorttel, normalcue] : [ignoreobstacleshorttel, this.__state.defsVersions[ignoreobstacleshorttel]['*']];
    } ['getDefsInfo']() {
        let crestcurewing = [];
        Object.keys(this.__state.defsVersions).forEach(head => {
            crestcurewing.push([head, this.getVersion(head)]);
        });
        return crestcurewing;
    }
}
module.exports = V;