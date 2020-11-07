function countWords(str = ""){
    let result = 1;
    str = str.trim();
    console.log(str.length)
    for(let i = 0; i < str.length; i++){
        if(str.charAt(i) === " "){
            result++
        }
    }
    return result;
}

console.log(countWords("Hello world"))