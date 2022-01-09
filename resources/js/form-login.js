$(document).ready(function(){ 
$("#form_login").submit(function(e){
	e.preventDefault(); initValidate(); }); });
	function initValidate(){
		$("#btn_submit").val("Procesando...");
		$("#btn_submit").prop("disabled", true);
		clearFields(); 
		var validate = true;
		validate = validateEmpty(); 
		if(validate == true){
			initLogin(); 
		}
	}
	
	function clearFields(){
		$(".msg-error").each(function(){
			$(this).html(""); 
		});
	}

	function validateEmpty(){var end = true; $(".fields").each(function(){ var field = $(this).children(".ctm-input"); var error_msg = $(this).children(".ctm-label-error"); if(field.val() == ""){if(end == true){field.focus();} field.addClass("ctm-input-error"); error_msg.html("Este campo es obligatorio"); end = false; } }); return(end);} 
	
	function initLogin(){ 
		var dataString = $('#form_login').serialize(); 
		$.ajax({ type: "POST", url: "/login", data: dataString, success: function(data) {
			$("#btn_submit").val("Ingresar"); 
			$("#btn_submit").prop("disabled", false);
			if(data == "error_email"){ 
				$("#error_email").html("No se ha encontrado este usuario o correo electrónico.");
				$("#usu_email").focus(); 
			}
			else if(data == "error_clave"){ 
				$("#error_clave").html("La contraseña es incorrecta."); 
				$("#usu_clave").focus();  
			}
			else if(data == "exito"){
				window.location = "/"; 
			}
		}});
	}
