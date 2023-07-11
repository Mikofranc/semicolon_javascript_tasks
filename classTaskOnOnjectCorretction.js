var arr = []
let totalPopulation =0
var obj1 = {
    name:"nigeria",
    populaton: 24,
    temp: 2,
    currency:"d"
}
var obj2 = {
    name:"nigeria",
    populaton: 24,
    temp: 2,
    currency:"d"
}
var obj3 = {
    name:"nigeria",
    populaton: 24,
    temp: 2,
    currency:"d"
}
var obj4 = {
    name:"nigeria",
    populaton: 24,
    temp: 2,
    currency:"d"
}
var obj5 = {
    name:"nigeria",
    populaton: 24,
    temp: 2,
    currency:"d"
}
var obj6 = {
    name:"nigeria",
    populaton: 24,
    temp: 2,
    currency:"d"
}
var obj7 = {
    name:"nigeria",
    populaton: 24,
    temp: 2,
    currency:"d"
}
var obj8 = {
    name:"nigeria",
    populaton: 24,
    temp: 2,
    currency:"d"
}
var obj9 = {
    name:"nigeria",
    populaton: 24,
    temp: 2,
    currency:"d"
}
var row0 = [null,obj1, obj2, obj3];
var row1 = [obj1, obj2, obj3,null];
var row2 = [obj1,null, obj2, obj3];
arr.push(row0,row1,row2);
console.table(arr);

for(let obj of Object.values(arr)){
    for(let innerObj of Object.values(obj)){
        console.log(innerObj);
        if(innerObj.populaton === null){
         console.log("null")
        }else{
        totalPopulation +=innerObj.populaton
        }
    }
}
console.log(totalPopulation)
