$(document).ready(function(){
    $(".jqew").click(function(){
        $(this).animate({
            opacity: 0.25,
            left: "+=50",
        }, 2000, function(){
        });
    });
    $(".invertido").click(function(){
        $(this).css({
            "color": "#0CCAEF",
            "background-color": "gray"
        });
    });
    $("#enviarCorreo").click(function(){
        alert("El correo fue enviado correctamente")
    });
});
