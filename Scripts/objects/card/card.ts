module objects {

    export enum CardType {
        REAR,//     =                 "0",
        TWO_2,//      =                 "2",
        THREE_3,//        =                 "3",
        FOUR_4,//       =                 "4",
        FIVE_5,//       =                 "5",
        SIX_6,//      =                 "6",
        SEVEN_7,//        =                 "7",
        EIGHT_8,//        =                 "8",
        NINE_9,//       =                 "9",
        TEN_10,//       =                 "10",
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

        constructor(val: CardType, set: DeckSet) {

            let type = CardType[val].toString();
            let deck = DeckSet[set].toString();

            let name = type.substring(1 + type.indexOf("_")) + deck.substring(0, 1).toLowerCase();

            console.log(name);

            super(name);
        }
    }
}