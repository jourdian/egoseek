function pagina2() {

    var inputNombre = document.getElementById('nombre').value;
    window.sessionStorage.setItem("nombre", inputNombre);

    var inputEmail = document.getElementById("email").value;
    window.sessionStorage.setItem("email", inputEmail);

    var inputTelefono = document.getElementById("telefono").value;
    window.sessionStorage.setItem("telefono", inputTelefono);


    window.location.href = "page2.html";
    return false;
}


function pagina3() {
    window.location.href = "page3.html";
    return false;
}


function pagina4() {
    window.location.href = "page4.html";
    return false;
}

function alerta() {
    alert("hola");
}


// =================================================





