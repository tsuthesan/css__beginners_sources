var e = { a: 1, b: 2, c: 3, d: 4 };
for (v in e) {
    document.write(e[v]);
    document.write('<br>');
}


top:
    for (var l = 0; l < 10; l++) {
        for (var g = 0; g < 10; g++) {
            if (g == 5) {
                break top;
            }
            document.write(g);
            document.write('<br>');
        }
        document.write('-----');
        document.write('<br>');
    }