interface IRectangule {
    width: number;
    height: number;
    getArea(): number;
}

namespace Shapes {
    export class Rectangule implements IRectangule {
        width: number;
        height: number;

        constructor(w: number, h: number) {
            this.width = w;
            this.height = h;
        }

        getArea(): number {
            return this.width * this.height;
        }
    }

}

let _shape = new Shapes.Rectangule(2, 3).getArea();