function calculator(a, b, operator) {
  switch (operator) {
    // Arithmetic
    case "/":  return a / b;
    case "*": return a * b;
    case "+": return a + b;
    case "-": return a - b;
    
    
    case "%": return a % b;

      //  Comparison
    case "==": return a == b;   
    case "===": return a === b;  
       case ">":  return a > b;
    case "<":  return a < b;
    case "!=": return a != b;

    // Logical 
    case "&&": return a && b;
    case "||": return a || b;
    case "!": return !a; 
     default:
      return "Invalid operator";
  }
}
// // Test the calculator

console.log("Arithmetic:");
console.log("30/ 6 =", calculator(10, 5, "/"));
console.log("5 * 5 =", calculator(5, 3, "*"));
console.log("5 + 19 =", calculator(5, 9, "+"));
console.log("5 - 5 =", calculator(5, 5, "-"));

console.log("15 % 3 =", calculator(10, 3, "%"));

console.log("\nComparison:");
console.log("20 == 20 =", calculator(20, "20", "=="));
console.log("10 === 10 =", calculator(10, "10", "==="));
console.log("10 > 5 =", calculator(10, 5, ">"));
console.log("10 < 5 =", calculator(10, 5, "<"));
console.log("10 != 5 =", calculator(10, 5, "!="));

console.log("\nLogical:");
console.log("true && false =", calculator(true, false, "&&"));
console.log("true || false =", calculator(true, false, "||"));
console.log("!true =", calculator(true, null, "!"));



