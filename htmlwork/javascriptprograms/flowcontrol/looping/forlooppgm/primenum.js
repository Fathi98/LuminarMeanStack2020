var num=2;
var flag=0;
 
for(var i=2;i<num;i++)
{
    //print 2 to 8
       if(num%i==0){
        flag+=1;
        break;
    }
       else{
        flag=0;
    }
}
    if(flag>0)
    {
        console.log(num+"is not prime");
    }

    else{
        console.log(num+ "is prime");
    }
