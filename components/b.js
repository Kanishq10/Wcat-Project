function addToNonempty(contentArr){
    let count=1;
    for(let i=0;i<contentArr.length;i++){
        if(contentArr[i]!=''){
            contentArr[i]=`${count}. ${contentArr[i]}`;
            count++;
        }
    }
    return contentArr;
}

module.exports={
    addNeKey:addToNonempty
}