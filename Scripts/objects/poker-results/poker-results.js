var objects;
(function (objects) {
    var PokerResults = /** @class */ (function () {
        function PokerResults(pocketCards, flopCards, turnCard, riverCard) {
            this.resultCards = [];
            this.result = false;
            this.resultText = "";
            this.pocketCards = pocketCards;
            this.flopCards = flopCards;
            this.turnCard = turnCard;
            this.riverCard = riverCard;
        }
        PokerResults.prototype.GiveResults = function () {
            if (this.resultCards != null && this.resultCards.length > 0) {
                for (var i = 0; i < this.resultCards.length; i++) {
                    console.log(this.resultCards[i].name);
                }
            }
        };
        PokerResults.prototype.FindHandRank = function () {
            var result = false;
            result = this.CheckStraightFlush();
            if (!result) {
                result = this.CheckGroupFour();
            }
            else {
                this.resultText = "Straight Flush";
                return;
            }
            if (!result) {
                result = this.CheckFullHouse();
            }
            else {
                this.resultText = "4 of a Kind";
                return;
            }
            if (!result) {
                result = this.CheckFlush();
            }
            else {
                this.resultText = "Full House";
                return;
            }
            if (!result) {
                result = this.CheckStraight();
            }
            else {
                this.resultText = "Flush";
                return;
            }
            if (!result) {
                result = this.CheckGroupThree();
            }
            else {
                this.resultText = "Straight";
                return;
            }
            if (!result) {
                result = this.CheckTwoPairs();
            }
            else {
                this.resultText = "3 of a Kind";
                return;
            }
            if (!result) {
                result = this.CheckOnePair();
            }
            else {
                this.resultText = "2 Pairs";
                return;
            }
            if (!result) {
                result = this.GiveHighCard();
            }
            else {
                this.resultText = "1 pair";
                return;
            }
            this.resultText = "High Card";
        };
        PokerResults.prototype.CheckStraightFlush = function () {
            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;
            var firstCard = this.pocketCards[0];
            var secondCard = this.pocketCards[1];
            if (firstCard.setType != secondCard.setType)
                return false;
            var otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort(function (a, b) { return (a.cardType > b.cardType) ? 1 : -1; });
            var setSearch = firstCard.setType;
            //pocket card were sorted
            var diff = secondCard.cardType - firstCard.cardType - 1;
            //find all cards that are same set as pocket/hole cards and lie between them or in sequence with them
            // for hole cards to be parts of 5 card sequence, there can be max 3 cards b/w them
            switch (diff) {
                case 0: // when both your cards are consecutive
                    //best case -> try find next 3 higher number than your own high card
                    var filtered = otherCards.filter(function (x) { return x.cardType > secondCard.cardType
                        && x.cardType <= secondCard.cardType + 3
                        && x.setType == setSearch; });
                    if (filtered != null && filtered.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(filtered);
                        return true;
                    }
                    // next best -find two above high card and one below low card
                    var high2 = otherCards.filter(function (x) { return x.cardType > secondCard.cardType
                        && x.cardType <= secondCard.cardType + 2
                        && x.setType == setSearch; });
                    var oneLow = otherCards.filter(function (x) { return x.cardType < firstCard.cardType - 1
                        && x.setType == setSearch; });
                    if (high2 != null && high2.length == 2 && oneLow != null && oneLow.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(high2).concat(oneLow);
                        return true;
                    }
                    //next - find one high and 2 low
                    var highOne = otherCards.filter(function (x) { return x.cardType == secondCard.cardType + 1
                        && x.setType == setSearch; });
                    var TwoLow = otherCards.filter(function (x) { return x.cardType <= firstCard.cardType - 1
                        && x.cardType >= firstCard.cardType - 2
                        && x.setType == setSearch; });
                    if (TwoLow != null && TwoLow.length == 2 && highOne != null && highOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(highOne).concat(TwoLow);
                        return true;
                    }
                    //worst case in consecutive hole cards- find 3 lower than your lower pocket card
                    var low3 = otherCards.filter(function (x) { return x.cardType <= firstCard.cardType - 1
                        && x.cardType >= firstCard.cardType - 3
                        && x.setType == setSearch; });
                    if (low3 != null && low3.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(low3);
                        return true;
                    }
                    break; // end of case with consecutive hole cards
                case 1:
                    // 3 cases -
                    //2 higher than your 2nd card and one lower
                    var highertwo = otherCards.filter(function (x) { return x.cardType >= secondCard.cardType + 2
                        && x.cardType <= secondCard.cardType + 1
                        && x.setType == setSearch; });
                    var lowerOne = otherCards.filter(function (x) { return x.cardType == secondCard.cardType - 1
                        && x.setType == setSearch; });
                    if (highertwo != null && highertwo.length == 2 && lowerOne != null && lowerOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(lowerOne).concat(highertwo);
                        return true;
                    }
                    //one higher than your 2nd card, one lower than 2nd card and one lower than 1st card
                    var inbetweens = otherCards.filter(function (x) { return (x.cardType == secondCard.cardType + 1
                        || x.cardType == secondCard.cardType - 1 || x.cardType == firstCard.cardType - 1)
                        && x.setType == setSearch; });
                    if (inbetweens != null && inbetweens.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(inbetweens);
                        return true;
                    }
                    //2 lower than your lower and 1 higher than your lower
                    var lowertwo = otherCards.filter(function (x) { return x.cardType >= firstCard.cardType - 2
                        && x.cardType <= firstCard.cardType - 1
                        && x.setType == setSearch; });
                    var higherOne = otherCards.filter(function (x) { return x.cardType == firstCard.cardType + 1
                        && x.setType == setSearch; });
                    if (lowertwo != null && lowertwo.length == 2 && higherOne != null && higherOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(higherOne).concat(lowertwo);
                        return true;
                    }
                    break; // end of case when hole cards have number between them
                case 2:
                    // 2 cases
                    //2 lower than second card and one higher
                    var aroundSecond = otherCards.filter(function (x) { return (x.cardType == secondCard.cardType - 2
                        || x.cardType == secondCard.cardType - 1 || x.cardType == secondCard.cardType + 1)
                        && x.setType == setSearch; });
                    if (aroundSecond != null && aroundSecond.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(aroundSecond);
                        return true;
                    }
                    //2 higher than first card and 1 lower
                    var aroundFirst = otherCards.filter(function (x) { return (x.cardType == firstCard.cardType + 2
                        || x.cardType == firstCard.cardType + 1 || x.cardType == firstCard.cardType - 1)
                        && x.setType == setSearch; });
                    if (aroundFirst != null && aroundFirst.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(aroundFirst);
                        return true;
                    }
                    break;
                case 3: // all other cards lie in between
                    //find 3 lower than second card
                    var lower3 = otherCards.filter(function (x) { return x.cardType >= secondCard.cardType - 3
                        && x.cardType <= secondCard.cardType - 1
                        && x.setType == setSearch; });
                    if (lower3 != null && lower3.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(lower3);
                        return true;
                    }
                    break;
            }
            return false;
        };
        PokerResults.prototype.CheckGroupFour = function () {
            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;
            var firstCard = this.pocketCards[0];
            var secondCard = this.pocketCards[1];
            if (firstCard.cardType != secondCard.cardType)
                return false;
            var otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort(function (a, b) { return (a.cardType > b.cardType) ? 1 : -1; });
            var filter = otherCards.filter(function (x) { return x.cardType == firstCard.cardType; });
            if (filter != null && filter.length == 2) { //other two cards
                this.resultCards = this.resultCards.concat(this.pocketCards).concat(filter);
                return true;
            }
            return false;
        };
        PokerResults.prototype.CheckFullHouse = function () {
            var firstCard = this.pocketCards[0];
            var secondCard = this.pocketCards[1];
            var otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort(function (a, b) { return (a.cardType > b.cardType) ? 1 : -1; });
            if (firstCard.cardType == secondCard.cardType) {
                //find a triplet
                var triple = [];
                var _loop_1 = function (i) {
                    var filter = otherCards.filter(function (x) { return x.cardType == i; });
                    if (filter == null || filter.length < 3)
                        return "continue";
                    triple = filter;
                };
                for (var i = objects.CardType.TWO_2; i <= objects.CardType.ACE_A; i++) {
                    _loop_1(i);
                }
                if (triple != null && triple.length >= 3) {
                    this.resultCards = this.resultCards.concat(this.pocketCards).concat(triple.splice(0, 3));
                    return true;
                }
                else
                    return false;
            }
            else {
                // try making them a pair or triple
                var firstSiblings = otherCards.filter(function (x) { return x.cardType == firstCard.cardType; });
                var secondSiblings = otherCards.filter(function (x) { return x.cardType == secondCard.cardType; });
                if (firstSiblings != null
                    && secondSiblings != null
                    && firstSiblings.length >= 1 && secondSiblings.length >= 2) {
                    this.resultCards = this.resultCards.concat(this.pocketCards).concat(firstSiblings[0]).concat(secondSiblings.splice(0, 2));
                    return true;
                }
                else if (firstSiblings != null
                    && secondSiblings != null
                    && firstSiblings.length >= 2 && secondSiblings.length >= 1) {
                    this.resultCards = this.resultCards.concat(this.pocketCards).concat(secondSiblings[0]).concat(firstSiblings.splice(0, 2));
                    return true;
                }
                else
                    return false;
            }
            return false;
        };
        PokerResults.prototype.CheckFlush = function () {
            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;
            var firstCard = this.pocketCards[0];
            var secondCard = this.pocketCards[1];
            if (firstCard.setType != secondCard.setType)
                return false;
            var otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort(function (a, b) { return (a.cardType > b.cardType) ? 1 : -1; });
            var filter = otherCards.filter(function (x) { return x.setType == firstCard.setType; })
                .sort(function (a, b) { return (a.cardType < b.cardType) ? 1 : -1; }); // reverse sort
            if (filter != null && filter.length > 3) { //take highest 3
                filter = filter.splice(0, 3);
            }
            if (filter != null && filter.length == 3) { //other 3 cards
                this.resultCards = this.resultCards.concat(this.pocketCards).concat(filter);
                return true;
            }
            return false;
        };
        PokerResults.prototype.CheckStraight = function () {
            // same cases as straight flush but without deck set filter
            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;
            var firstCard = this.pocketCards[0];
            var secondCard = this.pocketCards[1];
            var otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort(function (a, b) { return (a.cardType > b.cardType) ? 1 : -1; });
            //pocket card were sorted
            var diff = secondCard.cardType - firstCard.cardType - 1;
            //find all cards that are same set as pocket/hole cards and lie between them or in sequence with them
            // for hole cards to be parts of 5 card sequence, there can be max 3 cards b/w them
            switch (diff) {
                case 0: // when both your cards are consecutive
                    //best case -> try find next 3 higher number than your own high card
                    var filtered = otherCards.filter(function (x) { return x.cardType > secondCard.cardType
                        && x.cardType <= secondCard.cardType + 3; });
                    if (filtered != null && filtered.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(filtered);
                        return true;
                    }
                    // next best -find two above high card and one below low card
                    var high2 = otherCards.filter(function (x) { return x.cardType > secondCard.cardType
                        && x.cardType <= secondCard.cardType + 2; });
                    var oneLow = otherCards.filter(function (x) { return x.cardType < firstCard.cardType - 1; });
                    if (high2 != null && high2.length == 2 && oneLow != null && oneLow.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(high2).concat(oneLow);
                        return true;
                    }
                    //next - find one high and 2 low
                    var highOne = otherCards.filter(function (x) { return x.cardType == secondCard.cardType + 1; });
                    var TwoLow = otherCards.filter(function (x) { return x.cardType <= firstCard.cardType - 1
                        && x.cardType >= firstCard.cardType - 2; });
                    if (TwoLow != null && TwoLow.length == 2 && highOne != null && highOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(highOne).concat(TwoLow);
                        return true;
                    }
                    //worst case in consecutive hole cards- find 3 lower than your lower pocket card
                    var low3 = otherCards.filter(function (x) { return x.cardType <= firstCard.cardType - 1
                        && x.cardType >= firstCard.cardType - 3; });
                    if (low3 != null && low3.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(low3);
                        return true;
                    }
                    break; // end of case with consecutive hole cards
                case 1:
                    // 3 cases -
                    //2 higher than your 2nd card and one lower
                    var highertwo = otherCards.filter(function (x) { return x.cardType >= secondCard.cardType + 2
                        && x.cardType <= secondCard.cardType + 1; });
                    var lowerOne = otherCards.filter(function (x) { return x.cardType == secondCard.cardType - 1; });
                    if (highertwo != null && highertwo.length == 2 && lowerOne != null && lowerOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(lowerOne).concat(highertwo);
                        return true;
                    }
                    //one higher than your 2nd card, one lower than 2nd card and one lower than 1st card
                    var inbetweens = otherCards.filter(function (x) { return x.cardType == secondCard.cardType + 1
                        || x.cardType == secondCard.cardType - 1 || x.cardType == firstCard.cardType - 1; });
                    if (inbetweens != null && inbetweens.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(inbetweens);
                        return true;
                    }
                    //2 lower than your lower and 1 higher than your lower
                    var lowertwo = otherCards.filter(function (x) { return x.cardType >= firstCard.cardType - 2
                        && x.cardType <= firstCard.cardType - 1; });
                    var higherOne = otherCards.filter(function (x) { return x.cardType == firstCard.cardType + 1; });
                    if (lowertwo != null && lowertwo.length == 2 && higherOne != null && higherOne.length == 1) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(higherOne).concat(lowertwo);
                        return true;
                    }
                    break; // end of case when hole cards have number between them
                case 2:
                    // 2 cases
                    //2 lower than second card and one higher
                    var aroundSecond = otherCards.filter(function (x) { return (x.cardType == secondCard.cardType - 2
                        || x.cardType == secondCard.cardType - 1 || x.cardType == secondCard.cardType + 1); });
                    if (aroundSecond != null && aroundSecond.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(aroundSecond);
                        return true;
                    }
                    //2 higher than first card and 1 lower
                    var aroundFirst = otherCards.filter(function (x) { return (x.cardType == firstCard.cardType + 2
                        || x.cardType == firstCard.cardType + 1 || x.cardType == firstCard.cardType - 1); });
                    if (aroundFirst != null && aroundFirst.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(aroundFirst);
                        return true;
                    }
                    break;
                case 3: // all other cards lie in between
                    //find 3 lower than second card
                    var lower3 = otherCards.filter(function (x) { return x.cardType >= secondCard.cardType - 3
                        && x.cardType <= secondCard.cardType - 1; });
                    if (lower3 != null && lower3.length == 3) {
                        this.resultCards = this.resultCards.concat(this.pocketCards).concat(lower3);
                        return true;
                    }
                    break;
            }
            return false;
        };
        PokerResults.prototype.CheckGroupThree = function () {
            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;
            var firstCard = this.pocketCards[0];
            var secondCard = this.pocketCards[1];
            if (firstCard.cardType != secondCard.cardType)
                return false;
            var otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort(function (a, b) { return (a.cardType > b.cardType) ? 1 : -1; });
            var filter = otherCards.filter(function (x) { return x.cardType == firstCard.cardType; });
            if (filter != null && filter.length >= 1) { //third card
                this.resultCards = this.resultCards.concat(this.pocketCards).concat(filter);
                return true;
            }
            return false;
        };
        PokerResults.prototype.CheckTwoPairs = function () {
            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;
            var firstCard = this.pocketCards[0];
            var secondCard = this.pocketCards[1];
            var otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort(function (a, b) { return (a.cardType > b.cardType) ? 1 : -1; });
            if (firstCard.cardType == secondCard.cardType) {
                //find second pair
                var filter = [];
                var _loop_2 = function (i) {
                    var iFil = [];
                    iFil = otherCards.filter(function (x) { return x.cardType == i; });
                    if (iFil != null && iFil.length >= 2) { // replaces with highest possible pair
                        filter = iFil.splice(2);
                    }
                };
                for (var i = objects.CardType.TWO_2; i <= objects.CardType.ACE_A; i++) {
                    _loop_2(i);
                }
                if (filter != null && filter.length >= 2) { //third card
                    this.resultCards = this.resultCards.concat(this.pocketCards).concat(filter);
                    return true;
                }
            }
            else {
                // find one card same rank card for each hole card
                var firstSiblings = otherCards.filter(function (x) { return x.cardType == firstCard.cardType; });
                var secondSiblings = otherCards.filter(function (x) { return x.cardType == secondCard.cardType; });
                if (firstSiblings != null && secondSiblings != null && firstSiblings.length >= 1 && secondSiblings.length >= 1) {
                    this.resultCards = this.resultCards.concat(this.pocketCards).concat(firstSiblings[0]).concat(secondSiblings[0]);
                    return true;
                }
            }
            return false;
        };
        PokerResults.prototype.CheckOnePair = function () {
            if (this.pocketCards == null || this.pocketCards.length <= 0)
                return;
            var firstCard = this.pocketCards[0];
            var secondCard = this.pocketCards[1];
            var otherCards = this.flopCards
                .concat(this.turnCard)
                .concat(this.riverCard)
                .sort(function (a, b) { return (a.cardType > b.cardType) ? 1 : -1; });
            if (firstCard.cardType == secondCard.cardType) {
                this.resultCards = this.resultCards.concat(this.pocketCards);
                return true;
            }
            else {
                // find one card same rank card for each hole card
                var firstSiblings = otherCards.filter(function (x) { return x.cardType == firstCard.cardType; });
                var secondSiblings = otherCards.filter(function (x) { return x.cardType == secondCard.cardType; });
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
        };
        PokerResults.prototype.GiveHighCard = function () {
            this.resultCards.push(this.pocketCards[1]); // since pocket cards were sorted
            return true;
        };
        return PokerResults;
    }());
    objects.PokerResults = PokerResults;
})(objects || (objects = {}));
//# sourceMappingURL=poker-results.js.map