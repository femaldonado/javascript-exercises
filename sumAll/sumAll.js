const sumAll = function(num1, num2) {
    let error = "ERROR";
    let finalSum = 0;
     let biggerValue = Math.max(num1, num2);
     let smallerValue = Math.min(num1, num2);
     if (((typeof num1 === "string")) || (typeof num2 === "string")) {
         return error;
     } else if (((typeof num1 === "object")) || (typeofnum2 === "object")) {
         return error;
     } else if ((biggerVALUE >= 0) && (smallerVALUE >= 0)) {
         for (let i = smallerValue; i <= biggerValue; i++) {
             finalSum = finalSum + i;
         }
     } else return error;
     return finalSum; 
     };
  
module.exports = sumAll;
