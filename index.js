function showabout(){
    $("#about_container").css("display","inherit");
    $("#about_container").addClass("animated slideInLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideInLeft");
    },1000);
}
function closeabout(){
    $("#about_container").addClass("animated slideOutLeft");
    setTimeout(function(){
        $("#about_container").removeClass("animated slideOutLeft");
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
function showcontact(){
    $("#contact_container").css("display","inherit");
    $("#contact_container").addClass("animated slideInDown");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideInDown");
    },1000);
}
function closecontact(){
    $("#contact_container").addClass("animated slideOutUp");
    setTimeout(function(){
        $("#contact_container").removeClass("animated slideOutUp");
        $("#contact_container").css("display","none");
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
      $("#contact").removeClass("animated fadeIn");
      $("#outreach").removeClass("animated fadeIn");
      $("#work").removeClass("animated fadeIn");
    },1000);
},1500);
