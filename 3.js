// Задание 3
// Пользователь вводит число, нужно создать массив из чисел от 0 до "минус" число пользователя

var a = parseInt(process.argv[2]);
var mass = [];
var len = (a*2+1);
for (var i = 0; i <= len; i++) {
    mass[i] = a;
    a--;
}
console.log(mass);

