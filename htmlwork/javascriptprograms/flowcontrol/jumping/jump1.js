for(i=0;i<30;i++)
{
    if(i==25){
        break;//if thge condition met control goes to out of loop
    }
    else{
        console.log(i);
    }
}


for(i=0;i<30;i++)
{
    if(i==25){
        continue;//it skip the one iteration and then go to next iteration
    }
    else{
        console.log(i);
    }
}