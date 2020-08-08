//ES6기반의 class 객체지향프로그래밍, 기존의 프로토타입을 명로하게 돕는 역할

//1.선언적방식
class A {}
console.log(new A());

//2.clss표현식을 변수에 할당
const B = class{};
console.log(new B());//B{}

//선언전방식이지만 호이스팅불가(ES6에 class를 만든거라 ㅎㅎ)
// new C();//class.js:12 Uncaught ReferenceError: Cannot access 'C' before initialization
// class C{};

//constructor

class D{}
console.log(new D());
class E{
    constructor(){
        console.log('constructor출력');
    }
}
console.log(new E());

class F{
    constructor(name, age){
        console.log('constructor', name, age);
    }
}
console.group(new F('유진', 27));//constructor 유진 27
console.log(new F());//constructor undefined undefined

//멤버변수
class G{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}
console.log(new G('유민',25));//G{name:'유민', age:25}

// class B{
//     name;
//     age;
// }
// console.log(new B());//class.js:43 Uncaught SyntaxError: Identifier 'B' has already been declared
//런타임버전을 상위로 바꾸면 작동(nodejs버전)

//멤버함수
class AA{
    hello(){
        console.log('hello1');
    }
    hello2(){
        console.log('hello2');
    }
}

new AA().hello();
new AA().hello2();

class BB{
    name = 'Mark'; //멤버변수
    // constructor(name){
    //     this.name = 'Mark'
    // }
    
    hello2(){
        console.log('hello2222',this.name); //멤버함수
    }
}
new BB().hello2();