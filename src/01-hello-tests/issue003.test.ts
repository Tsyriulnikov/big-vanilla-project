const gap=(g:number, m:number, n:number):number[]|null=>{
    let arr:number[]=[]
    let result:number[]=[]

    nextPrime:
    for (let i = m; i<=n; i++){
        for (let j = 2; j<i; j++){
         if (i % j === 0) continue nextPrime;
        }
     arr.push(i)
    }

    arr.forEach((el, index, array) =>  (array[index+1]-el === g) && result.push(el,array[index+1]));

    (result) && result.splice(2)

    return (result.length>0) ? result:null
}







test("Gap in Primes",()=>{
   expect(gap(2,100,110)).toStrictEqual( [101, 103])
});