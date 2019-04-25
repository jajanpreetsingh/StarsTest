module math {
    export class Vec2 extends createjs.Point {

        constructor(x: number, y: number) {
            super(x, y);
        }

        public static Distance(p1: Vec2, p2: Vec2): number {

            let distanceSquare = Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2);

            return Math.sqrt(distanceSquare);
        }

        public AddX(x: number): Vec2 {
            return new math.Vec2(this.x + x, this.y);
        }

        public AddY(y: number): Vec2 {
            return new math.Vec2(this.x, this.y + y);
        }

        public AddVec(x: number, y: number) {
            return this.AddX(x).AddY(y);
        }

        public SortCordinates(): math.Vec2 {
            if (this.x <= this.y)
                return this;
            return new math.Vec2(this.y, this.x);
        }
    }
}