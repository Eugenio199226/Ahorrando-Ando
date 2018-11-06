//Se llama al body
document.body.onload= function(){
    //Conexion con ajax json
    $.ajax({
        url:"http://www.mocky.io/v2/5be1a65b3000006000d9ab0d"
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
            <li class="list-group-item">
                
                <div class="container">

                    <div class="col-sm-5"><img class="img-thumbnail" src="${productos.imagen}" width="200" height="120" alt=""></div>
                        
                    <div class="col-sm-5">
                        <div><h3><a href="./ProductoDetallado.html" class="" >${productos.producto}</a></h3></div>
                            
                        <p class="listado">${productos.especificaciones} class="" >${productos.corazon}</p>

                        
                        <h4>${productos.precio}</h4>
                    </div>
                               
                </div>
                
            </li>
            `   
              
          });
           

        $(id).append(htmlProductos);
        });
}
var corazon = document.getElementById("btncorazon");

corazon.onclick = function () {
    document.getElementById("corazon").classList.add('rosa');
}