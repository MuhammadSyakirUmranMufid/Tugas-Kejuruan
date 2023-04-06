// Membuat Array 3D dengan menggunakan JavaScript 


let arrayA = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayB = [9, 8, 7, 6, 5, 4, 3, 2, 1];

// Perkalian A
const A1 = arrayA[0] * arrayB[0] + arrayA[1] * arrayB[3] + arrayA[2] * arrayB[6];
const A2 = arrayA[0] * arrayB[1] + arrayA[1] * arrayB[4] + arrayA[2] * arrayB[7];
const A3 = arrayA[0] * arrayB[2] + arrayA[1] * arrayB[5] + arrayA[2] * arrayB[8];

// Perkalian B
const B1 = arrayA[3] * arrayB[0] + arrayA[4] * arrayB[3] + arrayA[5] * arrayB[6];
const B2 = arrayA[3] * arrayB[1] + arrayA[4] * arrayB[4] + arrayA[5] * arrayB[7];
const B3 = arrayA[3] * arrayB[2] + arrayA[4] * arrayB[5] + arrayA[5] * arrayB[8];

//Perkalian C

const C1 = arrayA[6] * arrayB[0] + arrayA[7] * arrayB[3] + arrayA[8] * arrayB[6];
const C2 = arrayA[6] * arrayB[1] + arrayA[7] * arrayB[4] + arrayA[8] * arrayB[7];
const C3 = arrayA[6] * arrayB[2] + arrayA[7] * arrayB[5] + arrayA[8] * arrayB[8];

// Soal Array A
document.write(`Array A = <br>| ${arrayA[0]} |  ${arrayA[1]} | ${arrayA[2]} |`)
document.write(`<br>| ${arrayA[3]} |  ${arrayA[4]} | ${arrayA[5]} |`)
document.write(`<br>| ${arrayA[6]} |  ${arrayA[7]} | ${arrayA[8]} |<br><br>`)

// Soal Array B

document.write(`Array B = <br>| ${arrayB[0]} |  ${arrayB[1]} | ${arrayB[2]} |`)
document.write(`<br>| ${arrayB[3]} |  ${arrayB[4]} | ${arrayB[5]} |`)
document.write(`<br>| ${arrayB[6]} |  ${arrayB[7]} | ${arrayB[8]} |<br><br>`)

document.write(`Array AB  = <br>| ${A1} |  ${A2} | ${A3} |`)
document.write(`<br>| ${B1} |  ${B2} | ${B3} |`)
document.write(`<br>| ${C1} |  ${C2} | ${C3} |`)


