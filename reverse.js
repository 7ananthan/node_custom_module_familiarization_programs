module.exports.reverseNo = (x)=>{
    var a=x;
    var b=a;
    var c=0
    while(b>0)
    {
        c= c*10+(b%10);
        b=b/10;
        b=parseInt(b);
    }
    return c;
}
