'use strict';

function BinarioADecimal(num) {
   var suma = 0;
   for(var cont = num.length;cont > 0;cont--){
         var caracter = num.charAt(cont-1);
         if(caracter == 0)
            continue;
         suma = suma + Math.pow(2,  num.length - cont);
   }
   return suma;

}

function DecimalABinario(num) {
   var caracter;
   var numero = num;
   var cadena =""
   while( numero/ 2 > 0){
      caracter = numero % 2
      numero = numero / 2
      numero = Math.floor(numero)
      cadena = caracter + cadena
   } 
   return cadena;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
