/* global describe, it */
const { expect } = require('chai')
const { containsPermission } = require('../')

describe('containsPermission', () => {
  it('should return true if a permission matches exactly', () => {
    expect(containsPermission(
      ['test.bla', 'test.permission'],
      'test.permission'
    )).to.be.true
  })

  it('should return true if a permission matches with *', () => {
    expect(containsPermission(
      ['test.bla', 'test.*'],
      'test.permission'
    )).to.be.true
  })

  it('should return false if a permission does not match', () => {
    expect(containsPermission(
      ['test.bla', 'test.bla.*'],
      'test.permission'
    )).to.be.false

    expect(containsPermission(
      ['test.bla.*'],
      'test.bla'
    )).to.be.false
  })
})
