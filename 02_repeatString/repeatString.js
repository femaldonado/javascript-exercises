const repeatString = function(word, times) {
    let string = "";
    if (times < 0) {
        return "ERROR";
    }
    for (let i = 0; i < times; i++) {
        string = string + word;
    }
    return string;
};
repeatString("hey, 3") //returns heyheyhey 
// Do not edit below this line
module.exports = repeatString;
