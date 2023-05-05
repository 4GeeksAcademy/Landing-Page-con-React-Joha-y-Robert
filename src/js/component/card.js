import React from "react";

const Card = () => {
    return (
      <><div className="row row-cols-1 row-cols-md-4 g-4 mx-2 py-2">
        <div className="col">
          <div className="card h-100">
            <img src="https://www.xtrafondos.com/descargar.php?id=6552&resolucion=1280x720" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button type="button" class="btn btn-primary">Fint out More</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://www.xtrafondos.com/descargar.php?id=6552&resolucion=1280x720" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button type="button" class="btn btn-primary">Find out More</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://www.xtrafondos.com/descargar.php?id=6552&resolucion=1280x720" className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button type="button" class="btn btn-primary">Find out More</button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card h-100">
            <img src="https://www.xtrafondos.com/descargar.php?id=6552&resolucion=1280x720" class="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title">Card title</h5>
              <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
            <div className="card-footer d-flex justify-content-center">
              <button type="button" class="btn btn-primary">Find out More!</button>
            </div>
          </div>
        </div>
      </div>
    <footer className="navbar bg-dark text-white fixed-bottom">
       <div className="container d-flex justify-content-center align-items-end" style={{ height: "50px" }}>
        <p>Copyright © Your Website 2023</p>
        </div>
    </footer>
      </>
   


    )
}
export default Card;