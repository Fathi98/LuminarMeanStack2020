var one=document.querySelector("#one");


one.addEventListener("click",()=>{one.textContent="am clicked";
one.style.color="red"});

var two=document.querySelector("#two");

two.addEventListener("dblclick",()=>{two.textContent="doubleclicked";
two.style.color="green"});

var three=document.querySelector("#three")
three.addEventListener("mouseover",()=>{three.textContent="mouse currently over me";three.style.color="yellow"})
three.addEventListener("mouseout",()=>{three.textContent="mouse currently not over me";three.style.color="black"})