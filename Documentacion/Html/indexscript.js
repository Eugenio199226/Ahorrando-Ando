document.getElementById('buscar').onclick = (function (buscar) {
    buscar.preventDefault();

    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    });
   
    let formValid = document.getElementById('busqueda').checkValidity();

    if (formValid) {
        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",//caso true
            data: {
                username: document.getElementById('barra').value,
            }
        }).done(function (data) {
            console.log(data);
            if (data.result) {
                window.location.href = 'dashboard.html';
            }
        });

    } else {
        //mostrar mensaje y no enviar

        if (!document.getElementById('barra').checkValidity()) {
            document.getElementById('errorbarra').classList.remove('esconder');
        }
    }
});