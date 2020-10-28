var low=10;
var upp=50; 
var flag=0;
//print prime num bt 10 and 50


for(i=low;i<=upp;i++)//i=10
{
    flag=0;
    for(j=2;j<=10;j++){
      if(i%j==0){
        flag+=1;
        break;
      }    
    }
    if(flag==0){
        console.log(i);
    }
}

    
    


