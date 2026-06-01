function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInDown");
    },1000);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutUp");
        $("#about_container").css("display","none");
    },1000);
}
function showwork(){
    $("#work_container").css("display","inherit");
    $("#work_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideInDown");
    },1000);
}
function closework(){
    $("#work_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#work_container").removeClass("animated slideOutUp");
        $("#work_container").css("display","none");
    },1000);
}
function showmentorship(){
    $("#mentorship_container").css("display","inherit");
    $("#mentorship_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#mentorship_container").removeClass("animated slideInDown");
    },1000);
}
function closementorship(){
    $("#mentorship_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#mentorship_container").removeClass("animated slideOutUp");
        $("#mentorship_container").css("display","none");
    },1000);
}
function showoutreach(){
    $("#outreach_container").css("display","inherit");
    $("#outreach_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#outreach_container").removeClass("animated slideInDown");
    },1000);
}
function closeoutreach(){
    $("#outreach_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#outreach_container").removeClass("animated slideOutUp");
        $("#outreach_container").css("display","none");
    },1000);
}
setTimeout(function(){
    $("#loading").addClass("animated fadeOut");
    setTimeout(function(){
      $("#loading").removeClass("animated fadeOut");
      $("#loading").css("display","none");
      $("#box").css("display","none");
      $("#about").removeClass("animated fadeIn");
      $("#mentorship").removeClass("animated fadeIn");
      $("#outreach").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
