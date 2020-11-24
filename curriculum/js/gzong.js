(function() {
    "use strict"

    if(!window.Gzong){ window.Gzong = {} }
        window.Gzong={
            /**
            * 通过id获取元素
            * @param {string} id
            */
            $: function(id) {
                let dom = document.getElementById(id);
                if(typeof id !== 'string'){throw new Error('参数id必须为字符串');}
                if(!dom){throw new Error('没有找元素');}
                return dom;
            },

            //通过类名获取元素
            getClassName: function(className) {
                let dom = document.getElementsByClassName(className);
                return dom;
            },
            // 获取标签元素
            getTagName: function (parentNode, target){
                return parentNode.getElementsByTagName(target)
            },

            /**
             *创建元素
            */
            creatEle: function(node) {
                return document.createElement(node);
            },


            /**
             * 设置属性
             */
            setAttr: function(node, styles) {
                for(let key in styles) {
                    node.setAttribute(key, styles[key])
                }
            },

            /**
             * 获取属性
             */
            getAttr: function(node, id) {
                return node.getAttribute(id);
            },
            /**
             * 
             * @param {dom} domNode 
             * @param {evetType} evetType 
             * @param {callback} handlerFution
             * addEventListener 事件注册
             */
            addEvent: function(domNode, evetType, handlerFution){
                if(window.addEventListener){
                    domNode.addEventListener(evetType, handlerFution);
                }else{
                    // ie处理事件
                    domNode.attachEvent(`on${evetType}` , handlerFution);
                }
                
            },
            /**
             * 删除注册事件
             *  removeEventListener
             */
            removeEvnet: function(domNode, evetType, handlerFution){
                if(window.removeEventListener){
                    domNode.removeEventListener(evetType, handlerFution);
                }else{
                    domNode.detachEvent(`on${evetType}` , handlerFution);
                }
            },
            /**
             * 添加子级元素
             * appendChild
             */
            addChild: function(parentNode, EleNode){
                parentNode.appendChild(EleNode);
            }
        }
    
})()