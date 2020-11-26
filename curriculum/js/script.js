"use strict"
//设置表头属性
window.Gzong.setAttr(tableDom, styles);
//获取属性
const a = window.Gzong.getAttr(tableDom, 'id'); 

//表头数据拼接
function theadJoinData (data) {
        let theadHtml = '<thead><tr>';
        data.forEach((item) => {
            let width = item.width ? 'width='+item.width : '';
            let id = item.id ? 'id='+item.id : '';
            theadHtml += `<th ${width} ${id}>${item.label}</th>`;
        })
        theadHtml += '</tr></thead>';
        return theadHtml;
}
// 表头+主题数据，拼接进table
tableDom.innerHTML = theadJoinData(tableTheadData)+creatTbodyData();
// 把table追加为divDom子元素
divDom.appendChild(tableDom);

/*
************************添加信息 隐藏/显示****************************************************************************************** 
 */



//注册事件
window.Gzong.addEvent(addInfoButton , 'click' , function(){
    infoDialog.classList.add('dialog-show');
})

//关闭表单
function closeDialog (){
    infoDialog.classList.remove('dialog-show');
}


/*
************************头像事件处理****************************************************************************************** 
 */

window.Gzong.addEvent(faceView, 'click', function(){
     // 请求接口
     handlerFaceList();
})

window.Gzong.addEvent(faceViewList, 'click', function(e){

    // 获取目标元素
    const nodeName = e.target.nodeName.toLowerCase();
    // 获取img对象昂
    const getImg = window.Gzong.getTagName(faceView ,'img')
    // 创建img元素
    const imgHTML = window.Gzong.creatEle('img'); 

    //删除之前高亮
    if(faceSave){
        faceSave.classList.remove('active');
    }

    //判断目标元素img
    let imgSrc = ''; 
    if (nodeName == 'img') {
        imgSrc = e.target.src; //当前目标的src属性
        faceSave = e.target.parentNode;
    }
    //判断目标元素li
    if (nodeName == 'li'){
        let src = window.Gzong.getTagName(e.target, 'img')[0].src;
        imgSrc = src;
        faceSave = e.target
    }
    
    // 当前添加高亮
    faceSave.classList.add('active')

    //更新头像
    faceUpdate({
        getImg,
        imgHTML,
        imgSrc
    });
    
})


// 删除头像
window.Gzong.addEvent(faceDelButton, 'click', function(e){
    const ev = e || window.event;
    // 获取img对象
    const getImg = window.Gzong.getTagName(faceView, 'img')[0]
    //删除父级小面的子对象
    getImg && delFace(faceView, getImg)
    // 阻止事件冒泡
    ev.stopPropagation() || (ev.cancelBubble=true);
})


