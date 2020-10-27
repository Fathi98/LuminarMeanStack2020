var arr=[10,10,20,20,30,32,31];
var cnt={};
for(data of arr){
    if(data in cnt){
        cnt[data]+=1;
    }
    else{
        cnt[data]=1;
    }
}
console.log(cnt);