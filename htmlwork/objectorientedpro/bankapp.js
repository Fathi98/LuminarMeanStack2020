class Student{
    setStudent(roll,name,course,total)
{
    this.roll=roll;
    this.name=name;
    this.course=course;
    this.total=total;
}
getStudent(){

    console.log("rollno"+ this.roll);
     console.log("name is"+ this.name);
     console.log("course is"+ this.course);
     console.log("total"+ this.total);
}
}

s1=new Student();
s1.setStudent(12,"fathi","meanstack",23);
s1.getStudent();
    
