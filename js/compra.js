var cantidad = document.getElementById('cantidad');
var val1 = document.getElementById('val1');
var val2 = document.getElementById('val2');
var val3 = document.getElementById('val3');
var val4 = document.getElementById('val4');
var val5 = document.getElementById('val5');
var error = document.getElementById('error');
error.style.color = 'red';
var error2 = document.getElementById('error2');
error2.style.color = 'red';
var error3 = document.getElementById('error3');
error3.style.color = 'red';
var error4 = document.getElementById('error4');
error4.style.color = 'red';
var error5 = document.getElementById('error5');
error5.style.color = 'red';
var error6 = document.getElementById('error6');
error6.style.color = 'red';

function enviarCompra(){
    console.log('Enviando compra...');

    var mensajesError =[];

    if(cantidad.value === null || cantidad.value === ''){
        mensajesError.push('Ingrese cantidad de productos');
    }

    error.innerHTML = mensajesError.join(', ');

    return false;
}
/* 2*/
function enviarCompra2(){
    console.log('Enviando compra...');

    var mensajesError2 =[];

    if(val1.value === null || val1.value === ''){
        mensajesError2.push('Ingrese cantidad de productos');
    }
   
    error2.innerHTML = mensajesError2.join(', ');

    return false;
    
}
/*3 */
function enviarCompra3(){
    console.log('Enviando compra...');

    var mensajesError3 =[];

    if(val2.value === null || val2.value === ''){
        mensajesError3.push('Ingrese cantidad de productos');
    }

    error3.innerHTML = mensajesError3.join(', ');

    return false;
}

/*4 */
function enviarCompra4(){
    console.log('Enviando compra...');

    var mensajesError4 =[];

    if(val3.value === null || val3.value === ''){
        mensajesError4.push('Ingrese cantidad de productos');
    }

    error4.innerHTML = mensajesError4.join(', ');

    return false;
}

/*5 */
function enviarCompra5(){
    console.log('Enviando compra...');

    var mensajesError5 =[];

    if(val4.value === null || val4.value === ''){
        mensajesError5.push('Ingrese cantidad de productos');
    }

    error5.innerHTML = mensajesError5.join(', ');

    return false;
}
/*6 */

function enviarCompra6(){
    console.log('Enviando compra...');

    var mensajesError6 =[];

    if(val5.value === null || val5.value === ''){
        mensajesError6.push('Ingrese cantidad de productos');
    }
    error6.innerHTML = mensajesError6.join(', ');

    return false;
}


