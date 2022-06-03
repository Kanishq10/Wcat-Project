function TosingleLine(contentArr){
    for (let i = 0; i < contentArr.length - 1; i++) {
        if (contentArr[i] == "" && contentArr[i + 1] == "") {
          contentArr[i] = null;
        } else if (contentArr[i] == "" && contentArr[i + 1] == null) {
          contentArr[i] = null;
        }
      }
  
      let temp = [];
      for (let i = 0; i < contentArr.length; i++) {
        if (contentArr[i] != null) {
          temp.push(contentArr[i]);
        }
      }
      return temp;
}


module.exports={
    toSingle:TosingleLine
}