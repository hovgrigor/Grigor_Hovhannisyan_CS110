module.exports = {
    matrixProduct,
    sumOfMatrices,
    sumOfEachRow,
    printElements
}

function matrixProduct(mat1,mat2){
    if(mat1[0].length != mat2.length){
        return "Invalid matrices";
    }

    let result = [];

    for(let i = 0; i < mat1.length; i++){
        const row = [];
        for(let j = 0; j < mat2[i].length; j++){
            row[j] = 0;
        }
        result.push(row);
    }

    for(let coll_2 = 0; coll_2 < mat2[0].length; coll_2++){
        for(let row_1 = 0; row_1 < mat1.length; row_1++){
            for(let coll_1 = 0; coll_1 < mat1[row_1].length; coll_1++){
                result[row_1][coll_2] += mat1[row_1][coll_1] * mat2[coll_1][coll_2];
            }
        }
    }

    return result;
}

function sumOfMatrices(mat1, mat2){
    let result = [];
    for(let i = 0; i < mat1.length; i++){
        const row = [];
        for(let j = 0; j < mat1[i].length; j++){
            row.push(mat1[i][j] + mat2[i][j]);
        }
        result.push(row);
    }
    return result;
}

function sumOfEachRow(mat1){
    let result = [];
    for(let i = 0; i < mat1.length; i++){
        const row = [];
        for(let j = 0; j < mat1[i].length; j++){
            row[j] = mat1[i][j];
        }
        result.push(sumOfArray(row));
    }
    return result;
}

function sumOfArray(arr){
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        result += arr[i];
    }
    return result;
}

function printElements(mat){
    let matrixSring = "";

    for(let i = 0; i < mat.length; i++){
        for(let j = 0; j < mat[i].length; j++){
            matrixSring += mat[i][j] + ' ';
        }
        matrixSring = matrixSring.trim();
        matrixSring += '\n';
    }

    matrixSring = matrixSring.trim();
    console.log(matrixSring);
}