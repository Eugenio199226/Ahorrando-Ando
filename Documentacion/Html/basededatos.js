//Se llama al body
document.body.onload= function(){
    //Conexion con ajax json
    $.ajax({
        url:"http://www.mocky.io/v2/5be073e23200008300649672"
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

                    <div class="col-sm-5"><img class="img-thumbnail" src="./img/nevirpccomponentes.jpg" width="200" height="120" alt=""></div>
                        
                    <div class="col-sm-5">
                        <div><h3><a href="./ProductoDetallado.html" class="" >${productos.Producto}</a></h3></div>
                            
                        <p class="listado">${productos.Especificaciones}</p>
                        
                        <h4>${productos.Precio}</h4>
                    </div>
                               
                </div>
                
            </li>
            `   
              
          });
           

        $(id).append(htmlProductos);
        });
}
