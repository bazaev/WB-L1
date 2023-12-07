class Shape {

	get area() {
		switch (this.constructor.name) {
			case 'Rectangle':
				return this.rectangleArea();
			case 'Circle':
				return this.circleArea();
			case 'Triangle':
				return this.triangleArea();
			default:
				return 0;
		}
	}

	get perimeter() {
		switch (this.constructor.name) {
			case 'Rectangle':
				return this.rectanglePerimeter();
			case 'Circle':
				return this.circlePerimeter();
			case 'Triangle':
				return this.trianglePerimeter();
			default:
				return 0;
		}
	}

	rectangleArea() {
		return this.width * this.height
	}

	rectanglePerimeter() {
		return (this.width + this.height) * 2
	}

	circleArea() {
		return Math.PI * this.radius**2
	}

	circlePerimeter() {
		return Math.PI * this.radius * 2
	}

	triangleArea() {
		const s = this.trianglePerimeter() / 2;
        return Math.sqrt(s * (s - this.side1) * (s - this.side2) * (s - this.side3));
	}

	trianglePerimeter() {
		return this.side1 + this.side2 + this.side3
	}

}

class Rectangle extends Shape {
	constructor(width, height) {
		super();
		this.width = width;
		this.height = height;
	}
}

class Circle extends Shape {
	constructor(radius) {
		super();
		this.radius = radius;
	}
}

class Triangle extends Shape {
	constructor(side1, side2, side3) {
		super();
		this.side1 = side1;
		this.side2 = side2;
		this.side3 = side3;
	}
}

const rectangle = new Rectangle(10,10);
const circle = new Circle(10);
const triangle = new Triangle(10,10,10);

console.log(rectangle.area, rectangle.perimeter);
console.log(circle.area, circle.perimeter);
console.log(triangle.area, triangle.perimeter);