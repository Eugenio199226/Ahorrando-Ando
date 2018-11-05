document.querySelectorAll('.error').forEach(elem=>
    {
        elem.classList.add('esconder');
    });


    document.getElementById('loginButton').onclick = (function(Value)
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
            data:{username:document.getElementById('email').value
            ,password:document.getElementById('password').value}
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

        if(!document.getElementById('email').checkValidity())
        {
            //username
            document.getElementById("emailError").classList.remove('esconder'); 

        }else
        {
            document.getElementById("emailError").classList.add('esconder'); 
        }
        if(!document.getElementById('password').checkValidity())
        {
            //password
            document.getElementById("passError").classList.remove('esconder'); 
        }else
        {
            document.getElementById("passError").classList.add('esconder'); 
        }
    }

    });