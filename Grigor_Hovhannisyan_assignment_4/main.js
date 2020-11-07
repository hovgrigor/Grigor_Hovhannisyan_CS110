const matrixUtil = require("./utils.js");

const matrix1 =[
    [1, 2],
    [3, 4]
];

const matrix2 =[
    [5, 6],
    [7, 8]
];

const matrix3 =[
    [1, 2, 3, 4],
    [5, 6, 7, 8]
];

const matrix4 =[
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [10, 11, 12]
];

const matrix5 =[
    [2, 1, 4],
    [0, 1, 1]
];

const matrix6 =[
    [6, 3, -1, 0],
    [1, 1, 0, 4],
    [-2, 5, 0, 2]
];

const matrix7 =[
    [8, 1, 2],
    [-5, 6, 7]
];

const matrix8 =[
    [-5, 1],
    [0, 2],
    [-11, 7]
];

console.log(matrixUtil.sumOfEachRow(matrix6));