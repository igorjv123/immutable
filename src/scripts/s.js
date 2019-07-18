
function makeCalculation(x) {
  return Math.random() * x;
}

function logger(f) {
  console.time('Start calculation');
  return function (x) {
    console.log(f(x));
    console.timeEnd('Start calculation');
  };
}

logger(makeCalculation)(10);
