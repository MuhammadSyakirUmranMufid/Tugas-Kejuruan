let arrayA = [1, 2, 3, 4];
let arrayB = [5, 6, 7, 8];
 const metrixAB = arrayA[0] * arrayB[0] + arrayA[1] * arrayB[2]
 const metrixAB2 = arrayA[0] * arrayB[1] + arrayA[1] * arrayB[3]
 const metrixAB3 = arrayA[2] * arrayB[0] + arrayA[3] * arrayB[2]
 const metrixAB4 = arrayA[2] * arrayB[1] + arrayA[3] * arrayB[3] 



document.write("Metrix A = ", "&nbsp;|", arrayA[0], "&nbsp;", arrayA[1], "|");
 document.write("<br>&emsp;","&emsp;","&emsp;","&emsp;","&emsp;","|", arrayA[2],'&nbsp;', arrayA[3], "|","<br>")


document.write("Metrix B = ", "&nbsp;|", arrayB[0], "&nbsp;", arrayB[1],"|");
document.write("<br>&emsp;","&emsp;","&emsp;","&emsp;","&emsp;","|", arrayB[2],'&nbsp', arrayB[3],"|","<br>")

document.write(` Metrix AB =&nbsp;|${metrixAB}  ${metrixAB2}| <br>`);
document.write(`&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;|${metrixAB3}  ${metrixAB4}|`);