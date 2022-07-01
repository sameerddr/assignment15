// // Q3 -->

let n = 5;
let star = "";
let count = 1;
for (let i = 0; i < n; i++) {
    for (let j = 0; j <= i; j++) {
        star += count;
        star += " ";
        count++;
    }
    star += "\n"
}
console.log(star);