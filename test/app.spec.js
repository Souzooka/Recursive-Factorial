const chai = require('chai');
const expect = chai.expect;
const factorial = require('../app.js');

describe('Factorial', () => {

  it('should compute the factorial of a number', () => {
    expect(factorial(5)).to.be.equal(120);
    expect(factorial(0)).to.be.equal(1);
  });

  it('should return infinity for negative numbers', () => {
    expect(factorial(-2)).to.be.equal(Infinity);
  });

  it('should throw an error if the value passed in ' +
     'is not a number', () => {
    expect(() => factorial("hi")).to.throw(Error);
  });

});