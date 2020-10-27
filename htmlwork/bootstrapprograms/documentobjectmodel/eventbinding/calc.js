var text=document.querySelector("#inp");
function display(num){
    text.value+=num;
}
clrscr=()=>
{
    text.value="";
}
evlt=()=>{
    let data=eval(text.value);
    text.value=data;
}