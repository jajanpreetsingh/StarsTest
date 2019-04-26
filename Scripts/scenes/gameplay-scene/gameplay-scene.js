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
            _this.cards = [];
            _this.flopCards = [];
            _this.communityCardCount = 0;
            _this.players = [];
            _this.maxPlayerCount = 4;
            _this.playerCount = 1;
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
        GameplayScene.prototype.InitCards = function () {
            var start = objects.CardType.TWO_2;
            var end = objects.CardType.ACE_A;
            for (var i = start; i <= end; i++) {
                var cardType = i;
                var dstart = objects.DeckSet.CLUB;
                var dend = objects.DeckSet.SPADE;
                for (var j = dstart; j <= dend; j++) {
                    var decktype = j;
                    var c = new objects.Card(cardType, decktype);
                    if (!c.rotated) {
                        c.SetPosition(managers.GameManager.Screen.TopCenter.AddY(c.ActiveHeight * 0.5));
                        if (this.refDimen == null) {
                            this.refDimen = new math.Vec2(c.ActiveWidth, c.ActiveHeight);
                        }
                    }
                    else
                        c.SetPosition(managers.GameManager.Screen.TopCenter.AddY(c.ActiveWidth * 0.5));
                    c.alpha = 1;
                    this.addChild(c);
                    this.cards.push(c);
                }
            }
            this.rearCard = new objects.Card(objects.CardType.REAR_card_back_red, objects.DeckSet.CLUB);
            this.rearCard.SetPosition(managers.GameManager.Screen.TopCenter.AddY(this.rearCard.ActiveHeight * 0.5));
            this.addChild(this.rearCard);
        };
        GameplayScene.prototype.Main = function () {
            this.SetupBackground();
            this.InitCards();
            this.InitDealButton();
            this.ShuffleCards();
            this.SetupPlayers();
        };
        GameplayScene.prototype.InitDealButton = function () {
            this.dealButton = new objects.Button("amberNormal");
            this.dealButton.SetPosition(managers.GameManager.Screen.MidLeft.AddX(this.dealButton.OriginalWidth * 0.5));
            this.addChild(this.dealButton);
            this.dealText = new objects.Label("Deal", "30px", "Acme", utility.Colors.WHITE);
            this.dealText.x = this.dealButton.Position.x;
            this.dealText.y = this.dealButton.Position.y;
            this.dealButton.addEventListener("click", this.DealPocketCards.bind(this));
            this.addChild(this.dealText);
            this.commCardFirstPos = this.dealButton.Position.AddX(this.refDimen.x * 1.5);
        };
        GameplayScene.prototype.SetupBackground = function () {
            this.bg = new objects.Background();
            this.bg.SetScale(managers.GameManager.Screen.Height / this.bg.OriginalHeight);
            this.bg.SetPosition(managers.GameManager.Screen.Center);
            this.addChild(this.bg);
        };
        GameplayScene.prototype.ShuffleCards = function () {
            for (var i = 0; i < this.cards.length; i++) {
                var rand = Math.floor(Math.random() * this.cards.length - 1);
                if (rand == i || rand >= this.cards.length || rand < 0)
                    continue;
                var ctemp = this.cards[i];
                this.cards[i] = this.cards[rand];
                this.cards[rand] = ctemp;
            }
        };
        GameplayScene.prototype.SetupPlayers = function () {
            for (var i = 0; i < this.playerCount; i++) {
                var p = new objects.Player();
                this.players.push(p);
            }
        };
        GameplayScene.prototype.DealPocketCards = function () {
            var startPos = managers.GameManager.Screen.BottomCenter
                .AddVec(-this.refDimen.x * 0.5, -this.refDimen.y * 0.5);
            //deal 2 cards to each player 
            for (var i = 0; i < 2; i++) {
                var newPos = startPos.AddX(i * this.refDimen.x);
                for (var j = 0; j < this.playerCount; j++) {
                    var c = this.cards[0];
                    this.cards.splice(0, 1);
                    this.players[j].pocketCards.push(c);
                    createjs.Tween.get(c).to({ x: newPos.x, y: newPos.y }, 500);
                }
            }
            this.dealText.text = "Check Flop";
            this.dealText.Recenter();
            this.dealButton.removeAllEventListeners();
            this.dealButton.addEventListener("click", this.RevealFlop.bind(this));
        };
        GameplayScene.prototype.RevealFlop = function () {
            this.ShuffleCards();
            var startPos = this.commCardFirstPos;
            for (var i = 0; i < 3; i++) {
                var newPos = startPos.AddX(this.communityCardCount * this.refDimen.x);
                var c = this.cards[0];
                this.cards.splice(0, 1);
                createjs.Tween.get(c).to({ x: newPos.x, y: newPos.y }, 500);
                ++this.communityCardCount;
                this.flopCards.push(c);
            }
            this.dealText.text = "Check Turn";
            this.dealText.Recenter();
            this.dealButton.removeAllEventListeners();
            this.dealButton.addEventListener("click", this.RevealTurn.bind(this));
        };
        GameplayScene.prototype.RevealTurn = function () {
            this.ShuffleCards();
            var startPos = this.commCardFirstPos;
            var newPos = startPos.AddX(this.communityCardCount * this.refDimen.x);
            var c = this.cards[0];
            this.cards.splice(0, 1);
            createjs.Tween.get(c).to({ x: newPos.x, y: newPos.y }, 500);
            ++this.communityCardCount;
            this.turnCard = c;
            this.dealText.text = "Check River";
            this.dealText.Recenter();
            this.dealButton.removeAllEventListeners();
            this.dealButton.addEventListener("click", this.RevealRiver.bind(this));
        };
        GameplayScene.prototype.RevealRiver = function () {
            this.ShuffleCards();
            var startPos = this.commCardFirstPos;
            var newPos = startPos.AddX(this.communityCardCount * this.refDimen.x);
            var c = this.cards[0];
            this.cards.splice(0, 1);
            createjs.Tween.get(c).to({ x: newPos.x, y: newPos.y }, 500);
            ++this.communityCardCount;
            this.riverCard = c;
            this.dealText.text = "Deal Again";
            this.dealText.Recenter();
            this.dealButton.removeAllEventListeners();
            this.dealButton.addEventListener("click", this.Reset.bind(this));
            //calculate hand rank
        };
        GameplayScene.prototype.CheckStraightFlush = function (player) {
            if (player == null || player.pocketCards == null || player.pocketCards.length <= 0)
                return false;
            var rankCards = [];
            rankCards.concat(player.pocketCards)
                .concat(this.flopCards)
                .concat(this.turnCard)
                .concat(this.riverCard);
            rankCards.sort(function (x) { return x.cardType; });
            console.log(rankCards);
            var result = false;
            for (var i = 0; i < 3; i++) {
                for (var j = i + 1; j < i + 5; i++) {
                    if (rankCards[i].cardType + j == rankCards[j].cardType)
                        continue;
                    else
                        break;
                }
            }
        };
        return GameplayScene;
    }(scenes.Scene));
    scenes.GameplayScene = GameplayScene;
    var GameplayChildIndex;
    (function (GameplayChildIndex) {
    })(GameplayChildIndex = scenes.GameplayChildIndex || (scenes.GameplayChildIndex = {}));
})(scenes || (scenes = {}));
//# sourceMappingURL=gameplay-scene.js.map