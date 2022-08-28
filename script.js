const ingreso = document.querySelector(".textoEntrada");
const salida = document.querySelector(".textoSalida");
var cajaDeTexto = ingreso;

  /*-----------     VALIDA TEXTO PERMITIENDO MINUSCULAS Y ESPACIOS     ----------*/
    function validar(e) {
      tecla = (document.all) ? e.keyCode : e.which;
      if (tecla==8) return true;
      patron =/[a-z\s]/;

      te = String.fromCharCode(tecla);
      return patron.test(te);
    } 

    /* ----------- LIMPIAR TEXTO -----------*/
    function btnLimpiar(cajaDeTexto){

      document.querySelector(".textoEntrada").value="";
      document.querySelector(".textoSalida").value="";
      document.querySelector(".textoEntrada").focus();
    }

    // ------------ COPIAR ------------
    function btnCopiar(){
      var copiado = salida;
      cajaDeTexto = salida;
      copiado.select();
      document.execCommand("copy");
      btnLimpiar(cajaDeTexto);
    }

    // ------------ ESPEJAR ------------
    function espejar(){
      //document.querySelector(".textoSalida").value = document.querySelector(".textoEntrada").value;
      if(document.getElementById('radioEncriptar').checked){        
        var texto = encriptar(ingreso.value);
        salida.value = texto;
      }else if(document.getElementById('radioDesencriptar').checked){
        var texto = desencriptar(ingreso.value);
        salida.value = texto;
      }
      
    }

    // ------------ ENCRIPTAR ------------
    function encriptar(textoEncriptar){
      let matrizCodigo = [["e", "enter"], ["i", "imes"], 
      ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
      textoEncriptar = textoEncriptar.toLowerCase();

      for(let i = 0; i < matrizCodigo.length; i++){
        if(textoEncriptar.includes(matrizCodigo[i][0])){
          textoEncriptar = textoEncriptar.replaceAll
          (matrizCodigo[i][0],matrizCodigo[i][1]);
        }
      }
      return textoEncriptar;
    }

    // ------------ DESENCRIPTAR ------------
    function desencriptar(textoDesencriptar){
      let matrizCodigo = [["e", "enter"], ["i", "imes"], 
      ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
      textoDesencriptar = textoDesencriptar.toLowerCase();

      for(let i = 0; i < matrizCodigo.length; i++){
        if(textoDesencriptar.includes(matrizCodigo[i][1])){
          textoDesencriptar = textoDesencriptar.replaceAll
          (matrizCodigo[i][1],matrizCodigo[i][0]);
        }
      }
      return textoDesencriptar;
    }

