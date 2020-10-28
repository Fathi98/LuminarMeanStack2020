function prime(low,upp)
{



for(var i=low;i<=upp;i++)//i=10
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
}
prime(10,50);