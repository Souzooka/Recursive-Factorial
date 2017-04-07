

function factorial(num) {

  if (typeof num !== 'number') {
    throw new Error('Only numbers are accepted in this function.');
  }

  if (num < 0) {
    return Infinity;
  }

  if (num === 1) {
    return num;
  }

  if (num > 0) {
    return (num) * factorial(--num);
  } else {
    return (++num) * factorial(num);
  }

}

module.exports = factorial;