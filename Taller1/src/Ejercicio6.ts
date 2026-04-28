type Categoria = "tareas" | "quices" | "examen";

type Calificacion = {
  estudianteId: number;
  materia: string;
  categoria: Categoria;
  nota: number;
};

function promedioPorCategoria(
  calificaciones: Calificacion[],
  estudianteId: number
) {
  const acumulado = {
    tareas: { suma: 0, cantidad: 0 },
    quices: { suma: 0, cantidad: 0 },
    examen: { suma: 0, cantidad: 0 }
  };

  calificaciones.forEach((c) => {
    if (c.estudianteId === estudianteId) {
      acumulado[c.categoria].suma += c.nota;
      acumulado[c.categoria].cantidad++;
    }
  });

  return {
    tareas:
      acumulado.tareas.cantidad > 0
        ? acumulado.tareas.suma / acumulado.tareas.cantidad
        : 0,
    quices:
      acumulado.quices.cantidad > 0
        ? acumulado.quices.suma / acumulado.quices.cantidad
        : 0,
    examen:
      acumulado.examen.cantidad > 0
        ? acumulado.examen.suma / acumulado.examen.cantidad
        : 0
  };
}