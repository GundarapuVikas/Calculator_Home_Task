function store(a, b, op, res) {
    localStorage.setItem("first_number", a);
    localStorage.setItem("second_number", b);
    localStorage.setItem("operation", op);
    localStorage.setItem("result", res);
}
function show(a,b,op,res){
    let operation="";
    switch(op){
        case '+': operation="sum"; break;
        case '-': operation="difference"; break;
        case '*': operation="product"; break;
        case '/': operation="division"; break;
    }
    document.getElementById("desp").innerHTML="😀: The "+operation+" of "+a+" and "+b+" is "+res+" 🎉";
}
function solve(op){
    let a = Number(document.getElementById("a").value);
    let b = Number(document.getElementById("b").value);
    let res=0;
    switch(op){
        case '+': res=a+b;break;
        case '-': res=a-b;break;
        case '*': res=a*b;break;
        case '/': res=a/b;break;
    }
    console.log(res);
    // document.getElementById("result").value=res;
    store(a,b,op,res);
    show(a,b,op,res);
}
function clr() {
    if(document.getElementById("a").value!="" && document.getElementById("b").value!="" && document.getElementById("res").value!=""){
        document.getElementById("a").value = "";
        document.getElementById("b").value = "";
        document.getElementById("res").value = "";
        document.getElementById("desp").innerHTML="Perform any Operation☹️..."
        let table=document.getElementById("hist_table");
        let row=table.insertRow(1);
        let cell1=row.insertCell(0);
        let cell2=row.insertCell(1);
        let cell3=row.insertCell(2);
        let cell4=row.insertCell(3);
        cell1.innerHTML=localStorage.getItem("first_number");
        cell2.innerHTML=localStorage.getItem("operation");
        cell3.innerHTML=localStorage.getItem("second_number");
        cell4.innerHTML=localStorage.getItem("result");
    }
}

