//js function

function safal(){
    document.write("hello! i am using function...");
    return "hello programmer how are you...";
}
const rr=safal();
console.log(rr)

// medium

function name(){
    return "safal is a 16 years programmer....";
}
document.getElementById("demo").innerHTML="hello "+name();

// number typesfunction

function add(a,b){
    return a*b;

}
const vv=add(2,2);
console.log(vv);


// adding functional work in button
function button(d){
    const yy= "hello button"+d
    document.write(yy);
}

const mult=multiply(3,4);

function multiply(a,b){
    return a*b; 

}
console.log(mult);

function string(a){
    return "hello"+a;
}

var ff=string("samyog...")

document.write(ff);


function alrt(){
    alert("js will be popular in future");
    prompt("hello man")
    confirm("yes/NO")
}
