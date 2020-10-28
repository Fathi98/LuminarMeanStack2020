var a=[2,1,6,4,0,9,3];

for(i=0;i<a.length;i++){

    for(j=i+1;j<a.length;j++)
    {
        if(a[i]>a[j]){
            var temp=a[i];
            a[i]=a[j];
            a[j]=temp;
                    }
    }
}
console.log(a);
arr=[9,2,3,10,4,6];
var srt=arr.sort((a,b)=>a-b);

console.log(srt);
