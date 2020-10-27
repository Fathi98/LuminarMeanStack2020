class parent{
    m1(){
        console.log("inside  first child")
    }
}
class child extends parent{
    m2(){
        console.log("inside child")
    }
}
class subchild extends child{
    m3(){
        console.log("inside subchild")
    }
}
var ob=new subchild();
ob.m3()
ob.m2()
ob.m1()