// Задание 3
// Пользователь вводит число, нужно создать массив из чисел от 0 до "минус" число пользователя

var mass = [];
var len = (parseInt(process.argv[2])*2+1);
for (var i = 0; i <= len; i++) {
    mass[i] = parseInt(process.argv[2]-i);
   }
console.log(mass);

