function codeinthefile() {
    let word = "lines"
    let count = 99;
    while (count >0) {
        if (count == 1) {
            word = "line";
        }
        console.log(count+ " " + word + " of code in the file,");
        console.log(count + " " + word + " of code;");
        console.log("harrison strikes one out, clears it all out,");
        if (count == 1) {
            console.log("No more lines of code in the file!");
        }
        count = count - 1
    }
}

codeinthefile();