
const lcm = (...args:number[]) => {
    let  a = args[0];
    for (let i = 1; i < args.length; i++)
    { let b = args[ i ],
        c = a;
        while (a && b){ a > b ? a %= b : b %= a; }
        a = (c*args[ i ])/(a+b);
    }
    return a;
}







test('Least Common Multiple', () => {
    expect(lcm(2,5)).toBe(10);
});

/*
function lcm(...numbers) {
  return numbers.reduce((a, b) => Math.abs(a * b) / gcd(a, b));
};

function gcd(...numbers) {
  return numbers.reduce((a, b) => b === 0 ? a : gcd(b, a % b));
}
 */


/*
lcm=(...a)=>((b=(c,d)=>!d?c:b(d,c%d))=>a.reduce((a,c)=>a*(c/b(a,c))))();
 */