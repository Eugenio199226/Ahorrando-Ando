<<<<<<< HEAD
//let formValid = document.getElementById('busqueda').checkValidity();

(function() {
    $.ajax({
        method: "POST",
        url: "http://www.mocky.io/v2/5be04dd93200000f006495b7", //caso true
        //url: "http://www.mocky.io/v2/5bd9777d2f0000790006d14c",//caso false

    }).done(function (data) {
        console.log(data);
        if (data.result) {
            window.location.href = 'dashboard.html';
        } else {
            //mensaje de error
            document.getElementById('mensaje').classList.remove('esconder');
        }
    }).fail(function (error) {
        console.log("Error:", error);
    
    });
})();


let objeto = [{ "ListadodeProductos": "Listado de Productos", "id": "01", "Tipo de Producto": "TELEVISIONES", "Producto": "Samsung UE40MU6405U", "Especificaciones": "Smart TV de 40 (UHD 4K, HDR, 3840 x 2160, Wi-Fi), color plateado [Clase de eficiencia energética A+]", "Precio": "498,98€-1.599€", "Estado": "Nueva" }, { "id": "02", "Tipo de Producto": "Sony KD65XF7004", "Especificaciones": "Sony KD65XF7004Alto rango dinámico 4K 4K X-Reality PR USB HDD Youtube, Netflix y mucho más ClearAudio+", "Precio": "498,98€-1.599€", "Estado": "Nueva" }, { "id": "03", "Tipo de Producto": "LG 65SK7900PLA", "Especificaciones": 'LG TV LED 164 cm (65") LG 65SK7900PLA SuperUHD 4K con NanoCells', "Precio": "1.199€-1.599€", "Estado": "Nueva" }, { "id": "04", "Tipo de Producto": "Televisión Samsung 40 pulgadas", "Estado": "Segunda Mano", "Precio": "160€-500€" }, { "id": "05", "Tipo de Producto": 'Philips 43PUS6503/12, TV LED 109,22 cm (43") Philips 43PUS6503/12, UHD 4K, Smart TV', "Precio": "371,10€-995,93€", "Estado": "Segunda Mano" }, { "id": "06", "Tipo de Producto": "Toshiba 32w3753dg", "Precio": "181,50€-591,33€", "Estado": "Segunda Mano" }, { "id": "05", "Tipo de Producto": 'Nevir NVR-7802-55FHD-2W-N 55" LED Full HD', "Precio": "389€-429€", "Estado": "Segunda Mano" }];
=======
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
>>>>>>> f4ac34a7b1113a2c8ce983a5027f68615ffdeb1a
