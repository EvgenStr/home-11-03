// Задание 4
// Пользователь вводит до 10 цифр, нужно записать их в массив и:
// Посчитать среднее
// сумму всех элементов
// Разность всех элементов
// Количество четных / нечетных элементов
// Минимум / Максимум
// Количество положительных и отрицательных элементов

var a = 0;
var mass = [];
for (var i = 0; i <= 10; i++) {
  if (parseInt(process.argv[i + 2]) == parseInt(process.argv[i + 2])) {
    mass[i] = parseInt(process.argv[i + 2]);
  }
}
console.log(mass);
// for (var i = 0; i <= 10; i++) {
//   mass[i] = mass[i] ? mass[i] : null;
// }
// console.log(mass);
// a = a ? a : 0;
var summ = 0;
var k = 0;
for (var i = 0; i < mass.length; i++) {
  summ += mass[i];
  k++;
}
console.log(`Сумма элементов = ${summ}, среднее ${summ / k}`);
// Разность всех элементов
var diff = 0;
var k = 0;
for (var i = 1; i < mass.length; i++) {
  diff += mass[i - 1] - mass[i];
}
console.log(`Разность элементов = ${diff}`);
// Количество положительных и отрицательных элементов
var pos = 0,
  neg = 0;
for (var i = 0; i < mass.length; i++) {
  if (mass[i] > 0) {
    pos++;
  } else {
    neg++;
  }
}
console.log(
  `Количество положительных  ${pos}, количество отрицательных ${neg}`
);
// Количество четных / нечетных элементов
var even = 0,
  odd = 0;
for (var i = 0; i < mass.length; i++) {
  if (mass[i] % 2 == 0) {
    even++;
  } else {
    odd++;
  }
}
console.log(`Количество четных  ${even}, количество не четных ${odd}`);
// Минимум / Максимум
var max = 0;
for (var i = 0; i < mass.length; i++) {
  if (mass[i] > max) {
    max = mass[i];
  }
}
var min = max;
for (var i = 0; i < mass.length; i++) {
  if (mass[i] < min) {
    min = mass[i];
  }
}
console.log(`MAX  ${max}, MIN ${min}`);
