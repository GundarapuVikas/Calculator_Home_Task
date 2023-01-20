//------------Solve Method performs operation requested--------------------
function solve(op){
    let a=document.getElementById("a").value;
    let b=document.getElementById("b").value;
    if(a!="" && b!=""){
        let res=0;
        switch(op){
            case '+': res=Number(a)+Number(b); break;
            case '-': res=Number(a)-Number(b); break;
            case '*': res=Number(a)*Number(b); break;
            case '/': res=Number(a)/Number(b); break;
        }
        document.getElementById("res").value=res;
        store(a,b,op,res);
        show(a,b,op,res);
    }
    else{
        show(-1,-1,op,null);
    }
}
//--------------Store Method is used to store the operands,operator and result data in LOCAL STORAGE-----------
function store(a, b, op, res) {
    localStorage.setItem("first_number", a);
    localStorage.setItem("second_number", b);
    localStorage.setItem("operation", op);
    localStorage.setItem("result", res);
}
//------------Show Method is used to display the description of the status of operation-------------------
function show(a,b,op,res){
    if(a=="" && b==""){
        document.getElementById("desp").innerHTML="Perform any Operation☹️..."
    }
    else if(a!=-1 && b!=-1){
        let operation="";
        switch(op){
            case '+': operation="sum"; break;
            case '-': operation="difference"; break;
            case '*': operation="product"; break;
            case '/': operation="division"; break;
        }
        document.getElementById("desp").innerHTML="😀: The "+operation+" of "+a+" and "+b+" is "+res+" 🎉";
    }
    else{
        document.getElementById("desp").innerHTML="Add operands 😒 and try again 👍."
    }
}
//-----------Clear Method is used to clear the calculator and change the description---------------
function clr() {
    if(document.getElementById("res").value!=""){
        add_to_history();
    }
    document.getElementById("a").value="";
    document.getElementById("b").value="";
    document.getElementById("res").value="";
    show("","","","");
}
//--------------After the calculator is cleared the latest operation data is fetched from local storage and stored in history-----------------
function add_to_history(){
    let table=document.getElementById("hist_table");
    let row=table.insertRow(1);
    row.insertCell(0).innerHTML=localStorage.getItem("first_number");
    row.insertCell(1).innerHTML=localStorage.getItem("operation");
    row.insertCell(2).innerHTML=localStorage.getItem("second_number");
    row.insertCell(3).innerHTML=localStorage.getItem("result");
}

