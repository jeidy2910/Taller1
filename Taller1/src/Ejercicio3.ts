type SMS = {
  numero: number;
  mensaje: string;
};

type Email = {
  receptor: string;
  mensaje: string;
};

type Push = {
  esquina: string;
};

type Notificacion = SMS | Email | Push;

function enviarNotificacion(notificaciones: Notificacion[]) {
  notificaciones.forEach((n) => {
    if ("numero" in n) {
      console.log("Enviando SMS a", n.numero);
    } else if ("receptor" in n) {
      console.log("Enviando Email a", n.receptor);
    } else {
      console.log("Enviando notificación Push a", n.esquina);
    }
  });
};