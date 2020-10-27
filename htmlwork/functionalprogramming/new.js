class Student{
    constructor(rol,name,course,total){
        this.rol=rol
        this.name=name
        this.course=course
        this.total=total
    }
    getstudent=()=>{
        console.log(this.rol)
        console.log(this.name);
    }

}
var obj1=new Student(12,"fathi","bca",187)
var obj2=new Student(13,"aathi","bca",177)
var obj3=new Student(14,"aami","bca",97)
var obj4=new Student(1,"neena","bca",87)
var ar=[];

ar.push(obj1);
ar.push(obj2);
ar.push(obj3);
ar.push(obj4);

//total>135
var stud=ar.filter(obj=>obj.total>135);
for(st of stud){
    console.log(st.name);
}
console.log(stud)

var data=ar.filter(obj=>obj.course=="bca")
console.log(data)

var totall=data.map(obj=>obj.total).reduce((obj1,obj2)=>obj1+obj2)
console.log(totall)


var max=ar.map(obj=>obj.total).reduce((obj1,obj2)=>obj1>obj2?obj1:obj2)
console.log(max)


var topstud=ar.filter(obj=>obj.total==max)
console.log(topstud)


var min=ar.map(obj=>obj.total).reduce((obj1,obj2)=>obj1<obj2?obj1:obj2);
console.log(min);


var sortstud=ar.map(obj=>obj.total).sort((obj1,obj2)=>obj1-obj2)
console.log(sortstud)