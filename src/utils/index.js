
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

export {adZero, computeFibonacciValue, addDaysToDay, dateNextShowAndNextLevel};
