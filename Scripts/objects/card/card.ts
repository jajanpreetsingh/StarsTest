module objects {

    export enum CardType {
        REAR_card_back_red,//     =                 "0",
        TWO_2,//      =                 "2",
        THREE_3,//        =                 "3",
        FOUR_4,//       =                 "4",
        FIVE_5,//       =                 "5",
        SIX_6,//      =                 "6",
        SEVEN_7,//        =                 "7",
        EIGHT_8,//        =                 "8",
        NINE_9,//       =                 "9",
        TEN_T,//       =                 "10",
        JACK_J,//       =                 "J",
        QUEEN_Q,//        =                 "Q",
        KING_K,//       =                 "K",
        ACE_A,//      =                 "A"
    }

    export enum DeckSet {
        CLUB,//    =                 "club",
        DIAMOND,//       =                 "diamond",
        HEART,//     =                 "heart",
        SPADE,//     =                 "spade"
    }

    export class Card extends objects.SpriteGameObject {

        cardType: CardType;
        setType: DeckSet;

        rotated: boolean;

        name: string;

        constructor(val: CardType, set: DeckSet, piv: config.Pivot = config.Pivot.MIDCENTER) {

            let type = CardType[val].toString();
            let deck = DeckSet[set].toString();

            let name = type.substring(1 + type.indexOf("_")).replace(/_/g, "-");

            if (val != CardType.REAR_card_back_red) {
                name += deck.substring(0, 1).toLowerCase();
            }
            super(name, new math.Vec2(0, 0), piv);

            this.name = name;

            if (this.RotatedCardList().indexOf(name) >= 0) {
                this.rotation = -90;
                this.rotated = true;
            }
            else {
                this.rotated = false;
            }
        }

        RotatedCardList(): string[] {
            return ["8h", "8s", "8d", "9c", "Ah", "As", "Ad", "Kh", "Ks", "Jh", "Js", "Jd", "Qc", "Qs", "Qd", "Th", "Ts", "Tc",];
        }
    }
}