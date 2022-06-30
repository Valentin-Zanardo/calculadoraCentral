//seleccionamos el botón que va a iniciar el ciclo de las calculadoras
let botonCalculadora = document.getElementById('botonCalculadora');
//agregamos el evento que queremos que ejecute el botón
botonCalculadora.addEventListener('click', aperturaCalculadoras);

//seleccionamos el div en el que se va a imprimir el resultado de la calculadora
let resultCalculator = document.getElementById('resultCalculator');

//seleccionamos el boton que va a imprimir el localStorage
let resultadosAnteriores = document.getElementById('resultadosAnteriores');

//agregamos el evento que queremos que ejecute el boton
resultadosAnteriores.addEventListener('click', () => {
  if (localStorage.length == 0) {
    alert('Lo sentimos, usted no posee un resultado previo.');
  } else {
    guardarResultado = document.createElement('p');
    guardarResultado.innerHTML = `Su último resultado es igual a ${localStorage.getItem(
      'resultado'
    )}`;
    resultCalculator.append(guardarResultado);
    resultadosAnteriores.remove();
  }
});
/* FUNCION QUE ACTIVA EL BOTÓN DE LAS CALCULADORA */
function aperturaCalculadoras() {
  //CALCULADORAS
  let calculadoraElegida = Number(
    prompt(
      'Ingrese el número de la calculadora que sea usar: \n1 -Para calculadora matemática \n2 -Para calculadora de iva \n3 -Para calculadora de Proteinas y Grasas Saludables \n4 -Para salir de las calculadoras '
    )
  );

  let imprimir, resultadoCalculadora, guardarResultado;

  while (calculadoraElegida != 4) {
    switch (calculadoraElegida) {
      /* CALCULADORA MATEMÁTICA */
      case 1:
        function calculadora(primerNum, segundoNum, operador) {
          switch (operador) {
            case '+':
              return primerNum + segundoNum;

            case '-':
              return primerNum - segundoNum;

            case '*':
              return primerNum * segundoNum;

            case '/':
              return primerNum / segundoNum;
          }
        }
        let numeroUno = Number(
          prompt('Ingrese el primer número de la operación.')
        );
        let resultado = prompt(
          'Ingrese: \n + para sumar \n - para restar \n / para dividir \n * para multiplicar'
        );
        let numeroDos = Number(
          prompt('Ingrese el segundo número que desea operar.')
        );

        resultadoCalculadora = calculadora(numeroUno, numeroDos, resultado);

        imprimir = document.createElement('p');
        imprimir.innerHTML = 'Su resultado es igual a ' + resultadoCalculadora;
        resultCalculator.append(imprimir);
        localStorage.setItem('resultado', JSON.stringify(resultadoCalculadora));
        break;
      /* FIN DE CALCULADORA MATEMÁTICA */

      /* CALULADORA DE IVA */
      case 2:
        function iva(valor) {
          return valor * 0.21;
        }

        let valorIva = Number(
          prompt('Ingrese el precio de su producto sin IVA. ')
        );
        let precioFinal = iva(valorIva) + valorIva;

        imprimir = document.createElement('p');
        resultadoCalculadora = iva(valorIva);
        imprimir.innerHTML =
          `El IVA de su producto es de ${resultadoCalculadora}` +
          '$. \nEl precio final de su producto es de ' +
          precioFinal +
          '$';
        resultCalculator.append(imprimir);

        localStorage.setItem(
          'resultado',
          JSON.stringify(
            `El IVA de su producto es de ${resultadoCalculadora}` +
              '$. El precio final de su producto es de ' +
              precioFinal +
              '$'
          )
        );
        break;
      /* FIN DE CALCULADORA DE IVA */

      /* CALCULADORA DE PROTEINAS Y GRASAS */
      case 3:
        let calculadoraDos,
          ejercicioSemanal1,
          ejercicioSemanal2,
          peso,
          totalProte,
          totalGrasa;
        calculadoraDos = Number(
          prompt(
            'Bienvenido a la calculadora de Proteínas y Grasas Saludables! \nIngrese el número de la calculadora que desea utilizar: \n1 -Proteinas \n2 -Grasas Saludables'
          )
        );
        switch (calculadoraDos) {
          case 1:
            peso = Number(prompt('Ingrese su peso'));
            ejercicioSemanal1 = Number(
              prompt(
                'Ingrese la cantidad de días que realiza deporte intenso en la semana.'
              )
            );
            switch (ejercicioSemanal1) {
              case 1:
                totalProte = peso * 1.3;
                break;
              case 2:
                totalProte = peso * 1.3;
                break;

              case 3:
                totalProte = peso * 1.6;
                break;
              case 4:
                totalProte = peso * 1.6;
                break;

              case 5:
                totalProte = peso * 2;
                break;
              case 6:
                totalProte = peso * 2;
                break;
              case 7:
                totalProte = peso * 2;
                break;
              default:
                alert('Por favor ingresar un número del 1 al 7.');
                break;
            }
            imprimir = document.createElement('p');
            resultadoCalculadora = totalProte;

            imprimir.innerHTML =
              'La cantidad de Proteinas que debe comer es de ' +
              resultadoCalculadora +
              'g';
            resultCalculator.append(imprimir);
            alert(
              '¡Recuerde que siempre es mejor acudir con un profesional en nutrición!'
            );
            localStorage.setItem(
              'resultado',
              JSON.stringify(
                'La cantidad de Proteinas que debe comer es de ' +
                  resultadoCalculadora +
                  'g'
              )
            );
            break;

          case 2:
            peso = Number(prompt('Ingrese su peso'));
            ejercicioSemanal2 = Number(
              prompt(
                'Ingrese la cantidad de días que realiza deporte intenso en la semana.'
              )
            );
            switch (ejercicioSemanal2) {
              case 1:
                totalGrasa = peso * 1.0;
                break;
              case 2:
                totalGrasa = peso * 1.1;
                break;

              case 3:
                totalGrasa = peso * 1.2;
                break;
              case 4:
                totalGrasa = peso * 1.2;
                break;

              case 5:
                totalGrasa = peso * 1.3;
                break;
              case 6:
                totalGrasa = peso * 1.3;
                break;
              case 7:
                totalGrasa = peso * 1.3;
                break;
              default:
                alert('Por favor ingresar un número del 1 al 7.');
                break;
            }

            imprimir = document.createElement('p');
            resultadoCalculadora = totalGrasa;

            imprimir.innerHTML =
              'La cantidad de Grasas Saludables que debe comer es de ' +
              resultadoCalculadora +
              'g';
            alert(
              '¡Recuerde que siempre es mejor acudir con un profesional en nutrición!'
            );
            resultCalculator.append(imprimir);
            localStorage.setItem(
              'resultado',
              JSON.stringify(
                'La cantidad de Grasas Saludables que debe comer es de ' +
                  resultadoCalculadora +
                  'g'
              )
            );
            break;
          default:
            alert('Por favor ingresar una de las opciones validas');
            break;
        }
        break;
      /* FIN DE CALCULADORA DE PROTEÍNAS Y GRASAS */
      default:
        alert(
          'El número ingresado no es válido, por favor ingrese alguno de los números de la lista.'
        );
    }
    break;
  }
  // FIN DE LA CALCULADORA GLOBAL
}
