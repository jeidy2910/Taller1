type Rol = "admin" | "editor" | "visitante";

type Usuario = {
  nombre: string;
  edad: number;
  activo: boolean;
  rol: Rol;
};

function filtrarUsuarios(usuarios: Usuario[]): Usuario[] {
  return usuarios.filter(
    (u) => u.edad >= 18 && u.activo && u.rol !== "visitante"
  );
}