const fs=require('fs');
const path=require('path');
function refine(inputArr) {
  let content = "";
  for (let i = 0; i < inputArr.length; i++) {
    filepath = path.join(process.cwd(), inputArr[i]);
    let buffer = fs.readFileSync(filepath);
    content += buffer + "\r\n";
  }
  return content;
}


module.exports={
    process:refine
}