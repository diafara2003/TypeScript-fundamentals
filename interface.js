var Shapes;
(function (Shapes) {
    var Rectangule = /** @class */ (function () {
        function Rectangule(w, h) {
            this.width = w;
            this.height = h;
        }
        Rectangule.prototype.getArea = function () {
            return this.width * this.height;
        };
        return Rectangule;
    }());
    Shapes.Rectangule = Rectangule;
})(Shapes || (Shapes = {}));
var _shape = new Shapes.Rectangule(2, 3).getArea();
