module objects {
    export class Label extends createjs.Text {

        private _width: number;
        private _height: number;

        private _halfWidth: number;
        private _halfHeight: number;

        get Width(): number {
            return this._width;
        }

        set Width(newWidth: number) {
            this._width = newWidth;
        }

        get halfWidth(): number {
            return this._halfWidth;
        }

        set halfWidth(newHalfWidth: number) {
            this._halfWidth = newHalfWidth;
        }

        get Height(): number {
            return this._height;
        }

        set Height(newHeight: number) {
            this._height = newHeight;
        }

        get halfHeight(): number {
            return this._halfHeight;
        }

        set halfHeight(newHalfHeight: number) {
            this._halfHeight = newHalfHeight;
        }

        // /**
        //  *Creates an instance of Label.
        //  * @param {string} labelSting
        //  * @param {string} fontSize
        //  * @param {string} fontFamily
        //  * @param {string} fontColor
        //  * @param {number} [x=0]
        //  * @param {number} [y=0]
        //  * @param {boolean} [isCentered=false]
        //  * @memberof Label
        //  */
        /**
         *Creates an instance of Label.
         * @param {string} labelSting
         * @param {string} fontSize
         * @param {string} fontFamily
         * @param {string} fontColor
         * @param {config.Pivot} [pivot=config.Pivot.MIDCENTER]
         * @memberof Label
         */
        constructor(labelSting: string,
            fontSize: string,
            fontFamily: string,
            fontColor: string,
            pivot: config.Pivot = config.Pivot.MIDCENTER
            // x: number = 0,
            // y: number = 0,
            // isCentered: boolean = false
            ) {

            super(labelSting, fontSize + " " + fontFamily, fontColor);

            this.Width = this.getMeasuredWidth();
            this.Height = this.getMeasuredHeight();

            // if (isCentered) {
            //     this.regX = this.halfWidth;
            //     this.regY = this.halfHeight; //regx,regy means anchor
            // }

            // this.x = x;
            // this.y = y;
        }
    }
}