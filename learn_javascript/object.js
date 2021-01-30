const y={
    "name":"safal",
    "age":16,
    "class":10,
    "hobbies":["playing","coding","reading"]
};

document.write(y["name"],"\n");
console.log("the age of "+y["name"]+" is "+y["age"]);
document.write(y["hobbies"]);

//acessing data from another process

document.write("\n"+y.class);

//accessing object using function

let r={
    "car":"suziki",
    "model":"osd23",
    "guraenty":12,
    "color":"black",
    "cardetail":function(){
        return this.car+" is "+this.color;
    }

};
console.log(r.cardetail());

// creating javacript object using object function

const ee=new Object();
ee.name="safal";
ee.age=16;
ee.class=10;
ee.gender="male";

console.log("His name is "+ee.name+" he study in class "+ee.class);

function obj(a,b,c,d){
    this.a=a;
    this.b=b;
    this.c=c;
    this.d=d;

}
ss=new obj(1,2,3,4);
console.log(ss.d);

const ob={
    "name":"safal",
    "male":true
};

console.log(ob["male"])

//nested object
let gg={
    programmer:{
        "name":"safal",
        "class":10,
    },
    student:{
      "name":"samyog",
      "class":10
    }
};
document.write(gg.programmer.name);