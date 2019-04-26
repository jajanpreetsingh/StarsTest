module objects {
    export class PokerResults {
        resultCards: objects.Card[] = []

        result: boolean = false

        pocketCards: objects.Card[];
        flopCards: objects.Card[];
        turnCard: objects.Card;
        riverCard: objects.Card;

        resultText: string = "";


        constructor(pocketCards: objects.Card[],
            flopCards: objects.Card[],
            turnCard: objects.Card,
            riverCard: objects.Card) {

            this.pocketCards = pocketCards;
            this.flopCards = flopCards;
            this.turnCard = turnCard;
            this.riverCard = riverCard;
        }

        GiveResults(): void {
            if (this.resultCards != null && this.resultCards.length > 0) {
                for (let i = 0; i < this.resultCards.length; i++) {
                    console.log(this.resultCards[i].name)
                }
            }
        }

        FindHandRank(): void {
            let result: boolean = false;

            result = this.CheckStraightFlush();

            if (!result) {
                result = this.CheckGroupFour();
            }

            if (!result) {
                result = this.CheckFullHouse();
            }

            if (!result) {
                result = this.CheckFlush();
            }

            if (!result) {
                result = this.CheckStraight();
            }

            if (!result) {
                result = this.CheckGroupThree();
            }

            if (!result) {
                result = this.CheckTwoPairs();
            }

            if (!result) {
                result = this.CheckOnePair();
            }

            if (!result) {
                result = this.GiveHighCard();
            }
        }

        CheckStraightFlush(): boolean {//sequence and set

            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;

            let firstCard: objects.Card = this.pocketCards[0];
            let secondCard: objects.Card = this.pocketCards[1];

            if (firstCard.setType != secondCard.setType)
                return false;

            let otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort((a, b) => (a.cardType > b.cardType) ? 1 : -1);

            let setSearch: objects.DeckSet = firstCard.setType;

            //pocket card were sorted
            let diff = secondCard.cardType - firstCard.cardType - 1;

            //find all cards that are same set as pocket/hole cards and lie between them or in sequence with them
            // for hole cards to be parts of 5 card sequence, there can be max 3 cards b/w them
            switch (diff) {
                case 0: // when both your cards are consecutive

                    //best case -> try find next 3 higher number than your own high card
                    let filtered = otherCards.filter(x => x.cardType > secondCard.cardType
                        && x.cardType <= secondCard.cardType + 3
                        && x.setType == setSearch);

                    if (filtered != null && filtered.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(filtered);
                        return true;
                    }

                    // next best -find two above high card and one below low card
                    let high2 = otherCards.filter(x => x.cardType > secondCard.cardType
                        && x.cardType <= secondCard.cardType + 2
                        && x.setType == setSearch);

                    let oneLow = otherCards.filter(x => x.cardType < firstCard.cardType - 1
                        && x.setType == setSearch);

                    if (high2 != null && high2.length == 2 && oneLow != null && oneLow.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(high2).concat(oneLow);
                        return true;
                    }

                    //next - find one high and 2 low

                    let highOne = otherCards.filter(x => x.cardType == secondCard.cardType + 1
                        && x.setType == setSearch);

                    let TwoLow = otherCards.filter(x => x.cardType <= firstCard.cardType - 1
                        && x.cardType >= firstCard.cardType - 2
                        && x.setType == setSearch);

                    if (TwoLow != null && TwoLow.length == 2 && highOne != null && highOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(highOne).concat(TwoLow);
                        return true;
                    }

                    //worst case in consecutive hole cards- find 3 lower than your lower pocket card
                    let low3 = otherCards.filter(x => x.cardType <= firstCard.cardType - 1
                        && x.cardType >= firstCard.cardType - 3
                        && x.setType == setSearch);

                    if (low3 != null && low3.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(low3);
                        return true;
                    }
                    break; // end of case with consecutive hole cards



                case 1:

                    // 3 cases -

                    //2 higher than your 2nd card and one lower

                    let highertwo = otherCards.filter(x => x.cardType >= secondCard.cardType + 2
                        && x.cardType <= secondCard.cardType + 1
                        && x.setType == setSearch);
                    let lowerOne = otherCards.filter(x => x.cardType == secondCard.cardType - 1
                        && x.setType == setSearch);

                    if (highertwo != null && highertwo.length == 2 && lowerOne != null && lowerOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(lowerOne).concat(highertwo);
                        return true;
                    }

                    //one higher than your 2nd card, one lower than 2nd card and one lower than 1st card

                    let inbetweens = otherCards.filter(x => (x.cardType == secondCard.cardType + 1
                        || x.cardType == secondCard.cardType - 1 || x.cardType == firstCard.cardType - 1)
                        && x.setType == setSearch);

                    if (inbetweens != null && inbetweens.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(inbetweens);
                        return true;
                    }

                    //2 lower than your lower and 1 higher than your lower
                    let lowertwo = otherCards.filter(x => x.cardType >= firstCard.cardType - 2
                        && x.cardType <= firstCard.cardType - 1
                        && x.setType == setSearch);
                    let higherOne = otherCards.filter(x => x.cardType == firstCard.cardType + 1
                        && x.setType == setSearch);

                    if (lowertwo != null && lowertwo.length == 2 && higherOne != null && higherOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(higherOne).concat(lowertwo);
                        return true;
                    }

                    break; // end of case when hole cards have number between them


                case 2:
                    // 2 cases

                    //2 lower than second card and one higher

                    let aroundSecond = otherCards.filter(x => (x.cardType == secondCard.cardType - 2
                        || x.cardType == secondCard.cardType - 1 || x.cardType == secondCard.cardType + 1)
                        && x.setType == setSearch);

                    if (aroundSecond != null && aroundSecond.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(aroundSecond);
                        return true;
                    }

                    //2 higher than first card and 1 lower
                    let aroundFirst = otherCards.filter(x => (x.cardType == firstCard.cardType + 2
                        || x.cardType == firstCard.cardType + 1 || x.cardType == firstCard.cardType - 1)
                        && x.setType == setSearch);

                    if (aroundFirst != null && aroundFirst.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(aroundFirst);
                        return true;
                    }
                    break;


                case 3: // all other cards lie in between

                    //find 3 lower than second card

                    let lower3 = otherCards.filter(x => x.cardType >= secondCard.cardType - 3
                        && x.cardType <= secondCard.cardType - 1
                        && x.setType == setSearch);

                    if (lower3 != null && lower3.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(lower3);
                        return true;
                    }

                    break;
            }

            return false;
        }

        CheckGroupFour(): boolean {

            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;

            let firstCard: objects.Card = this.pocketCards[0];
            let secondCard: objects.Card = this.pocketCards[1];

            if (firstCard.cardType != secondCard.cardType)
                return false;

            let otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort((a, b) => (a.cardType > b.cardType) ? 1 : -1);

            let filter = otherCards.filter(x => x.cardType == firstCard.cardType);

            if (filter != null && filter.length == 2) {//other two cards
                this.resultCards = this.resultCards.concat(this.pocketCards).concat(filter);
                return true;
            }

            return false;
        }

        CheckFullHouse(): boolean {//triple and a pair

            return false;
        }

        CheckFlush(): boolean {//all of same set

            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;

            let firstCard: objects.Card = this.pocketCards[0];
            let secondCard: objects.Card = this.pocketCards[1];

            if (firstCard.setType != secondCard.setType)
                return false;

            let otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort((a, b) => (a.cardType > b.cardType) ? 1 : -1);

            let filter = otherCards.filter(x => x.setType == firstCard.setType)
                .sort((a, b) => (a.cardType < b.cardType) ? 1 : -1); // reverse sort

            if (filter != null && filter.length > 3) {//take highest 3
                filter = filter.splice(0, 3);
            }

            if (filter != null && filter.length == 3) {//other 3 cards
                this.resultCards = this.resultCards.concat(this.pocketCards).concat(filter);
                return true;
            }

            return false;
        }

        CheckStraight(): boolean {// sequence

            // same cases as straight flush but without deck set filter

            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;

            let firstCard: objects.Card = this.pocketCards[0];
            let secondCard: objects.Card = this.pocketCards[1];

            let otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort((a, b) => (a.cardType > b.cardType) ? 1 : -1);

            //pocket card were sorted
            let diff = secondCard.cardType - firstCard.cardType - 1;

            //find all cards that are same set as pocket/hole cards and lie between them or in sequence with them
            // for hole cards to be parts of 5 card sequence, there can be max 3 cards b/w them
            switch (diff) {
                case 0: // when both your cards are consecutive

                    //best case -> try find next 3 higher number than your own high card
                    let filtered = otherCards.filter(x => x.cardType > secondCard.cardType
                        && x.cardType <= secondCard.cardType + 3);

                    if (filtered != null && filtered.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(filtered);
                        return true;
                    }

                    // next best -find two above high card and one below low card
                    let high2 = otherCards.filter(x => x.cardType > secondCard.cardType
                        && x.cardType <= secondCard.cardType + 2);

                    let oneLow = otherCards.filter(x => x.cardType < firstCard.cardType - 1);

                    if (high2 != null && high2.length == 2 && oneLow != null && oneLow.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(high2).concat(oneLow);
                        return true;
                    }

                    //next - find one high and 2 low

                    let highOne = otherCards.filter(x => x.cardType == secondCard.cardType + 1);

                    let TwoLow = otherCards.filter(x => x.cardType <= firstCard.cardType - 1
                        && x.cardType >= firstCard.cardType - 2);

                    if (TwoLow != null && TwoLow.length == 2 && highOne != null && highOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(highOne).concat(TwoLow);
                        return true;
                    }

                    //worst case in consecutive hole cards- find 3 lower than your lower pocket card
                    let low3 = otherCards.filter(x => x.cardType <= firstCard.cardType - 1
                        && x.cardType >= firstCard.cardType - 3);

                    if (low3 != null && low3.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(low3);
                        return true;
                    }
                    break; // end of case with consecutive hole cards



                case 1:

                    // 3 cases -

                    //2 higher than your 2nd card and one lower

                    let highertwo = otherCards.filter(x => x.cardType >= secondCard.cardType + 2
                        && x.cardType <= secondCard.cardType + 1);
                    let lowerOne = otherCards.filter(x => x.cardType == secondCard.cardType - 1);

                    if (highertwo != null && highertwo.length == 2 && lowerOne != null && lowerOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(lowerOne).concat(highertwo);
                        return true;
                    }

                    //one higher than your 2nd card, one lower than 2nd card and one lower than 1st card

                    let inbetweens = otherCards.filter(x => x.cardType == secondCard.cardType + 1
                        || x.cardType == secondCard.cardType - 1 || x.cardType == firstCard.cardType - 1);

                    if (inbetweens != null && inbetweens.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(inbetweens);
                        return true;
                    }

                    //2 lower than your lower and 1 higher than your lower
                    let lowertwo = otherCards.filter(x => x.cardType >= firstCard.cardType - 2
                        && x.cardType <= firstCard.cardType - 1);
                    let higherOne = otherCards.filter(x => x.cardType == firstCard.cardType + 1);

                    if (lowertwo != null && lowertwo.length == 2 && higherOne != null && higherOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(higherOne).concat(lowertwo);
                        return true;
                    }

                    break; // end of case when hole cards have number between them


                case 2:
                    // 2 cases

                    //2 lower than second card and one higher

                    let aroundSecond = otherCards.filter(x => (x.cardType == secondCard.cardType - 2
                        || x.cardType == secondCard.cardType - 1 || x.cardType == secondCard.cardType + 1));

                    if (aroundSecond != null && aroundSecond.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(aroundSecond);
                        return true;
                    }

                    //2 higher than first card and 1 lower
                    let aroundFirst = otherCards.filter(x => (x.cardType == firstCard.cardType + 2
                        || x.cardType == firstCard.cardType + 1 || x.cardType == firstCard.cardType - 1));

                    if (aroundFirst != null && aroundFirst.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(aroundFirst);
                        return true;
                    }
                    break;


                case 3: // all other cards lie in between

                    //find 3 lower than second card

                    let lower3 = otherCards.filter(x => x.cardType >= secondCard.cardType - 3
                        && x.cardType <= secondCard.cardType - 1);

                    if (lower3 != null && lower3.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(lower3);
                        return true;
                    }

                    break;
            }

            return false;
        }

        CheckGroupThree(): boolean {

            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;

            let firstCard: objects.Card = this.pocketCards[0];
            let secondCard: objects.Card = this.pocketCards[1];

            if (firstCard.cardType != secondCard.cardType)
                return false;

            let otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort((a, b) => (a.cardType > b.cardType) ? 1 : -1);

            let filter = otherCards.filter(x => x.cardType == firstCard.cardType);

            if (filter != null && filter.length >= 1) {//third card
                this.resultCards = this.resultCards.concat(this.pocketCards).concat(filter);
                return true;
            }

            return false;
        }

        CheckTwoPairs(): boolean {

            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;

            let firstCard: objects.Card = this.pocketCards[0];
            let secondCard: objects.Card = this.pocketCards[1];

            let otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort((a, b) => (a.cardType > b.cardType) ? 1 : -1);

            if (firstCard.cardType == secondCard.cardType) {
                //find second pair

                let filter: objects.Card[] = [];
                for (let i = objects.CardType.TWO_2; i <= objects.CardType.ACE_A; i++) {
                    let iFil: objects.Card[] = [];
                    iFil = otherCards.filter(x => x.cardType == i);

                    if (iFil != null && iFil.length >= 2) {// replaces with highest possible pair
                        filter = iFil.splice(2);
                    }
                }

                if (filter != null && filter.length >= 2) {//third card
                    this.resultCards = this.resultCards.concat(this.pocketCards).concat(filter);
                    return true;
                }
            }
            else {
                // find one card same rank card for each hole card

                let firstSiblings = otherCards.filter(x => x.cardType == firstCard.cardType);

                let secondSiblings = otherCards.filter(x => x.cardType == secondCard.cardType);

                if (firstSiblings != null && secondSiblings != null && firstSiblings.length >= 1 && secondSiblings.length >= 1) {
                    this.resultCards = this.resultCards.concat(this.pocketCards).concat(firstSiblings[0]).concat(secondSiblings[0]);
                    return true;
                }
            }

            return false;
        }

        CheckOnePair(): boolean {

            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;

            let firstCard: objects.Card = this.pocketCards[0];
            let secondCard: objects.Card = this.pocketCards[1];

            let otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort((a, b) => (a.cardType > b.cardType) ? 1 : -1);

            if (firstCard.cardType == secondCard.cardType) {
                this.resultCards = this.resultCards.concat(this.pocketCards);
                return true;
            }
            else {
                // find one card same rank card for each hole card

                let firstSiblings = otherCards.filter(x => x.cardType == firstCard.cardType);

                let secondSiblings = otherCards.filter(x => x.cardType == secondCard.cardType);

                if (secondSiblings != null && secondSiblings.length >= 1) {
                    this.resultCards = this.resultCards.concat(this.pocketCards).concat(secondSiblings[0]);
                    return true;
                }
                else if (firstSiblings != null && firstSiblings.length >= 1) {
                    this.resultCards = this.resultCards.concat(this.pocketCards).concat(firstSiblings[0]);
                    return true;
                }
            }

            return false;
        }

        GiveHighCard(): boolean {
            this.resultCards.push(this.pocketCards[1]); // since pocket cards were sorted

            return true;
        }
    }
}