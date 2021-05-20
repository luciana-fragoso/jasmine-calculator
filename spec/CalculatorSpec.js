


describe("Calculator Functions", function() {
 

  describe("add", function() {
    const tests = [
      { num1: 3,   num2: 2, answ: 5 },
      { num1: 3, num2: -2, answ: 1}, 
      { num1: 3, num2: 0, answ: 3},
      { num1: 0, num2: 47, answ: 47 }
    ];
  
    tests.forEach(test => {
      it(`should add ${test.num1} to ${test.num2} and have the expected result`, () => {
        expect(add(test.num1, test.num2)).toEqual(test.answ);
      });
    });
  });


  describe("Substract", function () {
    const tests = [
      { num1: 80,   num2: 30, answ: 50 },
      { num1: 10, num2: -20, answ: 30}, 
      { num1: 5, num2: -3, answ: 8},
      { num1: 0, num2: 47, answ: -47 },
      { num1: -15, num2: -5, answ: -10 }
    ];
  
    tests.forEach(test => {
      it(`should substract ${test.num1} from ${test.num2} and have the expected result`, () => {
        expect(subtract(test.num1, test.num2)).toEqual(test.answ);
      });
    });
  });



  describe("Multiply", function () {
    const tests = [
      { num1: 8,   num2: 30, answ: 240 },
      { num1: 0, num2: 5, answ: 0}, 
      { num1: 6, num2: 0, answ: 0},
      { num1: 7, num2: 1, answ:7},
      { num1: -5, num2: -5, answ: 25 },
      { num1: -5, num2: 5, answ: -25 }
    ];
  
    tests.forEach(test => {
      it(`should multiply ${test.num1} from ${test.num2} and have the expected result`, () => {
        expect(multiply(test.num1, test.num2)).toEqual(test.answ);
      });
    });
  });



  describe("divide", function() {


    const tests = [
      { num1: 15, num2: 3, answ: 5 },
      { num1: 3, num2: 1, answ: 3}, 
      { num1: 3, num2: -1, answ: -3},
      {num1: -9, num2: 2, answ: -4.5}
    ];
  
    tests.forEach(test => {
      it(`should substract ${test.num1} from ${test.num2} correctly`, () => {
        expect(divide(test.num1, test.num2)).toEqual(test.answ);
      });
    });


    it("should throw an exception when dividing by zero", function() {
      let divideByZero = function() { divide(3, 0); };
      expect(divideByZero).toThrowError(RangeError, 'Divide-by-zero');
    });
     
   
  });


describe("Integration Test - 1", function () {
  const tests = [ { a: -9, b: 5, c: 14, d: 2, answ : -38}];

  tests.forEach(test => {
    it(`should calculate expression: ${test.a} * ${test.b} + ${test.c} / ${test.d} correctly`, () => {
      var r1 = multiply(test.a, test.b);
      var r2 = divide(test.c,test.d);
      var r3 = add(r1, r2);
       expect(r3).toEqual(test.answ);
    });
  });
});
 
describe("Integration Test - 2", function () {
  const tests = [ { a: 0, b: 2, c: 3, d: 5, e: -1 , answ : 6}];

  tests.forEach(test => {
    it(`should calculate expression: ${test.a} / ${test.b} * ${test.c} + ${test.d} - ${test.e} correctly`, () => {
      var r1 = divide(test.a, test.b);
      var r2 = multiply(r1,test.c);
      var r3 = add(r2, test.d);
      var r4 = subtract(r3, test.e);
       expect(r4).toEqual(test.answ);
    });
  });
});

});