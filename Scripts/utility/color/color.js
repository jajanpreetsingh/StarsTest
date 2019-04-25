var utility;
(function (utility) {
    var Colors = /** @class */ (function () {
        function Colors() {
        }
        Colors.INDIANRED = "#CD5C5C";
        Colors.LIGHTCORAL = "#F08080";
        Colors.SALMON = "#FA8072";
        Colors.DARKSALMON = "#E9967A";
        Colors.LIGHTSALMON = "#FFA07A";
        Colors.CRIMSON = "#DC143C";
        Colors.RED = "#FF0000";
        Colors.FIREBRICK = "#B22222";
        Colors.DARKRED = "#8B0000";
        Colors.PINK = "#FFC0CB";
        Colors.LIGHTPINK = "#FFB6C1";
        Colors.HOTPINK = "#FF69B4";
        Colors.DEEPPINK = "#FF1493";
        Colors.MEDIUMVIOLETRED = "#C71585";
        Colors.PALEVIOLETRED = "#DB7093";
        Colors.CORAL = "#FF7F50";
        Colors.TOMATO = "#FF6347";
        Colors.ORANGERED = "#FF4500";
        Colors.DARKORANGE = "#FF8C00";
        Colors.ORANGE = "#FFA500";
        Colors.GOLD = "#FFD700";
        Colors.YELLOW = "#FFFF00";
        Colors.LIGHTYELLOW = "#FFFFE0";
        Colors.LEMONCHIFFON = "#FFFACD";
        Colors.LIGHTGOLDENRODYELLOW = "#FAFAD2";
        Colors.PAPAYAWHIP = "#FFEFD5";
        Colors.MOCCASIN = "#FFE4B5";
        Colors.PEACHPUFF = "#FFDAB9";
        Colors.PALEGOLDENROD = "#EEE8AA";
        Colors.KHAKI = "#F0E68C";
        Colors.DARKKHAKI = "#BDB76B";
        Colors.LAVENDER = "#E6E6FA";
        Colors.THISTLE = "#D8BFD8";
        Colors.PLUM = "#DDA0DD";
        Colors.VIOLET = "#EE82EE";
        Colors.ORCHID = "#DA70D6";
        Colors.FUCHSIA = "#FF00FF";
        Colors.MAGENTA = "#FF00FF";
        Colors.MEDIUMORCHID = "#BA55D3";
        Colors.MEDIUMPURPLE = "#9370DB";
        Colors.REBECCAPURPLE = "#663399";
        Colors.BLUEVIOLET = "#8A2BE2";
        Colors.DARKVIOLET = "#9400D3";
        Colors.DARKORCHID = "#9932CC";
        Colors.DARKMAGENTA = "#8B008B";
        Colors.PURPLE = "#800080";
        Colors.INDIGO = "#4B0082";
        Colors.SLATEBLUE = "#6A5ACD";
        Colors.DARKSLATEBLUE = "#483D8B";
        Colors.MEDIUMSLATEBLUE = "#7B68EE";
        Colors.GREENYELLOW = "#ADFF2F";
        Colors.CHARTREUSE = "#7FFF00";
        Colors.LAWNGREEN = "#7CFC00";
        Colors.LIME = "#00FF00";
        Colors.LIMEGREEN = "#32CD32";
        Colors.PALEGREEN = "#98FB98";
        Colors.LIGHTGREEN = "#90EE90";
        Colors.MEDIUMSPRINGGREEN = "#00FA9A";
        Colors.SPRINGGREEN = "#00FF7F";
        Colors.MEDIUMSEAGREEN = "#3CB371";
        Colors.SEAGREEN = "#2E8B57";
        Colors.FORESTGREEN = "#228B22";
        Colors.GREEN = "#008000";
        Colors.DARKGREEN = "#006400";
        Colors.YELLOWGREEN = "#9ACD32";
        Colors.OLIVEDRAB = "#6B8E23";
        Colors.OLIVE = "#808000";
        Colors.DARKOLIVEGREEN = "#556B2F";
        Colors.MEDIUMAQUAMARINE = "#66CDAA";
        Colors.DARKSEAGREEN = "#8FBC8B";
        Colors.LIGHTSEAGREEN = "#20B2AA";
        Colors.DARKCYAN = "#008B8B";
        Colors.TEAL = "#008080";
        Colors.AQUA = "#00FFFF";
        Colors.CYAN = "#00FFFF";
        Colors.LIGHTCYAN = "#E0FFFF";
        Colors.PALETURQUOISE = "#AFEEEE";
        Colors.AQUAMARINE = "#7FFFD4";
        Colors.TURQUOISE = "#40E0D0";
        Colors.MEDIUMTURQUOISE = "#48D1CC";
        Colors.DARKTURQUOISE = "#00CED1";
        Colors.CADETBLUE = "#5F9EA0";
        Colors.STEELBLUE = "#4682B4";
        Colors.LIGHTSTEELBLUE = "#B0C4DE";
        Colors.POWDERBLUE = "#B0E0E6";
        Colors.LIGHTBLUE = "#ADD8E6";
        Colors.SKYBLUE = "#87CEEB";
        Colors.LIGHTSKYBLUE = "#87CEFA";
        Colors.DEEPSKYBLUE = "#00BFFF";
        Colors.DODGERBLUE = "#1E90FF";
        Colors.CORNFLOWERBLUE = "#6495ED";
        Colors.ROYALBLUE = "#4169E1";
        Colors.BLUE = "#0000FF";
        Colors.MEDIUMBLUE = "#0000CD";
        Colors.DARKBLUE = "#00008B";
        Colors.NAVY = "#000080";
        Colors.MIDNIGHTBLUE = "#191970";
        Colors.CORNSILK = "#FFF8DC";
        Colors.BLANCHEDALMOND = "#FFEBCD";
        Colors.BISQUE = "#FFE4C4";
        Colors.NAVAJOWHITE = "#FFDEAD";
        Colors.WHEAT = "#F5DEB3";
        Colors.BURLYWOOD = "#DEB887";
        Colors.TAN = "#D2B48C";
        Colors.ROSYBROWN = "#BC8F8F";
        Colors.SANDYBROWN = "#F4A460";
        Colors.GOLDENROD = "#DAA520";
        Colors.DARKGOLDENROD = "#B8860B";
        Colors.PERU = "#CD853F";
        Colors.CHOCOLATE = "#D2691E";
        Colors.SADDLEBROWN = "#8B4513";
        Colors.SIENNA = "#A0522D";
        Colors.BROWN = "#A52A2A";
        Colors.MAROON = "#800000";
        Colors.WHITE = "#FFFFFF";
        Colors.SNOW = "#FFFAFA";
        Colors.HONEYDEW = "#F0FFF0";
        Colors.MINTCREAM = "#F5FFFA";
        Colors.AZURE = "#F0FFFF";
        Colors.ALICEBLUE = "#F0F8FF";
        Colors.GHOSTWHITE = "#F8F8FF";
        Colors.WHITESMOKE = "#F5F5F5";
        Colors.SEASHELL = "#FFF5EE";
        Colors.BEIGE = "#F5F5DC";
        Colors.OLDLACE = "#FDF5E6";
        Colors.FLORALWHITE = "#FFFAF0";
        Colors.IVORY = "#FFFFF0";
        Colors.ANTIQUEWHITE = "#FAEBD7";
        Colors.LINEN = "#FAF0E6";
        Colors.LAVENDERBLUSH = "#FFF0F5";
        Colors.MISTYROSE = "#FFE4E1";
        Colors.GAINSBORO = "#DCDCDC";
        Colors.LIGHTGRAY = "#D3D3D3";
        Colors.SILVER = "#C0C0C0";
        Colors.DARKGRAY = "#A9A9A9";
        Colors.GRAY = "#808080";
        Colors.DIMGRAY = "#696969";
        Colors.LIGHTSLATEGRAY = "#778899";
        Colors.SLATEGRAY = "#708090";
        Colors.DARKSLATEGRAY = "#2F4F4F";
        Colors.BLACK = "#000000";
        return Colors;
    }());
    utility.Colors = Colors;
})(utility || (utility = {}));
//# sourceMappingURL=color.js.map