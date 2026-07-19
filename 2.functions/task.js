function getArrayParams(...params) {
  if (params.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }
  
  let max = params[1] > params[0] ? params[1] : params[0];
  let min = params[1] < params[0] ? params[1] : params[0];
  let avg = 0;
  let sum = 0;
  
  for (let param of params) {
    max = param > max ? param : max;
    min = param < min ? param : min;
    sum = sum + param;
  }
  
  avg = +(sum / params.length).toFixed(2);

  return { min: min, max: max, avg: avg };
}

function getArrayParamsAlternative(...params) {
  if (params.length === 0) {
    return { min: 0, max: 0, avg: 0 };
  }

  let max = Math.max(...params);
  let min = Math.min(...params);
  let sum = params.reduce((sum, current) => sum + current, 0);
  avg = +(sum / params.length).toFixed(2);
  
  return { min: min, max: max, avg: avg };
}

function summElementsWorker(...elements) {
  if (elements.length === 0) {
    return 0;
  }
  return elements.reduce((sum, current) => sum + current, 0);
}

function differenceMaxMinWorker(...elements) {
  if (elements.length === 0) {
    return 0;
  }
  return Math.max(...elements) - Math.min(...elements);
}

function differenceEvenOddWorker(...elements) {
  if (elements.length === 0) {
    return 0;
  }

  let sumEvenElement = 0;
  let sumOddElement = 0;

  for (let elem of elements) {
    if (elem % 2 === 0) {
      sumEvenElement += elem;
    } else {
      sumOddElement += elem;
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

  for (let elem of elements) {
    if (elem % 2 === 0 && elem !== 0) {
      sumEvenElement += elem;
      countEvenElement++;
    }
  }

  return sumEvenElement / countEvenElement;
}

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  let resultArr;
  
  for (let arr of arrOfArr) {
    resultArr = func(...arr);
    maxWorkerResult = maxWorkerResult > resultArr ? maxWorkerResult : resultArr;
  }

  return maxWorkerResult;
}