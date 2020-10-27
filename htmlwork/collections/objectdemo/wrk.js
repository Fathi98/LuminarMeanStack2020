///ar=1,2,3,5,7,8,9    less than 5(num-1) greater than 5 (num+1)
var ar=[1,2,3,5,7,8,9];
var arr=[];
for(key of ar){
    if(key<5){
        key-=1
    }
    else if(key>5){
        key+=1;
    }
    else{
        key=key;

    }
    arr.push(key)
}
console.log(arr)
