import { addNums, subtractNums, concatWords, splitWords } from './utils/index.mjs';
const sumOfNums = addNums(3, 4);
const difOfNums = subtractNums(5, 3);
const sentence = concatWords(['Toast', 'is', 'happy.']);
const words = splitWords('Hello my name is Toast.');
console.log(sumOfNums);
console.log(difOfNums);
console.log(sentence);
console.log(words);
