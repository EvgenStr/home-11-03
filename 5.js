// Задание 5
// Пользователь вводит 2 числа и операцию, нужно вывести результат

var a = process.argv[2];
var b = process.argv[3];
var operat = process.argv[4];

switch (operat) {
  case "+":
    console.log(`Результат = ${a + b} `);
    break;
  case "-":
    console.log(`Результат = ${a - b} `);
    break;
  case "*":
    console.log(`Результат = ${a * b} `);
    break;
  case "/":
    console.log(`Результат = ${a / b} `);
    break;
  default:
    console.log("error");
}
