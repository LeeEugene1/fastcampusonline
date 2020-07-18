// hoisting 아래 있는 선언을(만) 끌어올리는 현상

//var hoisting
age = 6;
age++;
console.log(age); //7로 정상적으로 실행됨
var age;

//var의 문제
console.log(name); //선언부인 var name; Bark이던뭐든지간에 undefined
name='Mark';
console.log(name); //Mark
var name = 'Bark';//name = 'Bark'가 되기때문에 혼란야기

//hoisting이 안되는 let으로 문제해결
// console.log(birth); //Uncaught ReferenceError: Cannot access 'birth' before initialization
// birth = 1992;
// console.log(birth);
// let birth;


//함수의 hoisting
//이름이 있는 선언적 함수의 호출을 먼저 hoisting
//자바스크립트의 특성상 함수를 먼저 메모리에 올리는 hoisting현상이 나타남
hello();

function hello(){
    console.log('function hoisting')
}

//var 익명 함수 hoisting의 문제
hello2(); //선언부인 var name;가 끌어올려지는 호이스팅문제 => hello2 is not a function

var hello2 = function (){ //실제로는 hello2 = function(){}의 형태가됨
    console.log('hello2')
}

//const 익명 함수의 hoisting
hello3();//아예선언하지않은함수라는 메세지 출력 hello3 is not defined 또는 hoisting.js:37 Uncaught ReferenceError: Cannot access 'hello3' before initialization
const hello3 = () => {
    console.log('hello3'); 
}