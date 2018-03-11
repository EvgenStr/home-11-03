// Задание 7
// Задать массив из чисел ( не более 10)
// Пользователь вводит 1 числа
// Найти в массиве пару чисел которые в сумме бы дали это число

var a = parseInt(process.argv[2]);
var mass = [1, 7, 2, 1, 2, 3, 4, 4, 9];
var summ = "";
for (var i = 0; i < mass.length; i++) {
  for (var k = i + 1; k < mass.length; k++) {
    if (mass[i] + mass[k] == a) {
      // console.log(
      //   `Числа которые в сумме дают число ${a} это ${mass[i]} и ${mass[k]}`
      summ += ` ${mass[i]} и ${mass[k]}; `;
    }
  }
}
console.log(`Числа которые в сумме дают число ${a} это ${summ} `)
