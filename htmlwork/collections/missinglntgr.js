var num=[-1,0,2,3];
var least=1;
var flag=0;
//find least missing integer

for(data of num){

    if(data==least){
        flag=0;

    }
    else{
        flag=1;
    }
}
if(flag==1){
        console.log("missing least integer is"+ least);

}

