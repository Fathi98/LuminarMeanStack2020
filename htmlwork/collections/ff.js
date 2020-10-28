var arr=[2,4,5];
//op===9,7,6
var total=0;
for(data of arr){
    total+=data;
}
console.log(total);

var op=[];
for(item of arr){
    var elem=total-item;
    op.push(elem);
}
console.log(op);