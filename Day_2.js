// function addtwoNumbers(no1, no2) {
//     // let result = no1 + no2
//     //  console.log("priya");
//     // return result
//     return no1 + no2

// }
// const result = addtwoNumbers(8, 4)
// console.log("result:", result);


// function loginuserMessage(username = "priya") {
//     if (!username) {
//         console.log("please enter a username");
//         return
//     }
//     return `${username} Just logged in`
// }
// // console.log(loginuserMessage("Priya"))
// console.log(loginuserMessage())


// Arrow functions

// const user = {
//     username: "priya",
//     price: 999,
//     welcomeMessage: function () {
//         console.log(`${this.username},Welcome to website`);
//         console.log(this);

//     }
// }

// user.welcomeMessage()
// user.username = "pratik"
// user.welcomeMessage()

// function chai() {
//     let username = "priya"
//     console.log(this.username);

// }
// chai()


// const chai = () => {
//     let username = 'priya'
//     console.log(this.username);
// }
// chai()

// const addnumbers = (no1, no2) => {
//     return no1 + no2
// }
// console.log(addnumbers(3, 2))


// const addnumbers = (no1, no2) => no1 + no2
// const addnumbers = (no1, no2) => (no1 + no2)
// const addnumbers = (no1, no2) => ({ username: 'priya' })
// console.log(addnumbers(3, 2))


// let myadder = function (num1, num2) {
//     let added = num1 + num2
//     return added
// }
// console.log(myadder(2, 2));


// let mymultiplier = function (num1, num2) {
//     return num1 * num2
// }
// console.log(mymultiplier(2, 2));


// let guestUser = function (name = 'unNamed', courseCount = 0) {
//     return 'hello  ' + name + '  and your course count is:   ' + courseCount
// }
// console.log(guestUser('prti',2));

// const person = {
//     name: "Priyu",
//     showName: () =>
//         console.log(this.name)

// };
// person.showName()






// Task 1  – Add Two Numbers: Create a function that adds two numbers

// function addNumbers(a, b) {
//     return a + b;
// }
// console.log(addNumbers(3, 4));


// Task 2 – Arrow Function Multiply: Use arrow function to multiply

// const multiplyNum = (a, b) => a * b; console.log(multiplyNum(5, 6));


// Task 3 – Default Parameter: Function with default value

// function sayHello(name = "user") {
//     console.log("Hello " + name);
// }
// sayHello('priya');
