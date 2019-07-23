const isPalandrome = require('../index')

describe('isPalandrome', () => {
  it('returns true if a pali', () => {
    const value = isPalandrome('racecar')


    expect(value).toBe(true)
  })

  it('returns false if not a pali', () => {
    const value = isPalandrome('javascript')


    expect(value).toBe(false)
  })

  it('returns false if not full pali', () => {
    const value = isPalandrome('xmyx')


    expect(value).toBe(false)
  })
})
