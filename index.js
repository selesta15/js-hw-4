/*
 1) Напишите программу, где пользователь вводит любое целое положительное число.
  А программа суммирует все числа от 1 до введенного пользователем числа.
 */

let number = 0;
number = Number(prompt("Введите число:"));

if (number <= 0) {
    alert("Отрицательное число: " + number)
} else {
    let sum = 0;
    for (let i = 1; i <= number; i++) {
        sum += i
    }
    alert("Сумма: " + sum)
}

/*
2) Треугольник в цикле
Напишите цикл, который за 7 вызовов console.log выводит такой треугольник:
*/

let string = "";
while(string.length < 7) {
    string += "#"
    console.log(string)
}
