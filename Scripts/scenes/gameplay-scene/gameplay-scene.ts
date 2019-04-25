module scenes {
    export class GameplayScene extends scenes.Scene {

        bg: objects.Background;

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

        public Main(): void {

            this.bg = new objects.Background();

            this.bg.SetScale(managers.GameManager.Screen.Height / this.bg.OriginalHeight);

            this.bg.SetPosition(managers.GameManager.Screen.Center);

            this.addChild(this.bg);

            let card = new objects.Card(objects.CardType.JACK_J, objects.DeckSet.DIAMOND);
            card.regX = 0.5 * card.OriginalWidth;
            card.regY = 0.5 * card.OriginalHeight;
            card.SetPosition(managers.GameManager.Screen.TopLeft);

            card.rotation = -90;
            this.addChild(card);


        }
    }

    export enum GameplayChildIndex {
    }
}