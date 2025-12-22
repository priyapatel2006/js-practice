//Array
// const myArr = [0, 1, 2, 3, 4, 5]
// const myHeros = ['saktiman', 'nagraj']
// const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr);

//Array Methods

// myArr.push(6)
// myArr.pop()
// console.log(myArr);
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));
// const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);

// console.log("A", myArr);
// const myn1 = myArr.slice(1, 3)
// console.log(myn1);
// console.log("B", myArr);
// const myn2 = myArr.splice(1, 3)
// console.log("C", myArr);
// console.log(myn2);

// const marvel_heros = ["thor", "Ironman", "spiderman"]
// const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);
// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_array = another_array.flat(Infinity)
// console.log(real_array);

// console.log(Array.isArray('priya'))
// console.log(Array.from('priya'))
// console.log(Array.from({ name: 'priya' }))

// const coding = ['js', 'ruby', 'java', 'python', 'react']
// const values = coding.forEach((item) => {
//     // console.log(item);
//     return item
// })
// console.log(values);


// const mynums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // const newNums = mynums.filter((num) => num > 5)
// const newNums = []
// mynums.forEach((num) => {
//     if (num > 4) {
//         newNums.push(num)
//     }
// })

// console.log(newNums);

//Filter............

// const books = [
//     {
//         title: "Atomic Habits",
//         genre: "Self-help",
//         publish: 2018,
//         edition: "1st"
//     },
//     {
//         title: "The Alchemist",
//         genre: "Fiction",
//         publish: 1988,
//         edition: "2nd"
//     },
//     {
//         title: "Rich Dad Poor Dad",
//         genre: "Finance",
//         publish: 1997,
//         edition: "3rd"
//     },
//     {
//         title: "Think and Grow Rich",
//         genre: "Motivational",
//         publish: 1937,
//         edition: "5th"
//     },
//     {
//         title: "Ikigai",
//         genre: "Self-help",
//         publish: 2016,
//         edition: "1st"
//     },
//     {
//         title: "The Psychology of Money",
//         genre: "Finance",
//         publish: 2020,
//         edition: "1st"
//     },
//     {
//         title: "Wings of Fire",
//         genre: "Autobiography",
//         publish: 1999,
//         edition: "4th"
//     },
//     {
//         title: "Harry Potter and the Sorcerer’s Stone",
//         genre: "Fantasy",
//         publish: 1997,
//         edition: "1st"
//     }
// ];

// let userBooks = books.filter((bk) => bk.genre === 'Finance')
// userBooks = books.filter((bk) => { return bk.publish >= '2020' })


// console.log(userBooks);
//Map............

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = numbers.map((num) => num + 10)
// console.log(newNums);

// const mynums = [1, 2, 3]
// const myTotal = mynums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc}and currval: ${currval}`);

//     return acc + currval
// }, 0)

// const myTotal = mynums.reduce((acc, curr) => acc + curr, 0)

// console.log(myTotal);


// Task 1 – map(): Transform array values

// const array = ["A", "B", "C"]
// // const newArray = array.map((item) => item + " User")
// const newArray = array.map((item) => `${item} User`)
// console.log(newArray);

// Task 2 – filter(): Filter even numbers
// const Numbers = [1, 2, 3, 4, 5, 6]
// const evenNum = Numbers.filter((num) => num % 2===0)
// console.log(evenNum);


// Task 3 – reduce(): Calculate total sum
// const Numbers = [100, 200, 300]
// const Total = Numbers.reduce((acc, curr) => acc + curr)
// console.log(Total);
