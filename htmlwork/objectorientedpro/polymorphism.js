//polymorphism---many forms

//method overloading //method overriding
class Maths{
    add()
    {
        console.log(10+20)
    }
    add(num2)
    {
        console.log(10+num2)
    }
    add(num1,num2){
        console.log(num1+num2)
    }
}
var calc=new Maths()
calc.add(10,20)
//same method with idfferent argument but in javascript only work recently implemented method