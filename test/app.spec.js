const chai = require('chai');
const expect = chai.expect;
const factorial = require('../app.js')

describe('Factorial', () => {

  it('should compute the factorial of a number', () => {
    expect(factorial(5)).to.be.equal(120);
    expect(factorial(5)).to.be.equal(120);
  });

  it('should return infinity for negative numbers', () => {
    expect(factorial(-2).to.be.equal(Infinity))
  });

});