const ipsBetween=(start:string, end:string) =>{
    const num = (ip:string) => ip.split('.')
        .map(x => parseInt(x))
        .reduce((acc, e) => acc * 256 + e);

    return num(end) - num(start);
}

test("Count IP Addresses", ()=>{
    expect(ipsBetween("10.0.0.0", "10.0.0.50")).toBe(50)
})
