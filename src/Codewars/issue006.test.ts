test("Value of x", ()=>{

const valueOfX = (eq:string) => {
let equalTooString:string[]=eq.split("=");
let left:string= equalTooString[0].slice(equalTooString[0].indexOf("x")+1)
let right:string= equalTooString[1].slice(equalTooString[1].indexOf("x")+1)

    return left +  right
}


    expect(valueOfX('x = + 2 - 5 + 9')).toBe(6)
})