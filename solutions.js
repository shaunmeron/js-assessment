"use strict";

/**
 * Write your solutions here
 *
 * **Note**: While normally it is good practice to wrap your javascript in an
 * immediately invoked function expression (iife), you should _not_ do that
 * here. If you do, the automated tests will not be able to see your functions.
 */

//1.
const isNegative = (input) => input < 0;

//2.
const isTen = (input) => input === 10;

//3.
const double = (input) => input * 2;

//4.
const remove9s = (arr) => {
    let result = arr.filter((notNine) => notNine !== 9);
    return result;
};

//5.
const average = (arr) => {
    let arrSum = 0;
    for (let element of arr) {
        arrSum += element;
    }
    let arrAvg = arrSum / arr.length;
    return arrAvg;
};

// let gahl = [300, 400, 500];

// gahl.forEach((element) => {
//     console.log(element*2)
// })

//6.
const countOdds = (arr) => {
    const result2 = arr.filter((odds) => odds % 2 === 1);
    return result2.length;
};

//7.
const averageSales = (arr) => {
    let sum = [];
    for (let i = 0; i < arr.length; i++) {
        // console.log(values);
        sum.push(arr[i].sales);
    }
    // console.log(average(sum));
};

//8.
const convertNameToObject = (str) => {
    let names = str.split(" ");

    const obj = {
        firstName: names[0],
        lastName: names[1],
    };
    // console.log(obj);
    return obj;
};

//9.
const countVowels = (str) => {
    const vowels = ["a", "e", "i", "o", "u"];
    let currentVowelCount = 0;
    for (let letter of str.toLowerCase()) {
        vowels.includes(letter) && currentVowelCount++;
    }
    return currentVowelCount;
    // console.log(test);
};

//10.
const analyzeWord = (str) => {
    const obj = {
        word: str,
        numberOfLetters: str.length,
        numberOfVowels: countVowels(str),
    };
    // console.log(obj);
    return obj;
};

//11.
const capitalizeName = (str) => {
    // console.log(str);
    let searchTerm = " ";
    let spaceIndex = str.indexOf(searchTerm);
    let lastNameCapitalized = str.charAt(spaceIndex + 1).toUpperCase() + str.slice(spaceIndex + 2);
    // console.log(lastNameCapitalized);
    let firstNameCapitalized = str[0].toUpperCase() + str.slice(1);
    // console.log(firstNameCapitalized);
    let final = firstNameCapitalized.substring(0, spaceIndex + 1) + lastNameCapitalized;
    console.log(final);

    // let firstName = str.split(" ");
    // let lastName = [firstName.pop()];
    // console.log(lastName);
    // let newFN = firstName[0][0].toUpperCase() + firstName.slice([1]);
    // console.log(newFN);
};
