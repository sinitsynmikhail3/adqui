class Point {
    constructor(x, y) {
        this._x = x;
        this._y = y;
    }

    getCoordinates() {
        return { x: this._x, y: this._y };
    }

    setCoordinates(x, y) {
        this._x = x;
        this._y = y;
    }
}

const point = new Point(3, 7);
console.log(point.getCoordinates()); // Outputs: { x: 3, y: 7 }

point.setCoordinates(10, 20);
console.log(point.getCoordinates()); // Outputs: { x: 10, y: 20 }
