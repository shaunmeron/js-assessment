(function() {
  "use strict"

/**
 * isNegative
 * average
 * countOdds
 * convertNameToObject
 * isTen
 * double
 * remove9s
 * capitalizeName
 * countVowels
 * averageSales
 * analyzeWord
 */

 
const randomPositiveNumber = Math.ceil(Math.random() * 100) + 12;
const randomNegativeNumber = Math.ceil(Math.random() * 100) * -1; 

const exampleObject = { "firstName": "Grace", "lastName": "hopper"};
const exampleString = "Grace Hopper";

const arrayOfNames = ['grace hopper', 'ada lovelace', 'margaret hamilton', 'sandi metz'];
const randomIndex = Math.floor(Math.random() * arrayOfNames.length);
const randomString = arrayOfNames[randomIndex];


 describe('isNegative', function() {
  it('should be a defined function', function() {
    expect(typeof isNegative).toBe('function');
  });
  it('should return a boolean value', function() {
    expect(typeof isNegative(-12)).toBe('boolean');
    expect(typeof isNegative(12)).toBe('boolean');
  });
  it('return false for 0', function() {
    expect(isNegative(0)).toBe(false);
  });
  it('returns true for -1', function() {
    expect(isNegative(-1)).toBe(true);
  });
  it('returns false for 6', function() {
    expect(isNegative(6)).toBe(false);
  });
  it('returns false for 123.456', function() {
    expect(isNegative(123.456)).toBe(false);
  });
  it('returns true for -3.14159', function() {
    expect(isNegative(-3.14159)).toBe(true);
  });
  it('returns true for ' + randomNegativeNumber, function() {
    expect(isNegative(randomNegativeNumber)).toBe(true);
  });
  it('returns false for ' + randomPositiveNumber, function() {
    expect(isNegative(randomPositiveNumber)).toBe(false);
  });
});

describe('average', function() {
  it('should be a defined function', function() {
    expect(typeof average).toBe('function');
  });
  it('should return a number', function() {
    expect(typeof average([1, 2, 3])).toBe('number');
    expect(typeof average([4, 5, 6])).toBe('number');
  });
  it('the average of [1, 2, 3] is 2', function() {
    expect(average([1, 2, 3])).toBe(2);
  });
  it('the average of [4, 6, 8] is 6', function() {
    expect(average([4, 6, 8])).toBe(6);
  });
  it('the average of [1, 2] is 1.5', function() {
    expect(average([1, 2])).toBe(1.5);
  });
  it('the average of [0, 0, 0] is 0', function() {
    expect(average([0, 0, 0])).toBe(0);
  });
  it(`the average of [${[randomPositiveNumber, randomPositiveNumber, randomPositiveNumber]}] is ${randomPositiveNumber} `, function() {
    expect(average([randomPositiveNumber, randomPositiveNumber, randomPositiveNumber])).toBe(randomPositiveNumber);
  });
});

describe('countOdds', function() {
  it('should be a defined function', function() {
    expect(typeof countOdds).toBe('function');
  });
  it('should return a number', function() {
    expect(typeof countOdds([1, 2, 3])).toBe('number');
    expect(typeof countOdds([])).toBe('number');
    expect(typeof countOdds([1, 2, 3, 4, 5, 6, 7, 8])).toBe('number');
  });
  it('counts 2 odds in [1, 2, 3]', function() {
    expect(countOdds([1, 2, 3])).toBe(2);
  });
  it('counts 3 odds in [1, 1, 4, 6, 5]', function() {
    expect(countOdds([1, 1, 4, 6, 5])).toBe(3);
  });
  it('counts 0 odds in [2, 4, 6, 8, 10]', function() {
    expect(countOdds([2, 4, 6, 8, 10])).toBe(0);
  });
});

describe('convertNameToObject', function() {
  it('should be a defined function', function() {
    expect(typeof convertNameToObject).toBe('function');
  });
  it('should return an object with firstName and lastName properties', function() {
    expect(convertNameToObject('Harry Potter').firstName).toBeDefined();
    expect(convertNameToObject('Harry Potter').lastName).toBeDefined();
  });
  it('the firstName and lastName properties should be strings', function() {
    expect(typeof convertNameToObject('Harry Potter').firstName).toBe('string');
    expect(typeof convertNameToObject('Harry Potter').lastName).toBe('string');
  });
  it('converts "Harry Potter" to {firstName: "Harry", lastName: "Potter"}', function() {
    expect(convertNameToObject('Harry Potter')).toEqual({firstName: 'Harry', lastName: 'Potter'});
  });
  it('converts "Ron Weasley" to {firstName: "Ron", lastName: "Weasley"}', function() {
    expect(convertNameToObject('Ron Weasley')).toEqual({firstName: 'Ron', lastName: 'Weasley'});
  });
  it('converts "Hermione Granger" to {firstName: "Hermione", lastName: "Granger"}', function() {
    expect(convertNameToObject('Hermione Granger')).toEqual({firstName: 'Hermione', lastName: 'Granger'});
  });
});

describe('isTen', function() {
  it('should be a defined function', function() {
    expect(typeof isTen).toBe('function')
  })
  it('should return a boolean value', function() {
    expect(typeof isTen(10)).toBe('boolean')
    expect(typeof isTen(11)).toBe('boolean')
  })
  it('returns true for the value 10', function() {
    expect(isTen(10)).toBe(true)
  })
  it('returns false for both 9 and 11', function() {
    expect(isTen(9)).toBe(false)
    expect(isTen(11)).toBe(false)
  })
  it('returns false when passed the string "10"', function() {
    expect(isTen("10")).toBe(false);
  })
  it('returns false when passed ' + randomNegativeNumber, function() {
    expect(isTen(randomNegativeNumber)).toBe(false);
  });
})

describe('double', function() {
  it('should be a defined function', function() {
    expect(typeof double).toBe('function')
  })
  it('should return a number', function() {
    expect(typeof double(12)).toBe('number')
  })
  it('should double the passed number', function() {
    const random = Math.ceil(Math.random() * 10)
    expect(double(random)).toBe(random + random)
  })
  it('should return 10 when passed 5', function() {
    expect(double(5)).toBe(10)
  })
  it('should return -4 when passed -2', function() {
    expect(double(-2)).toBe(-4)
  })
  it('should return 0 when passed 0', function() {
    expect(double(0)).toBe(0)
  })
  it('should return infinity when passed infinity', function() {
    expect(double(Infinity)).toBe(Infinity);
  })
  it('should return ' + (2 * randomPositiveNumber) + ' when passed ' + randomPositiveNumber, function() {
    expect(double(randomPositiveNumber)).toBe(2 * randomPositiveNumber);
  })
})

describe('remove9s', function() {
  it('should be a defined function', function() {
    expect(typeof remove9s).toBe('function')
  })
  it('should return an array', function() {
    expect(Array.isArray(remove9s([1, 2, 3]))).toBe(true)
  })
  it('should remove the element from the passed array if it is 9', function() {
    const input = [7, 8, 9, 10]
    const output = [7, 8, 10]
    expect(remove9s(input)).toEqual(output)
  })
  it('should not modify an array without any 9s in it', function() {
    const input = [1, 2, 3, 4, 5]
    const output = [1, 2, 3, 4, 5]
    expect(remove9s(input)).toEqual(output)
  })
  it('should remove every 9 in the input array', function() {
    const input = [9, 9, 9, 9]
    const output = []
    expect(remove9s(input)).toEqual(output)
  })
  it('should remove every 9 in the provided input', function() {
    const input = [9, 9, 9, 9, 9, randomPositiveNumber, randomNegativeNumber];
    const output = [randomPositiveNumber, randomNegativeNumber];
    expect(remove9s(input)).toEqual(output);
  })
})

describe('capitalizeName', function() {
  it('should be a defined function', function() {
    expect(typeof capitalizeName).toBe('function')
  })
  it('should return a string', function() {
    expect(typeof capitalizeName('alan turing')).toBe('string')
  })
  it('should capitalize both names (first and last) in the passed string', function() {
    const input = 'alan turing'
    const output = 'Alan Turing'
    expect(capitalizeName(input)).toBe(output)
  })
  it('should not change an already capitalized name', function() {
    const input = 'Alan Turing'
    const output = 'Alan Turing'
    expect(capitalizeName(input)).toBe(output)
  })
})


describe('countVowels', function() {
  it('should be a defined function', function() {
    expect(typeof countVowels).toBe('function')
  })
  it('should return a number', function() {
    expect(typeof countVowels('abc')).toBe('number')
  })
  it('should return 1 for the input string "abc"', function() {
    expect(countVowels('abc')).toBe(1)
  })
  it('should return 3 for the input string "rubber duck"', function() {
    expect(countVowels('rubber duck')).toBe(3)
  })
  it('should return 0 for the input string "zxcv"', function() {
    expect(countVowels('zxcv')).toBe(0)
  })
  it('should return 10 for the input string "be liberal in what you accept"', function() {
    const input = 'be liberal in what you accept'
    expect(countVowels(input)).toBe(10)
  });
  it('should count the vowels in "and conservative in what you send"', function() {
    const input = 'and conservative in what you send'
    expect(countVowels(input)).toBe(11)
  });
})

describe('averageSales', function() {
  const testInput = [
    {name: 'Jim', sales: 1},
    {name: 'Pam', sales: 2},
    {name: 'Dwight', sales: 3},
    {name: 'Andy', sales: 4},
  ]
  it('should be a defined function', function() {
    expect(typeof averageSales).toBe('function')
  })
  it('returns a number', function() {
    expect(typeof averageSales(testInput)).toBe('number')
  })
  it('passes the example problem from the readme', function() {
    const output = averageSales([
      {name: 'Jim Halpert', sales: 100},
      {name: 'Dwight Schrute', sales: 50},
      {name: 'Andy Bernard', sales: 150},
    ])
    expect(output).toBe(100)
  })
  it('should average the "sales" properties for the passed array of objects', function() {
    expect(averageSales(testInput)).toBe(2.5)
  })
})

describe('analyzeWord', function() {
  it('should be a defined function', function() {
    expect(typeof analyzeWord).toBe('function')
  })
  it('should return an object', function() {
    const output = analyzeWord('codeup')
    expect(typeof output).toBe('object')
  })
  it('the returned object should have a "word" property that is a string', function() {
    const input = 'codeup'
    const output = analyzeWord(input)
    expect(typeof output.word).toBe('string')
  })
  it('the returned object should have a "numberOfLetters" property that is a number', function() {
    const output = analyzeWord('codeup')
    expect(typeof output.numberOfLetters).toBe('number')
  })
  it('the returned object should have a "numberOfVowels" property that is a number', function() {
    const output = analyzeWord('codeup')
    expect(typeof output.numberOfVowels).toBe('number')
  })
  it('the "word" property should be the original word that was passed in', function() {
    const input = 'codeup'
    const output = analyzeWord(input)
    expect(output.word).toBe(input)
  })
  it('the "numberOfVowels" property should be the number of vowels in the input word', function() {
    const input = 'codeup'
    const output = analyzeWord(input)
    expect(output.numberOfVowels).toBe(input.replace(/[^aeiou]/g, '').length)
  })
  it('the "numberOfLetters" property should be the number of letters in the input word', function() {
    const input = 'codeup'
    const output = analyzeWord(input)
    expect(output.numberOfLetters).toBe(input.length)
  })
  it('analyzes longer words', function() {
    let word = 'maximum';
    expect(analyzeWord(word)).toEqual({word, numberOfVowels: 3, numberOfLetters: 7})
    word = 'supercalifragilisticexpialidocious'
    expect(analyzeWord(word)).toEqual({word, numberOfVowels: 16, numberOfLetters: 34})
  });
});


// Shows the "Spec list" instead of the specific failures.
setTimeout(function() {
  document.querySelector("body > div > div.jasmine-alert > span.jasmine-menu.jasmine-bar.jasmine-failure-list > a").click();
}, 500);

})();
