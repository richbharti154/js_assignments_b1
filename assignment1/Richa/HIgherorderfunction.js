function calculate(a, b, result) {
    return result(a, b);
  }
  
  function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  function multiply(a, b) {
    return a * b;
  }
  
  console.log(calculate(5, 3, add)); 
  console.log(calculate(10, 4, subtract)); 
  console.log(calculate(7, 2, multiply)); 
  
  