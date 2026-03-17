var  x = 10 

if(true){
    var x = 20
}
// data override
console.log(x)


console.log("VAL",val)
//let val = 100
var val
setTimeout(()=>{
console.log("Hi")
},5000)

for (let k = 0 ;k < 5 ;k++){
    setTimeout(()=>{
        console.log(k,'using let for k')
    },
    100)
}

for (var i = 0 ;i < 5 ;i++){
    setTimeout(()=>{
        console.log(i,'using var for i')
    },
    100)
}