function squareEquation() {
var a = document.square.a.value;
var b = document.square.b.value;
var c = document.square.c.value;
    var d = b * b - 4 * a * c;
    if(d > 0) {
    var x1 = (-b + Math.sqrt(d)) / (2 * a);
    document.square.xx1.value = x1;
    var x2 = (-b - Math.sqrt(d)) / (2 * a);
    document.square.xx2.value = x2;
}
    if(d===0){
    var x1= -b/(2 * a);
    var x2= -b/(2 * a);
    document.square.xx1.value = x1;
    document.square.xx2.value = x2;
    }
    if(d < 0) {
        document.write('none');
    }
}