/*---------------------------------------------------函数库 目录----------------------------------------------------*/


//---------------------------------兼容获取元素，IE7,IF8(主要解决getElementByClassName()方法)------------------------------------
function jr(ClassName,obj){
    var obj1=obj||document;
    if(document.getElementsByClassName){
        return obj1.getElementsByClassName(ClassName);
    }else{
        var tags=obj1.all;
        var arr=[];
        for(var i=0;i<tags.length;i++){
            if(check(tags[i].className,ClassName)){
                arr.push(tags[i]);
            }
        }
        return arr;
    }
}
function check(tagsClassName,ClassName){
    var arr=tagsClassName.split(" ")
    for(var i=0;i<arr.length;i++){
        if(arr[i]==ClassName){
            return true;
        }
    }
    return false;
}
//----------------------------------------获取元素子节点中元素节点----------------------------------------
//Childs[i].nodeType!=3    排除文本节点
//Childs[i].nodeType!=8    排除注释节点
function getChilds(obj){
    var childs=obj.childNodes;//
    var arr=[];
    for(var i=0;i<childs.length;i++){
        if(childs[i].nodeType!=3&&childs[i].nodeType!=8){
            arr.push(childs[i]);
        }
    }
    return arr;
}
//----------------------------------------获取元素子节点中的第一个元素节点----------------------------------------
function getFirstChild(obj1){
    return getChilds(obj1)[0];
}
//----------------------------------------获取元素子节点中的最后一个元素节点----------------------------------------
function getLastChild(obj1){
    var arr=getChilds(obj1);
    return arr[arr.length-1];
}
//----------------------------------------获取元素子节点中的下一个元素节点----------------------------------------
function getNext(obj1){
    var next=obj1.nextSibling;
    if(next==null){
        return;   //undefined 说明当前的obj是最后一个元素节点没有具体的返回值，自动赋值为undefined
    }
    while(next.nodeType==3||next.nodeType==8){
        next=next.nextSibling;
        if(next==null){
            return;
        }
    }
    return next;
}
//----------------------------------------获取元素子节点中的上一个元素节点----------------------------------------
function getPre(obj1){
    var pre=obj1.previousSibling;
    if(pre==null){
        return;   //undefined 说明当前的obj是第一个一个元素节点
    }
    while(pre.nodeType!=1){
        pre=pre.previousSibling;
        if(pre==null){
            return;
        }
    }
    return pre;
}
//插入到父元素中的最后一个位置
//parent 父元素
//obj 只被插入的元素
function appendChild(parent,obj){
    parent.appendChild(obj);
}
//插入到父元素中的第一个位置
function appendFirst(parent,obj){
    var first=getFirstChild(parent);
    if(!first){
        parent.appendChild(obj);
    }else{
        parent.insertBefore(obj,first);
    }
}
//插入到父元素中的某个子元素之前
//newobj 被插入的元素，新的元素
//obj 某个子元素
function appenBefore(newobj,obj){
    var parent=obj.parentNode;
    parent.insertBefore(newobj,obj);//insertBefore需要三个元素，父元素，插入的元素，被插入的元素。
}
//插入到父元素中某个子元素之后
//newobj 被插入的元素，新的元素
//obj 某个子元素
function appendAfter(newobj,obj){
    var next=getNext(obj);
    var parent=obj.parentNode;
    if(next==undefined){
        parent.appendChild(newobj);
    }else{
        parent.insertBefore(newobj,next);
    }
}
//-------------------------------------------兼容各种浏览器实现选型卡----------------------------------------------
function Tab(obj1,obj2){
    var Obj1 = jr(obj1);
    var Obj2 = jr(obj2);
    for (var i = 0; i < Obj1.length; i++) {
        Obj1[i].index = i;
        Obj1[i].onmouseover = function () {
            for (var j = 0; j < Obj1.length; j++) {
                Obj2[j].style.zIndex = 0;

            }
            Obj2[this.index].style.zIndex = 1;
        }
    }
}
//------------------------------兼容各种浏览器写入文本（textContent，innerText）-----------------------------------
function getText(obj,val){//val修改标签中的文本内容
    if(typeof obj.innerText=="undefined"){//如果在火狐中弹出undefined  判断在哪个浏览器中
        if(val==undefined){
            return obj.textContent;//形参大于实参 获取文本内容
        }else{
            return obj.textContent=val;//修改文本内容
        }

    }else{
        if(val==undefined){
            return obj.innerText;
        }else{
            return obj.innerText=val;
        }
    }
}
//------------------------------兼容各种浏览器写入文本(textContent，innerText)-----------------------------------
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr];
    }
}