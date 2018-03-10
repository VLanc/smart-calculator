class SmartCalculator {
  constructor(initialValue) {
    this.commonStr = "" + initialValue + "";
  }

  add(number) {
    this.commonStr += "+" + number + "";
    return this;
  }

  subtract(number) {
    this.commonStr += "-" + number + "";
    return this;
  }

  multiply(number) {
    this.commonStr += "*" + number + "";
    return this;
  }

  devide(number) {
    this.commonStr += "/" + number + "";
    return this;
  }

  pow(number) {
    let startPosition, 
    finishPosition,
    commonStrToArr = this.commonStr.split("");

    outer: for (let i = commonStrToArr.length - 1; i < commonStrToArr.length; i--) {
      if (!isNaN(commonStrToArr[i])) {
        finishPosition = i;
        for (let j = i - 1; j < commonStrToArr.length; j--) {
          if (!isNaN(commonStrToArr[j])) {
            continue;
          } else {
            startPosition = j + 1;
            break outer;
          }
        }
      }
    }

    let lastNumber = commonStrToArr.slice(startPosition, finishPosition + 1).join("");

    commonStrToArr.splice(startPosition, finishPosition - startPosition + 1, "Math.pow(" + lastNumber + "," + number + ")");

    this.commonStr = commonStrToArr.join("");
    return this;
  }

  valueOf() {
    return eval(this.commonStr);
  }
}

module.exports = SmartCalculator;