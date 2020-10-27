class Employee{
    constructor(eid,name,desig,join,resign){
        this.eid=eid;
        this.name=name;
        this.desig=desig;
        this.join=join;
        this.resign=resign;
    }
    
    getEmp=()=>{
        
        console.log(this.name);
        console.log(this.desig);
        
    }
}

var emp1=new Employee(100,"ajay","devop",1981,2003);
emp1.getEmp();

var emp2=new Employee(101,"vijay","devop",1992,2008);
emp2.getEmp();

var emp3=new Employee(102,"bijoy","ba",1999,2007);
emp3.getEmp();

var emp4=new Employee(103,"jhon","ba",1989,2010);
emp4.getEmp();

var emp5=new Employee(104,"danie","qa",2009,2014);
emp5.getEmp();
var emp6=new Employee(105,"lari","qa",1987,2010);
emp6.getEmp();

var op=[];
op.push(emp1);
op.push(emp2);
op.push(emp3);
op.push(emp4);
op.push(emp5);
op.push(emp6);

console.log("employee with designation devop")
var dvlpr=op.filter(emp=>emp.desig=="devop");
console.log(dvlpr);


console.log("employee work in eighteens");
var eighteens=op.filter(emp=>emp.join>=1980&emp.resign<1990);
console.log(eighteens);

console.log("employee  experience greater than nine years");
var exp=op.filter(emp=>(emp.resign-emp.join>9));
console.log(exp);


console.log("sorted with joining year");
var sorted=op.map(emp=>emp.join).sort((emp1,emp2)=>(emp1-emp2));
console.log(sorted);


