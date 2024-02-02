"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let discriminant = b ** 2 - 4 * a * c;
  if (discriminant < 0) {
    return arr;
  } else if (discriminant === 0) {
    let root = -b / (2 * a);
    arr.push(root);
      return arr;
  } else {
    let root1 = (-b + Math.sqrt(discriminant) )/(2*a);
    let root2 = (-b - Math.sqrt(discriminant) )/(2*a);
    arr.push(root1, root2);
    return arr;
}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  percent = parseFloat(percent);
  contribution = parseFloat(contribution);
  amount = parseFloat(amount);
  countMonths = parseInt(countMonths);

  if (isNaN(percent) || isNaN(contribution) || isNaN(amount) || isNaN(countMonths)) {
    return false;
  }

  const monthlyInterest = percent / 100 / 12;
  const loanAmount = amount - contribution;
  const monthlyPayment = loanAmount * (monthlyInterest + (monthlyInterest / (((1 + monthlyInterest)**countMonths) - 1)));
  const totalPayment = monthlyPayment * countMonths;
  const roundedTotalPayment = Math.round(totalPayment * 100) / 100;

  return roundedTotalPayment;
}