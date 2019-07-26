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
    window.onresize = function () {
        current = document.documentElement.clientWidth;
        if(browserRedirect() && current>=1000){
            document.getElementById('youmuBox').style.zoom =current/1920;
            document.getElementById('youmuBox').style.transform = `scale(${current/1920},${current/1920});`
            console.log(current/1920)
        }
    }
    AnalysysAgent.pageView('新版官网首页');
})
