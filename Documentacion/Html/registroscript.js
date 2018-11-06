
document.getElementById('registrarseBtn').onclick = (function (registrarse) {
    registrarse.preventDefault();

    document.querySelectorAll('.error').forEach(elem => {
        elem.classList.add('esconder');
    });
   
    let formValid = document.getElementById('registro').checkValidity();

    if (formValid) {
        //ENVIAR
        $.ajax({
            method: "POST",
            url: "http://www.mocky.io/v2/5bd9731d2f00005e0006d11d",//caso true
            data: {
                username: document.getElementById('usuario').value,
                password: document.getElementById('password').value,
                email: document.getElementById('email').value,
                sexo: getRadiovalue('optsex'),
                edad: document.getElementById('edad').value,

            }
        }).done(function (data) {
            console.log(data);
            if (data.result) {
                window.location.href = './perfilusuario.html';
            } else {
                //mensaje de error
                document.getElementById('mensaje').classList.remove('esconder');
            }
        }).fail(function(error){
            console.log("Error:",error);
        });

    } else {
        //mostrar mensaje y no enviar

        if (!document.getElementById('usuario').checkValidity()) {
            document.getElementById('errorusername').classList.remove('esconder');
        }

        if (!document.getElementById('password').checkValidity()) {
            document.getElementById('errorpass').classList.remove('esconder');
        }


        if (!document.getElementById('email').checkValidity()) {
            document.getElementById('erroremail').classList.remove('esconder');
        }


        if (!getRadiovalue('optsex')) {
            document.getElementById('errorsexo').classList.remove('esconder');
        }

        if (!document.getElementById('edad').checkValidity()) {
            document.getElementById('erroredad').classList.remove('esconder');
        }
    }
});

let getRadiovalue=function(radioname){
    let radiosvalue='';
    document.querySelectorAll('input[name='+radioname+']').forEach(elem =>{
        if(elem.checked) radiosvalue=elem.value;
    });
    console.log(radiosvalue);
    return radiosvalue;
}
