// console.log("Jai Shree Ram");

// function cCompiler(){
//     return "C compiler";
// }

// function javaCompiler(){
//     return "java compiler";
// }

// function selectlanguage(clbk){
//     return "you have selected "+ clbk();
// }

// const result = selectlanguage(cCompiler);

// console.log(result);





// function selectlanguage(language="no compiler selected"){

//     let data=language;

//     if(language=='c'){
//         function cCompiler(){
//             return "C compiler";
//         }
//         data = cCompiler();
//     }
//     if(language=='java'){
//         function javaCompiler(){
//             return "java compiler";
//         }
//         data = javaCompiler();
//     }

// return data;
// }

// const result = selectlanguage('c');
// console.log(result);




// console.dir(document);
// const div = document.getElementsByClassName("parent");
// console.dir(div);
// div[0].innerHTML="<h2>ABES EC</h2>";



const disp=document.getElementById("disp");
console.log(disp)
function getData(){
    console.log("get data called");
    disp.innerHTML="<h2>you called getData</h2>"
}

