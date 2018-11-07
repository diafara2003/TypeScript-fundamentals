var Operations;
(function (Operations) {
    var Math;
    (function (Math) {
        var Suma = /** @class */ (function () {
            function Suma(n1, n2) {
                this.num1 = n1;
                this.num2 = n2;
            }
            Suma.prototype.getSuma = function () {
                return this.num1 + this.num2;
            };
            return Suma;
        }());
        Math.Suma = Suma;
    })(Math = Operations.Math || (Operations.Math = {}));
})(Operations || (Operations = {}));
var sumNameSpace = new Operations.Math.Suma(2, 4);
