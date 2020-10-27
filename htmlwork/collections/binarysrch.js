//procedure binsrch(low,upp,mid,elemnt)

//step1:input is always sorted array
var arr=[1,2,3,4,5,6,7,8];
var input=6;

//step2: low<0 upp<8
var flag=0;
var low=0
var upp=arr.length-1;

while(low<upp){
 mid=Math.floor((low+upp)/2);
 if(input>arr[mid]){
     low=mid+1;
 }
else if(input<arr[mid]){
    upp=mid-1;
}
else if(input==arr[mid]){
    flag+=1
    break;
}

}
if(flag>0){
    console.log("element found");
}
else{
    console.log("element not found");
}





