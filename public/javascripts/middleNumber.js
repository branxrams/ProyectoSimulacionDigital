function numerosMedios(numero) {
  var numeroCadena = numero.toString();
  if (numeroCadena.lenght < 8 ) {
    let restante = 8 - numeroCadena.length;
    let completar;

    for (let i = 1; i <= restante; i++) {
          completar += '0'
    }

    numeroCadena = completar + numeroCadena;
  }

  return parseInt(numeroCadena.slice(2,6));

}


module.exports = numerosMedios;
