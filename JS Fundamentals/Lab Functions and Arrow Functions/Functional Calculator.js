function functionalCalculator(leftOperand, rightOperand, operator) {
    switch (operator) {
        case "+":
            console.log(leftOperand + rightOperand);
            break;
        case "-":
            console.log(leftOperand - rightOperand);
            break;
        case "*":
            console.log(leftOperand * rightOperand);
            break;
        case "/":
            console.log(leftOperand / rightOperand);
            break;
    }
}

functionalCalculator(2, 4, '+');
functionalCalculator(3, 3, '/');
functionalCalculator(18, -1, '*');