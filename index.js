const { hello } = require("./build/Release/hello.node");
const { cSpeed } = require("./build/Release/cSpeed.node");

let hi = hello();
console.log(hi);

const cppLoop = "c++ loop";
console.time(cppLoop);
cSpeed();
console.timeEnd(cppLoop);

const jsLoopTime = "js loop";
console.time(jsLoopTime);
let count = 0;
for (let i = 0; i < 1000000; i++) {
  count = i;
}
console.timeEnd(jsLoopTime);