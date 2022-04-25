test("N-th Fibonacci",()=>{

    const nthFibo=(n)=>{
        let fibonacci = [0, 1]
        for (let i = 1; i < n; i++)
            fibonacci.push(fibonacci[i] + fibonacci[i - 1])
    console.log(fibonacci)
        return fibonacci[n-1]

    }

    expect(nthFibo(1)).toBe(0)
    expect(nthFibo(2)).toBe(1)
    expect(nthFibo(3)).toBe(1)
    expect(nthFibo(4)).toBe(2)
})

// function nthFibo(n) {
//     return n < 2 ? 0 : n == 2 ? 1 : nthFibo(n-1) + nthFibo(n-2);
// }