module config {
    export class Screen {

        private _width: number;
        private _height: number;

        public readonly ASPECTRATIO: number = 1.7778;

        public readonly FRAMERATE: number = 60;

        constructor(height: number) {
            this._height = height;
            this._width = this._height * this.ASPECTRATIO;
        }

        get UnitX(): number {
            return 1 / this.Width;
        }

        get UnitY(): number {
            return 1 / this.Height;
        }

        get Width(): number {
            return this._width;
        }

        get Height(): number {
            return this._height;
        }

        get Center(): math.Vec2 {
            return new math.Vec2(this.HalfWidth, this.HalfHeight);
        }

        get TopLeft(): math.Vec2 {
            return new math.Vec2(0, 0);
        }

        get TopRight(): math.Vec2 {
            return new math.Vec2(this.Width, 0);
        }

        get BottomLeft(): math.Vec2 {
            return new math.Vec2(0, this.Height);
        }

        get BottomRight(): math.Vec2 {
            return new math.Vec2(this.Width, this.Height);
        }

        get MidLeft(): math.Vec2 {
            return new math.Vec2(0, this.Height * 0.5);
        }

        get BottomCenter(): math.Vec2 {
            return new math.Vec2(this.Width * 0.5, this.Height);
        }

        get TopCenter(): math.Vec2 {
            return new math.Vec2(this.Width * 0.5, 0);
        }

        get MidRight(): math.Vec2 {
            return new math.Vec2(this.Width, this.Height * 0.5);
        }

        get HalfWidth(): number {
            return this.Width * 0.5;;
        }

        get HalfHeight(): number {
            return this.Height * 0.5;;
        }
    }
}