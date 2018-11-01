#!/usr/bin/env node

var fs = require('fs');

var fastPouter = require("./js/fastRouter");

console.log(process.execArgv)
console.log(process.argv[2])
console.log(fastPouter);

//fastPouter("page")
console.log(__dirname);
console.log(process.cwd());
console.log(process.pid);

