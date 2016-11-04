/**
 * Created by Administrator on 2016/7/5 0005.
 */
$(document).ready(function () {
    var screemTop = document.body.clientHeight;

    var nowPosition = 0;
    $("#nav").delegate('a', 'click', function (e) {
        var selectPosition = e.target.getAttribute("id").slice(-1)-1;
        $("#block").animate({
            marginTop: ((-selectPosition) * screemTop) + "px"
        }, function () {
            nowPosition = selectPosition;
        });
    });

    document.addEventListener('mousewheel', scroll);
    function scroll(e) {
        console.log(nowPosition);
        // console.log($("#block").is(":animated"));
        if(!$("#block").is(":animated")) {
            if (e.wheelDelta < 0) {

                if (nowPosition != 7) {
                    nowPosition++;
                    $("#block").stop();
                    $("#block").animate({
                        marginTop: (-nowPosition * screemTop) + "px"
                    },"slow","easeOutQuart",function () {
                        console.log("玩成向下")
                    });
                    console.log("向下");
                }

            } else {

                if (nowPosition != 0) {
                    nowPosition--;
                        $("#block").stop();
                    $("#block").animate({
                        marginTop: ((-nowPosition ) * screemTop) + "px"
                    },"slow","easeOutQuart",function () {
                        console.log("玩成向shang")
                    });
                    console.log("向上");

                }

            }
        }
    }




});