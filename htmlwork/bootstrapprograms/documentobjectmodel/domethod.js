var hdtag=document.getElementsByTagName("h1");
for(htag of hdtag)
{
    htag.style.color="red";
}
var ids=document.getElementById("first");

 ids.style.color="green";
 var cls=document.getElementsByClassName("two")
 for(clr of cls){
 clr.style.color="blue";
 }
 var lst=document.querySelectorAll("li");
 for(let it of lst){
     it.style.color="green";
 }
 var dom=document.querySelector("#hash");
 dom.style.color="purple";
 var clas=document.querySelectorAll(".sel");
 for(let ot of clas){
     ot.style.color="cyan";
 }

 var hone=document.querySelector("#first")
 var sat=hone.textContent;
 //alert(sat);
 hone.textContent="Hello world"

 var seel=document.querySelectorAll(".sel");
 for(let ob of seel){
     ob.textContent="listitem";
    }