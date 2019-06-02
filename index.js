// // const title = document.getElementById("title");
// const title = document.querySelector("#title");
// // console.log(title);
// title.innerHTML = "Hi! FUCK";
// title.style.color = "red";

// console.dir(title);  //이벤트들이 쭉 나옴.
// document.title = "no something";
// //git 재업테스트



// //0602
// const title = document.querySelector("#title");

// // function handleResize(){
// //     console.log("I have been resized");
// // }
// // window.addEventListener("resize", handleResize());

// // function handleResize(event){
// //     console.log(event);
// // }
// // window.addEventListener("resize", handleResize);


// function handleClick(){
//     title.style.color = "blue";
// }
// title.addEventListener("click", handleClick);

//if - else 설명
// if(10 > 5){
//     console.log("Hi");
// }else{
//     console.log("ho");
// }

// if(20 > 5 && "nicolas" === "nicolas"){
//     console.log("yes");
// }else{
//     console.log("no");
// }

// true && true = true;
// false && true = false;
// true && false = false;
// false && false = false;

// const age = prompt("How old are you?");

// if (age>=18 && age<=21){
//     console.log('you can drink but you should not');
// }else if(age>21){
//     console.log('go ahed');
// }else{
//     console.log('too young');
// }


// #2-6 DOM If else Function practice 할 차례임.



//0602
//타이틀 클릭할때마다 이벤트발생으로 색변경하기
//구글에 "javascript dom event mdn" -> 이벤트의 근원
// const title = document.querySelector("#title");

// const BASE_COLOR = "rgb(52, 73, 94)";
// const OTHER_COLOR = "#7f8c8d";
// function handleClick(){
//     // console.log(title.style.color);
//     const currentColor = title.style.color;
//     if(currentColor === BASE_COLOR){
//         title.style.color = OTHER_COLOR;
//     }else{
//         title.style.color = BASE_COLOR;
//     }
// }

// function init(){
//     title.style.color = BASE_COLOR;
// }
// title.addEventListener("click", handleClick); //click 대신 mouseenter 누르면 마우스 갖다대면 바뀜
// init();




//2-7 DOM If else Function practice part Two
const title = document.querySelector("#title");

const CLICKED_CLASS  = "clicked";

function handleClick(){
    const currentClass = title.className;
    if(currentClass !== CLICKED_CLASS){
        title.className = CLICKED_CLASS;
    } else {
        title.className = "";
    }
}

function init(){
    title.addEventListener("click", handleClick);
}
init();

//2-8할 차례


