#!/usr/bin/env node
const fs=require('fs');
const path=require('path');
const { exit } = require('process');
let sfunc=require('./components/s')
let nfunc=require('./components/n')
let bfunc=require('./components/b')
let machine=require('./components/refine')


// commands
// wcat filepath,filepath2,filepath3.........filepathN
//options to format data
// -s :convert big line break to single line break
// -n :add numbers to line
// -b :add numbers to non empty lines

let input=process.argv.slice(2);
let options = [];
let inputArr = [];
for (let i = 0; i < input.length; i++) {
  if (input[i].charAt(0) == "-") {
    options.push(input[i]);
  } else {
    inputArr.push(input[i]);
  }
}

if (options.includes("-n") && options.includes("-b")) {
    console.log("Either give -n or -b as input");
    process.exit();
  }

let content=machine.process(inputArr);
let contentArr = content.split("\r\n");


if (options.includes("-s")) {
    contentArr=sfunc.toSingle(contentArr);
}

if(options.includes("-n")){
    contentArr=nfunc.addNKey(contentArr);
}

if(options.includes("-b")){
    contentArr=bfunc.addNeKey(contentArr);
}

console.log(contentArr.join('\n'));