module scenes {
    export abstract class Scene extends createjs.Container {

        sceneState: config.Scene;

        constructor() {
            super();
        }

        public abstract Init(): void;

        public abstract Start(): void;

        public abstract Update(): void;

        public abstract Reset(): void;

        public abstract Destroy(): void;

        public abstract Main(): void;
    }
}