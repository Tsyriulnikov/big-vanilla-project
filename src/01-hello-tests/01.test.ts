import {splitInToWords, sum} from "./01";
import {isArray} from "util";

test("Sum should be corrected", ()=> {

    const a:number=1;
    const b:number=2;
    const c:number=3;

    const result=sum(a,b)

    expect(result).toBe(3)
} )

test("is Array",()=>{

    const sentense:string = "Hello world"
    const result: Array<string> =splitInToWords(sentense)
    expect(Array.isArray(result)).toBe(true)

})