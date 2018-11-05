let formValid = document.getElementById('busqueda').checkValidity();

    if (formValid) {
        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5be0315632000071006494d9",//caso true
            //url: "http://www.mocky.io/v2/5bd9777d2f0000790006d14c",//caso false
            data: {
                username: document.getElementById('username').value,
                password: document.getElementById('password').value
            }
        }).done(function (data) {
            console.log(data);
            if (data.result) {
                window.location.href = 'dashboard.html';
            } else {
                //mensaje de error
                document.getElementById('mensaje').classList.remove('esconder');
            }
        });
    }