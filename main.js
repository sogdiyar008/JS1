
//1
/*
var name = prompt("Введите ваше имя:");
document.write("<h1>Привет, " + name + "!</h1>");
*/


//2
/*
let a=1, b=1;  //a=2, b=2
let c=++a;  //c=2
let d=b++;  //d=1
console.log(d=b++)
*/

//3
/* 
let a=2;
let x = 1+(a*=2);
console.log(a, x)
*/
//ответ а=4;   х=5

//4
/*
console.log(""+1+0); //10
console.log(""-1+0); //-1
console.log(true+false); //1
console.log(6/"3"); //2
console.log("2"*"3"); //6
console.log(4+5+"px"); //9px
console.log("$"+4+5); //$45
console.log("4"-2); //2
console.log("4px"-2); //NaN
console.log("  -9  "+5); //  -9  5
console.log("  -9  "-5); //-14
console.log(null+1); //1
console.log(undefined+1); // Nan 
console.log(" \t \n"-2); // -2
 */

//5
/*
//Не правильный код
//let a = prompt("Первое число" , 1);
//let b = prompt("Второе число" , 2);
//alert(a+b);

//правильный
let a = Number(prompt("Первое число" , 1));
let b = Number(prompt("Второе число" , 2));
alert(a+b);
*/

//6
//6.1
// let a = 3;
// alert(a);
//6.2
// let a = Number(10),
//     b = Number(2);
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
//6.3
// let c=15, 
//     d=2;
// let result = c+d;
// console.log(result)
//6.4
// let a = 10, b = 2, c=5;
// console.log(a+b+c)
//6.5
// let a=17,
//     b=10,
//     c=a-b,
//     d=7,
//     result=c+d;
// console.log(result);

//77777777
//7.1
// let str = 'Привет, World!'
// console.log(str);
//7.2
// let str1 = "Hello, ", 
//     str2 = "World!";
// console.log(str1+str2);
//7.3
// let name = 'Согдияр'
// console.log(`Hallo ${name}`)
//7.4
// let age = '16'
// console.log(`мне: ${age}`)

//8
//8.1
// var name = prompt("Введите ваше имя:");
// alert("Привет, " + name + "!");
//8.2
// var kv = prompt("Vvedite Chislo");
// if (kv != Number){
//     alert ("Ошибка ввода")
// }
// alert("kvadrat etogo Chisla:  " + kv**2 );

//9
// let str = 'abcde';
// console.log(`'${str[0]}' '${str[2]}' '${str[4]}'`);
//9.2
// let num = 12345;
// let num1 = String(num)
// console.log(num1[0]*num1[1]*num1[2]*num1[3]*num1[4]);

//10
//10.1
// let shitalka = confirm('я считаю количество секунд. хочешь посшитаю?)')
// if (shitalka == true) {
//     let s = prompt ('сколько секунд?', 0);
//     let m = prompt ('сколько минут?', 0);
//     let h = prompt ('сколько часов?', 0);
//     let d = prompt ('сколько дней?', 0);
//     let mo = prompt ('сколько месяцев?', 0);
//     let s1=(m*60)+(h*60*60)+(d*60*60*24)+(mo*60*60*24*30)
//     alert (`всего секунд: ${Number(s)+Number(s1)}`)
// }

//10.2
// let h=12,m=32,s=21;
// console.log(`'${h}:${m}:${s}'`);

//10.3
// var kv = Number(prompt("Vvedite Chislo", 6));
// alert(kv**2)

//11
//11.1
// var num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num)

//11.2
// var num = 10;
// num = ++num;
// num = ++num;
// num = --num
// alert(num)