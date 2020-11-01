//find the sum of series
var sum=0;
var n=3;
var k=n;
var arr=[];

for(i=1;i<=n;i++)   
{
    arr.push(k);  //3   33   
    k=(k*10)+n;   //33  333
}
console.log(arr);

for(data of arr){
    sum=sum+data
}
console.log(sum);