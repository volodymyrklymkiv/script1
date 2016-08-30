// var a = 1, b = 1, c, d;

// c = ++a; alert(c); // 2
// d = b++; alert(d); // 1

// c = (2+ ++a); alert(c); // 5
// d = (2+ b++); alert(d); // 4

// alert(a); // 3
// alert(b); // 3

function squareEquation() {
    var a = document.getElementById('a').value;
    var b = document.getElementById('b').value;
    var c = document.getElementById('c').value;
    var sol = document.getElementById('squareSol');
    
    var d = b * b - 4 * a * c;
    if ( d > 0 ) {
    str += (-b + math.sqrt(d)) / (2 * a);
    str += (-b - math.sqrt(d)) / (2 * a);
  } else {
      if ( d == 0) {
      str += -b / ( 2 * a );
  } else {
      str += -b / ( 2 * a );
      str +=  Math.sqrt( -d ) / ( 2 * a );
  }
}
    