// Задание 1
// Пользователь вводит 3 значения (числовые) необходимо выбрать максимальное
// Решить 2мя способами (swich / if / ? )

var a = parseInt(process.argv[2]);
var b = parseInt(process.argv[3]);
var c = parseInt(process.argv[4]);

// switch(true){
//     case (a>b && a>c):
//     console.log("Максимальное число А");
//     break;
//     case (b>a && b>c):
//     console.log("Максимальное число B");
//     break;
//     case (c>b && c>a):
//     console.log("Максимальное число C");
//     break;
//     case (a==b && a==c):
//     console.log("Числа равны");
//     break;
//     default:
//     console.log("Ошибка");
// }

var max = a>b && a>c ? console.log("Максимальное число А") : b>a && b>c ? console.log("Максимальное число B"): c>b && c>a ? console.log("Максимальное число C"): a==b && a==c ? console.log("Числа равны"):console.log("Ошибка");

