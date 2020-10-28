var arr=[1,2,3,4,5];
var res=[]
for(i=arr[0];i<=arr.length;i++){
     res.push(i**2)
    
}
console.log(res);
////map function

var ar=[1,2,3,4,5];
var data=ar.map(num=>num**2);
console.log(data)

var key=ar.filter(num=>num%2==0)
console.log(key)