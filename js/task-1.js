// Задача-1
// Напишіть функцію яка приймає два параметри str1 та str2.Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює останій літері str2.В іншому випадку функція повинна повернути булеве значення false.

// const str1 = 'abc';
// const str2 = 'cba';
// function letterCompare(str1, str2) {
//   if (str1[0] === str2.substr(-1)) {
//     return true;
//   } else return false;
// }

// console.log(letterCompare('abc', 'cba'));
// console.log(letterCompare('bcc', 'cbb'));
// console.log(letterCompare('acb', 'cbb'));

// Задача-2
// Напишіть функцію яка приймає два параметри str1 та str2.Функція повинна повернути булеве значення true якщо перша літера str1 дорівнює першій літері str2.В іншому випадку функція повинна повернути булеве значення false.

// function letterCompare(str1, str2) {
//   if (str1[0] === str2[0]) {
//     return true;
//   } else return false;
// }

// console.log(letterCompare('abc', 'cba'));
// console.log(letterCompare('bcc', 'cbb'));
// console.log(letterCompare('acb', 'abb'));
// console.log(letterCompare('bcc', 'bbb'));

// Задача-3
// Напишіть функцію яка приймає два параметри str1 та str2.Функція повинна повернути булеве значення true якщо довжина str1 дорівнює довжині str2.В іншому випадку функція повинна повернути булеве значення false.

// function letterLength(str1, str2) {
//   if (str1.length === str2.length) {
//     return true;
//   } else return false;
// }

// console.log(letterLength('abc', 'cbag'));
// console.log(letterLength('bcc', 'cbb'));
// console.log(letterLength('acbg', 'abb'));
// console.log(letterLength('bcc', 'bbb'));

// Задача-4
// Напишіть функцію яка приймає число num.Функція повинна повернути булеве значення true якщо кількість цифр у числі парна.В іншому випадку функція повинна повернути булеве значення false.

// function numberIsEven(nam) {
//   let length = nam.toString().length;
//   console.log(length);
//   if (length % 2) {
//     return false;
//   } else return true;
// }
// console.log(numberIsEven(7771));

// console.log(numberIsEven(222211));

// console.log(numberIsEven(4444));

// Задача-5
// Напишіть функцію, яка приймає два параметри num1 та num2. Функція повинна повернути булеве значення true, якщо num1 більше, ніж num2. В іншому випадку функція повинна повернути булеве значення false.

// function firstBigger(num1, num2) {
//   if (num1 > num2) {
//     return true;
//   } else return false;
// }

// console.log(firstBigger(222, 223));
// console.log(firstBigger(224, 223));
// console.log(firstBigger(222, 222));

// Задача-6
// Напишіть функцію, яка приймає два параметри num1 та num2.Функція повинна повернути булеве значення true, якщо num1 ділиться на num2 без остачі.В іншому випадку функція повинна повернути булеве значення false.

// function divisionWithoutRemainder(num1, num2) {
//   if (num1 % num2) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(divisionWithoutRemainder(20, 10));
// console.log(divisionWithoutRemainder(20, 11));
// console.log(divisionWithoutRemainder(250, 25));

// Задача-7
// Напишіть функцію, яка приймає число num.Функція повинна повернути булеве значення true, якщо num є непарним числом.В іншому випадку функція повинна повернути булеве значення false.

// function oddNumber(num) {
//   if (num % 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(oddNumber(22));
// console.log(oddNumber(23));
// console.log(oddNumber(2235));

// Задача-8
// Напишіть функцію, яка приймає параметр str.Функція повинна повернути булеве значення true, якщо str містить принаймні одну велику літеру.В іншому випадку функція повинна повернути булеве значення false.

// function haveUpperRegister(str) {
//   if (str.toLowerCase() === str) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(haveUpperRegister('Agg'));
// console.log(haveUpperRegister('ygg'));
// console.log(haveUpperRegister('ggL'));
// console.log(haveUpperRegister('fgg'));

// Задача-9
// Напишіть функцію, яка приймає два параметри arr1 та arr2 (обидва масиви). Функція повинна повернути булеве значення true, якщо довжина arr1 більше, ніж довжина arr2. В іншому випадку функція повинна повернути булеве значення false.

// function lengthIsMore(arr1, arr2) {
//   if (arr1.length > arr2.length) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(lengthIsMore([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]));

// console.log(lengthIsMore([1, 2, 3, 4, 5], [1, 2, 3, 4, 5]));

// console.log(lengthIsMore([1, 2, 3, 4, 5], [1, 2, 3, 4]));

// Задача-12
// Напишіть функцію, яка приймає рядок str.Функція повинна повернути булеве значення true, якщо str містить хоча б один пробіл.В іншому випадку функція повинна повернути булеве значення false.

// function haveSpace(str) {
//   if (str.indexOf(' ') !== -1) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(haveSpace('a a'));
// console.log(haveSpace('aaa'));
// console.log(haveSpace(' aa'));

// Задача-13
// Напишіть функцію, яка приймає два параметри num1 та num2.Функція повинна повернути булеве значення true, якщо num1 є кратним num2.В іншому випадку функція повинна повернути булеве значення false.

// function numberIsMultiple(num1, num2) {
//   if (num1 % num2) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(numberIsMultiple(4, 2));

// console.log(numberIsMultiple(4, 3));

// console.log(numberIsMultiple(6, 4));

// Задача-14
// Напишіть функцію, яка приймає рядок str.Функція повинна повернути булеве значення true, якщо str є паліндромом(однаковий у зворотному напрямку).В іншому випадку функція повинна повернути булеве значення false.

// function palindrome(str) {
//   if (str.split('').reverse().join('') === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(palindrome('make'));
// console.log(palindrome('allolla'));
// console.log(palindrome('maam'));

// Задача-15
// Напишіть функцію, яка приймає два параметри num1 та num2.Функція повинна повернути булеве значення true, якщо num1 менше або дорівнює num2.В іншому випадку функція повинна повернути булеве значення false.

// function numberIsMore(num1, num2) {
//   if (num2 > num1) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(numberIsMore(2, 4));

// console.log(numberIsMore(2, 2));

// console.log(numberIsMore(2, 1));

// Задача-18
// Напишіть функцію, яка приймає рядок str.Функція повинна повернути булеве значення true, якщо str містить хоча б одну цифру.В іншому випадку функція повинна повернути булеве значення false.

// Задача-19
// Напишіть функцію, яка приймає два параметри num1 та num2.Функція повинна повернути булеве значення true, якщо num1 і num2 рівні.В іншому випадку функція повинна повернути булеве значення false.

// function numbersAreEqual(num1, num2) {
//   if (num1 === num2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(numbersAreEqual(1, 2));

// console.log(numbersAreEqual(1, -1));

// console.log(numbersAreEqual(1, 1));

// Задача-20
// Напишіть функцію, яка приймає число num.Функція повинна повернути булеве значення true, якщо num більше або дорівнює нулю.В іншому випадку функція повинна повернути булеве значення false.

// function numberPositive(num) {
//   if (num >= 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(numberPositive(1));

// console.log(numberPositive(0));

// console.log(numberPositive(-2));

// Задача-24
// Напишіть функцію, яка приймає рядок str. Функція повинна повернути булеве значення true, якщо str містить лише маленькі літери. В іншому випадку функція повинна повернути булеве значення false.

// function littleLetters(str) {
//   if (str.toLowerCase() === str) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(littleLetters('God'));
// console.log(littleLetters('aRR'));
// console.log(littleLetters('god'));

// Задача-25
// Напишіть функцію, яка приймає два параметри str1 та str2. Функція повинна повернути булеве значення true, якщо str1 є частиною str2. В іншому випадку функція повинна повернути булеве значення false.

// function partOfString(str1, str2) {
//   if (str2.includes(str1)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(partOfString('cat', 'cat love eats'));

// console.log(partOfString('cat', 'dog love eats'));

// Задача-26
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є негативним числом. В іншому випадку функція повинна повернути булеве значення false.

// function negativeNum(num) {
//   if (num < 0) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(negativeNum(3));
// console.log(negativeNum(-3));
// console.log(negativeNum(-53));
// console.log(negativeNum(0));

// Задача-28
// Напишіть функцію, яка приймає число num.Функція повинна повернути булеве значення true, якщо num є нуль.В іншому випадку функція повинна повернути булеве значення false.

// function numZero(num) {
//   if (num === 0) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(numZero(0));
// console.log(numZero(-1));
// console.log(numZero(1));

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

// Задача-29
// Напишіть функцію, яка приймає два параметри str1 та str2.Функція повинна повернути булеве значення true, якщо остання літера str1 є голосною(a, e, i, o, u).В іншому випадку функція повинна повернути булеве значення false.

// Задача-30
// Напишіть функцію, яка приймає число num. Функція повинна повернути булеве значення true, якщо num є кратним 10. В іншому випадку функція повинна повернути булеве значення false.

// Задача-16
// Напишіть функцію, яка приймає масив arr(масив чисел).Функція повинна повернути булеве значення true, якщо arr містить хоча б одне негативне число.В іншому випадку функція повинна повернути булеве значення false.

// function negativeNumber([arr]) {}

// console.log(negativeNumber([1, 2, 3, -2]));

// console.log(negativeNumber([1, 2, 3, 4]));

// console.log(negativeNumber([1, 2, 3, -4]));

// Задача-17
// Напишіть функцію, яка приймає рядок str.Функція повинна повернути булеве значення true, якщо перша літера str є голосною(a, e, i, o, u).В іншому випадку функція повинна повернути булеве значення false.

// function firstVowel(str) {
//   if (str[0] === a || e || i || o || u) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(firstVowel('rok'));
// console.log(firstVowel('aok'));
// console.log(firstVowel('uok'));

// Задача-21
// Напишіть функцію, яка приймає рядок str.Функція повинна повернути булеве значення true, якщо довжина str є парною.В іншому випадку функція повинна повернути булеве значення false.

// function longDouble(str) {
//   if (str.lenght % 2) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(longDouble('cat'));
// console.log(longDouble('dog'));
// console.log(longDouble('hamster'));
// console.log(longDouble('lama'));

// Задача-22
// Напишіть функцію, яка приймає два параметри num1 та num2.Функція повинна повернути булеве значення true, якщо num1 ділиться на 2, а num2 не ділиться на 2. В іншому випадку функція повинна повернути булеве значення false.

// function division(num1, num2) {
//   if (num1 % 2 && num2 % 2) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(division(2, 5));
// console.log(division(2, 2));
// console.log(division(3, 4));
// console.log(division(2, 3));

// Задача-23
// Напишіть функцію, яка приймає число num.Функція повинна повернути булеве значення true, якщо num більше 100, але менше 200. В іншому випадку функція повинна повернути булеве значення false.

// function numberResult(num) {
//   if (num > 100 && nam < 200) {
//     return false;
//   } else {
//     return true;
//   }
// }

// console.log(numberResult(20));
// console.log(numberResult(200));
// console.log(numberResult(120));

// Задача-27
// Напишіть функцію, яка приймає два параметри num1 та num2.Функція повинна повернути булеве значення true, якщо різниця між num1 та num2 більше 50. В іншому випадку функція повинна повернути булеве значення false.

// function moreFifty(num1, num2) {

// }
// console.log(moreFifty(45, 70));
// console.log(moreFifty(-45, 70));
// console.log(moreFifty(45, 170));
