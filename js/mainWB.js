
$(document).ready(function(e) {
	
    var productos = document.getElementById("sec_productos");
    productos.style.display = "block";
	
    var servicios = document.getElementById("sec_servicios");
    servicios.style.display = "none";
	
    var promociones = document.getElementById("sec_promociones");
    promociones.style.display = "none";
	
    var notificaciones = document.getElementById("sec_notificaciones");
    notificaciones.style.display = "none";
	
    var pedidos = document.getElementById("sec_pedidos");
    pedidos.style.display = "none";
	
    var sucursales = document.getElementById("sec_sucursales");
    sucursales.style.display = "none";
	
    var sociales = document.getElementById("sec_sociales");
    sociales.style.display = "none";
});

$( "#mobile-menu-button" ).click(function() {
  $( "#mobile-main-menu" ).slideToggle( "slow" );
});

$("#productos").click(function() {
  $("#sec_productos").css("opacity", 0);
  $("#sec_productos").animate({
	opacity: 1,
  }, 1000 );
});
$("#servicios").click(function() {
  $("#sec_servicios").css("opacity", 0);
  $("#sec_servicios").animate({
	opacity: 1,
  }, 1000 );
});
$("#promociones").click(function() {
  $("#sec_promociones").css("opacity", 0);
  $("#sec_promociones").animate({
	opacity: 1,
  }, 1000 );
});
$("#notificaciones").click(function() {
  $("#sec_notificaciones").css("opacity", 0);
  $("#sec_notificaciones").animate({
	opacity: 1,
  }, 1000 );
});
$("#pedidos").click(function() {
  $("#sec_pedidos").css("opacity", 0);
  $("#sec_pedidos").animate({
	opacity: 1,
  }, 1000 );
});
$("#sucursales").click(function() {
  $("#sec_sucursales").css("opacity", 0);
  $("#sec_sucursales").animate({
	opacity: 1,
  }, 1000 );
});
$("#redes").click(function() {
  $("#sec_sociales").css("opacity", 0);
  $("#sec_sociales").animate({
	opacity: 1,
  }, 1000 );
});


function cambio(ref){
    ocultar();
    var elemento = document.getElementById(ref);
    elemento.style.display = "block";
}
  
function ocultar(){
    var productos = document.getElementById("sec_productos");
    productos.style.display = "none";
	
    var servicios = document.getElementById("sec_servicios");
    servicios.style.display = "none";
	
    var promociones = document.getElementById("sec_promociones");
    promociones.style.display = "none";
	
    var notificaciones = document.getElementById("sec_notificaciones");
    notificaciones.style.display = "none";
	
    var pedidos = document.getElementById("sec_pedidos");
    pedidos.style.display = "none";
	
    var sucursales = document.getElementById("sec_sucursales");
    sucursales.style.display = "none";
	
    var sociales = document.getElementById("sec_sociales");
    sociales.style.display = "none";
}



(function($) {
	
  /**
   * Copyright 2012, Digital Fusion
   * Licensed under the MIT license.
   * http://teamdf.com/jquery-plugins/license/
   *
   * @author Sam Sehnert
   * @desc A small plugin that checks whether elements are within
   *     the user visible viewport of a web browser.
   *     only accounts for vertical position, not horizontal.
   */

  $.fn.visible = function(partial) {
    
      var $t            = $(this),
          $w            = $(window),
          viewTop       = $w.scrollTop(),
          viewBottom    = viewTop + $w.height(),
          _top          = $t.offset().top,
          _bottom       = _top + $t.height(),
          compareTop    = partial === true ? _bottom : _top,
          compareBottom = partial === true ? _top : _bottom;
    
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

  };
    /*transform: translateY(0); 
    transform: translateX(0) translateY(0);
    opacity: 1;*/
})(jQuery);

var win = $(window);
var allMods = $(".module");

allMods.each(function(i, el) {
  var el = $(el);
  if (el.visible(true)) {
      el.addClass("come-in");
	   
  } 
});

win.scroll(function(event) {
  
  allMods.each(function(i, el) {
    var el = $(el);
    if (el.visible(true)) {
      el.addClass("come-in"); 
    } 
  });
  
});



	
function play(ocultar, mostrar){
	var back = document.getElementById(ocultar);
	back.style.display = "none";
	var video = document.getElementById(mostrar);
	video.style.display = "block";
	myVideo.loop = true;
	myVideo.load();
	myVideo.play();
    }
	
function cerrar(mostrar, ocultar){
	var back = document.getElementById(mostrar);
	back.style.display = "block";
	var video = document.getElementById(ocultar);
	video.style.display = "none";
	myVideo.pause();
	myVideo.currentTime=0;
    }
	



var map;
/*var image = 'img/icon_wb.png';*/

function initialize() {
    var myLatlng = new google.maps.LatLng(19.4273594,-99.1600015);

  var mapOptions = {
    zoom: 14,
    center: new google.maps.LatLng(19.4273594,-99.1600015)
  };
  map = new google.maps.Map(document.getElementById('mapa'),
      mapOptions);
    
  var marker = new google.maps.Marker({
      position: myLatlng,
      map: map,
      title: 'WalkBiz'
	  /*,icon: image*/
  });

}

google.maps.event.addDomListener(window, 'load', initialize);

(function() {
    var cx = '000211005354630374964:1gf1sveoily';
    var gcse = document.createElement('script');
    gcse.type = 'text/javascript';
    gcse.async = true;
    gcse.src = (document.location.protocol == 'https:' ? 'https:' : 'http:') +
        '//cse.google.com/cse.js?cx=' + cx;
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(gcse, s);
  })();
 

