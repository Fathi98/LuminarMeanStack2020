var pattern="BCUABABAC";


var obj=[];
for(char of pattern){
    if(char in obj){
        console.log("first recursive characteris"+char);
        break;
    }
    else{
        obj[char]=1;
    }
}

