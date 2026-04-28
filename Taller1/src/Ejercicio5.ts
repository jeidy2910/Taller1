    type Cambio =
    | { tipo: "nombre"; nuevoNombre: string }
    | { tipo: "correo"; nuevoCorreo: string }
    | { tipo: "password"; nuevaPassword: string };
    function resumirCambios(cambios: Cambio[]) {
    const resumen = {
        nombre: 0,
        correo: 0,
        password: 0
    };

    cambios.forEach((cambio) => {
        if (cambio.tipo === "nombre") {
        resumen.nombre++;
        } else if (cambio.tipo === "correo") {
        resumen.correo++;
        } else if (cambio.tipo === "password") {
        resumen.password++;
        }
    });

    return resumen;
    }
    const historial: Cambio[] = [
    { tipo: "nombre", nuevoNombre: "Alejo" },
    { tipo: "correo", nuevoCorreo: "a@gmail.com" },
    { tipo: "nombre", nuevoNombre: "Ale" },
    { tipo: "password", nuevaPassword: "1234" }
    ];

    const resultado = resumirCambios(historial);

    console.log(resultado);
