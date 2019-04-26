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
var objects;
(function (objects) {
    var CardType;
    (function (CardType) {
        CardType[CardType["REAR_card_back_red"] = 0] = "REAR_card_back_red";
        CardType[CardType["TWO_2"] = 2] = "TWO_2";
        CardType[CardType["THREE_3"] = 3] = "THREE_3";
        CardType[CardType["FOUR_4"] = 4] = "FOUR_4";
        CardType[CardType["FIVE_5"] = 5] = "FIVE_5";
        CardType[CardType["SIX_6"] = 6] = "SIX_6";
        CardType[CardType["SEVEN_7"] = 7] = "SEVEN_7";
        CardType[CardType["EIGHT_8"] = 8] = "EIGHT_8";
        CardType[CardType["NINE_9"] = 9] = "NINE_9";
        CardType[CardType["TEN_T"] = 10] = "TEN_T";
        CardType[CardType["JACK_J"] = 11] = "JACK_J";
        CardType[CardType["QUEEN_Q"] = 12] = "QUEEN_Q";
        CardType[CardType["KING_K"] = 13] = "KING_K";
        CardType[CardType["ACE_A"] = 14] = "ACE_A";
    })(CardType = objects.CardType || (objects.CardType = {}));
    var DeckSet;
    (function (DeckSet) {
        DeckSet[DeckSet["CLUB"] = 0] = "CLUB";
        DeckSet[DeckSet["DIAMOND"] = 1] = "DIAMOND";
        DeckSet[DeckSet["HEART"] = 2] = "HEART";
        DeckSet[DeckSet["SPADE"] = 3] = "SPADE";
    })(DeckSet = objects.DeckSet || (objects.DeckSet = {}));
    var Card = /** @class */ (function (_super) {
        __extends(Card, _super);
        function Card(val, set, piv) {
            if (piv === void 0) { piv = config.Pivot.MIDCENTER; }
            var _this = this;
            var type = CardType[val].toString();
            var deck = DeckSet[set].toString();
            var name = type.substring(1 + type.indexOf("_")).replace(/_/g, "-");
            if (val != CardType.REAR_card_back_red) {
                name += deck.substring(0, 1).toLowerCase();
            }
            _this = _super.call(this, name, new math.Vec2(0, 0), piv) || this;
            _this.cardType = val;
            _this.setType = set;
            _this.name = name;
            if (_this.RotatedCardList().indexOf(name) >= 0) {
                _this.rotation = -90;
                _this.rotated = true;
            }
            else {
                _this.rotated = false;
            }
            return _this;
        }
        Card.prototype.RotatedCardList = function () {
            return ["8h", "8s", "8d", "9c", "Ah", "As", "Ad", "Kh", "Ks", "Jh", "Js", "Jd", "Qc", "Qs", "Qd", "Th", "Ts", "Tc",];
        };
        return Card;
    }(objects.SpriteGameObject));
    objects.Card = Card;
})(objects || (objects = {}));
//# sourceMappingURL=card.js.map