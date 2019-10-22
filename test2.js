var S = require("./Sort_tmp.js");
function test() {
    var s = new S();
    var arr = [7,8,9];
    s.clonex(arr);
    console.log(s.a1);
    console.log(s.a());
    console.log(s.pos());
}
test();