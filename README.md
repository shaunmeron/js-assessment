# JavaScript Assessment

## Instructions

0. *Carefully* read all the instructions and problems before beginning your work.
1. Clone this repository to your local projects directory
1. Create a branch named `first-last` where `first` is your first name and
   `last` is your last name.
1. Write your solutions to the problems presented below inside `solutions.js`.
1. Read the [Testing instructions below](#testing-your-work-w-automated-tests).
1. Add and commit as you work on the assessment.
1. Wait to push your branch until the end of the assessment time period.

## Core competencies assessed

- Reading and following directions
- Producing solutions that match the problem specification
- Using Git and working with GitHub
    - Cloning a git repository from GitHub
    - Creating your own branch
    - Committing and pushing work to a new branch on GitHub
- Programing fundamentals in JavaScript
    - Working with values, variables, and data types
    - Using assignment and comparision operators
    - String and array manipulation
    - Creating arrays and objects
    - Accessing and setting properties on objects
    - Writing functions

## Problems

Each problem will ask you to write a function, and is followed by a code sample
that demonstrates using the function. The code samples are intended to show the
expected inputs and outputs to the functions, but are not themselves part of the
solution.

---

1. Write a function named `isNegative` that accepts a number and returns `true` or `false` based on whether the input is negative.
    ```js
    isNegative(-1) // true
    isNegative(-5) // true
    isNegative(0) // false
    isNegative(6) // false
    ```
1. Write a function named `isTen` that accepts a number and returns a boolean
   that indicates whether or not that number is equal to `10`.
    ```js
    isTen(1) // false
    isTen(10) // true
    isTen('10') // false
    ```
1. Write a function named `double` that accepts a number and returns the number
   doubled.
    ```js
    double(5) // 10
    double(20) // 40
    ```
1. Write a function named `remove9s` that accepts an array of numbers and
   returns an array with all the same numbers except for `9`.
    ```js
    remove9s([7, 8, 9, 10]) // [7, 8, 10]
    remove9s([1, 2, 3])     // [1, 2, 3]
    remove9s([9, 9, 9])     // []
    ```
1. Write a function named `average` that accepts an array of numbers and returns
   the average of those numbers.
    ```js
    average([1, 2, 3]) // 2
    average([4, 6, 8, 10, 12]) // 8
    average([1, 2]) // 1.5
    ```
1. Write a function named `countOdds` that accepts an array of numbers and
   returns the number of odd numbers in the array.
    ```js
    countOdds([1, 2, 3]) // 2
    countOdds([4, 6, 8, 10]) // 0
    countOdds([1, 2, 1, 1]) // 3
    ```
1. Write a function named `averageSales` that accepts an array of objects where
  each object represents a person, and has a `sales` property. The function
  should return the average of every object's `sales` property.
   ```js
   averageSales([
       {name: 'Jim Halpert', sales: 100},
       {name: 'Dwight Schrute', sales: 50},
       {name: 'Andy Bernard', sales: 150},
   ])
   // 100
   ```
1. Write a function named `convertNameToObject` that accepts a string that
   contains a first name and last name separated by a space character, and returns an
   object with properties `firstName` and `lastName`.
    ```js
    convertNameToObject('Harry Potter') // {firstName: 'Harry', lastName: 'Potter'}
    convertNameToObject('Ron Weasley') // {firstName: 'Ron', lastName: 'Weasley'}
    ```
1. Write a function named `countVowels` that accepts a string and returns the
   number of vowels in that string. (Don't worry about or count "y" as a vowel)
    ```js
    countVowels('Hello, Codeup!') // 5
    countVowels('ABCDE!') // 2
    ```
1. Write a function named `analyzeWord`. It should take in a string and return
   an object with information about the input word. The object returned should
   have the following properties:

    - `word`: the original word that was passed into the function
    - `numberOfLetters`: the number of letters in the word
    - `numberOfVowels`: the number of vowels in the word

    ```js
    analyzeWord('codeup')
    // { word: 'codeup', numberOfLetters: 6, numberOfVowels: 3 }
    ```
1. Write a function named `capitalizeName` that accepts a string that is a first
  and last name separated by a space, and returns a string that that has the
  first and last names capitalized.

   *For this problem, you may assume that the function will only ever be called
   with a string that has two words separated by a single space.*
   ```js
   capitalizeName('ron weasley') // "Ron Weasley"
   capitalizeName('Harry Potter') // "Harry Potter"
   capitalizeName('Nathan drake') // "Nathan Drake"
   ```

## Testing your work w/ automated tests

Open `assessment.html` in your browser. Jasmine will run tests on the code
inside `solutions.js`. The first time you load assessment.html, you will see
every test failing because `solutions.js` is empty to start.

The automated tests provide immediate feedback as to whether or not your
solutions solve the problems.

- Click on Spec List inside of `assessment.html` to see test results.
- Make sure that the functions inside `solutions.js` are not wrapped in an IFFE.

## How solutions will be graded

- Your grade is entirely dependent on the completeness of your solutions

- No credit will be given for code that cannot run due to typos or syntax errors.

- No credit will be given for commented out code.

- There are ten questions on the test. Below is an example of how a question appears on the test.<br><kbd><img src="./images/test-question.png" ></kbd>

- Each question counts for 10 points of the final grade.

- For a question to be counted as correct all specs must pass for the question.<br><kbd><img src="./images/correct-answer.png" ></kbd>

- If any of the specs are red for the question then the entire question will be considered incorrect.<br><kbd><img src="./images/incorrect-answer.png" ></kbd>

## Hints

- Open up the JavaScript console in Chrome to check for errors, if your code has
  a syntax error, all the tests will fail!

### Example Problem

Consider this example problem.

> Write a function called `isBoolean` that takes in a value and returns a
> boolean if the argument provided is a boolean value or not.
>
> `isBoolean("Dog")` should return `false` because a string is not a boolean
>
> `isBoolean(false)` should return `true` because only true and false are
> boolean values.

- When a problem says `return`, it means `return`, not `console.log`.

- When a problem says that a function will take in an input, then it means the
  function must be defined so that it takes in an argument as its input, rather
  than relying on variables defined outside the function.

The following example is incorrect because the function does not take in an
argument. It's modifying a global variable, and that is not the same as
accepting an input as an argument.

```js
var input = "Grace Hopper"
function isBoolean() {
    return typeof input == "boolean";
}
```

This is incorrect because the function doesn't return the output.

```js
function isBoolean(input) {
    console.log(typeof input == 'boolean');
}
```

Correct solution:

```js
function isBoolean(input) {
    return typeof input == "boolean";
}
```
