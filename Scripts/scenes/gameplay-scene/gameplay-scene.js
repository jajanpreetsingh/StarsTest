var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var scenes;
(function (scenes) {
    var GameplayScene = /** @class */ (function (_super) {
        __extends(GameplayScene, _super);
        function GameplayScene() {
            var _this = _super.call(this) || this;
            _this.Init();
            return _this;
        }
        GameplayScene.prototype.Init = function () {
            this.sceneState = config.Scene.GAMEPLAY;
            managers.GameManager.CurrentScene = this;
            this.Start();
        };
        GameplayScene.prototype.Start = function () {
            this.Main();
        };
        GameplayScene.prototype.Update = function () {
        };
        GameplayScene.prototype.Reset = function () {
        };
        GameplayScene.prototype.Destroy = function () {
        };
        GameplayScene.prototype.Main = function () {
            this.bg = new objects.Background();
            this.bg.SetScale(managers.GameManager.Screen.Height / this.bg.OriginalHeight);
            this.bg.SetPosition(managers.GameManager.Screen.Center);
            this.addChild(this.bg);
            var card = new objects.Card(objects.CardType.JACK_J, objects.DeckSet.DIAMOND);
            card.regX = 0.5 * card.OriginalWidth;
            card.regY = 0.5 * card.OriginalHeight;
            card.SetPosition(managers.GameManager.Screen.TopLeft);
            card.rotation = -90;
            this.addChild(card);
        };
        return GameplayScene;
    }(scenes.Scene));
    scenes.GameplayScene = GameplayScene;
    var GameplayChildIndex;
    (function (GameplayChildIndex) {
    })(GameplayChildIndex = scenes.GameplayChildIndex || (scenes.GameplayChildIndex = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=gameplay-scene.js.map