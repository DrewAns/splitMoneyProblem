"use strict";

const moneySplitterHelper = (total, count) => {
  // use math.round on 100 times the total, then divide by 100 to get round to 100ths decimal space
  let evenSplit = Math.round(total * 100 / count) / 100;
  let decimalsToReturn = []

  for(var i = 0; i < count; i++){
    decimalsToReturn.push(evenSplit)
  }

  return decimalsToReturn;
}

const moneySplitterValidator = (splitMoney, total, count) => {
  let splitMoneySum = splitMoney.reduce((sum, value) => {
    return sum + value;
  }, 0);
  let iterator = 0;

  while(splitMoneySum != total) {
    let index = iterator % count;
    if(splitMoneySum > total){
      splitMoneySum -= .01
      splitMoney[index] -= .01
    } else {
      splitMoneySum += .01
      splitMoney[index] += .01
    }
  }

  return splitMoney
}

const moneySplitter = (total, count) => {
  let splitMoney = moneySplitterHelper(total, count);
  console.log('split money: ' + splitMoney)
  let validatedMoney = moneySplitterValidator(splitMoney, total, count);
  console.log('validated money: ' + validatedMoney)
}

moneySplitter(800.00, 3);
