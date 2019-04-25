var managers;
(function (managers) {
    var ResourceManager = /** @class */ (function () {
        function ResourceManager(callback) {
            this.assetManager = new createjs.LoadQueue();
            this.assetManager.on("complete", callback);
            var assetManifest = [];
            this.assetManager.installPlugin(createjs.Sound); //enable sound preloading
            resources.Resources.BitmapData.forEach(function (x) {
                x.Sprites.forEach(function (y) {
                    assetManifest.push(y);
                });
                x.Sounds.forEach(function (y) {
                    assetManifest.push(y);
                });
            });
            this.assetManager.loadManifest(assetManifest);
        }
        Object.defineProperty(ResourceManager.prototype, "AssetManager", {
            get: function () {
                return this.assetManager;
            },
            enumerable: true,
            configurable: true
        });
        return ResourceManager;
    }());
    managers.ResourceManager = ResourceManager;
})(managers || (managers = {}));
//# sourceMappingURL=resource-manager.js.map