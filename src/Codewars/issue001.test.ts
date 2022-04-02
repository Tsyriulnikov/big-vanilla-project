
const createNDimensionalArray = (n:number, size:number ):string[] => {

    let newArray = new Array(n);
    for(let i=0; i < n; i++) {
        // создаём столбцы
        newArray[i] = new Array(size);
        //инициализируем ячейки значением
        for(let j=0; j < size; j++) {
            newArray[i][j] = 'level ' + n;
        }
    }
    return newArray;

}



test('Create N-dimensional array', () => {
    expect(createNDimensionalArray(2,3)).toStrictEqual([['level 2', 'level 2', 'level 2'],
        ['level 2', 'level 2', 'level 2'], ['level 2', 'level 2', 'level 2']]);
});