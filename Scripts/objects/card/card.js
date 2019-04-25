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
        CardType[CardType["REAR"] = 0] = "REAR";
        CardType[CardType["TWO_2"] = 1] = "TWO_2";
        CardType[CardType["THREE_3"] = 2] = "THREE_3";
        CardType[CardType["FOUR_4"] = 3] = "FOUR_4";
        CardType[CardType["FIVE_5"] = 4] = "FIVE_5";
        CardType[CardType["SIX_6"] = 5] = "SIX_6";
        CardType[CardType["SEVEN_7"] = 6] = "SEVEN_7";
        CardType[CardType["EIGHT_8"] = 7] = "EIGHT_8";
        CardType[CardType["NINE_9"] = 8] = "NINE_9";
        CardType[CardType["TEN_10"] = 9] = "TEN_10";
        CardType[CardType["JACK_J"] = 10] = "JACK_J";
        CardType[CardType["QUEEN_Q"] = 11] = "QUEEN_Q";
        CardType[CardType["KING_K"] = 12] = "KING_K";
        CardType[CardType["ACE_A"] = 13] = "ACE_A";
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
        function Card(val, set) {
            var _this = this;
            var type = CardType[val].toString();
            var deck = DeckSet[set].toString();
            var name = type.substring(1 + type.indexOf("_")) + deck.substring(0, 1).toLowerCase();
            console.log(name);
            _this = _super.call(this, name) || this;
            return _this;
        }
        return Card;
    }(objects.SpriteGameObject));
    objects.Card = Card;
})(objects || (objects = {}));
//# sourceMappingURL=card.js.map