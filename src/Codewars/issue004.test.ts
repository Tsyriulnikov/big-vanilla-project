const isMerge=(s:string, part1:string, part2:string) => {
const arrS:Array<string> = s.split('')
const arrPart1:Array<string> = part1.split('')
const arrPart2:Array<string> = part2.split('')

    return false;
}

test("Merged String Checker",()=>{
    expect(isMerge('xcyc', 'xc', 'yc')).toBe(true)
})