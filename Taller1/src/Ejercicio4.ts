type TipoCampo = "texto" | "numero" | "email";

type CampoFormulario = {
  nombre: string;
  tipo: TipoCampo;
  valor: string | number;
};

function validarCampo(campo: CampoFormulario): boolean {
  if (campo.tipo === "texto") {
    return typeof campo.valor === "string" && campo.valor.trim() !== "";
  }

  if (campo.tipo === "numero") {
    return typeof campo.valor === "number" && !isNaN(campo.valor);
  }

  if (campo.tipo === "email") {
    return (
      typeof campo.valor === "string" &&
      campo.valor.includes("@")
    );
  }

  return false;
}
function validarFormulario(
  campos: CampoFormulario[],
  callback: (campo: CampoFormulario) => boolean
): string[] {
  const camposInvalidos: string[] = [];

  campos.forEach((campo) => {
    if (!callback(campo)) {
      camposInvalidos.push(campo.nombre);
    }
  });

  return camposInvalidos;
}
const campos: CampoFormulario[] = [
  { nombre: "nombre", tipo: "texto", valor: "Alexa" },
  { nombre: "edad", tipo: "numero", valor: 18 },
  { nombre: "correo", tipo: "email", valor: "correo.com" } 
];

const resultado = validarFormulario(campos, validarCampo);

console.log(resultado); 