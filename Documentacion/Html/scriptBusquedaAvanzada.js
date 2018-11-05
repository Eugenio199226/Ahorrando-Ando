$( function() {
    $( "#slider-range" ).slider({
        range: true,
        min: 1,
        max: 5000,
        values: [ 50, 200 ],
        slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );

    document.querySelectorAll('.error').forEach(elem=>
        {
            elem.classList.add('esconder');
        });

    document.getElementById('buscarAvanzado').onclick = (function(Value)
    {

        Value.preventDefault();
    let formValid=document.getElementById('loginForm').checkValidity();
    if(formValid)
    {
        //Enviar
        $.ajax({
            method:"POST",
            //url:"http://www.mocky.io/v2/5bd973302f00000e0006d125",
            url:"http://www.mocky.io/v2/5bd973302f00000e0006d125",
            data:{username:document.getElementById('palabraclave').value}
        }).done(function(msg)
        {
            console.log(msg);
            if(msg.result)
            {
                window.location.href="index.html"
            }else
            {
                document.getElementById("errorglobal").classList.remove('esconder'); 
            }
        })
    }else
    {
        //No Enviar

        if(!document.getElementById('palabraclave').checkValidity())
        {
            //username
            document.getElementById("errorPalabra").classList.remove('esconder'); 

        }else
        {
            document.getElementById("errorPalabra").classList.add('esconder'); 
        }
    }

    });

    