const {shuffleArray} = require('./utils')

// added for corrections
const testArr1 = [1,2,3,4]
const testArr2 = []
const testArr3 = ["a","b","c"]

describe('shuffleArray should', () => {
// added for corrections
    test('return an array', () => {
        expect(Array.isArray(shuffleArray(testArr1))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr2))).toBe(true)
        expect(Array.isArray(shuffleArray(testArr3))).toBe(true)
    })

    test('have its output array have the same length as its input array', () => {
        expect(shuffleArray(testArr1)).toHaveLength(testArr1.length)
        expect(shuffleArray(testArr2)).toHaveLength(testArr2.length)
        expect(shuffleArray(testArr3)).toHaveLength(testArr3.length)
    })
    // my tests did not work
    // let formattedArray = shuffleArray([])
    // test('should be type array', () => {
    //     expect(typeof formattedArray).toBe([])
    // })
    
    // test('array to be shuffled', () => {
    //     expect([3, 1, 2]).toBe([3, 1, 2])
    // })
})