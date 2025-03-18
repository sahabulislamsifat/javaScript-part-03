// Variable and data type **

// let x = 5;
// let y = "5";

// console.log(x == y);
// console.log(x === y);

// let a;

// console.log(a);

// operators and expressions ***

// let number = 10;
// number += 5;
// number -= 2;

// console.log(number);

// 4. নিচের expression গুলোর result কী হবে?
// console.log(10 + "5"); // 105 string
// console.log("10" - 5); // 5 number
// console.log(5 * "2"); // 10 number
// console.log("5" * "2"); // 10 number
// console.log("5" - "a"); // NaN not a number

// 5. ব্যবহারকারী থেকে একটি সংখ্যা ইনপুট নাও। যদি সংখ্যা জোড় হয় "Even" এবং বিজোড় হলে "Odd" প্রিন্ট করো।

// let number = 3;
// let number = 10;

// if (number % 2 === 0) {
//   console.log("Even Number");
// } else {
//   console.log("Odd Number");
// }

// 6. নিচের কোডের আউটপুট কী হবে?
// for (let i = 0; i < 5; i++) {
//   console.log(i); // 0,1,2,3,4
// }

// 7. ১ থেকে ১০ পর্যন্ত সংখ্যা প্রিন্ট করার জন্য একটি function লিখো।

// for (let i = 0; i < 11; i++) {
//   console.log(i);
// }

// function printNumbers() {
//   for (let i = 1; i <= 10; i++) {
//     console.log(i);
//   }
// }

// printNumbers();

// 8. একটি অ্যারের সব এলিমেন্ট যোগ করার function লিখো।

// function sumArray(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// }

// let numbers = [10, 20, 30, 40];
// const result = sumArray(numbers);
// console.log(result);

// 9. নিচের অবজেক্ট থেকে শুধুমাত্র "age" প্রিন্ট করো।
// let person = {
//   name: "Sifat",
//   age: 22,
//   city: "Dhaka",
// };

// console.log(person.age);

// 10. Arrow function ব্যবহার করে দুইটি সংখ্যা যোগ করার function লিখো।
const addNumbers = (a, b) => a + b;

console.log(addNumbers(10, 20)); // Output: 30
console.log(addNumbers(5, 15)); // Output: 20
