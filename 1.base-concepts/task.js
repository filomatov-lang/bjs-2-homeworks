'use strict';

function solveEquation(a, b, c) {
    if (a === 0) {
        alert('Первый коэффициент "a" не должен быть равен нулю. Введите заново новое значение');
        return;
    }
    
    let discriminant = b ** 2 - 4 * a * c;
    let result = [];

    if (discriminant > 0) {
        result[0] = (-b + discriminant ** (1 / 2)) / (2 * a);
        result[1] = (-b - discriminant ** (1 / 2)) / (2 * a); 
    } else if (discriminant === 0) {
        result[0] = -b / (2 * a);
    }
    return result;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let percentMonth = percent / (100 * 12);
    let bodyCredit = amount - contribution;
    let monthPayment = bodyCredit * (percentMonth + (percentMonth / (((1 + percentMonth) ** countMonths) - 1)));
    let sumPayment = +(monthPayment * countMonths).toFixed(2);
    return sumPayment;
}
