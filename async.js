//promise 객체를 리턴하는 함수
// function p(ms){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             resolve(ms);
//         }, ms)
//     })
// }

//promise 객체를 이용해 비동기 로직을 수행할 때
// p(1000).then((ms)=>{
//     console.log(`${ms} ms후에 실행된다`);
// })

//promise 객체를 리턴하는 함수를 await로 호출하는 방법
// const ms = await p(1000); //에러 await is only valid in async function
// console.log(`${ms} ms 후에 실행된다`);

//await를 사용할경우 항상 async함수안에서 사용되어야한다.
// function p(ms){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             resolve(ms);
//         }, ms);
//     });
// }

// (async function main(){
//     const ms = await p(2000);
//     console.log(`${ms} ms후에 실행된다`);
// })();

//Promise 객체가 rejected된 경우의 처리를 위해 try catch 이용
// function p(ms){
//     return new Promise((resolve, reject)=>{
//         setTimeout(()=>{
//             reject(new Error('reason'));
//         }, ms)
//     })
// }
// (async function main(){
//     try{
//     const ms = await p(1000);
// } catch(error){
//     console.log(error);
// }
// })();

//async function 에서 return 되는 값은 promise.resolve함수로 감싸서 리턴된다.
function p(ms){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            reject(new Error('reason'));
        },ms);
    });
}

async function asyncP(){
    return 'Mark'
}
(async function main(){
    try{
        const name = await asyncP();
        console.log(name);
    }catch(error){
        console.log(error);
    }
})();