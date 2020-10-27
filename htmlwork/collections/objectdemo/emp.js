var employe={ename:"ajay",eid:234,dsgn:"dvlop"};

console.log(employe);

console.log(employe.ename);
console.log("salary" in employe);

employe["salary"]=25000;
console.log(employe)
employe["salary"]+=50000;
console.log(employe.salary);
for(key in employe){
    console.log(key+ ","  +employe[key]);
}