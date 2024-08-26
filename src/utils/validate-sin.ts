export const validateSIN = (sin: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (sin.length !== 9) {
        reject('Error! SIN should be 9 digits.');
      } else {
        const digits = sin.split('').map((digit, index) => {
          if (index % 2 === 1) {
            let num = parseInt(digit) * 2;
            if (num > 9) {
              return (num % 10) + Math.floor(num / 10);
            } else {
              return num;
            }
          } else {
            return parseInt(digit);
          }
        });

        const sum = digits.reduce((accu, cur) => accu + cur, 0);

        if (sum % 10 === 0) {
          resolve('Success! SIN is valid.');
        } else {
          reject('SIN is not valid.');
        }
      }
    }, 1000);
  });
};
