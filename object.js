//객체는 함수혹은 클래스로 틀을 만드는것,
//틀로부터 object를 찍어내개되는데 이를 인스턴스라고부름,
//생성하는 방법은 다양함 함수 등등

//1. 생성자 함수
function A(){}
const a = new A()
console.log(a, typeof a); //object
console.log(A());       //undefined

//생성하면서 데이터 넣기
function B(name, age){
    console.log(name, age);
}
const b = new B();//undefined undefined
const c = new B('Mark',32); //Mark 37
console.log(B());//undefined undefined

//값을 속성으로 넣기
function A(){
    this.name = 'Mark';
}
const aa = new A(); //{name: 'Mark'}
console.log(aa);

// 함수를 속성으로 넣기
function BB(){
    this.hello = function(){
        console.log('hello');
    };
}
// const bb = new BB().hello();
// console.log(bb); function안에 console.log잇어서 할필요없음
new BB().hello(); 