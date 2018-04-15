var a = 10;
var b = 20;
var c = '10';
var e = 10;
var  outPut = null;
document.write(" a = 10, b = 20, c = '10', e = 10 <br/>");

a == e ? outPut = true : outPut = false ;
document.write( ' (a == e) = ' + outPut);
document.write('<br/>');

a == b ? outPut = true : outPut = false ;
document.write( ' (a == b) = ' + outPut);
document.write('<br/>');

a == c ? outPut = true : outPut = false ;
document.write( ' (a == c) = ' + outPut);
document.write('<br/>');


a === c ? outPut = true : outPut = false ;
document.write( ' (a === c) = ' + outPut);
document.write('<br/>');

a === e ? outPut = true : outPut = false ;
document.write( ' (a === e) = ' + outPut);
document.write('<br/>');

a != e ? outPut = true : outPut = false ;
document.write( ' (a != e) = ' + outPut);
document.write('<br/>');

a != c ? outPut = true : outPut = false ;
document.write( ' (a != c) = ' + outPut);
document.write('<br/>');

a !== e ? outPut = true : outPut = false ;
document.write( ' (a !== e) = ' + outPut);
document.write('<br/>');

a !== c ? outPut = true : outPut = false ;
document.write( ' (a !== c) = ' + outPut);
document.write('<br/>');

a > c ? outPut = true : outPut = false ;
document.write( ' (a > c) = ' + outPut);
document.write('<br/>');

b > c ? outPut = true : outPut = false ;
document.write( ' (b > c) = ' + outPut);
document.write('<br/>');

a < c ? outPut = true : outPut = false ;
document.write( ' (a < c) = ' + outPut);
document.write('<br/>');

c < b ? outPut = true : outPut = false ;
document.write( ' (c < b) = ' + outPut);
document.write('<br/>');

a >= c ? outPut = true : outPut = false ;
document.write( ' (a >= c) = ' + outPut);
document.write('<br/>');

b >= c ? outPut = true : outPut = false ;
document.write( ' (b >= c) = ' + outPut);
document.write('<br/>');

a <= c ? outPut = true : outPut = false ;
document.write( ' (a <= c) = ' + outPut);
document.write('<br/>');

c <= b ? outPut = true : outPut = false ;
document.write( ' (c <= b) = ' + outPut);
document.write('<br/>');