function parseCount(unitProduct) {
	try {
		unitProduct = Number.parseFloat(unitProduct);
		if (Number.isNaN(unitProduct)) {
			throw new Error('Невалидное значение');
		}
		return unitProduct;
	} catch (errorParse) {
		throw errorParse;
	}
}

function validateCount(unitProduct) {
	try {
		return parseCount(unitProduct);

	} catch (errorValidate) {
		return errorValidate;
	}
}

class Triangle {
	constructor(a, b, c) {
		try {
			if ((a + b) < c || (a + c) < b || (b + c) < a) {
				throw new Error('Треугольник с такими сторонами не существует');
			}

			this.a = a;
			this.b = b;
			this.c = c;

		} catch (error) {
			throw error;
		}
	}

	get perimeter() {
		return (this.a + this.b + this.c);
	}

	get area() {
		let p = (this.a + this.b + this.c) / 2;
		return +(Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c))).toFixed(3);
	}
}

function getTriangle(a, b, c) {
	try {
		if ((a + b) < c || (a + c) < b || (b + c) < a) {
			throw new Error('Ошибка! Треугольник не существует');
		}

		return new Triangle(a, b, c);
	} catch (error) {
		class ImpossibleTriangle {
			constructor() {}

			get perimeter() {
				return error.message;
			}

			get area() {
				return error.message;
			}
		}

		return new ImpossibleTriangle();
	}
}