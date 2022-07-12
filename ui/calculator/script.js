function calculate(){
    n1 = parseInt(document.getElementById("num1").value);
    n2 = parseInt(document.getElementById("num2").value);
    opr = document.getElementById("opr").value;
    result = 0;
    switch(opr){
        case '+' : result = n1+n2;
                   break;
        case '-' : result = n1-n2;
                   break;
        case '/' : result = n1/n2;
                   break;
        case '*' : result = n1*n2;
                   break;
        case '%' : result = n1%n2;
                   break;
        default : result = "Invalid Operator"
        
    }
    document.getElementById("result").value = result;
}


