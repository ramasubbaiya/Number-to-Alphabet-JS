var num = 12342342343432423423423423331,
    numStr = num.toString(),
    numLength = numStr.length;

const ASCII_START_VALUE = 65;

// Check the given input
if (typeof Number(num) !== "number") {
    throw new 'Given input is not a valid number';
}

if (numLength == 0) {
    throw new Error("Input input a number")
}
if (numLength > 20) {
    throw new Error("Given Input has more than 20 characters")
}

/**
 * One character input converted to alphabet
 * It is direct encode, that can easily decode by human :)
 * [0 - 9] => [A - J]
 */
function simpleEncode(numStr) {
    var resultStr = '';
    for (var i = 0; i < numLength; i++) {
        var ASCII_value = parseInt(numStr.substr(i, 1)) + ASCII_START_VALUE;
        resultStr += String.fromCharCode(ASCII_value);
    }
    return resultStr;
}

/**
 * Two character input converted to alphabet
 * This is the hard part
 */
function complexEncode(numStr) {
    var resultStr = '';
    var lengthString = String.fromCharCode(numLength + ASCII_START_VALUE);

    // It has only one character
    if (numLength == 1) {
        resultStr = lengthString + String.fromCharCode(parseInt(numLength) + ASCII_START_VALUE);
    }

    var isNumLenOdd = numLength % 2 == 0 ? false : true;
    // return the result
    return resultStr;
}


/**
 * Things TODO
 * 
 * 1. regEx check for the integer
 *      /^\d{20}$/.test(str)
 * 
 * 2. Complete the complexEncode
 * 3. Start and complete the Decode for both Simple and Complex String
 * 
 */