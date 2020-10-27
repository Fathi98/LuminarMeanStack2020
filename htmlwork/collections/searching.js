var input=[1,2,3,4,5,6,7];
var element=6;
var flag=0;
for(data of input){
    if(data==element){
       flag+=1;
       break;

    }
    
    
}
if(flag>0){
    console.log("element is found" + data);
}
else{
    console.log("element is not found");
}