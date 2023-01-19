function store(a, b, op, res) {
    localStorage.setItem("first_number", a);
    localStorage.setItem("second_number", b);
    localStorage.setItem("operation", op);
    localStorage.setItem("result", res);
}
function show(){
    op=localStorage.getItem("operation")
    var operation="";
    switch(op){
        case '+': operation="sum"; break;
        case '-': operation="difference"; break;
        case '*': operation="product"; break;
        case '/': operation="division"; break;
    }
    document.getElementById("desp").innerHTML="😀: The "+operation+" of "+localStorage.getItem("first_number")+" and "+localStorage.getItem("second_number")+" is "+localStorage.getItem("result")+" 🎉";
}
function add() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let temp = Number(a) + Number(b);
    document.getElementById("res").value = temp;
    store(a, b, '+', temp);
    show();
}
function diff() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let temp = Number(a) - Number(b);
    document.getElementById("res").value = temp;
    store(a, b, '-', temp);
    show();
}
function product() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let temp = Number(a) * Number(b);
    document.getElementById("res").value = temp;
    store(a, b, '*', temp);
    show();
}
function divide() {
    let a = document.getElementById("a").value;
    let b = document.getElementById("b").value;
    let temp = Number(a) / Number(b);
    document.getElementById("res").value = temp;
    store(a, b, '/', temp);
    show();
}
function clr() {
    document.getElementById("a").value = "";
    document.getElementById("b").value = "";
    document.getElementById("res").value = "";
    document.getElementById("desp").innerHTML="Perform any Operation☹️..."
    var table=document.getElementById("hist_table");
    var row=table.insertRow(1);
    var cell1=row.insertCell(0);
    var cell2=row.insertCell(1);
    var cell3=row.insertCell(2);
    var cell4=row.insertCell(3);
    cell1.innerHTML=localStorage.getItem("first_number");
    cell2.innerHTML=localStorage.getItem("operation");
    cell3.innerHTML=localStorage.getItem("second_number");
    cell4.innerHTML=localStorage.getItem("result");
}
