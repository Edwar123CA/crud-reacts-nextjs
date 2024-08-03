"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Form = ({ formValues, onSubmitForm }) => {
  const router = useRouter();

  // Estados para los campos del formulario
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskQuantity, setTaskQuantity] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [status, setStatus] = useState("Pending");
  const [assignedTo, setAssignedTo] = useState("");

  useEffect(() => {
    if (formValues) {
      setTaskName(formValues.taskName || "");
      setTaskDescription(formValues.taskDescription || "");
      setTaskQuantity(formValues.taskQuantity || "");
      setDueDate(formValues.dueDate ? new Date(formValues.dueDate).toISOString().substring(0, 10) : "");
      setPriority(formValues.priority || "Medium");
      setStatus(formValues.status || "Pending");
      setAssignedTo(formValues.assignedTo || "");
    }
  }, [formValues]);

  const btnBack = () => {
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      taskName,
      taskDescription,
      taskQuantity,
      dueDate,
      priority,
      status,
      assignedTo
    };
    onSubmitForm(formData);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-10">
          <div className="card border-primary shadow-lg">
            <div className="card-header bg-primary text-white">
              <h4 className="mb-0">View Tarea</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="taskName" className="form-label">Nombre de la Tarea</label>
                  <input
                    id="taskName"
                    className="form-control"
                    type="text"
                    placeholder="Ingrese el nombre de la tarea..."
                    value={taskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="taskDescription" className="form-label">Descripción de la Tarea</label>
                  <textarea
                    id="taskDescription"
                    className="form-control"
                    placeholder="Ingrese la descripción de la tarea..."
                    value={taskDescription}
                    onChange={(e) => setTaskDescription(e.target.value)}
                    rows="3"
                    required
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor="taskQuantity" className="form-label">Cantidad de Tareas</label>
                  <input
                    id="taskQuantity"
                    className="form-control"
                    type="number"
                    placeholder="Ingrese la cantidad de tareas..."
                    value={taskQuantity}
                    onChange={(e) => setTaskQuantity(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="dueDate" className="form-label">Fecha de Entrega</label>
                  <input
                    id="dueDate"
                    className="form-control"
                    type="date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="priority" className="form-label">Prioridad</label>
                  <select
                    id="priority"
                    className="form-select"
                    value={priority}
                    onChange={(e) => setPriority(e.target.value)}
                  >
                    <option value="Low">Baja</option>
                    <option value="Medium">Media</option>
                    <option value="High">Alta</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="status" className="form-label">Estado</label>
                  <select
                    id="status"
                    className="form-select"
                    value={status}
                    onChange={(e) => setStatus(e.target.value)}
                  >
                    <option value="Pending">Pendiente</option>
                    <option value="In Progress">En Progreso</option>
                    <option value="Completed">Completada</option>
                  </select>
                </div>
                <div className="mb-3">
                  <label htmlFor="assignedTo" className="form-label">Asignado a</label>
                  <input
                    id="assignedTo"
                    className="form-control"
                    type="text"
                    placeholder="Ingrese el nombre del responsable..."
                    value={assignedTo}
                    onChange={(e) => setAssignedTo(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between mt-4">
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                  <button
                    onClick={btnBack}
                    type="button"
                    className="btn btn-secondary"
                  >
                    Cancelar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
