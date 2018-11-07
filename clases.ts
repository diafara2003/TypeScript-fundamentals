class Operation {

    private num1: number;
    private num2: number;

    constructor(n1: number, n2: number) {
        this.num1 = n1;
        this.num2 = n2;

    }

    getSuma(): Number {
        return this.num1 + this.num2;
    }

    // SumaArrow = (): number => { return this.num2 + this.num1; }

}

let sum = new Operation(3, 4).getSuma();
let sumArrow=new Operation(3,4).SumaArrow();