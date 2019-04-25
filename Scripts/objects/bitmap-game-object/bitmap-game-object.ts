module objects {
    export class BitmapGameObject extends createjs.Bitmap {

        private _imageUrl: string;

        private _pivot: config.Pivot;

        private tag: config.Tags;

        get Tag(): config.Tags {
            return this.tag;
        }

        set Tag(tag: config.Tags) {
            this.tag = tag;
        }

        get OriginalWidth(): number {
            return this.getBounds().width;
        }

        get OriginalHeight(): number {
            return this.getBounds().height;
        }

        get Position(): math.Vec2 {
            return new math.Vec2(this.x, this.y);
        }

        get Pivot(): config.Pivot {
            return this._pivot;
        }

        constructor(imageString: string, scale: number = 1,
            pivot: config.Pivot = config.Pivot.MIDCENTER) {

            super(managers.GameManager.ResourceManager.AssetManager.getResult(imageString));

            this._pivot = pivot;

            this.SetScale(scale);

            this.name = imageString;

            this.Init();
        }

        private Init(): void {
        }

        public Start(): void {

        }

        public Update(): void {
        }

        public Reset(): void {
        }

        public Destroy(): void {
        }

        public SetPosition(pos: math.Vec2): void {
            this.x = pos.x;
            this.y = pos.y;
        }

        private GetPivot(pivot: config.Pivot): math.Vec2 {
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

        public SetScale(value: number): void {
            this.scaleX = this.scaleY = value;
        }

        private SetRegex(valueX: number, valueY: number): void {
            let normPivot = this.GetPivot(this._pivot);

            this.regX = valueX;
            this.regY = valueY;
        }

        public SetScales(valueX: number, valueY: number): void {
            this.scaleX = valueX;
            this.scaleY = valueY;
        }
    }
}