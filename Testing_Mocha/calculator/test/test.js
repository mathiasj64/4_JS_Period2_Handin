let expect = require('chai').expect;
let assert = require('assert');
let calculator = require('../lib/calculator');
let dirSearcher = require('../lib/Make_It_Modular');

describe('True test', function() {
    it('should always pass', function (){
        expect(true).to.be.true;
    })
})

describe('Add test', function() {
    it('should pass when adding correctly', function (){
        assert.equal(calculator.add(2,2),4);
    })
})

describe('Subtract test', function() {
    it('should pass when subtracting correctly', function (){
        assert.equal(calculator.subtract(10, 5),5);
    })
})

describe('Multiply test', function() {
    it('should pass when multiplying correctly', function (){
        assert.equal(calculator.multiply(8,8),64);
    })
})

describe('Division test', function() {
    it('should pass when dividing correctly', function (){
        assert.equal(calculator.divide(100,2),50);
    })
})

describe('Division test', function() {
    it('should pass when throwing error correctly', function (){
        assert.throws(calculator.divide(100,0), Error, "Attempting to divide by zero!");
    })
})

describe('Dir-searcher test', function() {
    it('should pass if when finding the right files', function() {
        
    })
})