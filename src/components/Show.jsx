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

// Para ver todos los documentos que están en ATLAS en la consola de VSC
// const { data } = await getData()
// console.log(data);

const Show = async () => {
  const { data } = await getData();

  return (
    <div className="container mt-4">
      <div className="row">
        {data.map((element) => (
          <div key={element._id} className="col-12 col-md-6 mb-4">
            <div className="card border-info shadow-sm">
              <div className="card-body">
                <h5 className="card-title text-center text-dark">
                  {element.name}
                </h5>
                <p className="card-text text-center">
                  Edad: <span className="badge bg-info text-dark">{element.age}</span>
                </p>
                <div className="d-flex justify-content-between mt-3">
                  <Link
                    href={`/edit/${element._id}`}
                    className="btn btn-primary"
                  >
                    Actualizar
                  </Link>
                  <BtnDelete id={element._id} />
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
