$(document).ready(function(){
    /* 스크롤 영역 */
    let homeTop = $('#home').offset().top;
    let aboutTop = $('#aboutMe').offset().top;
    let skillTop = $('#skills').offset().top;
    let portFolioTop = $('#portFolio').offset().top;
    let contactTop = $('#contact').offset().top;

    $(window).scroll(function(){
        if(homeTop <= $(window).scrollTop() && aboutTop > $(window).scrollTop()){
            $('.title').html("HOME")
        }
        else if(aboutTop <= $(window).scrollTop() && skillTop > $(window).scrollTop()){
            $('.title').html("ABOUT ME")
        }
        else if(skillTop <= $(window).scrollTop() && portFolioTop > $(window).scrollTop()){
            $('.title').html("SKILLS")
        }
        else if(portFolioTop <= $(window).scrollTop() && contactTop > $(window).scrollTop()){
            $('.title').html("PORTFOLIO")
        }
        else if(contactTop <= $(window).scrollTop()){
            $('.title').html("CONTACT")
        }

        if(skillTop - 150 <= $(window).scrollTop()){
            $('.s_bar').css({
                transform : 'scaleY(100%)'
            })
        }
    })

    /* 홈화면 js */
    $('.h_top').animate({
        right: '100px'
    }, 500)
    $('.h_bot').animate({
        left: '100px'
    }, 500)
    $('.h_top_before').delay(1000).animate({
        width: '65vw'
    }, 500)
    $('.h_bot_after').delay(1000).animate({
        width: '65vw'
    }, 500)


    $(document).on('click', '#PF_button1', function(){
        window.location="https://yonyoni97.github.io/portfolio_3ce/";
    })
    $(document).on('click', '#PF_button2', function(){
        window.location="https://github.com/yonyoni97/portfolio_healingcamp";
    })
})