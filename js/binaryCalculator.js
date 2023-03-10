function Solution(output) {
    let operand1 = '';
    let operand2 = '';
    let operator = '';
    
    const render = () => {
        output.innerHTML = operand1 + operator + operand2;
    }

    this.clear = () => {
        operand1 = '';
        operand2 = '';
        operator = '';
        render();
    },    
    this.btn1 = () => {
        if (operator !== '') {
            operand2 += '1';
        } else {
            operand1 += '1';
        }
        render();
    }
    this.btn0 = () => {
        if (operator !== '') {
            operand2 += '0';
        } else {    
            operand1 += '0';
        }
        render();
    }
    const setOperator = (op) => {
        if (operand1 !== null) {
            operator = op;
        }
        render();
    }    
    this.btnSum = () => setOperator('+');    
    this.btnSub = () => setOperator('-');
    this.btnMul = () => setOperator('*');
    this.btnDiv = () => setOperator('/');
    const binaryToDec = (binary) => {        
        let result = 0;
        for (i = 0; i < binary.length; i++) {
            if (binary[binary.length - 1 - i] === '1') {
                result += Math.pow(2, i);
            }
        }
        return result;
    }
    const decToBinary = (dec) => {
        let num = Math.floor(dec);
        console.log('num', num);
        let bin = '';
        while (num > 0) {
            bin = (num % 2) + bin;
            console.log('reminder', num % 2, 'bin', bin);
            num = Math.floor(num / 2);
        }
        return bin;
    }
    this.result = () => {
        if (operand2 === '') {
            return;
        }
        let op1 = binaryToDec(operand1);
        let op2 = binaryToDec(operand2);
        console.log('op1', op1, 'op2', op2);
        let result = '';
        switch (operator) {
            case '+':
                result = decToBinary(op1 + op2);
                break;
            case '-':
                result = decToBinary(op1 - op2);
                break;
            case '*':
                result = decToBinary(op1 * op2);
                break;
            case '/':
                // it's promised that all expressions are valid, 
                // so there's no divide-by-zero protection
                result = decToBinary(op1 / op2);   
                break;
        }
        this.clear();
        operand1 = result;
        render();
    }
    return this;
}

const solution = new Solution(document.getElementById('res'));
document.getElementById('btn0').addEventListener('click', solution.btn0);
document.getElementById('btn1').addEventListener('click', solution.btn1);
document.getElementById('btnSum').addEventListener('click', solution.btnSum);
document.getElementById('btnSub').addEventListener('click', solution.btnSub);
document.getElementById('btnMul').addEventListener('click', solution.btnMul);
document.getElementById('btnDiv').addEventListener('click', solution.btnDiv);

document.getElementById('btnClr').addEventListener('click', solution.clear);
document.getElementById('btnEql').addEventListener('click', solution.result);