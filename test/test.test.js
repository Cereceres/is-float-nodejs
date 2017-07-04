const isFloat = require('../index')

const assert = require('assert')

describe('IsFloat function', function () {
    it('should return true is "1.001"', () => {
      assert(isFloat('1.001'))
    })

    it('should return false is "1"', () => {
      assert(!isFloat('1'))
    })

    it('should return false is 1', () => {
      assert(!isFloat(1))
    })

    it('should return true is 1.001', () => {
      assert(isFloat(1.001))
    })
})