var Arr = [];

var Max = [];
var Min = [];

for(var f = 1;f<=100;f++)                                                           
{    
    var z = +prompt("Введите число"); 
    if (z==0) {break}  
    Arr.push(z);                              
}   
console.log(Arr);       
for(var i=0; i<Arr.length;i++) {
    let current = Arr[i];
    let next = Arr[i+1];
    let prev = Arr[i-1];

    if (current > next && current > prev) {
        Max.push(current);
    }
     if (current < next && current < prev) {
        Min.push(next);        
    }
}
console.log(Max.length);
