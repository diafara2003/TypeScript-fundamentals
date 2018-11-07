namespace Operations.Math {

    export class Suma {
        private num1: number;
        private num2: number;

        constructor(n1: number, n2: number) {
            this.num1 = n1;
            this.num2 = n2;

        }

        getSuma(): Number {
            return this.num1 + this.num2;
        }

    }
}
let sumNameSpace = new  Operations.Math.Suma(2, 4);