type Unidad = "cm" | "m" | "km";

function convertirUnidad(valor: number, origen: Unidad, destino: Unidad): number {
  let valorEnMetros: number;

  if (origen === "cm") {
    valorEnMetros = valor / 100;
  } else if (origen === "km") {
    valorEnMetros = valor * 1000;
  } else {
    valorEnMetros = valor;
  }

  if (destino === "cm") {
    return valorEnMetros * 100;
  } else if (destino === "km") {
    return valorEnMetros / 1000;
  } else {
    return valorEnMetros;
  }
}