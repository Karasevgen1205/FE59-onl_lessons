// ДОМАШНЕЕ ЗАДАНИЕ 1

// const getSum = () => {
// let sum = 0
// 	for (let i = 0; i <= 100; ++i) {
// 		sum += i
// 		console.log(sum)
// 	}
// }
// getSum()

// ДОМАШНЕЕ ЗАДАНИЕ 2
// const SpecifyTheAmount = prompt('Укажите сумму')
// const SpecifyTheDeadline = prompt('Укажите срок')
// const Credit = (sum = SpecifyTheAmount, years = SpecifyTheDeadline) => {
// 	const percent = (sum / 100) * (17 * years)
// 	console.log(percent)
// }
// Credit()

// ДОМАШНЕЕ ЗАДАНИЕ 3

// const trimString = (line, from, by) => {
// 	return line.slice(from, by)
// }
// console.log(trimString('Student', 1, 6))

// ДОМАШНЕЕ ЗАДАНИЕ 4

// let randomNumber = prompt('Любое число')
// const getSumNumbers = (n = randomNumber) => {
// 	console.log(randomNumber.length)
// }
// getSumNumbers()

// ДОМАШНЕЕ ЗАДАНИЕ 5

// function getSum(a, b) {
// 	if (a === b) {
// 		return a && b
// 	} else if (a < b) {
// 		Math.max = b
// 		Math.min = a
// 	} else {
// 		Math.max = a
// 		Math.min = b
// 	}
// 	let sum = 0
// 	for (let i = Math.min; i <= Math.max; ++i) {
// 		sum += i
// 	}
// 	return sum
// }
// console.log(getSum(1, 1))
// console.log(getSum(-2, 4))
// console.log(getSum(4, -2))

// ДОМАШНЕЕ ЗАДАНИЕ 6

// function fooBoo(boolValue, foo, boo) {
// 	if (boolValue === true) {
// 		foo()
// 	} else {
// 		boo()
// 	}
// }

// function foo() {
// 	console.log('foo')
// }

// function boo() {
// 	console.log('boo')
// }

// fooBoo
// fooBoo(true, foo, boo)
// fooBoo(false, foo, boo)

// ДОМАШНЕЕ ЗАДАНИЕ ПРОДВИНУТЫЙ УРОВЕНЬ 1
// function TriangleIsPossible(a, b, c) {
// 	if (a + b > c && a + c > b && b + c > a) {
// 		return true
// 	} else {
// 		return false
// 	}
// }
// console.log(TriangleIsPossible(3, 4, 5))
// console.log(TriangleIsPossible(1, 5, 10))

// ДОМАШНЕЕ ЗАДАНИЕ ПРОДВИНУТЫЙ УРОВЕНЬ 2

// function breakChocolate(n, m) {
// 	if (n > 0 && m > 0) {
// 		return n * m - 1
// 	} else {
// 		return 0
// 	}
// }
// console.log(breakChocolate(5, 1))
