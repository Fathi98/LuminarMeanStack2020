//class
//object
//references


class Person{
    setPerson(age,name){
        this.age=age;
        this.name=name;
    }
    getPerson(){
        console.log("age="+this.age);
        console.log("name="+this.name);

    }
}
var obj=new Person()
      obj.setPerson(12,"fathii");
    obj.getPerson();
var obj1=new Person()
    obj.setPerson(12,"neena");
  obj.getPerson();
