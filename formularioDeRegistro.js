function validar(){
    var email = validar_email();
    var pass=validar_password();
    var dire =validar_direcc() ;
    var loca = validar_localidad();
    var codigopostal = validar_codigopostal();
    var telefonos = val_movil_fijo();
    var coincidenciaPass = val_coinci_pass();
    
    

    return (email&&pass&&dire&&loca&&codigopostal&&telefonos&&coincidenciaPass);
    
}

function validarFunEmail(email){
    var idx_arroba = email.indexOf("@");
    if (idx_arroba < 1) {
        return false;
    } else {
        var idx_punto = email.indexOf(".");
        if(idx_punto <= idx_arroba + 2 || idx_punto == email.length - 1) {
            return false;
        }        
        return true;
    }
}
function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("msj-email");
    if (email != "") {
        if (validarFunEmail(email)) {
            div.innerHTML = "";
            return true;
        } else {
            div.innerHTML = "El formato del email no es valido";
            div.className = "text-danger";
            return false;
        }
    } else {
        div.innerHTML = "El email no puede estar en blanco";
        div.className = "text-danger";
        return false;
    }
}

function validar_password() {
    var passw = document.getElementById("contrasena").value;
    var div = document.getElementById("msj-contra");
    if  (passw.length >=3 && passw.length<=6) {
        div.innerHTML = "";
        return true;
    } else {
        
        
        div.innerHTML = "La contraseña debe ser de al menos 6 caracteres (*)";
        div.className = "text-primary";
        return false;
    }
}

function val_coinci_pass() {
    var contra1 =document.getElementById("contrasena").value;
    var contra2 = document.getElementById("confirmacion").value;
    var div = document.getElementById("msj-contra");
    var div = document.getElementById("msj-confirmacion");

    if (contra1 != contra2){
        div.innerHTML = "La Contraseña Deben Coincidir";
        div.className = "text-danger"
        return true;
    }else {
        div.innerHTML = "Coinciden Las Contraseñas";
        div.className = "text-secondary";
        return false;
    }
}



function validar_direcc() {
    var direc = document.getElementById("dire").value;
    var div= document.getElementById("msj-dire");
    if  (direc != "") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La direccion no puede quedar vacio (*)";
        div.className = "text-danger";
        return false;
    }

}

function validar_localidad() {
    var direc = document.getElementById("loca").value;
    var div= document.getElementById("msj-loca");
    if  (direc != "") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "La localidad no puede quedar vacio (*)";
        div.className = "text-danger";
        return false;
    }

}

function validar_codigopostal() {
    var direc = document.getElementById("codipostal").value;
    var div= document.getElementById("msj-codipostal");
    if  (direc != "") {
        div.innerHTML = "";
        return true;
    } else {
        div.innerHTML = "El codigo postal no puede quedar vacio (*)";
        div.className = "text-danger";
        return false;
    }

}

function val_movil_fijo() {
    var telMovil = document.getElementById("TelefonoMovil").value;
    var msj= document.getElementById("msj-TelefonoMovil");
    var Telfijo = document.getElementById("TelefonoFijo").value;

    if  (telMovil != "" || Telfijo !="") {
        if(9 == telMovil.length || 9== Telfijo.length){
            msj.innerHTML = "";
            return true;
            
        }else{
            msj.innerHTML = "Formato invalido de los telefonos";
            msj.className="text-danger";
            return false; 
        }
    }else {
        msj.innerHTML = "Ingrese un telefono al menos!";
        msj.className = "text-danger";
        return false;
    }
}


