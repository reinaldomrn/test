function fibonacci(number) {
    const result = [0, 1];
    for(let i = 2; i < number; i++){
        result[i] = result[i - 1] + result[ i - 2 ];
    }
    return result;
}

function multiplos() {
    let result = [];
    for (let i = 1; i <= 100; i++) {
        (i % 3 == 0 && i % 5 == 0)
        ? result = [...result, "fizz zumbido"]
        : (i % 3 == 0)
            ? result = [...result, "fizz"]
            : (i % 5 == 0)
                ? result = [...result, "buzz"]
                : result = [...result, i];
    }
    return result;
}

function countWord(word) {
    const array = word.toLowerCase().split(" ");
    let words = [];
    for (let i = 0; i < array.length; i++) {
        const contentWord = words
        .map((item) => item.word )
        .indexOf(array[i]);

        contentWord >= 0
        ?
            words[contentWord] = {
                ...words[contentWord],
                number: words[contentWord].number + 1,
            }
        :
           words = [...words, { word: array[i].replace("?", "") , number: 1}];
    }
    return words;
}
module.exports = { fibonacci, multiplos, countWord };