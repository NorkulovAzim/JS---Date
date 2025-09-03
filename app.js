// const str = "JavaScript";
// console.log(str.charAt(1)); // "S"

// const str = "JavaScript";
// console.log(str.charCodeAt(4)); // 83

// const str1 = "Hello";
// const str2 = "World";
// console.log(str1.concat(" ", str2, "!")); // "Hello World!"

// const str = "Learn JavaScript";
// console.log(str.includes("Java")); // true
// console.log(str.includes("Python")); // false

// const str = "frontend.js";
// console.log(str.endsWith(".js")); // true
// console.log(str.endsWith(".ts")); // false

//string2//
// let n = 67;
// let code = String(n).charCodeAt(0);
// console.log(code);

//string3//
// let n = "B";
// let code = n.charCodeAt(n);

// console.log("Oldingi:", String.fromCharCode(code - 1));
// console.log("Keyingi:", String.fromCharCode(code + 1));
// console.log("Kod:", code);

//string4//
// for (let i = 65; i <= 90; i++) {
//   console.log(String.fromCharCode(i));
// }

//string5//
// for (let i = 122; i >= 97; i--) {
//   console.log(String.fromCharCode(i));
// }

//-----//

// let a = [];

// for (let i = 97; i <= 122; i++) {
//   a.push(String.fromCharCode(i));
// }
// a.reverse();
// console.log(a);

//string6//
// let a = 126;
// if (a >= 48 && a <= 57) {
//   console.log("Digit");
// } else if (a >= 65 && a <= 90) {
//   console.log("Katta lotin");
// } else if (a >= 97 && a <= 122) {
//   console.log("Kichik lotin");
// } else {
//   console.log("0");
// }
