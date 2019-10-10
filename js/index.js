$(function () {
    var current = document.documentElement.clientWidth;
    function browserRedirect() {
        if ((navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i))) {
            /*window.location.href="你的手机版地址";*/
            return false;
        }
        else {
            /*window.location.href="你的电脑版地址";    */
            return true
        }
    }
    if(/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)) {
        console.log('移动端')
        $('#youmuModal1 .youmu-modal_box1').addClass('youmu-modal_box2');
        $('#youmuModal1 .youmu-modal_close').addClass('youmu-modal_close2')
    } else {
        console.log('PC端')
    }
    console.log(current)
    if(browserRedirect() && current>=1000){
        document.getElementById('youmuBox').style.zoom =current/1920;
        document.getElementById('youmuBox').style.transform = `scale(${current/1920},${current/1920});`
        console.log(current/1920)
    }
    $('#goToTop').click(function(){
        console.log('123')
        $('html , body').animate({scrollTop: 0},'slow');
     });
    $('.dowloadPC').click(function () {
        AnalysysAgent.track("pcdownload_web");
        window.location.href = 'https://youmu.youmugame.com/youmuDowloadFile/游募PC端（新版）.zip'
    })
    $('.youmu-modal_pc').click(function () {
        window.location.href = 'https://youmu.youmugame.com/youmuDowloadFile/游募PC端（老版）.zip'
    })
    $('#closemodal').click(function () {
        $('#youmuModal').hide(100);
    })
    $('#openmodal').click(function () {
        console.log('12')
        $('#youmuModal').show(100);
    })
    $('#closemodal1').click(function () {
        AnalysysAgent.track("closehd_web");
        $('#youmuModal1').hide(100);
    })
    // $('#youmuModal1').show(100);
    window.onresize = function () {
        current = document.documentElement.clientWidth;
        if(browserRedirect() && current>=1000){
            document.getElementById('youmuBox').style.zoom =current/1920;
            document.getElementById('youmuBox').style.transform = `scale(${current/1920},${current/1920});`
            console.log(current/1920)
        }
    }
    AnalysysAgent.pageView('新版官网首页');
    $("#marquee").marquee({
        yScroll: "bottom",
        showSpeed: 850,        // 初始下拉速度         ,
        scrollSpeed: 12,       // 滚动速度         ,
        pauseSpeed: 500,      // 滚动完到下一条的间隔时间         ,
        pauseOnHover: true,    // 鼠标滑向文字时是否停止滚动         ,
        loop: -1 ,             // 设置循环滚动次数 （-1为无限循环）         ,
        fxEasingShow: "swing" , // 缓冲效果         ,
        fxEasingScroll: "linear",  // 缓冲效果         ,
        cssShowing: "marquee-showing"  //定义class

      });
})
