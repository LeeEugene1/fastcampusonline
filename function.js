//function : 객체중 하나의 종류! 내장객체
//이름이 hello인 함수를 선언해보자
function hello1(){
    console.log('hello1이 실행되었습니다');
}
console.log(hello1,typeof hello1);//function
hello1();

//함수의 매개변수
//함수를 호출할때 값을 지정
function hello2(name){
    console.log('hello2', name)
}
hello2('yujin');

//함수의 return
//함수를 실행하면 얻어지는 값
// function hello3(name){
//     return `hi ${name}`;
// }
// hello3('hayoung');
function hello3(name){
    return `하영의 나이는 ${name}`
}
console.log(hello3(10));

//*리터럴 잠깐공부!
// var name = "Brendan";
// console.log(`Yo, ${name}!`);

//익명함수
const hello4 = (age) =>{
    return `유민의 나이는 ${age}`
}
console.log(hello4(26))

//ES6
const hello5 = name => `hello yaaaa ${name}`;
console.log(hello5('유진'));