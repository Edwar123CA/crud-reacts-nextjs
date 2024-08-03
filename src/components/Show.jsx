import Link from "next/link";
import BtnDelete from "./BtnDelete";

const getData = async () => {
  try {
    const response = await fetch(`${process.env.URI}`, { cache: "no-store" });
    return response.json();
  } catch (error) {
    console.log("Error : ", error);
  }
};

const Show = async () => {
  const { data } = await getData();

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((task) => (
          <div key={task._id} className="col-12 col-md-6 col-lg-4 mb-4">
            <div className="card border-secondary shadow-lg">
              <div className="card-body">
                <h4 className="card-title text-center text-primary mb-3">
                  {task.taskName}
                </h4>
                <p className="card-text">
                  <strong className="text-dark">Descripción:</strong>{" "}
                  <span className="text-muted">{task.taskDescription}</span>
                </p>
                <p className="card-text">
                  <strong className="text-dark">Cantidad:</strong>{" "}
                  <span className="badge bg-success text-white">{task.taskQuantity}</span>
                </p>
                <p className="card-text">
                  <strong className="text-dark">Fecha de Entrega:</strong>{" "}
                  <span className={`badge ${new Date(task.dueDate) < new Date() ? 'bg-danger text-white' : 'bg-warning text-dark'}`}>
                    {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                </p>
                <p className="card-text">
                  <strong className="text-dark">Prioridad:</strong>{" "}
                  <span className={`badge ${task.priority === 'High' ? 'bg-danger text-white' : task.priority === 'Medium' ? 'bg-warning text-dark' : 'bg-success text-white'}`}>
                    {task.priority}
                  </span>
                </p>
                <p className="card-text">
                  <strong className="text-dark">Estado:</strong>{" "}
                  <span className={`badge ${task.status === 'Completed' ? 'bg-success text-white' : task.status === 'In Progress' ? 'bg-warning text-dark' : 'bg-secondary text-white'}`}>
                    {task.status}
                  </span>
                </p>
                <p className="card-text">
                  <strong className="text-dark">Asignado a:</strong>{" "}
                  <span className="text-info">{task.assignedTo || 'No asignado'}</span>
                </p>
                <div className="d-flex justify-content-between mt-4">
                  <Link
                    href={`/edit/${task._id}`}
                    className="btn btn-primary"
                  >
                    Actualizar
                  </Link>
                  <BtnDelete id={task._id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Show;
