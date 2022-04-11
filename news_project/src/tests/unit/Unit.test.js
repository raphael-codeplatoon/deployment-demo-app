import { formatTime } from '../../components/Article.js';
import { getData } from '../../utils/utils.js';
import axios from 'axios';
jest.mock('axios') // replaces axios with a mock version


// Make the mock return `true` for the first call,
// and `false` for the second call

describe('the format time function', ()=>{
    describe('when passed valid input ', ()=>{
        it('should return a legible date string', ()=>{
            // can run more code here to test our application
            expect(formatTime(1649168361)).toBe('4/5/2022')

        })
    })

    // describe('when passed invalid input ', ()=>{
    //     it('should return a legible error', ()=>{
    //         // can run more code here to test our application
    //         expect(formatTime(null)).toBe('oops! not a valid date!')
    //     })
    // })

})

describe('fake get data', ()=>{
    it('should get some data', async ()=>{
        axios.get.mockResolvedValue('ok bye')

        const value = await getData(30919257)
        console.log('value? ', value)
        expect(value).toBe('ok bye')
        // expect(4).toBe(4)
    })
})