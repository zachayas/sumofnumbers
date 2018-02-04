/**
 * Created by Zac Hayshida
 * First Attempt DNF
 * Second Attempt: 24:18
 */

function sumFor(list) {
  let sum = 0;
  for (let i = 0; i < list.length; i++) {
    sum += list[i];
  }
  return sum;
}

console.log(sumFor([1, 2, 3, 4, 5]));

function sumWhile(list) {
  let sum = 0;
  let i = 0;
  while (i < list.length) {
    sum += list[i];
    i++;
  }
  return sum;
}

console.log(sumWhile([1, 2, 3, 4, 5]));

function sumRecursion(list) {
  if (list.length === 0) {
    return 0;
  }
  return list[0] + sumRecursion(list.slice(1, list.length));
}

console.log(sumRecursion([1, 2, 3, 4, 5]));

function sumTheSimpleWay(list) {
  return _.reduce(list, function (memo,num) {
    return memo + num;
  });
}

console.log(sumTheSimpleWay([1, 2, 3, 4, 5]));
