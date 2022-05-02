const {shuffleArray} = require('./utils')

// check that shuffleArray returns an array

// check that it returns an array of the same length as the argument sent in

// check that all the same items are in the array

// check that the items have been shuffled around

//Hi joely!!!! hehehe, I noticed with the final shuffle test, it will sometimes pass and sometimes fail, which tells me that it probably sometimes shuffles to the exact same positions?

const fakeArr = ['a', 'b', 'c', 'd']

describe('shuffleArray should', () => {

    test('shuffleArray returns an array', () => {
        expect(Array.isArray(shuffleArray(fakeArr))).toBeTruthy
    })

    test('shuffleArray is the same length as the argument', () => {
        expect(shuffleArray(fakeArr)).toHaveLength(fakeArr.length)
    })

    test('shuffleArray has all of the same items', () => {
        expect(shuffleArray(fakeArr)).toEqual(expect.arrayContaining(fakeArr))
    })

    test('shuffleArray items have been shuffled', () => {
        let shuffledArray = shuffleArray(fakeArr)
        expect(shuffledArray.join()).not.toEqual(fakeArr.join())
    })
   
})
