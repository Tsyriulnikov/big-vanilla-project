test("rot13", () => {
        const rot13 = (str) => {
            return str.replace( /[A-Za-z]/g , function(c) {
                return String.fromCharCode( c.charCodeAt(0) + ( c.toUpperCase() <= "M" ? 13 : -13 ) );
            } );

  expect(rot13("EBG13 rknzcyr.")).toBe("ROT13 example.")
        }

    }
)

function rot13(str) {
    return str.split('').map(function(e) {
        return /[A-Ma-m]/.test(e) ? String.fromCharCode(e.charCodeAt(0) + 13) :
            /[N-Zn-z]/.test(e) ? String.fromCharCode(e.charCodeAt(0) - 13) : e;
    }).join('');
}