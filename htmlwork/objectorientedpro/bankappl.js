class Bank{
    static bname="union";

createAcnt(pname,accno,balance,){
    this.pname=pname;
    this.accno=accno;
    this.balance=balance;
    this.bname=bname;
}
deposit(amount){
    this.balance+=amount;
    console.log("your"+this.bname+"credited with"+amount+"available balance is"+this.balance)
}
withdraw(amount){
   if(amount>this.balance){
       console.log("insufficient balance");
   } 
   else{
       this.balance-=amount;
       console.log("your"+this.bname+"debited with"+amount+"available balance is"+this.balance)
   }


   }
blcenqry(){
    console.log("your current balance is"+this.balance)
}
}
em=new Bank();
em.createAcnt("fathi",1563954,2000,"union bank")
em.deposit(10000)
em.withdraw(500)
em.blcenqry()

console.log(em.pname)
//diff types of variables
//local variable(global variable)---amount
//instance variable---prepended with this


//diff types of methods
//instance methods
//
