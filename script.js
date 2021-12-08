

var num1="";
var num2="";
var operator; // 
var opBool= false; // used to set num1 and num2 
const expressionBox = document.querySelector("#expressionBox");//div for the input expression
const answerBox = document.querySelector("#answerBox");// div for the answer output
const setNumbers = (e) =>{ //set the two operands, num2 is set after opBool is true
    if(opBool){
        num2=num2+""+e;
        expressionBox.innerHTML= num1+operator+num2;   
    }else{
        num1=num1+""+e;
        expressionBox.innerHTML= num1;
    }
    
}

const setOperation = (e) =>{
    if(e==1){
        operator='+';
    }else if(e==2){
        operator='-';
    }else if(e==3){
        operator='*';
    }else if(e==4){
        operator='/';
    }
    expressionBox.innerHTML= num1+operator;
    opBool= true; // used to move on to num2 after pressing any operator
}

const equals = () =>{
    var answer;
    num1=parseInt(num1); //convert strings to int
    num2=parseInt(num2);
    console.log(num1);// delete when done
    console.log(num2);// delete when done


    switch(operator){
        case '+':
            answer= num1+num2;
            break;
        case '-':
            answer=num1-num2;
            break;
        case '*':
            answer=num1*num2;
            break;
        case '/':
            answer=num1/num2;
            break;

    }
    answerBox.innerHTML= answer;
    console.log(answer);
    num1="";       //reset numbers
    num2="";
    opBool=false; //reset operation
    
    
}
