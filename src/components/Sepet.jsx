import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";
import OffCanvas from "./OffCanvas";

function Sepet() {
  const { sepeteEkle, sepettenCikar, sepet } = useContext(AppContext);
  const sepetKontrol = (y) => {
    const secim = sepet.some((filan) => filan.id == y);
    return secim;
  };
  const navigate = useNavigate();

  return (
    <div>
      <div className="container sayfa ">
        <div className="row">
          <div className="col-md-10">
            {sepet.length == 0 ? (
              <div className="alert alert-danger my-5 m-auto" role="alert">
                Sepetinizde hiç ürün bulunmamaktadır.
              </div>
            ) : (
              <div className="row ">
                {sepet.map((urun, index) => (
                  <div key={index} className="col-md-6 my-3 ">
                    <div
                      className="card m-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded"
                      style={{ width: "22rem", height: "550px" }}
                    >
                      <img
                        src={urun.image}
                        className="card-img-top m-auto"
                        alt="..."
                        style={{
                          height: "300px",
                          cursor: "pointer",
                          width: "200px",
                        }}
                        onClick={() => navigate(`urun/${urun.id}`)}
                      />
                      <div className="card-body">
                        <h6 className="card-title">{urun.title}</h6>
                        <p className="card-text">Kategori: {urun.category}</p>
                        <p className="card-text">Fiyat: {urun.price} ₺</p>
                        <button
                          className="btn btn-danger mx-3 my-3"
                          onClick={() => sepettenCikar(urun.id)}
                        >
                          SEPETTEN ÇIKAR
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="col-md-2 ">
            <button
              className="btn btn-danger mt-3 "
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Sepet Özeti <i className="fa-solid fa-arrow-right"></i>
            </button>

            <div
              className="offcanvas offcanvas-end "
              style={{ backgroundColor: "#CA9DA5" }}
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div className="offcanvas-header">
                <h5 className="offcanvas-title" id="offcanvasRightLabel"></h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div className="offcanvas-body">
                <OffCanvas></OffCanvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sepet;
