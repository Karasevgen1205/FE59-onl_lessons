'use strict'
// Домашнее задание 1
// const deleted = {
// 	name: 'kirill',
// 	age: 24,
// 	city: 'Mogilev',
// }
// delete deleted.name
// console.log(deleted)

// Домашнее задание 2
// const deleted = {
// 	name: 'kirill',
// 	age: 24,
// 	city: 'Mogilev',
// }
// console.log('age' in deleted)
// console.log('mane' in deleted)

// Домашнее задание 3

// const student = {
// 	name: 'John',
// 	age: 19,
// 	isHappy: true,
// }
// for (const key in student) {
// 	console.log(key, student[key])
// }

// Домашнее задание 4

// const colors = {
// 	'ru pum pu ru rum': {
// 		red: 'красный',
// 		green: 'зеленый',
// 		blue: 'синий',
// 	},
// }
// console.log(
// 	colors['ru pum pu ru rum'].red,
// 	'и',
// 	colors['ru pum pu ru rum'].blue
// )

// Домашнее задание 5

// let salaries = {
// 	andrey: 500,
// 	sveta: 413,
// 	anton: 987,
// 	igor: 664,
// 	alexandra: 199,
// }
// let sum = 0
// for (const key in salaries) {
// 	sum += salaries[key]
// }
// let bet = sum / 5
// console.log(bet)

// Домашнее задание 6

// const userInfo = {}

// const login = prompt(`Укажите логи`)
// const password = prompt(`Укажите пароль`)

// userInfo.login = login
// userInfo.password = password

// const loginConfirm = prompt(`Подтвердите логин`)
// const passwordConfirm = prompt(`Подтвердите пароль`)

// if (loginConfirm === userInfo.login && passwordConfirm === userInfo.password) {
// 	console.log(`You are welcome`)
// } else {
// 	console.log(`Error`)
// }

// Домашнее задание ПРОВДВИНУТЫЙ УРОВЕНЬ 1

// function describeScore(score) {
// 	const goals = [
// 		'ноль',
// 		'один',
// 		'два',
// 		'три',
// 		'четыре',
// 		'пять',
// 		'шесть',
// 		'семь',
// 		'восемь',
// 		'девять',
// 	]

// 	const [team1, team2] = score.split(':')

// 	if (team1 > 9 || team2 > 9) {
// 		return 'Число забитых голов не должно превышать 9.'
// 	}

// 	const description = `Команда 1 забила ${goals[team1]} гола, а команда 2 забила ${goals[team2]} голов.`

// 	return description
// }
// console.log(describeScore)

// function describeScore(score) {
// 	const goals = [
// 		'ноль',
// 		'один',
// 		'два',
// 		'три',
// 		'четыре',
// 		'пять',
// 		'шесть',
// 		'семь',
// 		'восемь',
// 		'девять',
// 	]

// 	const [team1, team2] = score.split(':')

// 	if (team1 > 9 || team2 > 9) {
// 		return 'Число забитых голов не должно превышать 9.'
// 	}

// 	const description = `Команда 1 забила ${goals[team1]} гола, а команда 2 забила ${goals[team2]} голов.`

// 	return description
// }

// const scor = '2:5'
// const resultDescription = describeScore(scor)
// console.log(resultDescription)

// Домашнее задание ПРОВДВИНУТЫЙ УРОВЕНЬ 2

// let student1 = {
// 	name: 'Polina',
// 	age: 27,
// }
// let student2 = {
// 	name: 'Polina',
// 	age: 27,
// }
// console.log(JSON.stringify(student1) === JSON.stringify(student2))

// Домашнее задание ПРОВДВИНУТЫЙ УРОВЕНЬ 3

// const animals = {
// 	cat: {
// 		name: 'Енчик',
// 		age: 3,
// 	},
// 	dog: {
// 		name: 'Орео',
// 		age: 2,
// 	},
// }
// console.log(animals.bird?.age?.name)
