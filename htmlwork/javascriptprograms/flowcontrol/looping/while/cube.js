num=121;
var cubesum=0;

while(num>0)
{
    digit=num%10; //digit=1
    cubesum+=digit*digit*digit; //1^3
    num=Math.floor(num/10); //num=12

}
console.log(cubesum);