const palindrome = (num: any): number | string => {
    let reverseNumUp: number = Number(num.toString().split('').reverse().join(''));
    let reverseNumDown: number = Number(num.toString().split('').reverse().join(''));
    let polNum: number = num
    let result: number | "Not valid" = 11

    if ( num > 11 && Number.isInteger(num)) {
        while (reverseNumUp !== polNum) {
            ++polNum
            reverseNumUp = Number(polNum.toString().split('').reverse().join(''))
        }
        polNum= num
        while (reverseNumDown !== polNum) {
            --polNum
            reverseNumDown = Number(polNum.toString().split('').reverse().join(''))
        }
        ;
        (num - reverseNumDown < reverseNumUp - num) ? result = reverseNumDown : result = reverseNumUp
    };
    if (!Number.isInteger(num) || num < 0)  result = "Not valid"

    return result

}


test('Numerical Palindrome #4', () => {
    expect(palindrome(281)).toBe(282);
});
test('Numerical Palindrome #4.1', () => {
    expect(palindrome(8)).toBe(11);
});
test('Numerical Palindrome #4.2', () => {
    expect(palindrome("12345")).toBe("Not valid");
});

//

// function isPalindrome(num){
// //     return (num>10 && num == num.toString().split("").reverse().join(""))? true : false;
// // }
// // function palindrome(num) {
// //     if(!Number.isInteger(num) || num<0) return 'Not valid';
// //     for(i=0; 1==1; i++){
// //         if(isPalindrome(num+i)) return num+i;
// //         if(isPalindrome(num-i)) return num-i;
// //     }
// }