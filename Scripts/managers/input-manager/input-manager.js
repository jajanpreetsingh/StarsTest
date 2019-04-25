var managers;
(function (managers) {
    var InputManager = /** @class */ (function () {
        function InputManager(keypressCallback, keydownCallback, keyupCallback) {
            if (keydownCallback === void 0) { keydownCallback = null; }
            if (keyupCallback === void 0) { keyupCallback = null; }
            if (keydownCallback != null)
                document.addEventListener("keypress", keypressCallback, false);
            if (keydownCallback != null)
                document.addEventListener("keydown", keydownCallback, false);
            if (keyupCallback != null)
                document.addEventListener("keyup", keyupCallback, false);
        }
        return InputManager;
    }());
    managers.InputManager = InputManager;
})(managers || (managers = {}));
//# sourceMappingURL=input-manager.js.map