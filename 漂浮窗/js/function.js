/*---------------------------------------------------������ Ŀ¼----------------------------------------------------*/


//---------------------------------���ݻ�ȡԪ�أ�IE7,IF8(��Ҫ���getElementByClassName()����)------------------------------------
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
//----------------------------------------��ȡԪ���ӽڵ���Ԫ�ؽڵ�----------------------------------------
//Childs[i].nodeType!=3    �ų��ı��ڵ�
//Childs[i].nodeType!=8    �ų�ע�ͽڵ�
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
//----------------------------------------��ȡԪ���ӽڵ��еĵ�һ��Ԫ�ؽڵ�----------------------------------------
function getFirstChild(obj1){
    return getChilds(obj1)[0];
}
//----------------------------------------��ȡԪ���ӽڵ��е����һ��Ԫ�ؽڵ�----------------------------------------
function getLastChild(obj1){
    var arr=getChilds(obj1);
    return arr[arr.length-1];
}
//----------------------------------------��ȡԪ���ӽڵ��е���һ��Ԫ�ؽڵ�----------------------------------------
function getNext(obj1){
    var next=obj1.nextSibling;
    if(next==null){
        return;   //undefined ˵����ǰ��obj�����һ��Ԫ�ؽڵ�û�о���ķ���ֵ���Զ���ֵΪundefined
    }
    while(next.nodeType==3||next.nodeType==8){
        next=next.nextSibling;
        if(next==null){
            return;
        }
    }
    return next;
}
//----------------------------------------��ȡԪ���ӽڵ��е���һ��Ԫ�ؽڵ�----------------------------------------
function getPre(obj1){
    var pre=obj1.previousSibling;
    if(pre==null){
        return;   //undefined ˵����ǰ��obj�ǵ�һ��һ��Ԫ�ؽڵ�
    }
    while(pre.nodeType!=1){
        pre=pre.previousSibling;
        if(pre==null){
            return;
        }
    }
    return pre;
}
//���뵽��Ԫ���е����һ��λ��
//parent ��Ԫ��
//obj ֻ�������Ԫ��
function appendChild(parent,obj){
    parent.appendChild(obj);
}
//���뵽��Ԫ���еĵ�һ��λ��
function appendFirst(parent,obj){
    var first=getFirstChild(parent);
    if(!first){
        parent.appendChild(obj);
    }else{
        parent.insertBefore(obj,first);
    }
}
//���뵽��Ԫ���е�ĳ����Ԫ��֮ǰ
//newobj �������Ԫ�أ��µ�Ԫ��
//obj ĳ����Ԫ��
function appenBefore(newobj,obj){
    var parent=obj.parentNode;
    parent.insertBefore(newobj,obj);//insertBefore��Ҫ����Ԫ�أ���Ԫ�أ������Ԫ�أ��������Ԫ�ء�
}
//���뵽��Ԫ����ĳ����Ԫ��֮��
//newobj �������Ԫ�أ��µ�Ԫ��
//obj ĳ����Ԫ��
function appendAfter(newobj,obj){
    var next=getNext(obj);
    var parent=obj.parentNode;
    if(next==undefined){
        parent.appendChild(newobj);
    }else{
        parent.insertBefore(newobj,next);
    }
}
//-------------------------------------------���ݸ��������ʵ��ѡ�Ϳ�----------------------------------------------
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
//------------------------------���ݸ��������д���ı���textContent��innerText��-----------------------------------
function getText(obj,val){//val�޸ı�ǩ�е��ı�����
    if(typeof obj.innerText=="undefined"){//����ڻ���е���undefined  �ж����ĸ��������
        if(val==undefined){
            return obj.textContent;//�βδ���ʵ�� ��ȡ�ı�����
        }else{
            return obj.textContent=val;//�޸��ı�����
        }

    }else{
        if(val==undefined){
            return obj.innerText;
        }else{
            return obj.innerText=val;
        }
    }
}
//------------------------------���ݸ��������д���ı�(textContent��innerText)-----------------------------------
function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr];
    }else{
        return getComputedStyle(obj)[attr];
    }
}