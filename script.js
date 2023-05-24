    fetch('URL_DE_LA_API_AQUI')
        .then(response => response.json())
        .then(data => {
        // Extrae el valor del dólar de la respuesta JSON
        const valorDolar = data.valor_dolar;

        // Actualiza el contenido del elemento HTML con el valor del dólar
        document.getElementById('valor-dolar').textContent = `Valor del dólar en Argentina: $${valorDolar}`;
    })
    .catch(error => {
        console.log(error);
        document.getElementById('valor-dolar').textContent = 'No se pudo obtener el valor del dólar';
    });