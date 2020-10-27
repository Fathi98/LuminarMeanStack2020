//exception handling
var num1=10;
var num2=0;
try{
    if(num2==0){
        res=num1/num2;
        console.log("res="+res);
    }
}
catch{
    console.log("exception")
}