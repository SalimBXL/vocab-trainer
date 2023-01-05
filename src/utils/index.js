
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
<<<<<<< HEAD
    const nextFibonacciLevel = (result) ? (fibonacci_level + 1) : 1;
    const fibonacciValue = (result) ? computeFibonacciValue(fibonacci_level) : computeFibonacciValue(1);
    const nextDate = addDaysToDay(fibonacciValue).toDateString();
    return [nextDate, nextFibonacciLevel];
}

const prepareWordsToReview = (words_json) => Array.from(_getWords(words_json, (new Date())));

const wordsStatistics = (words_json) => {
    const stats = {
        totalWords: 0,
        unknownWords: 0,
        knownWords: 0,
        percentUnknown: 0,
        percentKnown: 100,
        lastReview: null
    };
    if (words_json) {
        const unknownWords = Array.from(_getWords(words_json, (new Date()))).length;
        const allWords = Array.from(_getWords(words_json)).length;
        const knownWords = allWords - unknownWords;
        const percentUnknown = Math.floor(unknownWords / allWords * 100);
        const percentKnown = Math.floor(knownWords / allWords * 100);
        const _lastReviewDate = _wordListSortedByDate(words_json)[(_wordListSortedByDate(words_json).length - 1)];
        const lastReview = new Date(`${_lastReviewDate.substr(0,4)}-${_lastReviewDate.substr(4,2)}-${_lastReviewDate.substr(6,2)}`).toDateString();
        stats.totalWords = allWords;
        stats.unknownWords = unknownWords;
        stats.knownWords = knownWords;
        stats.percentKnown = percentKnown;
        stats.percentUnknown = percentUnknown;
        stats.lastReview = lastReview;
    } 
    return stats;
=======
    const nextDate = (result) 
        ? addDaysToDay(computeFibonacciValue(fibonacci_level)).toDateString() 
        : addDaysToDay(computeFibonacciValue(0)).toDateString();
    const nextFibonacciLevel = (result) 
        ? fibonacci_level + 1 
        : 1;
    return [nextDate, nextFibonacciLevel];
}

const countWords = (words_json) => {
    let total = 0;
    Object
        .keys(words_json)
        .map(date => words_json[date].map(mot => total++) );
    return total;
>>>>>>> origin/master
}


// PRIVATE

const getDateIntFormatted = (date) => parseInt(`${date.getFullYear()}${adZero(date.getMonth()+1)}${adZero(date.getDate())}`);
const _wordListSortedByDate = (words_json) => Object.keys(words_json).sort();
const _getWords = (words_json, trigger) => {
    const wlist = new Set();
    const now = new Date();
    const dateInt = getDateIntFormatted(now);
    const sortedWordList = _wordListSortedByDate(words_json);
    if (trigger) sortedWordList
        .filter((date) => parseInt(date) <= dateInt)
        .map(date => words_json[date].map(mot => wlist.add(mot)));
    else sortedWordList
        .map(date => words_json[date].map(mot => wlist.add(mot)));
    return wlist;
}

export {
    addDaysToDay, 
    adZero, 
    computeFibonacciValue, 
    dateNextShowAndNextLevel, 
    getDateIntFormatted,
    prepareWordsToReview,
    wordsStatistics
};
