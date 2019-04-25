module managers {

    export class InputManager {

        public keyPressCode: number;
        public keyUpCode: number;
        public keyDownCode: number;

        constructor(keypressCallback: () => any, keydownCallback: () => any = null, keyupCallback: () => any = null) {

            if (keydownCallback != null)
                document.addEventListener("keypress", keypressCallback, false);

            if (keydownCallback != null)
                document.addEventListener("keydown", keydownCallback, false);

            if (keyupCallback != null)
                document.addEventListener("keyup", keyupCallback, false);
        }
    }
}