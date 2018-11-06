//Se llama al body
document.body.onload= function(){
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

let objeto=[
    {
        id:1,
        idlistado:1,
        tienda:"Amazon",
        precio:"1.028,49€",
        web:"https://amzn.to/2D0pycu",
        logo:"img/amazon.png",
        envío: "Gastos de envío Incluidos"
    },
    {
        id:2,
        idlistado:1,
        tienda:"Ebay",
        precio:"1.000,49€",
        web:"https://amzn.to/2D0pycu",
        logo:"img/ebay.png",
        envío: "+5,99 Euros Envío"
    },
    {
        id:3,
        idlistado:1,
        tienda:"Corte Ingles",
        precio:"1.048,49€",
        web:"https://amzn.to/2D0pycu",
        logo:"img/Corte_Ingles.png",
        envío: "Gastos de envío Incluidos"
    }]