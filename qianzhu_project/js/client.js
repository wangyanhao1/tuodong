/**
 * Created by Administrator on 2016/7/18.
 */
var ul = document.getElementById("container");
//var mask=document.getElementById("mask");
var nowPosition;
var mask;
ul.addEventListener('mouseover', function (e) {
    if(!nowPosition){
       mask=document.createElement("div");
        mask.className="masking";
        ul.appendChild(mask);
    }

    nowPosition=e.target;
    
    var nowContainer=e.target.parentElement.parentElement;
    console.log(e.target.parentElement.parentElement);
    if(nowContainer.className=="box-container"){
        var boxLeft = e.target.parentElement.parentElement.offsetLeft;
        var boxTop = e.target.parentElement.parentElement.offsetTop;
        mask.style.left=boxLeft+"px";
        mask.style.top=boxTop+"px";

    }else{
        // console.log("111")
        mask.remove();
        nowPosition="";
    }
    //ul.appendChild(mask);
});

ul.addEventListener('mouseleave',function(e){
   mask.remove();
   nowPosition="";
});
