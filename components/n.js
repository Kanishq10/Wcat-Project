function addnumbers(contentArr){
    for(let i=0;i<contentArr.length;i++){
        contentArr[i]=`${i+1}. ${contentArr[i]}`;
    }
    return contentArr;
}


module.exports={
    addNKey:addnumbers
}