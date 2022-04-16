const isMerge = (s: string, part1: string, part2: string): boolean => {
    let result: boolean = false
    let indexPart1:number = 0;
    let indexPart2:number = 0;
    const arrS: Array<string> = s.split('')
    const arrPart1: Array<string> = part1.split('')
    const arrPart2: Array<string> = part2.split('')
    for (let i = 0; i < s.length; i++) {
        if (arrS[i] === arrPart1[indexPart1] && arrPart1[indexPart1] !== arrPart2[indexPart2] ){
            result = true
            indexPart1++
        } else if (arrS[i] === arrPart2[indexPart2]){
            result = true
            indexPart2++
        }
        else {
            result = false;
            break;
        }
    }
    return result;
}

test("Merged String Checker", () => {
    expect(isMerge( 'xcyc', 'cy', 'xc')).toBe(true)
})