/*$('#cargar').click(function()
{
    $.ajax({
        url:"http://www.mocky.io/v2/5bd84be6310000a628474d60"
    }).done(function (notas)
    {
        generarhtml('#listaNotas',notas,'botonCargar1')
        mensaje('#listaNotas');      
    });
});*/
var htmlProductos="";
function addProducto(id,listaProducto)
{
    $(id).html(function()
        {

        
          for(let i=0;i<listaProducto.length;i++){
            htmlProductos +=`
            <li class="list-group-item">
                
                <div class="container">

                    <div class="col-sm-5"><img class="img-thumbnail" src="${listaProducto[i].imagen}" width="200" height="120" alt=""></div>
                        
                    <div class="col-sm-5">
                        <div><h3><a href="./ProductoDetallado.html" class="" >${listaProducto[i].elemento}"</a></h3></div>
                            
                        <p class="listado">${listaProducto[i].detalle}"</p>
                        
                        <h4>${listaProducto[i].precio}"</h4>
                    </div>
                               
                </div>
                
            </li>
            `   
          }

        $(id).append(htmlProductos);
        });
}
function cargar(){
    
        $.ajax({
            url:"http://www.mocky.io/v2/5be038cb3200007700649529"
        }).done(function (listaProducto)
        {
            addProducto("#contenedorLista",listaProducto)
        });
        
    }