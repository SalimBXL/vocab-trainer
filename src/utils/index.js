
const adZero = (number) => number < 10 ? `0${number}` : `${number}`;

const computeFibonacciValue = (n) => {
    if (n === 0) return 0;
    if (n === 1) return 1;
    let a = 1;
    let b = 0;
    while (n >= 0) {
        const temp = a;
        a +=b;
        b = temp;
        n--;
    }
    return b;
}

const addDaysToDay = (days) => {
    const daysInSeconds = parseInt(days)*1000*60*60*24;
    const now = new Date().getTime();
    const nextDate = new Date(now + daysInSeconds);
    return nextDate;
}

const dateNextShowAndNextLevel = (result, fibonacci_level) => {
    const nextDate = (result) ? addDaysToDay(computeFibonacciValue(fibonacci_level)).toDateString() : addDaysToDay(computeFibonacciValue(0)).toDateString();
    const nextFibonacciLevel = (result) ? fibonacci_level + 1 : 1;
    return [nextDate, nextFibonacciLevel];
}

const countWords = (words_json) => {
    let total = 0;
    Object.keys(words_json).map(date => words_json[date].map(mot => total++) );
    return total;
}

const prepareWordList = (words_json) => {
    const wlist = new Set();
    const now = new Date();
    const dateInt = parseInt(`${now.getFullYear()}${adZero(now.getMonth()+1)}${adZero(now.getDate())}`);
    Object
      .keys(words_json)
      .sort()
      .filter((date) => parseInt(date) <= dateInt)
      .map(date => words_json[date].map(mot => wlist.add(mot)));
    return Array.from(wlist);
  }

  

export {adZero, computeFibonacciValue, addDaysToDay, dateNextShowAndNextLevel, countWords, prepareWordList};
