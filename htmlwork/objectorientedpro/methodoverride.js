class Parent{
    bike(){
        console.log("i have activa");
    }
}

class Child extends Parent{
    bike(){
        console.log("i have deo");
    }

}
var bk=new Child();
bk.bike();
