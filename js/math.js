// іменований єкспорт

// export const sum = (a, b) => a + b;

// export const mult = (a, b) => a * b;

export const PI = 3.14;

// або
const sum = (a, b) => a + b;

const mult = (a, b) => a * b;

const PI = 3.14;

export { sum, mult, PI };

// {
//   sum: (a, b) => a + b,
//   mult: (a, b) => a * b,
//   PI: 3.14
// }

// дефолтний експорт
class Test {
  constructor(tmp) {
    this.tmp = tmp;
  }
}

export default Test;
