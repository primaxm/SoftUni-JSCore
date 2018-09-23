function main (val) {
    function currencyFormatter(separator, symbol, symbolFirst, value) {
        let result = Math.trunc(value) + separator;
        result += value.toFixed(2).substr(-2,2);
        if (symbolFirst) return symbol + ' ' + result;
        else return result + ' ' + symbol;
    }

    function result(currencyFormatter) {
        function dollarCurrency(value) {
            return currencyFormatter(",", "$", true, parseFloat(value));
        }
        return dollarCurrency;
    }

    let dollarFormatter = result(currencyFormatter);
    console.log(dollarFormatter(val));
}

main(5345);
main(3.1429);
main(2.709);
