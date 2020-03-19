var q=require("./add");
var w=require("./even")
var e=require("./largestOfThree");
var r=require("./palindrome");
var t=require("./reverse");

var a=19;
var b=56;
var c=23;
console.log("numbers are : " + a,b,c);
var f=q.addNo(a,b);
console.log("addition result ="+f);
var g=w.isEven(a);
var h=e.findLar(a,b,c);
var j=r.isPalindrome(a);
var k=t.reverseNo(a);
console.log("reverse of ", k + "="+ k);