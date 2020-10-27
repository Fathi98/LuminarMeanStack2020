class Employe{
    constructor(eid,ename,desig,salary){
        this.eid=eid;
        this.ename=ename;
        this.desig=desig;
        this.salary=salary;
    }
    
    getEmp=()=>{
        console.log(this.eid);
        console.log(this.ename);
        console.log(this.desig);
        console.log(this.salary);

    }
}

var obj1=new Employe(1010,"fathi","dvlpr",25000);
obj1.getEmp();
var obj2=new Employe(1012,"neena","dvlpr",30000);
obj2.getEmp();
var obj3=new Employe(1011,"arya","dvlpr",35000);
obj3.getEmp();

var op=[];
op.push(obj1);
op.push(obj2);
op.push(obj3);

var highest=op.map(obj=>obj.salary).reduce((obj1,obj2)=>(obj1>obj2?obj1:obj2))
console.log(highest);
var emplhigh=op.filter((obj)=>(obj.salary==highest));
console.log(emplhigh);

var min=op.map(obj=>obj.salary).reduce((obj1,obj2)=>(obj1<obj2?obj1:obj2));
console.log(min);                  

var sorted=op.map(obj=>obj.salary).sort((obj1,obj2)=>obj1-obj2);
console.log(sorted);

