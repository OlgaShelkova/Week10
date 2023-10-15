//Задание 1
// Напишите функцию firstFunction, которая будет выводить консоль переменную first.
/*let first = 8;

function firstFunction() {

	return first;
}

console.log(firstFunction());
*/
//Задание 2
// Напишите функцию sum, которая принимает два параметра a и b, складывает их и выводит в консоль результат.
/*let a = 5;
let b = 3;

function sum(a, b) {
const result = a + b;
return result;
}
console.log(sum(a, b));*/

//Задание 3
// Напишите функцию multiply, которая принимает два параметра x и y, перемножает их и выводит в консоль результат.
/*let x = 4;
let y = 2;

function multiply(x, y) {
	const result = x * y;
	return result;
}

console.log(multiply(x, y));*/

//Задание 4
// Напишите функцию greet, которая принимает один параметр name и выводит в консоль приветствие с этим именем.
/*let firstName = 'Alice';
function greet(firstName) {
	console.log("Привет, " + firstName + "!");
}
greet(firstName);*/

//Задание 5
// Напишите функцию calculateArea, которая принимает два параметра width и height, вычисляет площадь прямоугольника и выводит в консоль результат.
/*let width = 6;
let height = 4;

function calculateArea(width, height) {
	const area = width * height;
	return area;
}

console.log(calculateArea(width, height));*/

//Задание 6
// Напишите функцию printMessage(), которая принимает один параметр message и выводит его в консоль. Если параметр не передан, используйте значение по умолчанию: "Сообщение отсутствует".
/*function printMessage(message) {
	return message ?? "Сообщение отсутствует";// если message равен undefined или null, показать "Сообщение отсутствует"
}
console.log(printMessage());
console.log(printMessage('Alice'));*/

// Напишите функцию secondFunction, которая принимает два параметра: c и d, и выводит в консоль их сумму. Если значения параметров не переданы, используйте значения по умолчанию: c = 5 и d = 10.
/*let c = 5;
let d = 10;

function secondFunction(c, d) {
	const sum = c + d;
	return sum;
}

console.log(secondFunction()); //Выведет 15
//Обратите ваше внимание, что мы можем передать в функцию любые аргументы и secondFunction подставит их на место параметров соответственно, перемножит их и вернёт результат.
console.log(secondFunction(2, 3)); //Выведет 5*/

//Задание 8
/* Напишите функцию thirdFunction, которая принимает два параметра: f и g, и выводит в консоль их произведение. Если только одно значение передано,
 используйте его как оба параметра функции. Если ни одно значение не передано, используйте значения по умолчанию: f = 2 и g = 3.*/
/*let f = 2;
let g = 3;

function thirdFunction(f = 2, g = 3) {
	const result = f * g;
	return result;
}

console.log(thirdFunction()); //Выведет 6
/*Обратите ваше внимание, что мы можем передать в функцию любые аргументы и thirdFunction подставит их на место параметров соответственно
 (если пармаметр не задан, то он подставится по умлочанию), перемножит их и вернёт результат.
console.log(thirdFunction(4)); //Выведет 12
console.log(thirdFunction(5, 6)); //Выведет 30
*/

//Задание 9
/* Напишите функцию приветствия (название придумайте самостоятельно), которая принимает один параметр guestName и возвращает приветствие в формате "Привет, {guestName}!". 
Если параметр не передан, используйте значение по умолчанию: "Гость". Чтобы увидеть результат в консоли, вызовите функцию внутри console.log.*/
/*const greetGuest = function(guestName = "Гость") {
	return `Привет, ${guestName}!`;
	};
	
	console.log(greetGuest("Алиса")); // Привет, Алиса!
	console.log(greetGuest()); // Привет, Гость!
*/

//Задание 10
// Создайте функцию calculateDifference с помощью Function Expression и правильно используйте её, чтобы вычесть два числа и вывести результат в консоль.
// Ваш код
/*
const calculateDifference = function(a, b) {
	return a - b;
	};
	
	const result = calculateDifference(5, 3);
	console.log(result);//Выведет 2
*/
//Задание 11
// Напишите функцию calculateProduct с помощью Function Expression, которая будет принимать два параметра. Функция должна перемножить значения и вывести результат в консоль.
/*const calculateProduct = function(a, b) {
	const result = a * b;
	return result;
};

const total = calculateProduct(5, 3);
console.log(total); // Выведет 15
*/

//Задание 12
// Напишите стрелочную функцию calculateSquare, которая будет принимать один параметр num. Внутри функции объявите локальную переменную result и присвойте ей значение, равное квадрату числа num. Затем верните значение переменной result из функции.
/*
const calculateSquare = num => {
	const result = num * num;
	return result;
	};
	
const squaredNumber = calculateSquare(5);

console.log(squaredNumber); // Выведет 25*/

//Задание 13
// Напишите  стрелочную функцию sayThree, которая будет выводить в консоль сообщение "Три!"
/*const sayThree = () => {
	console.log("Три!");
	};
	
	sayThree();
*/
//Задание 14
/* Напишите функцию findAnimal, которая будет выводить в консоль значения переменных cat и rabbit. 
Переменная cat объявлена внутри функции, а переменная rabbit объявлена во внешней области видимости.*/
/*const rabbit = "Кролик"; // Объявляем переменную rabbit во внешней области видимости

function findAnimal() {
const cat = "Кот"; // Объявляем переменную cat внутри функции
console.log("Кот: ", cat);
console.log("Кролик: ", rabbit);
}

findAnimal();
*/
//Задание 15
/* Допишите программу, которая вычисляет сколько лет прошло с летней олимпиады в Токио, Япония.
 Подсказка: 1. нужно создать переменную с текущим годом. 2. при вызове функции в круглые скобки нужно передать два параметра: текущий год и год летней олимпиады в Токио.*/
/*const lastOlympicsYear = 2021;
function calculateYearsSinceLastOlympics(currentYear, lastOlympicsYear) {
	return currentYear - lastOlympicsYear;
	}
	
console.log(
	'С момента летней олимпиады в Токио прошло ' + calculateYearsSinceLastOlympics(2023, lastOlympicsYear) + ' года',
);
*/
//Задание 16
// Напишите программу, которая вычисляет возраст пользователя на основе его года рождения, будет выводить результат в консоль.
/*const friendYearOfBirth = 1985;
const currentYear = 2023;
function calculateAge() {
	const age = currentYear - friendYearOfBirth; // Вычисляем возраст
	return age; // Возвращаем результат
	}
console.log('Возраст пользователя:', calculateAge());*/

//Задание 17
// Напишите функцию которая принимает ваш год рождения и возвращает ваш возраст. Обратите ваше внимание, что в глобальной зоне видимости есть переменная с текущим годом.
/*const myYearOfBirth = 1984;
const currentYear = 2023;
function calculateAge() {
	const age = currentYear - myYearOfBirth; // Вычисляем возраст
	return age; // Возвращаем результат
	}
console.log('Мой возраст:', calculateAge());*/
//Задание 18
// Напишите функцию, которая должна возводить число в заданную степень. Результат должен выводить в консоль в формате: console.log("Результат: " + result);
/*function calculatePower(base, exponent) { // параметры функции `base` (число, которое нужно возвести в степень) и `exponent` (степень, в которую нужно возвести число).
	const result = Math.pow(base, exponent); //используем встроенную функцию `Math.pow()`, которая используется для возведения числа `base` в степень `exponent`.
	console.log("Результат: " + result);
	}
	
	calculatePower(2, 3); // Выведет "Результат: 8"
	calculatePower(4, 3); // Выведет "Результат: 64"*/

