//Se llama al body
document.body.onload= function(){
    //Conexion con ajax json
    $.ajax({
        url:"http://www.mocky.io/v2/5be1a65b3000006000d9ab0d"
    }).done(function (listaProducto)
    {
        addProducto("#contenedorLista",listaProducto)
        productoDetalle("#contenedorLista")
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
                
                <div class="container productos">

                    <div class="col-sm-5"><img class="img-thumbnail" src="${productos.imagen}" width="200" height="120" alt=""></div>
                        
                    <div class="col-sm-5">
                        <div><h3><a href="./ProductoDetallado.html" class="vinculoDetalle" data-img="${productos.imagen}" data-prod="${productos.producto}" data-espec="${productos.especificaciones}" >${productos.producto}</a></h3></div>
                            
                        <p class="listado">${productos.especificaciones}</p>
                        
                        <h4>${productos.precio}</h4>
                        <div>
                            <p>
                            <button type="button" class="corazon">
                              <span id="corazon"class="glyphicon glyphicon-heart">  </span>  
                            </button>
                          </p>
                        </div>
                    </div>
                               
                </div>
                
            </li>
            `   
              
          });
           

        $(id).append(htmlProductos);
        });
}
function productoDetalle(id)
{
    $(id+" .vinculoDetalle").click(function()
    {
        localStorage.setItem("imagen",$(this).attr('data-img'));
        localStorage.setItem("producto",$(this).attr('data-prod'));
        localStorage.setItem("caracteristicas",$(this).attr('data-espec'));

    });
}

/*var corazon = document.getElementById("btncorazon");

corazon.onclick = function () {
    document.getElementById("corazon").classList.add('rosa');
}*/
