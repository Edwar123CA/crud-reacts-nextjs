"use client";
// Sweet Alert 2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useRouter } from "next/navigation";

// Cambia el URI a la ruta correcta para las tareas
const uri = "http://localhost:3000/api/student";

const BtnDelete = ({ id }) => {
  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const deleteDocument = () => {
    MySwal.fire({
      title: "¿Estás seguro de que quieres eliminar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Sí, eliminar!",
      cancelButtonText: "Cancelar"
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(`${uri}/${id}`, {
            method: "DELETE",
          });

          if (response.ok) {
            Swal.fire("¡Eliminado!", "El documento fue eliminado exitosamente.", "success");
            router.refresh();
          } else {
            throw new Error("Failed to delete");
          }
        } catch (error) {
          Swal.fire("Error", "No se pudo eliminar el documento. Inténtalo de nuevo.", "error");
        }
      }
    });
  };

  return (
    <button
      onClick={deleteDocument}
      className="btn btn-danger" // Clase de Bootstrap para botón rojo
    >
      Eliminar
    </button>
  );
};

export default BtnDelete;
