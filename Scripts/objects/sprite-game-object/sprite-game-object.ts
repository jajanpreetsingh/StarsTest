module objects {
    export class SpriteGameObject
        extends createjs.Sprite
        implements interfaces.Startable, interfaces.Updatable,
        interfaces.Resettable, interfaces.Destructable {

        private _imageUrl: string;

        private _pivot: config.Pivot;

        get OriginalWidth(): number {
            return this.getBounds().width;
        }

        get OriginalHeight(): number {
            return this.getBounds().height;
        }

        get ActiveWidth(): number {
            return this.OriginalWidth * this.scaleX;
        }

        get ActiveHeight(): number {
            return this.OriginalHeight * this.scaleY;
        }

        /**
      *Creates an instance of Button.
      * @param {string} imageString
      * @param {math.Vec2} pos
      * @param {config.Pivot} pivot
      */
        constructor(imageString: string, pos: math.Vec2 = new math.Vec2(0, 0),
            pivot: config.Pivot = config.Pivot.MIDCENTER) {

            super(managers.GameManager.TextureAtlas, imageString);

            this.name = imageString;

            this._pivot = pivot;

            this._pivot = pivot;

            this.name = imageString;

            this.SetRegex();

            this.Init();
        }

        private Init(): void {
            this.Start();
        }

        public Start(): void {

        }

        public Update(): void {
        }

        public Reset(): void {
        }

        public Destroy(): void {
        }

        get Position(): math.Vec2 {
            return new math.Vec2(this.x, this.y);
        }

        public SetPosition(pos: math.Vec2): void {
            this.x = pos.x;
            this.y = pos.y;
        }

        public Pivot(): config.Pivot {
            return this._pivot;
        }

        public SetScale(value: number): void {
            this.scaleX = this.scaleY = value;
        }

        private SetRegex(): void {
            let normPivot = this.GetNormalizedPivot(this._pivot);

            this.regX = normPivot.x * this.OriginalWidth;
            this.regY = normPivot.y * this.OriginalHeight;
        }

        public SetScales(valueX: number, valueY: number): void {
            this.scaleX = valueX;
            this.scaleY = valueY;
        }

        private GetNormalizedPivot(pivot: config.Pivot): math.Vec2 {
            switch (pivot) {
                case config.Pivot.BOTTOMCENTER:
                    return new math.Vec2(0.5, 1);

                case config.Pivot.BOTTOMLEFT:
                    return new math.Vec2(0, 1);

                case config.Pivot.BOTTOMRIGHT:
                    return new math.Vec2(1, 1);

                case config.Pivot.MIDCENTER:
                    return new math.Vec2(0.5, 0.5);

                case config.Pivot.MIDLEFT:
                    return new math.Vec2(0, 0.5);

                case config.Pivot.MIDRIGHT:
                    return new math.Vec2(1, 0.5);

                case config.Pivot.TOPCENTER:
                    return new math.Vec2(0.5, 0);

                case config.Pivot.TOPLEFT:
                    return new math.Vec2(0, 0);

                case config.Pivot.TOPRIGHT:
                    return new math.Vec2(1, 0);
            }
        }
    }
}