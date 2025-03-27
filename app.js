window.addEventListener('load', () => {
    let lon;
    let lat;

    let temperaturaValor = document.getElementById('temperatura-valor');
    let temperaturaDescripcion = document.getElementById('temperatura-descripcion');
    let ubicacion = document.getElementById('ubicacion');
    let iconoAnimado = document.getElementById('icono-animado');
    let vientoVelocidad = document.getElementById('viento-velocidad');

    // API Key de OpenWeatherMap
    const apiKey = 'f5f75599338bd2ab35ff4e980255a1f0';

    // Obtener ubicación automática
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(posicion => {
            lon = posicion.coords.longitude;
            lat = posicion.coords.latitude;

            obtenerClimaPorCoordenadas(lat, lon);
        });
    }

    function obtenerClimaPorCoordenadas(lat, lon) {
        const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => actualizarDatosClima(data))
            .catch(error => console.error("Error obteniendo datos:", error));
    }

    function obtenerClimaPorCiudad(ciudad) {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&units=metric&appid=${apiKey}`;

        fetch(url)
            .then(response => response.json())
            .then(data => {
                if (data.cod === 200) {
                    actualizarDatosClima(data);
                } else {
                    alert("Ciudad no encontrada. Inténtalo de nuevo.");
                }
            })
            .catch(error => console.error("Error obteniendo datos:", error));
    }

    function actualizarDatosClima(data) {
        let temp = Math.round(data.main.temp);
        let desc = data.weather[0].description;

        // Traducir la descripción del clima
        let descTraducida = TRADUCCION_CLIMA[data.weather[0].main] || desc;

        temperaturaValor.textContent = `${temp} °C`;
        temperaturaDescripcion.textContent = descTraducida.toUpperCase();
        ubicacion.textContent = data.name;
        vientoVelocidad.textContent = `${data.wind.speed} m/s`;

        // Cambiar icono animado según el clima
        switch (data.weather[0].main) {
            case 'Thunderstorm':
                iconoAnimado.src = 'animated/thunderstorm.svg';
                break;
            case 'Drizzle':
                iconoAnimado.src = 'animated/rainy-2.svg';
                break;
            case 'Rain':
                iconoAnimado.src = 'animated/rainy-7.svg';
                break;
            case 'Snow':
                iconoAnimado.src = 'animated/snowy-6.svg';
                break;
            case 'Clear':
                iconoAnimado.src = 'animated/day.svg';
                break;
            case 'Clouds':
                iconoAnimado.src = 'animated/cloudy-day-1.svg';
                break;
            default:
                iconoAnimado.src = 'animated/weather.svg';
        }
    }

    const TRADUCCION_CLIMA = {
        "Thunderstorm": "Tormenta eléctrica",
        "Drizzle": "Llovizna",
        "Rain": "Lluvia",
        "Snow": "Nieve",
        "Clear": "Despejado",
        "Clouds": "Nublado",
        "Few clouds": "Pocas nubes",
        "Scattered clouds": "Nubes dispersas",
        "Broken clouds": "Nubes fragmentadas",
        "Overcast clouds": "Nubes cubiertas",
        "Mist": "Neblina",
        "Smoke": "Humo",
        "Haze": "Calina",
        "Dust": "Polvo",
        "Fog": "Niebla",
        "Sand": "Arena",
        "Ash": "Ceniza volcánica",
        "Squall": "Chubasco",
        "Tornado": "Tornado",
        "Sunny": "Soleado", 
        "Light rain": "Lluvia ligera",
        "Moderate rain": "Lluvia moderada",
        "Heavy intensity rain": "Lluvia de alta intensidad",
        "Very heavy rain": "Lluvia muy intensa",
        "Extreme rain": "Lluvia extrema",
        "Freezing rain": "Lluvia helada",
        "Light snow": "Nieve ligera",
        "Heavy snow": "Nieve intensa",
        "Sleet": "Aguanieve",
        "Shower sleet": "Chubasco de aguanieve",
        "Light shower snow": "Chubasco de nieve ligera",
        "Shower snow": "Chubasco de nieve",
        "Heavy shower snow": "Chubasco de nieve intensa"
    };

    document.getElementById('cambiar-ubicacion').addEventListener('click', () => {
        document.getElementById('modal-ubicacion').style.display = 'flex';
    });

    document.getElementById('cerrar-modal').addEventListener('click', () => {
        document.getElementById('modal-ubicacion').style.display = 'none';
    });

    document.getElementById('confirmar-ciudad').addEventListener('click', () => {
        let ciudad = document.getElementById('input-ciudad').value;
        if (ciudad) {
            obtenerClimaPorCiudad(ciudad);
            document.getElementById('modal-ubicacion').style.display = 'none';
        }
    });
    app.listen(5000, '0.0.0.0', () => console.log("Servidor en puerto 5000"));


});
