//Домашнее задание 1

// const colors = ['red', 'green', 'blue']
// console.log(colors.length)

//Домашнее задание 2
// const animals = ['monkey', 'dog', 'cat']
// console.log(animals.at(-1))
// console.log(animals[animals.length - 1])

//Домашнее задание 3

// const numbers = [5, 43, 63, 23, 90]
// numbers.length = 0
// console.log(numbers)

// numbers.splice(0, numbers.length)
// console.log(numbers)

//Домашнее задание 4

// const students = ['Polina', 'Dasha', 'Masha']
// students.splice(2, 2, 'Borya')
// students.splice(0, 1, 'Andrey')
// console.log(students)

//Домашнее задание 5

// const cats = ['Gachito', 'Tom', 'Batman']
// for (i = 0; i < cats.length; ++i) {
// 	console.log(cats[i])
// }

// for (let key of cats) {
// 	console.log(key)
// }

//Домашнее задание 6

// const evenNumbers = [2, 4, 6, 8, 10]
// const oddNumbers = [1, 3, 5, 7, 9]
// const otvet = evenNumbers.concat(oddNumbers)
// console.log(otvet)
// console.log(otvet.indexOf(8))

//Домашнее задание 7
// const binary = [0, 0, 0, 0]
// const newBinary = binary.join('1')
// console.log(newBinary)

//Домашнее задание ПРОДВИНУТЫЙ УРОВЕНЬ 1

//"шала"
//"дерево"
// function palindrome(str) {
// 	return str.split('').reverse().join('') == str
// }
// console.log(palindrome('шалаш'))
// console.log(palindrome('дерево'))

//Домашнее задание ПРОДВИНУТЫЙ УРОВЕНЬ 2

// const matrix = [
// 	[12, 98, 78, 65, 23],
// 	[54, 76, 98, 43, 65],
// 	[13, 324, 65, 312],
// 	[9092, 22, 45, 90000],
// ]

// let sum = 0
// let count = 0

// for (let i = 0; i < matrix.length; i++) {
// 	for (let j = 0; j < matrix[i].length; j++) {
// 		sum += matrix[i][j]
// 		count++
// 	}
// }

// const average = sum / count
// console.log(average)

//Домашнее задание ПРОДВИНУТЫЙ УРОВЕНЬ 3

// const mixedNumbers = [-14, 24, -89, 43, 0, -1, 412, 4]
// const minNumbers = []
// const maxNumbers = []
// for (elem of mixedNumbers) {
// 	if (elem >= 0) {
// 		minNumbers.push(elem)
// 	} else maxNumbers.push(elem)
// }

// console.log(minNumbers)
// console.log(maxNumbers)

//Домашнее задание ПРОДВИНУТЫЙ УРОВЕНЬ 4

// let numbers = [1, 2, 3, 4, 5]
// const cubes = []

// for (const i of numbers) {
// 	numbers = i ** 3
// 	cubes.push(numbers)
// }
// console.log(cubes)
// console.log(numbers)
