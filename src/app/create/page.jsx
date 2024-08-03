"use client";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";

const uri = "http://localhost:3000/api/student";  // Cambia la URL a /api/task

const Create = () => {
  const router = useRouter();

  const onSubmitCreate = async (formData) => {
    console.log("Datos capturados del Form: ", formData);
    
    // Asegúrate de que los campos en formData coincidan con el esquema
    const {
      taskName,
      taskDescription,
      taskQuantity,
      dueDate,
      priority,
      status,
      assignedTo
    } = formData;

    if (!taskName || !taskDescription || !taskQuantity || !dueDate) {
      alert("Complete the required fields.");
      return;
    }

    try {
      const response = await fetch(uri, {
        method: "POST",
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
      if (response.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmitForm={onSubmitCreate} />
    </div>
  );
};

export default Create;
