class Employe{


    constructor(eid,ename,desig,salary){

        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=salary;

    }
    getEmp=()=>{
        console.log(this.eid)
        console.log(this.ename)
        console.log(this.desig)
        console.log(this.salary)
    }

}

var obj1=new Employe(1231,"ajay","dvlper",40000);
obj1.getEmp();
var obj2=new Employe(1233,"sajay","tester",25000);
obj2.getEmp();
var obj3=new Employe(1232,"aami","dvlper",35000);
obj3.getEmp();

var emp=[];
emp.push(obj1);
emp.push(obj2);
emp.push(obj3);

for(e of emp){
    if(e.salary>25000){
        console.log(e.eid+e.ename+e.salary)
    }
}

for(e of emp){
    if(e.desig=="dvlper"){
        console.log(e.ename)
    }
}