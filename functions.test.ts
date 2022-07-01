const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    let formattedArray = shuffleArray([])
    test('should be type array', () => {
        expect(typeof formattedArray).toBe([])
    })
    
    test('array to be shuffled', () => {
        expect([3, 1, 2]).toBe([3, 1, 2])
    })
})