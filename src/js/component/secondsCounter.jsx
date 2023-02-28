import React from "react";

const SecondsCounter = (props) => {
  let unidadSegundos = props.seconds;
  let decenasSegundos = 0;

  if (unidadSegundos > 9) {
    unidadSegundos = 0;
    decenasSegundos++;
    unidadSegundos = props.seconds - 10 * decenasSegundos;
  }
  return (
    <>
    <div className="p-1  bg-dark text-white  ">
      <div className="container mt-15" >
        <div className="row" >
          <div className="col btn btn-secondary mx-1 py-4">
            <i className="fa-solid fa-clock"></i>{" "}
          </div>

          <div className="col btn btn-secondary mx-1 py-4">
            {" "}
            {props.cienmilesSeconds}{" "}
          </div>
          <div className="col btn btn-secondary mx-1 py-4">
            {" "}
            {props.diezmilesSeconds}{" "}
          </div>
          <div className="col btn btn-secondary mx-1 py-4">
            {" "}
            {props.milesSeconds}{" "}
          </div>
       
          <div className="col btn btn-secondary mx-1 py-4">
            {" "}
            {props.centenaSeconds}
          </div>
          <div className="col btn btn-secondary mx-1 py-4">
            {" "}
            {props.decenaSeconds}{" "}
          </div>
          <div className="col btn btn-secondary mx-1 py-4"> {props.seconds} </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default SecondsCounter;
