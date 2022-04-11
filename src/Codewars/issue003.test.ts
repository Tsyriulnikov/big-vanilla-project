
const lcm = (...args:number[]) => {
    let  a = Math.abs(args[0]);
    for (let i = 1; i < args.length; i++)
    { let b = Math.abs(args[ i ]), c = a;
        while (a && b){ a > b ? a %= b : b %= a; }
        a = Math.abs(c*args[ i ])/(a+b);
    }
    return a;
}







test('Least Common Multiple', () => {
    expect(lcm(2,5)).toBe(10);
});