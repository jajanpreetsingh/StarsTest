module objects {
    export class Background extends BitmapGameObject {

        constructor() {
            super("bg", 1);

            this.regX = 0.5 * this.OriginalWidth;
            this.regY = 0.5 * this.OriginalHeight;
        }

        public Update(): void {
        }

    }
}