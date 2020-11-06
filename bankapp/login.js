class Bank{

    static getfounddetials()
    {
        let data={
            fathi:{username:"fathi",password:"123",acno:1001,blnce:50000},
            neena:{username:"neena",password:"143",acno:1002,blnce:45000},
            arya:{username:"arya",password:"234",acno:1003,blnce:25000},
            nannu:{username:"nannu",password:"567",acno:1004,blnce:30000},
            amee:{username:"amee",password:"789",acno:1005,blnce:60000}
        }
        return data;

    }
   

   
    static login(){

  
        let usname=document.querySelector("#uname").value;
        let pwd=document.querySelector("#pwd").value;
       let data=Bank.getfounddetials()
       if(usname in data){
           let password=data[usname]["password"];
           if(pwd==password){
            swal("login successfull!", "You provided valid data!", "success");
            setTimeout(()=>window.location.href="ushome.html",5000);
           }
           else{
            swal("login failed!", "You provided invalid data!", "error");
           }
       }
       else{
           alert("invalid user");
       }
    }

static deposit(){
    let uname=document.querySelector("#uname").value;
    let amt=Number(document.querySelector("#amt").value);
    let btag=document.querySelector("#bal");
    let data=Bank.getfounddetials();
    if(uname in data){
        

        data[uname]["blnce"]+=amt;
        let bal=data[uname]["blnce"];
        btag.textContent="availablebalance="+bal;
    }
        
    else{
        swal("invalid user");
    }
}
static withdraw(){
    let uname=document.querySelector("#uname1").value;
    let amt=Number(document.querySelector("#amt1").value);
    let btag=document.querySelector("#bal");
    let data=Bank.getfounddetials();
    
    if(uname in data){

        let avlblnc=data[uname]["blnce"];
        if(amt>avlblnc){
            alert("insufficient amount")
        }
        else{

        data[uname]["blnce"]-=amt;
        let bal=data[uname]["blnce"];
        btag.textContent="available balance="+bal;
        }
    }
        
    else{
        swal("invalid user");
    }
}
}
