
import { FizzBuzzAlgorithm } from '../../../app/lib/fizzbuzzalgorithm'

describe('FizzBuzz', () => {
    it(`Should return "FizzBuzz" when the number from 1 to 15`, () => {
        expect(FizzBuzzAlgorithm.getFizzBuzzList(15).length).toBe(15);
    });

    it(`Should return "FizzBuzz" when the number from 1 to 100`, () => {
        expect(FizzBuzzAlgorithm.getFizzBuzzList(100).length).toBe(100);
    });
     // We can also add multiple scenarios 
});


