class Student{

    static get collegename(){
        var clgname="LUMINAR"
        return clgname;
    }
    static printcollegename(){
        var clgname="LUMINAR"
        console.log(clgname)
    }
    setStudent(roll,name)
{
    this.roll=roll;
    this.name=name;
    
}
getStudent(){

    console.log("rollno"+ this.roll);
     console.log("name is"+ this.name);
     Student.printcollegename()
}
}
class Myclass extends Student{};
var ob=new Myclass();
ob.setStudent(34,"fathi");
ob.getStudent();

console.log(Myclass.collegename)
