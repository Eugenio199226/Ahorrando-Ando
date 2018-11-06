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
                window.location.href = 'listadeproductos.html';
            }
        });

    } else {
        //mostrar mensaje y no enviar

        if (!document.getElementById('barra').checkValidity()) {
            document.getElementById('errorbarra').classList.remove('esconder');
        }
    }
});


document.getElementById('barra').onkeyup = (function (complementar) {
    $.ajax({
        url: "http://www.mocky.io/v2/5be1a65b3000006000d9ab0d",
    }).done(function (basededatos) {
        autocomplete(document.getElementById("barra"), basededatos);
        
    });

});




function autocomplete(inp, arr) {

    var currentFocus;

    inp.addEventListener("input", function (e) {
        var a, b, i, val = this.value;

        closeAllLists();
        if (!val) { return false; }
        currentFocus = -1;

        a = document.createElement("DIV");
        a.setAttribute("id", this.id + "autocomplete-list");
        a.setAttribute("class", "autocomplete-items");

        this.parentNode.appendChild(a);

        for (i = 0; i < arr.length; i++) {
            let texto = arr[i].producto;

            if (texto.substr(0, val.length).toUpperCase() == val.toUpperCase()) {

                b = document.createElement("DIV");

                b.innerHTML = "<strong>" + texto.substr(0, val.length) + "</strong>";
                b.innerHTML += texto.substr(val.length);

                b.innerHTML += "<input type='hidden' value='" + texto + "'>";

                b.addEventListener("click", function (e) {

                    inp.value = this.getElementsByTagName("input")[0].value;

                    closeAllLists();
                });
                a.appendChild(b);
            }
        }
    });

    inp.addEventListener("keydown", function (e) {
        var x = document.getElementById(this.id + "autocomplete-list");
        if (x) x = x.getElementsByTagName("div");
        if (e.keyCode == 40) {
            currentFocus++;
            addActive(x);
        } else if (e.keyCode == 38) {
            currentFocus--;
            addActive(x);
        } else if (e.keyCode == 13) {
            e.preventDefault();
            if (currentFocus > -1) {
                if (x) x[currentFocus].click();
            }
        }
    });
    function addActive(x) {
        if (!x) return false;
        if (currentFocus >= x.length) currentFocus = 0;
        if (currentFocus < 0) currentFocus = (x.length - 1);
        x[currentFocus].classList.add("autocomplete-active");
    }
    function removeActive(x) {
        for (var i = 0; i < x.length; i++) {
            x[i].classList.remove("autocomplete-active");
        }
    }
    function closeAllLists(elmnt) {

        var x = document.getElementsByClassName("autocomplete-items");
        for (var i = 0; i < x.length; i++) {
            if (elmnt != x[i] && elmnt != inp) {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}



