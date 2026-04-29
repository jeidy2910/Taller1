type Pago =
  | { metodo: "tarjeta"; numeroTarjeta: string; cvv: string }
  | { metodo: "transferencia"; banco: string; numeroCuenta: string }
  | { metodo: "efectivo" };

function validarPago(pago: Pago): boolean {
  if (pago.metodo === "tarjeta") {
    return pago.numeroTarjeta !== "" && pago.cvv !== "";
  } else if (pago.metodo === "transferencia") {
    return pago.banco !== "" && pago.numeroCuenta !== "";
  } else {
    return true;
  }
}