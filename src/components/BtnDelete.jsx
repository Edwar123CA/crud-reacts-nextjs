"use client";
// Sweet Alert 2
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

import { useRouter } from "next/navigation";

const uri = "http://localhost:3000/api/student";

const BtnDelete = ({ id }) => {
  const router = useRouter();
  const MySwal = withReactContent(Swal);

  const deleteDocument = () => {
    MySwal.fire({
      title: "Seguro quieres eliminar?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, eliminar!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const response = await fetch(`${uri}/${id}`, {
          method: "DELETE",
        });
        if (response.ok) {
          router.refresh();
        }
        Swal.fire("ELIMINADO!", "fue procesado exitosamente.", "success");
      }
    });
  };

  return (
    <button
      onClick={deleteDocument}
      className="btn btn-danger" // Bootstrap class for red button
    >
      Eliminar
    </button>
  );
};

export default BtnDelete;
