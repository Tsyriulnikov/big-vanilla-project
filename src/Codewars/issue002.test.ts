const palindrome = (num:number) : number|string=> {
let reverseNum:number
let stringNum:string = num.toString()
let polNum:number= num


//    while (reverseNum !== num ) {
         polNum++
         reverseNum = Number(polNum.toString().split('').reverse().join(''))

  //   }

    return reverseNum

}



test('Numerical Palindrome #4', () => {
    expect(palindrome(281)).toBe(282);
});