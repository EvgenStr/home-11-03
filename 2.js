// Задание 2
// Пользователь вводит число, нужно выбрать каким числам оно кратно (из списка 1 - 10)

var a = parseInt(process.argv[2]);
var even = "";
for(var i =1;i<=10;i++){
    if(a%i==0){
        even += i;
        even += " ";
    }
}
console.log(`Число ${(a)} кратно числам ${even}`)