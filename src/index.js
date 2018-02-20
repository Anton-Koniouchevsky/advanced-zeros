module.exports = function getZerosCount(number, base) {
  let result = 0;

  let primes = {};

    for(let divisor = 2; divisor <= base; divisor ++) {

      if(base % divisor == 0) {
        let pow = 0;

        while(base % divisor == 0) {          
          base /= divisor;
          pow++;
        }

        primes[divisor] = pow;
      }

    }

  Object.keys(primes).forEach(prime => {
    let count = 0;

    for(let divisor = prime; divisor < number; divisor *= prime) {
      count += Math.floor(number / divisor);
    }

    count = Math.floor(count / primes[prime]);

    if(!result || count < result) result = count;
  });

  return result;
}

