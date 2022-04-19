test("IP in hex",()=>{

    const rgb=(r, g, b) =>{
        const hexString=(d)=>{
            if(d<0) d=0;
            if(d>255) d=255;
            let dString = d.toString(16);
            if (dString.length % 2) {
                dString = '0' + dString;
            }
            return dString
        }
        return (hexString(r)+hexString(g)+hexString(b)).toUpperCase()
    }

    expect(rgb(0,0,0)).toBe("000000")
})