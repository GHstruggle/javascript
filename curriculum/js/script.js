"use strict"

//获取元素
const divDom = window.Gzong.$('table-data-wrap');

// 创建元素
const tableDom = window.Gzong.creatEle('table');

// 隐藏显示
let  addInfoButton = window.Gzong.getClassName('add-info-button')[0];
let infoDialog = window.Gzong.$('info-dialog');

//头像事件
let faceView = document.querySelector('.face-view')
let faceViewList = document.querySelector('.face-view-list')

//设置表头属性
window.Gzong.setAttr(tableDom, styles);

//获取属性
let a = window.Gzong.getAttr(tableDom, 'id'); 



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
    let nodeName = e.target.nodeName.toLowerCase();
    // 创建img元素
    let imgHTML = window.Gzong.creatEle('img'); 
    if (nodeName == 'img') {
        imgHTML.src = e.target.src; //当前目标的src属性
    }
    if (nodeName == 'li'){
        let imgSrc = window.Gzong.getTagName(e.target, 'img')[0].src;
        imgHTML.src = imgSrc;
    }
    window.Gzong.addChild(faceView, imgHTML);
})


// 执行请求接口后自动执行该方法，拿到请求数据
function handlerFaceListCallback(data){
    let res = data.data;
    let img = ''
    for (const key of res) {
        img += `<li><img src="${key}"alt=""></li>`
    }
    faceViewList.innerHTML = img;
}