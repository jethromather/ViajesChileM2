const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

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
            "background-color": "#00707E"
        });
    });
    $("#enviarCorreo").click(function(){
        alert("El mensaje fue enviado correctamente")
    });
});
