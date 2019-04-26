module scenes {
    export class GameplayScene extends scenes.Scene {

        bg: objects.Background;

        cards: objects.Card[] = [];

        flopCards: objects.Card[] = [];

        turnCard: objects.Card;

        riverCard: objects.Card;

        rearCard: objects.Card;

        refDimen: math.Vec2;

        communityCardCount: number = 0;

        commCardFirstPos: math.Vec2;

        players: objects.Player[] = [];

        maxPlayerCount: number = 4;

        playerCount: number = 1;

        dealButton: objects.Button;
        dealText: objects.Label;

        constructor() {
            super();

            this.Init();
        }

        public Init(): void {
            this.sceneState = config.Scene.GAMEPLAY;

            managers.GameManager.CurrentScene = this;

            this.Start();
        }

        public Start(): void {
            this.Main();
        }

        public Update(): void {
        }

        public Reset(): void {
        }

        public Destroy(): void {
        }

        InitCards(): void {
            let start: number = objects.CardType.TWO_2;
            let end: number = objects.CardType.ACE_A;

            for (let i = start; i <= end; i++) {
                let cardType: objects.CardType = i;

                let dstart: number = objects.DeckSet.CLUB;
                let dend: number = objects.DeckSet.SPADE;

                for (let j = dstart; j <= dend; j++) {
                    let decktype: objects.DeckSet = j;

                    let c: objects.Card = new objects.Card(cardType, decktype);

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
        }

        public Main(): void {

            this.SetupBackground();

            this.InitCards();

            this.InitDealButton();

            this.ShuffleCards();

            this.SetupPlayers();
        }

        InitDealButton(): void {
            this.dealButton = new objects.Button("amberNormal");
            this.dealButton.SetPosition(managers.GameManager.Screen.MidLeft.AddX(this.dealButton.OriginalWidth * 0.5));
            this.addChild(this.dealButton);

            this.dealText = new objects.Label("Deal", "30px", "Acme", utility.Colors.WHITE);
            this.dealText.x = this.dealButton.Position.x;
            this.dealText.y = this.dealButton.Position.y;

            this.dealButton.addEventListener("click", this.DealPocketCards.bind(this));

            this.addChild(this.dealText);

            this.commCardFirstPos = this.dealButton.Position.AddX(this.refDimen.x * 1.5);
        }

        SetupBackground(): void {
            this.bg = new objects.Background();

            this.bg.SetScale(managers.GameManager.Screen.Height / this.bg.OriginalHeight);

            this.bg.SetPosition(managers.GameManager.Screen.Center);

            this.addChild(this.bg);
        }

        ShuffleCards(): void {

            for (let i = 0; i < this.cards.length; i++) {
                let rand: number = Math.floor(Math.random() * this.cards.length - 1);

                if (rand == i || rand >= this.cards.length || rand < 0)
                    continue;

                let ctemp: objects.Card = this.cards[i];
                this.cards[i] = this.cards[rand];
                this.cards[rand] = ctemp;
            }
        }

        SetupPlayers(): void {

            for (let i = 0; i < this.playerCount; i++) {
                let p: objects.Player = new objects.Player();

                this.players.push(p);
            }
        }

        DealPocketCards(): void {

            let startPos: math.Vec2 = managers.GameManager.Screen.BottomCenter
                .AddVec(-this.refDimen.x * 0.5, -this.refDimen.y * 0.5);

            //deal 2 cards to each player 

            for (let i = 0; i < 2; i++) {

                let newPos: math.Vec2 = startPos.AddX(i * this.refDimen.x);

                for (let j = 0; j < this.playerCount; j++) {
                    let c: objects.Card = this.cards[0];

                    this.cards.splice(0, 1);

                    this.players[j].pocketCards.push(c);

                    createjs.Tween.get(c).to({ x: newPos.x, y: newPos.y }, 500);
                }
            }

            this.dealText.text = "Check Flop";
            this.dealText.Recenter();

            this.dealButton.removeAllEventListeners();

            this.dealButton.addEventListener("click", this.RevealFlop.bind(this));
        }

        RevealFlop(): void {

            this.ShuffleCards();

            let startPos: math.Vec2 = this.commCardFirstPos;

            for (let i = 0; i < 3; i++) {

                let newPos: math.Vec2 = startPos.AddX(this.communityCardCount * this.refDimen.x);

                let c: objects.Card = this.cards[0];

                this.cards.splice(0, 1);

                createjs.Tween.get(c).to({ x: newPos.x, y: newPos.y }, 500);

                ++this.communityCardCount;

                this.flopCards.push(c);
            }

            this.dealText.text = "Check Turn";
            this.dealText.Recenter();

            this.dealButton.removeAllEventListeners();

            this.dealButton.addEventListener("click", this.RevealTurn.bind(this));
        }

        RevealTurn(): void {

            this.ShuffleCards();

            let startPos: math.Vec2 = this.commCardFirstPos;

            let newPos: math.Vec2 = startPos.AddX(this.communityCardCount * this.refDimen.x);

            let c: objects.Card = this.cards[0];

            this.cards.splice(0, 1);

            createjs.Tween.get(c).to({ x: newPos.x, y: newPos.y }, 500);

            ++this.communityCardCount;

            this.turnCard = c;

            this.dealText.text = "Check River";
            this.dealText.Recenter();

            this.dealButton.removeAllEventListeners();

            this.dealButton.addEventListener("click", this.RevealRiver.bind(this));
        }

        RevealRiver(): void {

            this.ShuffleCards();

            let startPos: math.Vec2 = this.commCardFirstPos;

            let newPos: math.Vec2 = startPos.AddX(this.communityCardCount * this.refDimen.x);

            let c: objects.Card = this.cards[0];

            this.cards.splice(0, 1);

            createjs.Tween.get(c).to({ x: newPos.x, y: newPos.y }, 500);

            ++this.communityCardCount;

            this.riverCard = c;

            this.dealText.text = "Deal Again";
            this.dealText.Recenter();

            this.dealButton.removeAllEventListeners();

            this.dealButton.addEventListener("click", this.Reset.bind(this));

            //calculate hand rank
        }

        CheckStraightFlush(player: objects.Player): boolean {
            if (player == null || player.pocketCards == null || player.pocketCards.length <= 0)
                return false;

            let rankCards: objects.Card[] = [];

            rankCards.concat(player.pocketCards)
                .concat(this.flopCards)
                .concat(this.turnCard)
                .concat(this.riverCard);

            rankCards.sort(x => x.cardType);
            console.log(rankCards);

            let result: boolean = false;

            for (let i = 0; i < 3; i++) {
                for (let j = i + 1; j < i + 5; i++) {
                    if (rankCards[i].cardType + j == rankCards[j].cardType)
                        continue;
                    else
                        break;
                }
            }

        }
    }

    export enum GameplayChildIndex {
    }
}