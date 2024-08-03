"use client";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";
const uri = "http://localhost:3000/api/student";  // Cambia la URL a /api/task

const getDataById = async (id) => {
  try {
    const response = await fetch(`${uri}/${id}`, { cache: "no-store" });
    if (!response.ok) {
      throw new Error("Failed to fetch data.");
    }
    return response.json();
  } catch (error) {
    console.log("Error : ", error);
  }
};

const Edit = async ({ params }) => {
  const router = useRouter();

  const id = params.id;
  const { data } = await getDataById(id);
  // console.log("documento completo :"+JSON.stringify(data)); // Recibo el documento
  const { taskName, taskDescription, taskQuantity, dueDate, priority, status, assignedTo } = data || {};

  const onSubmitEdit = async (formData) => {
    console.log("formData:", formData);
    const {
      taskName,
      taskDescription,
      taskQuantity,
      dueDate,
      priority,
      status,
      assignedTo
    } = formData;

    try {
      const response = await fetch(`${uri}/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          taskName,
          taskDescription,
          taskQuantity,
          dueDate,
          priority,
          status,
          assignedTo
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to update.");
      }
      router.refresh();
      router.push("/");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form
        onSubmitForm={onSubmitEdit}
        formValues={{
          taskName,
          taskDescription,
          taskQuantity,
          dueDate,
          priority,
          status,
          assignedTo
        }}
      />
    </div>
  );
};

export default Edit;
