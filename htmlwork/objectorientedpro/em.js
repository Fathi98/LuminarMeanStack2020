class Employee{
    constructor(eid,ename){
        this.eid=eid
        this.ename=ename
    }
    getemplyee(){
        console.log("eid"+this.eid)
        console.log("name"+this.ename)
    }
}
var em=new Employee(12,"fathi");
em.getemplyee()