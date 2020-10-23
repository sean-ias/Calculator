function calca() {
    var first=document.getElementById("firstnum").value;
    var second=document.getElementById("secondnum").value;
    var operation=document.getElementById("opertype").value;
    if (operation=='+') {
        var result=parseInt(first)+parseInt(second);
    }
    if (operation=='-') {
        var result=parseInt(first)-parseInt(second);
    }
    if (operation=='*') {
        var result=parseInt(first)*parseInt(second);
    }
    if (operation=='/') {
        var result=parseInt(first)/parseInt(second);
    }

    /* this is the same as if operator: 
    switch (operation) {
        case '+':
            var result=parseInt(first)+parseInt(second);
            break;
        case '-':
            var result=parseInt(first)-parseInt(second);
            break;
        case '*':
            var result=parseInt(first)*parseInt(second);
            break;
        case '/':
            var result=parseInt(first)/parseInt(second);
            break;
        case '^':
            var result=(parseInt(first))**parseInt(second)
    }
    */
    document.getElementById("resultnum").innerText=result;
}

function insert(num) {
    document.form.textview.value=document.form.textview.value+num;
}
function equal() {
    var exp=document.form.textview.value;
    if (exp) {
        document.form.textview.value=eval(exp)
    }
}

function clean(){
    document.form.textview.value="";
}

function back(){
    var exp=document.form.textview.value;
    document.form.textview.value=exp.substring(0,exp.length-1);
}