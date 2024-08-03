"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Form = ({ formValues, onSubmitForm }) => {
  const router = useRouter();

  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    if (formValues) {
      setName(formValues.name);
      setAge(formValues.age);
    }
  }, [formValues]);

  const btnBack = () => {
    router.back();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = { name, age };
    onSubmitForm(formData);
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <div className="card border-info">
            <div className="card-header bg-info text-white">
              <h4 className="mb-0">Nuevo Estudiante</h4>
            </div>
            <div className="card-body">
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">Nombre</label>
                  <input
                    id="name"
                    className="form-control"
                    type="text"
                    placeholder="Ingrese el nombre del estudiante..."
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="age" className="form-label">Edad</label>
                  <input
                    id="age"
                    className="form-control"
                    type="number"
                    placeholder="Ingresa la edad del estudiante..."
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                  />
                </div>
                <div className="d-flex justify-content-between">
                  <button type="submit" className="btn btn-primary">
                    Guardar
                  </button>
                  <button
                    onClick={btnBack}
                    type="button"
                    className="btn btn-secondary"
                  >
                    Cancel
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
