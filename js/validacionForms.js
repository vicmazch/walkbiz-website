	
	$("#tel").inputmask("mask", {"mask": "(999) 999-9999"});
	

function validacion(){
	
	var user = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var tel = document.getElementById("tel").value;
	var valor = true;
	
	if (user == ""){
		$("#changename").removeClass("has-success has-feedback");
		$("#changename").addClass("has-error has-feedback");
		
		$("#successIconName").removeClass("visible");
		$("#successIconName").addClass("hidden");
		
		$("#errorIconName").removeClass("hidden");
		$("#errorIconName").addClass("visible");
		$("#changename").css("box-shadow", "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483");
		valor = false;
		}else{
			$("#changename").removeClass("has-error has-feedback");
			$("#changename").addClass("has-success has-feedback");
			
			$("#errorIconName").removeClass("visible");
			$("#errorIconName").addClass("hidden");
			
			$("#successIconName").removeClass("hidden");
			$("#successIconName").addClass("visible");
			$("#changename").css("box-shadow", "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #04EA0A");
			}
			
	if (!(/^[a-z][\w.-]+@\w[\w.-]+\.[\w.-]*[a-z][a-z]$/i.test(email))){
		$("#changemail").removeClass("has-success has-feedback");
		$("#changemail").addClass("has-error has-feedback");
		
		$("#successIconEmail").removeClass("visible");
		$("#successIconEmail").addClass("hidden");
		
		$("#errorIconEmail").removeClass("hidden");
		$("#errorIconEmail").addClass("visible");
		$("#changemail").css("box-shadow", "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483");
		valor = false;
		}else{
			$("#changemail").removeClass("has-error has-feedback");
			$("#changemail").addClass("has-success has-feedback");
			
			$("#errorIconEmail").removeClass("visible");
			$("#errorIconEmail").addClass("hidden");
			
			$("#successIconEmail").removeClass("hidden");
			$("#successIconEmail").addClass("visible");
			$("#changemail").css("box-shadow", "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #04EA0A");
			}
	if( tel == "" ||!(/^\(\d{3}\)\s\d{3}-\d{4}$/.test(tel)) ) {
		$("#changetel").removeClass("has-success has-feedback");
		$("#changetel").addClass("has-error has-feedback");
		
		$("#successIconTel").removeClass("visible");
		$("#successIconTel").addClass("hidden");
		
		$("#errorIconTel").removeClass("hidden");
		$("#errorIconTel").addClass("visible");
		$("#changetel").css("box-shadow", "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483");
		valor = false;
		}else{
			$("#changetel").removeClass("has-error has-feedback");
			$("#changetel").addClass("has-success has-feedback");
			
			$("#errorIconTel").removeClass("visible");
			$("#errorIconTel").addClass("hidden");
			
			$("#successIconTel").removeClass("hidden");
			$("#successIconTel").addClass("visible");
			$("#changetel").css("box-shadow", "inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #04EA0A");
			}
		if(valor){
		
		sendContactToRegister();
		
		}else{
			return false;}
	
	}
	
function sendContactToRegister(){
 var dataToSend = $("form").serialize();

$.ajax({
  method: "POST",
  cache:false,
  url: "https://www.walk-biz.com/WalkBizWS/webservices/sendDataContact",
  data: dataToSend,
  async:false
})
  .done(function( msg ) {
    alert("Tus datos se han envíado correctamente.");
  })
.fail(function( msg ) {
    alert( "Lo sentimos, el servicio no esta disponible en este momento. Intetalo más tarde.");
  });
}


