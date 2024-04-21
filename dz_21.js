//Домашнее задание 1
// const fibonacci = [
// 	0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
// ]

// fibonacci.forEach(function (elem) {
// 	console.log(elem)
// })

// fibonacci.forEach(elem => {
// 	console.log(elem)
// })

//Домашнее задание 2

// const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton']

// const result = users.map((item, i) => {
// 	return `member ${i + 1}: ${item}`
// })
// console.log(result)

// const result = users.map(function (item, i) {
// 	return `member ${i + 1}: ${item}`
// })
// console.log(result)

//Домашнее задание 3

// const numbers = [7, -4, 32, -90, 54, 32, -21]

// const number = numbers.filter(item => {
// 	return item > 0
// })
// console.log(number)

// const number = numbers.filter(function (item) {
// 	return item > 0
// })
// console.log(number)

//Домашнее задание 4

// const fibonacci = [
// 	0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377, 610, 987,
// ]

// const fibonaccis = fibonacci.reduce((result, item) => {
// 	return result + item
// }, 0)
// console.log(fibonaccis)

// const fibonaccis = fibonacci.reduce(function (result, item) {
// 	return result + item
// }, 0)
// console.log(fibonaccis)

//Домашнее задание 5

const numbers = [5, 9, 13, 24, 54, 10, 13, 99, 1, 5]

const number = numbers.find(item => {
	return item % 2 === 0
})
console.log(number)

const number = numbers.find(function (item) {
	return item % 2 === 0
})
console.log(number)
