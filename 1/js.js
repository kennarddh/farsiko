let a = "";
for (let r = 0; r < 10; r++) {
    a += "*****\n";
}
console.log(a);

for (let r = 0; r < 6; r++) {
    let a = "";
    for (let e = 0; e < r; e++) {
        a += "*";
    }
    console.log(a);
}
for (let r = 6; r > 0; r--) {
    let a = "";
    for (let e = 0; e < r; e++) {
        a += "*";
    }
    console.log(a);
}