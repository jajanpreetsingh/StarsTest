module managers {
    export class GameManager {
        public static ResourceManager: managers.ResourceManager;
        public static Stage: createjs.Stage;
        public static CurrentState: config.Scene;
        public static TextureAtlas: createjs.SpriteSheet
        public static Screen: config.Screen;
        public static CurrentScene: scenes.Scene;
    }
}