var n=2;
var min=49;
var max=65;
for(i=0;i<=10;i++){
    var p=i**n;
    if(p>=min && p<=max){
        console.log(p+"("+i+"^"+n+")");
    }
}
