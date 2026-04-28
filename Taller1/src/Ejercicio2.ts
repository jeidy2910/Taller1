// { ingreso: 350000, egreso: 180000 }
type TipoTransaccion = "ingreso" | "egreso"
type Transaccion = {
monto: number;
tipo: TipoTransaccion;
categoria: string;
}
function operacion(transacciones: Transaccion[]) {
return transacciones.reduce((acc, cur) => {
if (cur.tipo === "ingreso") {
acc.ingreso += cur.monto;
} else {
acc.egreso += cur.monto;
}
return acc;
}, {ingreso: 0, egreso: 0})
}