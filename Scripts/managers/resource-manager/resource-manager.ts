module managers {
    export class ResourceManager {

        private assetManager: createjs.LoadQueue;

        get AssetManager(): createjs.LoadQueue {
            return this.assetManager;
        }

        constructor(callback: () => any) {

            this.assetManager = new createjs.LoadQueue();

            this.assetManager.on("complete", callback);

             let assetManifest: resources.Path[] = [];

            this.assetManager.installPlugin(createjs.Sound); //enable sound preloading

            resources.Resources.BitmapData.forEach(x => {

                x.Sprites.forEach(y => {
                    assetManifest.push(y);
                });

                x.Sounds.forEach(y => {
                    assetManifest.push(y);
                });
            });

            this.assetManager.loadManifest(assetManifest);
        }
    }
}