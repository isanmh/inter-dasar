// [2,5,7] => [2,5,8]
// tdd adalah test driven development (membuat test terlebih dahulu baru membuat function)
// oop adalah object oriented programming (membuat object terlebih dahulu baru membuat function)
// encapsulation adalah mengelompokkan data dan function yang berhubungan menjadi satu kesatuan
// polymorphism adalah kemampuan object untuk memiliki banyak bentuk
function incrementNumberArr(inputArray) {
  let numberArray = inputArray.join("");
  let number = Number(numberArray) + 1;
  return String(number)
    .split("")
    .map((number) => Number(number));
}
console.log(incrementNumberArr([2, 4, 19]));

// reverse string
function reverseString(inputString) {
  return inputString.split("").reverse().join("");
}
console.log(reverseString("hello world"));

// manual reverse string
function manualReverseString(inputString) {
  let result = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    result += inputString[i];
  }
  return result;
}
console.log(manualReverseString("hello world"));

// bilangan prima manual
function isPrimeNumber(number) {
  if (number < 2) {
    return false;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
console.log(isPrimeNumber(7));

// tampilkan bilangan prima
function showPrimeNumber(number) {
  let result = [];
  for (let i = 2; i <= number; i++) {
    if (isPrimeNumber(i)) {
      result.push(i);
    }
  }
  return result;
}
console.log(showPrimeNumber(10));

// palindrome
function isPalindrome(inputString) {
  let reverseString = inputString.split("").reverse().join("");
  return inputString === reverseString;
}
console.log(isPalindrome("katak"));

// check palindrome adalah function yang mengembalikan nilai boolean
function checkPalindrome(inputString) {
  let reverseString = "";
  for (let i = inputString.length - 1; i >= 0; i--) {
    reverseString += inputString[i];
  }
  return inputString === reverseString;
}
console.log(checkPalindrome("katak"));

// fibonacci merupakan deret angka yang setiap angka merupakan hasil penjumlahan dari 2 angka sebelumnya
function fibonacci(n) {
  let arr = [0, 1];
  for (let i = 2; i < n; i++) {
    arr.push(arr[i - 2] + arr[i - 1]);
  }
  return arr;
}
console.log("fibo", fibonacci(10));

// looping javascript
function looping() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
}
// looping array
function loopingArray() {
  let arr = [1, 2, 3, 4, 5];
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// sorting fungsi bawaan
function sorting() {
  let arr = [5, 3, 4, 2, 1];
  return arr.sort((a, b) => a - b);
}
console.log(sorting());

// sorting manual array
function sortingManualArray() {
  let arr = [5, 3, 4, 2, 1];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
console.log(sortingManualArray());

// fizzbuzz adalah function yang mengembalikan nilai string fizz jika angka habis dibagi 3, buzz jika angka habis dibagi 5, fizzbuzz jika angka habis dibagi 3 dan 5, dan angka jika tidak habis dibagi 3 dan 5
function fizzbuzz(number) {
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
fizzbuzz(15);

// fizzbuzz dengan array
function fizzbuzzArray(number) {
  let result = [];
  for (let i = 1; i <= number; i++) {
    if (i % 15 === 0) {
      result.push("fizzbuzz");
    } else if (i % 3 === 0) {
      result.push("fizz");
    } else if (i % 5 === 0) {
      result.push("buzz");
    } else {
      result.push(i);
    }
  }
  return result;
}
console.log(fizzbuzzArray(15));

// sorting array string
function sortingArr() {
  let arr = ["c", "g", "h", "a", "b", "c", "d"];
  return arr.sort();
}
console.log(sortingArr());

// sorting array string manual
function sortingArrManual() {
  let arr = ["c", "g", "h", "a", "b", "c", "d"];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[i]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
