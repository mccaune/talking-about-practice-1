/*
Hit the target
given a matrix n x n (2-7), determine if the arrow is directed to the target (x).
There will be only 1 arrow '>' and 1 target 'x'
An empty spot will be denoted by a space " ", the target with a cross "x", and the scope ">"
Examples:
given matrix 4x4:
[
[' ', ' ', ' ', ' '],
[' ', ' ', ' ', ' '], --> return true
[' ', '>', ' ', 'x'],
[' ', ' ', ' ', ' ']
]
given matrix 4x4:
[
[' ', ' ', ' ', ' '],
[' ', '>', ' ', ' '], --> return false
[' ', ' ', ' ', 'x'],
[' ', ' ', ' ', ' ']
]

given matrix 4x4:
[
[' ', ' ', ' ', ' '],
[' ', 'x', '>', ' '], --> return false
[' ', '', ' ', ' '],
[' ', ' ', ' ', ' ']
]

In this example, only a 4x4 matrix was used, the problem will have matrices of dimensions from 2 to 7
Happy hacking as they say!
*/

const solution = mtrx => {
    let arr = mtrx.filter(function (element) {
            return element.includes('>') && element.includes('x');
        } ) [0] || [];
    if (arr.indexOf('>') < arr.indexOf('x')){
        return true;
    } else {
        return false;
    }
}