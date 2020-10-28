var num1=20;
var num2=30;
var num3=40;

    if((num1>num2) & (num1>num3))
      {
          if(num2>num3)
          {
              console.log("num2 is 2nd largest")
          }
          else{
            console.log("num3 is 2nd largest")
          }
      
      }
    else if((num2>num1) & (num2>num3))
        {
        if(num1>num3){
         console.log("num1 is 2nd largest");
         }
         else
         {
            console.log("num3 is nd largest")
         }
        }
    else if((num3>num1) & (num3>num2))

        {
            if(num1>num2)
            {
                console.log("num1 is 2nd largest")
            }
            else{
                console.log("num2 is 2nd largest")
            }
         
        }
    else if((num1==num2) & (num1==num3))
    {
         console.log("numbers are equal");
    }