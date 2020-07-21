//생성자 함수로 새로운 객체만들기
function Person(name, age){
    console.log(typeof(this));//object객체
    console.log(this);//Person{}
    this.name = name;
    this.age = age;
}
const p = new Person('Mark', 27);
console.log(p.name, p.age);

const a = new Person('Anna', 30);
console.log(a.name, a.age);

// const Cat = (name, age) =>{
//     console.log(this);
//     this.name = name;
//     this.age = age;
// }
// const c = new Cat('냥이',1); //Cat is not Constructor

// 함수를 리턴하는 함수
function plus(base){
    return function(num){
        return base + num;
    }
}
const no5 = plus(5);
console.log(no5(10));

//함수를 인자로하는 함수
function hello(c){
    console.log('hello')
    c();
}
hello(function c(){
    console.log('콜백')
})