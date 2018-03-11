// Задание 5
// Пользователь вводит 2 числа и операцию, нужно вывести результат
// Задние 6
// Условие то же что и в задании 5, но добавить вывод ошибки при делении на ноль

var a = process.argv[2];
var b = process.argv[3];
var operat = process.argv[4];

// console.log(a==0 ? console.log(`Ошибка деление на 0`):b==0 ? console.log(`Ошибка деление на 0`):console.log(`Результат = ${a / b}`));

switch (operat) {
  case "+":
    console.log(`Результат = ${a + b}`);
    break;
  case "-":
    console.log(`Результат = ${a - b}`);
    break;
  case "*":
    console.log(`Результат = ${a * b}`);
    break;
  case "/":
  console.log(a==0 ? console.log(`Ошибка деление на 0`):b==0 ? console.log(`Ошибка деление на 0`):console.log(`Результат = ${a / b}`));
    break;
  default:
    console.log("error");
}
