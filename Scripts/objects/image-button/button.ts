module objects {
    export class Button extends objects.BitmapGameObject {

        /**
         *Creates an instance of Button.
         * @param {string} imageString
         * @param {number} [x=0]
         * @param {number} [y=0]
         * @param {boolean} [isCentered=false]
         * @memberof Button
         */
        constructor(imageString: string) {

            super(imageString);

            this.on("mouseover", this._over);

            this.on("mouseout", this._out);
        }

        private _over(event: createjs.MouseEvent): void {
            this.alpha = 0.7;
        }

        private _out(event: createjs.MouseEvent): void {
            this.alpha = 1.0;
        }

        private _click(event: createjs.MouseEvent): void {
            this.alpha = 0.7;
        }
    }
}