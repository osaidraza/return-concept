// function cook() {
//     console.log("bring chai paratha");
// }

// cook();
// cook();
// cook();


















// function cook(item1, item2) {
//     console.log("bring " + item1 + " " + item2);
// }

// cook("Biryani", "Bottle");
// cook("Kabab", "Paratha");

















// function findCube(num) {
// console.log(num * num * num);
// }

// findCube(3);
// findCube(9);
// findCube(5);
// findCube(2);
























// function displayMessage(userName, msg = "How may I help you") {
//     console.log(userName + " " + msg);
// }

// displayMessage("Abdullah", "Assalamualaikum");

// displayMessage("osaid", "apni fees submit kerwaya");

// displayMessage("Arfat");





















// function makeFruitChaat() {
// for (let i = 0; i < arguments.length; i++) {
//     console.log("Crush " + arguments[i]);
// }

// }

// makeFruitChaat("apple", "banana", "orange");

// makeFruitChaat("stawbery", "graps");

// makeFruitChaat("melon");
















// function yourWishes() {
//     console.log(arguments);
// }

// yourWishes("no traffic", "money and money", "life is good");
















// function add2Number(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let findSum = add2Number(9, 5);

// console.log(findSum);














// function findVolume(l, h, w) {
//     let lInMeters = l * 0.0254;
//     let hInMeters = h * 0.0968;
//     let wInMeters = w * 0.0229;

//     let calculatedVolumn = lInMeters * hInMeters * wInMeters;
//     return calculatedVolumn.toFixed(2) + "m";
// }

// let item = ["mobile", "laptop", "ipad"];
// let h = [25, 50, 35];
// let w = [10, 20, 30];
// let l = [22, 28, 30];
// let volumnInMeters = [];

// let olEl = document.querySelectorAll("ol");
// for (let i = 0; i < item.length; i++) {
// let volumn = findVolume(25, 22, 10);
// volumnInMeters.push(volumn);
// console.log("item " + item[i] + "volumn is: " + volumn);
// olEl[0].innerHTML += `
// <li>${item[i]} volume is: ${volumn}</li>
// ` 

// }

// console.log(volumnInMeters);















// function addTwoNum(num1, num2) {
//     let sum = num1 + num2;
//     return sum;
// }

// let keBill = addTwoNum(7000, 2000);

// let educationalCost = addTwoNum(5000, 6000);

// let dinner = addTwoNum(5000, 9000);

// let grocerries = addTwoNum(15000, 200);

// // let olEl = document.querySelectorAll("ol");
// olEl[0].innerHTML += `
// <li>${keBill}</li>
// <li>${educationalCost}</li>
// <li>${dinner}</li>
// <li>${grocerries}</li>
// `

// console.log(keBill, educationalCost, dinner, grocerries);















// function calculateGrade(marks) {
//     let grade;
//     if (marks >= 80) {
//         grade = "A-1";
//     }
//     else if (marks < 80 && marks >= 70) {
//         grade = "A";
//     }
//     else if (marks < 70 && marks >= 60) {
//         grade = "B";
//     }
//     else if (marks < 60 && marks >= 50) {
//         grade = "C";
    // }
    // else if (marks < 50 && marks >= 40) {
    //     grade = "D";
    // }
    // else if (marks < 40 && marks >= 33) {
    //     grade = "E";
    // }
    // else {
    //     grade = "F";
    // }
    // return grade;


// }

// let students = ["Ahmed", "Arfat", "Osaid", "Ubaid", "Amjad"];
// let marks = [45, 55, 65, 75, 85];
// let tBoody = document.querySelectorAll("tbody");

// for (let i = 0; i < students.length; i++) {
//     let grade = calculateGrade(marks[i]);

//     tBoody[0].innerHTML += `
// <tr>
// <td>${students[i]}</td>
// <td>${marks[i]}</td>
// <td>${grade}</td>
// </tr>

// `
// }














