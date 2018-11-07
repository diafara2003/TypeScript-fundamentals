var Operation = /** @class */ (function () {
    function Operation(n1, n2) {
        this.num1 = n1;
        this.num2 = n2;
    }
    Operation.prototype.getSuma = function () {
        return this.num1 + this.num2;
    };
    return Operation;
}());
var sum = new Operation(3, 4).getSuma();
var sumArrow = new Operation(3, 4).SumaArrow();
