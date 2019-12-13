export class FizzBuzzAlgorithm {

    private constructor() { }

    /**
     * Check if mod of two number 
     * @param num 
     * @param mod 
     */

    private static isMultiple(num: number, mod: number): boolean {
        return num % mod === 0;
    }
    /**
     * check fizzBuzz string
     * @param num 
     */
    private static fizzBuzz(num: number): any {

        switch (true) {
            case this.isMultiple(num, 15): return "FizzBuzz";
            case this.isMultiple(num, 3): return "Fizz";
            case this.isMultiple(num, 5): return "Buzz";
            default: return num
        }
    }
    /**
     * get list of fizz buzz  string list
     * @param num 
     */
    public static getFizzBuzzList(num: number): Array<string> {
        let numberList = new Array<number>();
        for (let index = 0; index < num; index++) {
            numberList = [...numberList, index + 1];
        }
        return numberList.map((x: number) => this.fizzBuzz(x));
    }
}
