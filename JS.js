
        function realizarOperacion(num1, num2, operacion) {
            if (operacion === 'suma') {
                return num1 + num2;
            } else if (operacion === 'resta') {
                return num1 - num2;
            } else if (operacion === 'multiplicacion') {
                return num1 * num2;
            } else if (operacion === 'division') {
                if (num2 === 0) {
                    return 'Error: No se puede dividir por cero';
                } else {
                    return num1 / num2;
                }
            } else {
                return 'Error: Operación no válida';
            }
        }

        function calcular() {
            const num1 = parseFloat(document.getElementById('num1').value);
            const num2 = parseFloat(document.getElementById('num2').value);
            const operacion = document.getElementById('operacion').value;

            // Validación de datos
            if (isNaN(num1) || isNaN(num2)) {
                document.getElementById('resultado').innerText = 'Por favor ingrese números válidos.';
                return;
            }

            const resultado = realizarOperacion(num1, num2, operacion);
            document.getElementById('resultado').innerText = `Resultado: ${resultado}`;
        }

        function limpiar() {
            document.getElementById('num1').value = '';
            document.getElementById('num2').value = '';
            document.getElementById('operacion').value = 'suma';
            document.getElementById('resultado').innerText = '';
        }

        function salir() {
            document.getElementById('resultado').innerText = '¡Gracias por usar la calculadora!';
            
            // Opcional: desactivar controles (simula que el bucle terminó)
            document.getElementById('num1').disabled = true;
            document.getElementById('num2').disabled = true;
            document.getElementById('operacion').disabled = true;
            
            // También se podrían desactivar los botones si quieres
            const botones = document.querySelectorAll('button');
            botones.forEach(btn => {
                if (btn.innerText !== 'Salir') {
                    btn.disabled = true;
                }
            });
        }