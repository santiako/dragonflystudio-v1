//categoría: 0 = web design, 1 = id, 2 = motion, 3 = fotografía, 4 = editorial, 5 = todos
var proyecto = [], txtHtml, txtHtmlF, pActual = 0;
//Sharer de redes sociales
var dirActual = encodeURIComponent(window.document.URL);

proyecto[0] = {
    titulo: "Ganan Las Noticias", 
    descripcion: "Diseño de identidad para un proyecto audiovisual de <a href='https://www.instagram.com/l.aproducciones/' target='_blank'>L.A. Producciones</a>, en el cual se diseñaron dos logotipos, uno para la serie y otro para el noticiero, también se diseñaron las hojas membretadas del proyecto.", 
    id: 0,
    cliente: "L.A. Producciones", 
    año: 2019, 
    categoria: 1,
    ruta: "proyectos/ganan-las-noticias",
    imgThmb: "thu.jpg",
    imgs: ["1.jpg", "2.jpg", "3.jpg"],
    imgDesc: ["Logo de la serie 1", "Logo de la serie 2", "Logo del noticiero"]};

proyecto[1] = {
    titulo: ".Braille - webapp", 
    descripcion: "Nuestro objetivo es que los espacios públicos sean más inclusivos, con .Braille podés traducir y generar cartelería para personas no-videntes.<br>Presenta funcionalidades tanto de traducción de párrafos completos como selección de carteles predefinidos y distribuidos en categorías tales como Educación, Salud y Espacios Públicos.<br><a href='http://www.diazcortez.com.ar/vista.php?url=http://www.diazcortez.com.ar/2018/2_cuat/vm05' target='_blank'>Ver online</a>", 
    id: 1,
    cliente: "Fadu", 
    año: 2018, 
    categoria: 0,
    ruta: "proyectos/braille",
    imgThmb: "thu.jpg",
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"],
    imgDesc: ["Pantalla de inicio", "Perfil de usuario", "Selector", "Traductor libre", "Traductor libre", "Traductor por temas"]};

proyecto[2] = {
    titulo: "Pink Floyd - Cosmic Dream",
    descripcion: "Se elaboró un álbum de lujo para la banda de rock progresivo Pink Floyd, incluye: Packaging. Biografía de la banda, entrevistas y discografía. 3 CD's. Póster desplegable. CD booklet.", 
    id: 2,
    cliente: "Fadu", 
    año: 2014, 
    categoria: 1,
    ruta: "proyectos/cosmic-dream",
    imgThmb: "thu.png",
    imgs: ["1.png", "2.png", "3.png", "4.png", "5.png", "6.png", "7.png", "8.png", "9.png", "10.png"],
    imgDesc: ["Caja de frente", "Caja desarmada", "Contenedor desplegado", "Biografía y booklet", "Índice biografía", "Interior biografía", "Interior biografía", "Tapa booklet", "Interior booklet", "Interior booklet"]};

proyecto[3] = {
    titulo: "VISUALNEWS", 
    descripcion: "Se diseñó un diario en el que se publican las principales noticias sobre las <strong>artes contemporáneas.</strong> Se compone de una nota principal, notas secundarias y una fotogalería. También se diseñó una versión mobile.", 
    id: 3,
    cliente: "Fadu", 
    año: 2017, 
    categoria: 4,
    ruta: "proyectos/visualnews",
    imgThmb: "thu.jpg",
    imgs: ["tapa.jpg", "mobile1.jpg", "mobile2.jpg", "mock1.jpg", "mock2.jpg", "mock3.jpg"],
    imgDesc: ["Tapa", "Versión mobile", "Versión mobile", "Tapa e interior", "Interior", "Contratapa e interior"]};

proyecto[4] = {
    titulo: "Relato gráfico", 
    descripcion: "<strong>La música, un estimulador de la creatividad.</strong><br>El proyecto parte de una idea semilla que sirve de inspiración para escribir un relato propio, se elabora un lenguaje gráfico acorde a lo que se quiere comunicar. El sistema consta de una serie de piezas de distintos tamaños con las cuales el usuario puede interactuar disponiendolas como desee, ya sea una encima de la otra o de forma adyacente. Se propone una instancia principal y dos secundarias.", 
    id: 4,
    cliente: "Fadu", 
    año: 2016, 
    categoria: 1,
    ruta: "proyectos/relato-grafico",
    imgThmb: "thu.jpg",
    imgs: ["piezas1.jpg", "piezas2.jpg", "pcpal.jpg", "sec.jpg"],
    imgDesc: ["Piezas", "Piezas", "Instancia principal", "Instancias secundarias"]};

proyecto[5] = {
    titulo: "Flyer Rheem",
    descripcion: "Flyer realizado para un evento de fin de año para la empresa <strong>Rheem.</strong>",
    id: 5,
    cliente: "Rheem",
    año: 2018, 
    categoria: 4,
    ruta: "proyectos/rheem",
    imgThmb: "thu.jpg",
    imgs: ["rheem.jpg"],
    imgDesc: ["Flyer"]};

proyecto[6] = {
    titulo: "Flyer Gentiles y serviciales",
    descripcion: "Flyer diseñado para una fecha de la banda <strong>Gentiles y serviciales</strong> en Warhol Bar.",
    id: 6,
    cliente: "Gentiles y serviciales",
    año: 2017, 
    categoria: 4,
    ruta: "proyectos/gentiles",
    imgThmb: "thu.jpg",
    imgs: ["gentiles.jpg"],
    imgDesc: ["Flyer"]};

proyecto[7] = {
    titulo: "Expolatina", 
    descripcion: "Por motivo de la celebración del día de la <strong>diversidad cultural</strong> se propone realizar un evento en el Hipódromo de Palermo. En dicho lugar se presentarán todo tipo de actividades educativas y recreativas para promover la reflexión y el dialogo sobre los derechos de los <strong>pueblos originarios,</strong> el bienestar cultural y la inclusión social. En el evento habrá charlas interculturales, danzas tradicionales, bandas en vivo, artistas latinoamericanos, etc. También habrá varios puestos de comida con platos típicos de los distintos países y una amplia variedad de cervezas artesanales. Proyecto realizado con: <strong>Paula Vicioso.</strong>", 
    id: 7,
    cliente: "Fadu", 
    año: 2017, 
    categoria: 1,
    ruta: "proyectos/expolatina",
    imgThmb: "thu.jpg",
    imgs: ["poster.jpg", "flyers1.jpg", "despl2.jpg", "desplFD.jpg", "desplF.jpg", "desplD.jpg", "web.jpg", "entradas.jpg"],
    imgDesc: ["Póster", "Flyers", "Desplegable", "Desplegable frente y dorso", "Desplegable", "Desplegable", "Flyers redes sociales", "Entradas"]};

proyecto[8] = {
    titulo: "La Boca - Póster", 
    descripcion: "Se relevó fotográficamente el barrio de La Boca abordando distintos enfoques y generando un corpus de imágenes con las cuales posteriormente se elaboró una pieza que resignifique el lugar desde una mirada propia.", 
    id: 8,
    cliente: "Fadu", 
    año: 2015, 
    categoria: 3,
    ruta: "proyectos/poster-la-boca",
    imgThmb: "thu.jpg",
    imgs: ["poster.jpg"],
    imgDesc: ["Póster"]};

proyecto[9] = {
    titulo: "Desplegable tipográfico", 
    descripcion: "A partir de la palabra <strong>extinción</strong> se realizó un desplegable tipográfico que consta de 4 partes (tapa, contratapa, doble página editorial y aficheta)", 
    id: 9,
    cliente: "Fadu", 
    año: 2014, 
    categoria: 4,
    ruta: "proyectos/desplegable",
    imgThmb: "thu.jpg",
    imgs: ["tapa.jpg", "contra.jpg", "desplegado.jpg", "editorial.jpg"],
    imgDesc: ["Tapa", "Contratapa", "Desplegable", "Doble página editorial"]};

proyecto[10] = {
    titulo: "Gacetilla para Seba Morel",
    descripcion: "Diseño de una gacetilla de prensa para <a href='https://facebook.com/profile.php?id=1134489309' target='_blank'>Seba Morel.</a>",
    id: 10,
    cliente: "Seba Morel",
    año: 2016, 
    categoria: 4,
    ruta: "proyectos/gacetilla-seba",
    imgThmb: "thu.jpg",
    imgs: ["gacetilla.jpg"],
    imgDesc: ["Gacetilla de prensa"]};

proyecto[11] = {
    titulo: "Vinilo Chimichurri Hellmanns",
    descripcion: "Diseño de vinilo de una campaña publicitaria para colocar en shopping.",
    id: 11,
    cliente: "Hellmanns",
    año: 2017, 
    categoria: 1,
    ruta: "proyectos/hellmanns",
    imgThmb: "thu.jpg",
    imgs: ["chimi.png", "escalera.jpg"],
    imgDesc: ["Publicidad", "Vinilo"]};

proyecto[12] = {
    titulo: "Caligrafía",
    descripcion: "Caligrafía realizada con <strong>plumas caseras</strong> hechas de madera balsa, varillas y cañas.",
    id: 12,
    cliente: "Fadu",
    año: 2013, 
    categoria: 4,
    ruta: "proyectos/caligrafia",
    imgThmb: "thu.jpg",
    imgs: ["1.jpg", "2.jpg", "3.jpg"],
    imgDesc: ["Destacado", "Detalle párrafo", "Varias tipologías"]};

proyecto[13] = {
    titulo: "Libro de poemas", 
    descripcion: "Diseño y encuadernado de un libro de poemas de Rubén Darío.", 
    id: 13,
    cliente: "Fadu", 
    año: 2013, 
    categoria: 4,
    ruta: "proyectos/libro-poemas",
    imgThmb: "thu.jpg",
    imgs: ["1.jpg", "2.jpg", "5.jpg", "3.jpg", "4.jpg"],
    imgDesc: ["Tapa", "Contratapa", "Interior", "Poemas", "Destacados"]};

proyecto[14] = {
    titulo: "Infografía Steve Jobs", 
    descripcion: "Infografía sobre la vida de Steve Jobs.", 
    id: 14,
    cliente: "Fadu",
    año: 2013, 
    categoria: 4,
    ruta: "proyectos/info-steve-jobs",
    imgThmb: "thu.jpg",
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    imgDesc: ["Tapa", "Desplegado", "Interior", "Interior", "Interior"]};

proyecto[15] = {
    titulo: "Ciclo Expresionista", 
    descripcion: "Se elaboró un ciclo de cine expresionista basado en el director <strong>Fritz Lang.</strong>", 
    id: 15,
    cliente: "Fadu", 
    año: 2014, 
    categoria: 1,
    ruta: "proyectos/ciclo-expresionista",
    imgThmb: "thu.jpg",
    imgs: ["IMG_4998.jpg", "IMG_4999.jpg", "trip2.jpg", "trip3.jpg", "IMG_4993.jpg", "IMG_4995.jpg", "poster.png"],
    imgDesc: ["Frente", "Interior tríptico", "Interior tríptico", "Tríptico desplegado", "Frente postales", "Dorso postales", "Póster"]};

proyecto[16] = {
    titulo: "La hipótesis de la forma", 
    descripcion: "La integración de las disciplinas científicas en el diseño para la reflexión sobre los problemas, los métodos de análisis, de síntesis y una relación estrecha con la industria.", 
    id: 16,
    cliente: "Fadu", 
    año: 2015, 
    categoria: 4,
    ruta: "proyectos/hipotesis-de-la-forma",
    imgThmb: "thu.jpg",
    imgs: ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg"],
    imgDesc: ["Tapa e interior", "Interior", "Interior", "Interior", "Interior"]};


//Setea el filtro de proyectos
function setFiltro(numFiltro) {
    switch(numFiltro) {
        case 0: //Web
            $("#collaBarrafiltros a").css("text-decoration", "none");
            $("#web a").css("text-decoration", "underline");
        break;
            
        case 1: //Id
            $("#collaBarrafiltros a").css("text-decoration", "none");
            $("#identity a").css("text-decoration", "underline");
        break;
            
        case 2: //Motion
            $("#collaBarrafiltros a").css("text-decoration", "none");
            $("#motion a").css("text-decoration", "underline");
        break;
        
        case 3: //Fotografía
            $("#collaBarrafiltros a").css("text-decoration", "none");
            $("#foto a").css("text-decoration", "underline");
        break;
            
        case 4: //Editorial
            $("#collaBarrafiltros a").css("text-decoration", "none");
            $("#editorial a").css("text-decoration", "underline");
        break;
            
        case 5: //Todos
            $("#collaBarrafiltros a").css("text-decoration", "none");
            $("#todos a").css("text-decoration", "underline");
        break;
    }
    FiltrarProyectos(numFiltro);
}

function FiltrarProyectos(filtro) {
    var filas, contProy = -1, f;
    var proyectoF;
    proyectoF = [];
    txtHtml = '';

    //Filtro: se muestran ciertos proyectos dependiendo el # de categoría.
    if (filtro != 5) {
        proyectoF = proyecto.filter(function (filtrar) {
	       return filtrar.categoria === filtro;
        });
        
        filas = parseInt(proyectoF.length / 3) + 1; //Cant. filas proyectos filtrados
        
        //Por cada fila:
        for (f=0; f<filas; f++) {
            var c = 0;
            txtHtml += '<div class="row">';
            //<div class="row">            
            
            //Por cada fila llenar con 3 columnas, si quedan menos proy, la cant q sea
            while (c<3 && contProy<(proyectoF.length - 1)) { 
                c++;
                contProy++;

                txtHtml += '<div class="col-md-4 sinPadd">';
                //<div class="col-md-4 sinPadd">
                    txtHtml += '<div class="cnThmbProy" id="'+proyectoF[contProy].id+'">';
                    //<div class="cnThmbProy" id="proyX">
                        txtHtml += '<h1>—<br>'+proyectoF[contProy].titulo.toUpperCase()+'<br>'+proyectoF[contProy].año+'<br>—</h1>';
                        //<h1>—<br>titulo<br>año<br>—</h1>
                        txtHtml += '<div class="imgThBackCn">';
                        //<div class="imgThBackCn">
                            txtHtml += '<img src="'+proyectoF[contProy].ruta+'/'+proyectoF[contProy].imgThmb+'">';
                            //<img src="proyectos/Cosmic-dream/3.png">
                        txtHtml += '</div>';
                        //</div>
                    txtHtml += '</div>';
                    //</div>
                txtHtml += '</div>';
                //</div>
            }
            txtHtml += '</div>';
            //</div> row
        }
        
    } else { //Categoría 5 (todos)
        filas = parseInt(proyecto.length / 3) + 1; //Cant. filas cat. 5 (todos)
        
        //Por cada fila:
        for (f=0; f<filas; f++) {
            var c = 0;
            txtHtml += '<div class="row">';
            //<div class="row">            
            
            //Por cada fila llenar con 3 columnas, si quedan menos proy, la cant q sea
            while (c<3 && contProy<(proyecto.length - 1)) { 
                c++;
                contProy++;

                txtHtml += '<div class="col-md-4 sinPadd">';
                //<div class="col-md-4 sinPadd">
                    txtHtml += '<div class="cnThmbProy" id="'+proyecto[contProy].id+'">';
                    //<div class="cnThmbProy" id="proyX">
                        txtHtml += '<h1>—<br>'+proyecto[contProy].titulo.toUpperCase()+'<br>'+proyecto[contProy].año+'<br>—</h1>';
                        //<h1>—<br>titulo<br>año<br>—</h1>
                        txtHtml += '<div class="imgThBackCn">';
                        //<div class="imgThBackCn">
                            txtHtml += '<img src="'+proyecto[contProy].ruta+'/'+proyecto[contProy].imgThmb+'">';
                            //<img src="proyectos/Cosmic-dream/3.png">
                        txtHtml += '</div>';
                        //</div>
                    txtHtml += '</div>';
                    //</div>
                txtHtml += '</div>';
                //</div>
            }
            txtHtml += '</div>';
            //</div> row
        }
    }
    document.getElementById("proyectosCn").innerHTML = txtHtml;
    jProyectos();
}

//Funciones proyectos
function jProyectos() {
    $('.cnThmbProy').hover(function() {
        $(this).children('.cnThmbProy h1').fadeIn(200);
        $(this).css('background', 'rgba(0,0,0,0.5)');
        $(this).css('-webkit-transition', 'background 0.2s');
        $(this).css('transition', 'background 0.2s');
    }, function() {
        $(this).children('.cnThmbProy h1').fadeOut(200);
        $(this).css('background', 'none');
        $(this).css('-webkit-transition', 'background 0.2s');
        $(this).css('transition', 'background 0.2s');
    });
    
    //Click item proyectos
    $('.cnThmbProy').click(function() {
        var ruta;
        //Con el id del proyecto obtengo la ruta
        //A la ruta le saco la primer parte (slice(10)) y navego
        ruta = String(proyecto[$(this).attr('id')].ruta).slice(10);
        window.location.href = "#/proyecto/" + ruta;
    });
}

//Oculta sección #proyectos y muestra #proyecto
function swapVentanas() {
    $('#proyectos').css('display', 'none');
    $('#proyecto').css('display', 'inherit');
    $('body, html').animate({scrollTop: '0px'}, 0);
}

function navProyecto(proyName) {
    var indProy;
    
    //Con el nombre de proyecto se obtiene el id
    //Por cada proyecto buscar con la ult. parte de .ruta y se obtiene el id
    indProy = proyecto.map(function(d) {
        return d['ruta']; }).indexOf('proyectos/' + proyName);
    
    if (indProy == -1) {
        alert("Proyecto: " + proyName + " no encontrado.");
        return;
    }
    
    //console.log("Index " + proyName + ": " + indProy);
    setProyectoId(indProy);
    swapVentanas();
}

function setProyectoId(id) {
    var cat, cantFotos, fFotos, contFot = -1, f;
    txtHtmlF = '';
    
    pActual = parseInt(id);
    // #proyTitle (titulo); #proyCliente (cliente); #proyAnio (año); #proyCat (categoría); #proyFb (boton fb); #proyTw (boton tw); #proyDesc (descripción)
    $('#proyTitle').text(proyecto[id].titulo.toUpperCase());
    $('#proyCliente').html('<strong>Cliente: </strong>'+proyecto[id].cliente);
    $('#proyAnio').html('<strong>Año: </strong>'+proyecto[id].año);

    switch (proyecto[id].categoria) {
        case 0:
            cat = "Web design";
            break;
        case 1:
            cat = "Identity design";
            break;
        case 2:
            cat = "Motion-graphics";
            break;
        case 3:
            cat = "Fotografía";
            break;
        case 4:
            cat = "Editorial";
            break;
    }
    $('#proyCat').html('<strong>Categoría: </strong>'+cat);
    $('#proyDesc').html(proyecto[id].descripcion);
    
    //Establecer fotos..........
    cantFotos = proyecto[id].imgs.length;
    fFotos = parseInt(cantFotos / 3) + 1; //Cant. filas fotos

        //Por cada fila:
        for (f=0; f<fFotos; f++) {
            var c = 0;
            txtHtmlF += '<div class="row">';
            //<div class="row">            
            
            //Por cada fila llenar con 3 fotos, si quedan menos la cantidad q sea
            while (c<3 && contFot<(cantFotos - 1)) { 
                c++;
                contFot++;

                txtHtmlF += '<div class="col-md imgGallery">';
                //<div class="col-md imgGallery">
                    txtHtmlF += '<div class="imgGalCn">';
                    //<div class="imgGalCn">
                        txtHtmlF += '<a href="'+proyecto[id].ruta + '/' + proyecto[id].imgs[contFot]+'" target="_blank"><img src="'+proyecto[id].ruta + '/' + proyecto[id].imgs[contFot]+'"></a>';
                        //<a href="proyectos/Cosmic-dream/1.png" target="_blank"><img src="proyectos/Cosmic-dream/1.png"></a>
                    txtHtmlF += '</div>';
                    //</div>
                    txtHtmlF += '<p>'+proyecto[id].imgDesc[contFot]+'</p>';
                    //<p>Descripción de la foto</p>
                txtHtmlF += '</div>';
                //</div>
            }
            txtHtmlF += '</div>';
            //</div> row
        }
    document.getElementById("imgGalContainer").innerHTML = txtHtmlF;
}