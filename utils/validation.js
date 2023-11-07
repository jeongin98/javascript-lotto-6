import { Console } from '@woowacourse/mission-utils';
import ERROR from '../constants/error.js';

const Validation = {
  isUserMoneyOk(userMoney) {
    const isMinimumValid = this.isMinimumOneThousand(userMoney);
    const isDivisibleValid = this.isDivisibleByOneThousand(userMoney);

    if (isMinimumValid && isDivisibleValid) {
      return true;
    }
    return false;
  },

  isMinimumOneThousand(userInput) {
    if (userInput < 1000) {
      Console.print(ERROR.minimumOneThousand);
      return false;
    }
    return true;
  },

  isDivisibleByOneThousand(userInput) {
    if (userInput % 1000 !== 0) {
      Console.print(ERROR.divisibleByOneThousand);
      return false;
    }
    return true;
  },

  isWinningLottoNumberOk(winningLottoNumber) {
    const isSixDigits = this.isSixDigits(winningLottoNumber);
    const isDuplicated = this.isDuplicated(winningLottoNumber);
    const isWithinRange = this.isWithinRange(winningLottoNumber);

    if (isSixDigits && isDuplicated && isWithinRange) {
      return true;
    }
    return false;
  },

  isSixDigits(userInput) {
    if (userInput.length !== 6) {
      Console.print(ERROR.sixDigits);
      return false;
    }
    return true;
  },

  isDuplicated(userInput) {
    const uniqueNumbers = new Set(userInput);

    if (uniqueNumbers.size !== userInput.length) {
      Console.print(ERROR.duplicated);
      return false;
    }
    return true;
  },

  isWithinRange(userInput) {
    const isWithinRange = (number) => number >= 1 && number <= 45;

    if (!userInput.every(isWithinRange)) {
      Console.print(ERROR.withinRange);
      return false;
    }
    return true;
  },

  isBonusNumberOk(bonusNumber) {
    const isNaturalNumber = this.isNaturalNumber(bonusNumber);
    // 이후 추가 // const isWithinRange = this.isWithinRange(bonusNumber);

    if (isNaturalNumber) {
      return true;
    }
    return false;
  },

  isNaturalNumber(userInput) {
    const regex = /^[0-9]+$/;

    if (!regex.test(userInput)) {
      Console.print(ERROR.naturalNumber);
      return false;
    }
    return true;
  },
};

export default Validation;
