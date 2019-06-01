// console.log('Im Working. Im JS. Im Beautiful. Im worth it');



// let const 
// const a = 221;  //const는 변하지않는 수. 상수
// let b = a-5;
// a=4;
// console.log(b, a);


//Data type
/*String
const what = "Hwan";
console.log(what);
*/
/*Boolean
const what = true;
*/
/*Number
const what = 666;
*/
/*Float
const what = 5.55;
*/


// const monday = "monday";
// const tue = "Tue";
// const wed = "Wed";
// const thu = "Thu";
// const fri = "Fri";
//console.log(monday, tue, wed, thu, fri);


//Array 동작법
// const daysOfWeek = ["Mon","Tue","Wed","Thu","Fri","Sat","Sun", true];
//console.log(daysOfWeek);
// console.log(daysOfWeek[2]);


// Object와 array의 다른점은 
// Object에는 각 value에 이름을 줄 수 있다

// const hwanInfo = {
//   name: "Hwan",
//   age: 34,
//   gender: "Male",
//   isHansome: true,
//   favMovies: ["along the gods", "StarWars", "Oldbody"],
//   favFood: [{ name: "Kimchi", fatty: false }, { name: "Cheese burger", fatty: true }]
// }

// // // console.log(hwanInfo);
// // console.log(hwanInfo.gender);
// // hwanInfo.gender = "Female";
// // console.log(hwanInfo.gender);

// // Object를 Array안에 넣을 수 있다

// console.log(hwanInfo);



// const lolInfo = {
//   name : "faker",
//   age : 22,
//   gender : "Male",
//   isHansome : true,
//   favChamp : ["Zed","Akali","Oriana"],
//   favPro :[
//     {name : "clid", 
//      pos : "zungle"
//     },
//     {name : "Mata", 
//      pos : "Sup"}
//   ]
// }

// console.log(lolInfo.favChamp[0]);
// console.log(lolInfo.favPro[0].name);

// console.log(lolInfo,console);


//함수알아보자

// console.log('Hello A');
// console.log('Hello B');
// console.log('Hello C');
// console.log('Hello D');

// function sayHello(name, age){
//   console.log("Hello!", name, "you have ", age, "years of age.");
// }
// sayHello("Hwani", 34);


// function sayGamer(name, age){
//   return `Hello ${name} you are ${age} years old`;
// }
// const greetFaker = sayGamer("Faker",24);
// //여기서 greetFaker는 sayGagmer 함수의 리턴 값이다.
// console.log(greetFaker);


// 계산기함수
// const calculator = {
//  plus : function(a, b){
//    return a+b;
//  },
//  minus : function(a, b){
//    return a-b;
//  },
//  mul : function(a, b){
//    return a*b;
//  },
//  divide : function(a, b){
//    return a/b;
//  }
// }
// //           console.log(greetHwan);
// const plus = calculator.plus(5, 5);
// const minus = calculator.minus(4,2);
// const mul = calculator.mul(4, 4);
// const divide = calculator.divide(10, 2);
// console.log(`plus : ${plus}  minus :${minus}`);
// console.log(plus);