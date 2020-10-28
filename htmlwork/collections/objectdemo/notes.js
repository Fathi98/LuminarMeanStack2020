var student={roll:12,name:"fathi",course:"bca"}

console.log(student);

//to fetch curresponding key value
console.log(student.name);
console.log(student["name"]);
//add key & value to student

student["total"]=50;
console.log(student);
// "in"===used for check curresponding key

console.log("gender" in student);

student["total"]+=25;
console.log(student.total)