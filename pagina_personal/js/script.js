$(document).ready(function () {
    $("#registro").submit(function (event) {
        alert("El usuario se ha registrado correctamente");
        event.preventDefault();
        $(this).remove();
        $(".correct").removeProp("hidden");
    });
    $("#hora").text(new Date());
});

