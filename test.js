let answer = '82+44=38'.split('');
let inputEquation = '11+22=33'.split('');
let answerArray = answer.map((x) => x);
let stateArray = [];
inputEquation.forEach((e, i) => {
  if (e === answer[i]) {
    stateArray[i] = 1;
    answerArray[i] = '';
    inputEquation[i] = '';
  }
});

inputEquation.forEach((e, i) => {
  if (!(e === '') && !(stateArray[i] === 1)) {
    if (answerArray.includes(e)) {
      stateArray[i] = 2;
      answerArray[answer.findIndex((r) => r === e)] = '';
      inputEquation[i] = '';
    } else {
      stateArray[i] = 0;
    }
  }
});

console.log(stateArray);
