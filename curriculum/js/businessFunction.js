// api  获取头像的回调函数
function handlerFaceListCallback(data){
    let res = data.data;
    let img = ''
    for (const key of res) {
        img += `<li><img src="${key}"alt=""></li>`
    }
    faceViewList.innerHTML = img;
}


//更新头像
function faceUpdate (params){
    //头像存在。则修改src
    if(params.getImg.length !== 0) {
        params.getImg[0].src = params.imgSrc;
    }else {
        params.imgHTML.src = params.imgSrc
        window.Gzong.addChild(faceView, params.imgHTML);
    }
}

//删除头像
function delFace (parentNode, target){
    //删除父级小面的子对象
    parentNode.removeChild(target)
}