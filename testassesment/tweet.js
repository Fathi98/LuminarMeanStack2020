var tweets=["sachin tweet1","sehwag tweet1","kholi tweet1","sachin tweet2","kholi tweet1"];
var obj=[];
var arr=[];
for(data of tweets){
    if(data in obj){

    
    obj[data]+=1;


}
else{
    obj[data]=1;
}
}
console.log(obj);


for(key in obj){
    var keys=obj[key];
    arr.push(keys);
}
var srt=arr.sort((a,b)=>b-a);
var elemnt=srt[0];

console.log("user with maximum no. of tweets");
for(key in obj){
    if(elemnt==obj[key]){
        console.log(key+""+elemnt);

    }

}
console.log("sorted order");
for(words in srt){
    for(key in obj){
        if(words==obj[key]){
            console.log(key+""+words);
        }
    }
}