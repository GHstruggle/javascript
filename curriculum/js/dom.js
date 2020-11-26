"use strict"

//获取元素
const divDom = window.Gzong.$('table-data-wrap');

// 创建元素
const tableDom = window.Gzong.creatEle('table');

// 隐藏显示
const  addInfoButton = window.Gzong.getClassName('add-info-button')[0];
const infoDialog = window.Gzong.$('info-dialog');

//头像事件
const faceView = document.querySelector('.face-view');
const faceViewList = document.querySelector('.face-view-list');
//获取删除头像按钮
const faceDelButton = window.Gzong.getTagName(faceView, 'a')[0];

//头像的存储
let faceSave = null;