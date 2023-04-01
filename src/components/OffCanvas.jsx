import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/GlobalContext";
import { Button } from "react-bootstrap";

const OffCanvas = () => {
  const { sepet, sepetTutari } = useContext(AppContext);

  const navigate = useNavigate();
  return (
    <div>
      <div
        className="card mb-3 "
        style={{ fontSize: "2rem", backgroundColor: "#852336", color: "white" }}
      >
        {" "}
        Sipariş Özeti
      </div>

      <div className="card mb-3" style={{ maxWidth: "540px" }}>
        {sepet.map((urun, index) => (
          <div className="row g-0">
            <div key={index} className="col-md-4">
              <img
                src={urun.image}
                className="card-img-top m-auto"
                alt="..."
                style={{
                  height: "100px",
                  cursor: "pointer",
                  width: "100px",
                }}
                onClick={() => navigate(`urun/${urun.id}`)}
              />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                <h5 className="card-title">{urun.title}</h5>
                <p className="card-text">Fiyat: {urun.price} ₺</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div
        className="card mb-3 "
        style={{ fontSize: "2rem", backgroundColor: "#852336", color: "white" }}
      >
        {" "}
        Toplam Fiyat: {sepetTutari()} ₺
      </div>
    </div>
  );
};

export default OffCanvas;
