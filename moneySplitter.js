"use strict";

const moneySplitterHelper = (total) => {
  // use math.round on 100 times the total, then divide by 100 to get round to 100ths decimal space
  let evenSplit = Math.round(total * 100 / 3) / 100;
  let decimalsToReturn = []

  for(var i = 0; i < 3; i++){
    decimalsToReturn.push(evenSplit)
  }

  return decimalsToReturn;
}

const moneySplitterValidator = (splitMoney, total) => {
  let splitMoneySum = splitMoney.reduce((sum, value) => {
    return sum + value;
  }, 0);
  let iterator = 0;

  while(splitMoneySum != total) {
    let index = iterator % 3;
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

const moneySplitter = (total) => {
  let splitMoney = moneySplitterHelper(total);
  console.log('split money: ' + splitMoney)
  let validatedMoney = moneySplitterValidator(splitMoney, total);
  console.log('validated money: ' + validatedMoney)
}

moneySplitter(800.00);
