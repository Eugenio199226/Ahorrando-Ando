//Se llama al body
document.body.onload= function(){
    document.getElementById("producto").innerHTML=localStorage.getItem("producto");
    document.getElementById("caracteristicas").innerHTML=localStorage.getItem("caracteristicas");
    document.getElementById("imgdetalle").src=localStorage.getItem("imagen");
    //Conexion con ajax json
    $.ajax({
        url:"http://www.mocky.io/v2/5be165953000007e00d9a94b"
    }).done(function (listaProducto)
    {
        addProducto("#contenedorLista",listaProducto)
    }).fail(function(error){
        console.log("Error:",error)
    });
    
}

//Se añade el producto
function addProducto(id,listaProducto)
{
    $(id).html(function()
        {

            let htmlProductos=""
            
          listaProducto.forEach(productos => {
              //carga el html
             htmlProductos +=`
             <li class="row container col-sm-12">
                        
                        <div class="col-sm-12">
                            <span class="precio"> ${productos.precio} </span>
                            <span>${productos.envío}</span>
                            <img class="logoTienda" src="${productos.logo}">
                            <a class="botonCompra" href="${productos.web}"> Comprar </a>
                        </div>

                    </li>
            
            `   
              
          });
           

        $(id).append(htmlProductos);
        });
}
