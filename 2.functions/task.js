function getArrayParams(...arr) {
  let min = Infinity;
  let max = -Infinity;
  let sum = 0;
  
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    
    if (arr[i] > max) {
      max = arr[i];
    }
    
    sum += arr[i];
  }
  
  const avg = (sum / arr.length).toFixed(2);
  
  return { min, max, avg: Number(avg) };
}

console.log(getArrayParams(-99, 99, 10)); // { min: -99, max: 99, avg: 3.33 }
console.log(getArrayParams(1, 2, 3, -100, 10)); // { min: -100, max: 10, avg: -16.80 }
console.log(getArrayParams(5)); // { min: 5, max: 5, avg: 5 }

function summElementsWorker(...elements) {
  if (elements.length === 0) {
      return 0;
  }
  return elements.reduce((sum, element) => sum + element, 0);
}

function differenceMaxMinWorker(...elements) {
  if (elements.length === 0) {
      return 0;
  }
  const maxElement = Math.max(...elements);
  const minElement = Math.min(...elements);
  return maxElement - minElement;
}

function differenceEvenOddWorker(...elements) {
  if (elements.length === 0) {
      return 0;
  }
  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (const element of elements) {
      if (element % 2 === 0) {
          sumEvenElement += element;
      } else {
          sumOddElement += element;
      }
  }

  return sumEvenElement - sumOddElement;
}

function averageEvenElementsWorker(...elements) {
  if (elements.length === 0) {
      return 0;
  }
  let sumEvenElement = 0;
  let countEvenElement = 0;

  for (const element of elements) {
      if (element % 2 === 0) {
          sumEvenElement += element;
          countEvenElement += 1;
      }
  }

  return countEvenElement === 0 ? 0 : sumEvenElement / countEvenElement;
}

console.log(summElementsWorker()); // 0
console.log(summElementsWorker(10, 10, 11, 20, 10)); // 61

console.log(differenceMaxMinWorker()); // 0
console.log(differenceMaxMinWorker(10, 10, 11, 20, 10)); // 10

console.log(differenceEvenOddWorker(94, 51, 57, 41, 47, 66, 58, 10, 38, 17)); // 53
console.log(differenceEvenOddWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // -269

console.log(averageEvenElementsWorker(1, 2, 3, 4, 5, 6, 7, 8, 9)); // 5
console.log(averageEvenElementsWorker(15, 97, 85, 64, 67, 10, 69, 40, 15, 35)); // 38

function makeWork(arrOfArr, func) {
  let maxWorkerResult = -Infinity; // Initializing with the smallest possible value

  for (const arr of arrOfArr) {
      const result = func(...arr); // Spread operator to pass elements as separate arguments
      if (result > maxWorkerResult) {
          maxWorkerResult = result;
      }
  }

  return maxWorkerResult;
}

// Example usage
const arr = [
  [10, 10, 11, 20, 10],
  [67, 10, 2, 39, 88],
  [72, 75, 51, 87, 43],
  [30, 41, 55, 96, 62]
];

console.log(makeWork(arr, summElementsWorker)); // Maximum of 61, 206, 328, 284 => 328
console.log(makeWork(arr, differenceMaxMinWorker)); // Maximum of 10, 86, 44, 66 => 86
console.log(makeWork(arr, differenceEvenOddWorker)); // Maximum of 39, -6, -184, 92 => 92
console.log(makeWork(arr, averageEvenElementsWorker)); // Maximum of 12.5, 33.333, 72, 62.666 => 72
