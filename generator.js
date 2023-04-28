let operators = ['+', '-', '*', '/'];
let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
let length = 8;
let solutions = [];

function generator(current) {
  if (current.split('')[current.length - 1] === '=') {
    calculation = current.slice(0, -1);
    if (!operators.some((r) => calculation.includes(r))) {
      return;
    }
    answer = eval(calculation);
    if (answer % 1 !== 0) {
      if (!isFinite(answer)) {
        return;
      }
      answer = parseInt(answer);
    }
    final = current.split('').concat(answer.toString().split(''));
    if (
      answer >= 0 &&
      final.length === length &&
      eval(calculation) === answer
    ) {
      solutions.push(final.join(''));
    }
  } else if (current.length >= length - 2) {
    if (numbers.concat('0').includes(current.split('')[current.length - 1])) {
      generator(current + '=');
    }
  } else {
    if (!operators.includes(current.split('')[current.length - 1])) {
      operators
        .concat('0')
        .concat('=')
        .forEach((x) => generator(current + x));
    }
    numbers.forEach((x) => generator(current.concat(x)));
  }
}

numbers.forEach((x) => generator(x));

console.log(solutions);
console.log(solutions.length);
console.log(JSON.stringify(solutions));
