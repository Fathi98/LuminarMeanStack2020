//1.create class for employee with eid.name,designtn,salarey
//2.print heighest salary employee info
//3.print lowest salary employee info
//4.print emplyee salary in sorted order

var ar=[1,2,3,5,4,8,6,1];

var data=ar.reduce((num1,num2)=>(num1+num2))

console.log(data)

var high=ar.reduce((num1,num2)=>(num1>num2?num1:num2))
console.log(high);
var srr=ar.map(num=>num>5?num+1:num<5?num-1:num);
console.log(srr);