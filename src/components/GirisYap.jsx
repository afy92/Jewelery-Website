import React, { useState, useCallback } from "react";
import { Link } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

function GirisYap() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email || !password) {
        return;
      }
      signInWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Giriş yaptınız!");
        })
        .catch((e) => {
          console.log(e);
        });
      // const user = await register(email, password);
      // console.log(user);
      console.log(email, password);
    },
    [email, password]
  );
  return (
    <div>
      <section className="vh-100" style={{ backgroundColor: "#9A616D" }}>
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      className="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <form onSubmit={handleSubmit}>
                        <div className="d-flex align-items-center mb-3 pb-1">
                          <span className="h1 fw-bold mb-0">
                            Hoşgeldiniz &nbsp;
                            <i
                              class="fa-solid fa-heart"
                              style={{ color: "#862337" }}
                            ></i>
                          </span>
                        </div>
                        <h5
                          className="fw-normal mb-3 pb-3"
                          style={{ letterSpacing: "1px" }}
                        >
                          Hesabınıza giriş yapın
                        </h5>
                        <div className="form-outline mb-4">
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.currentTarget.value)}
                            id="form2Example17"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example17"
                          >
                            Email adresi
                          </label>
                        </div>
                        <div className="form-outline mb-4">
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.currentTarget.value)}
                            id="form2Example27"
                            className="form-control form-control-lg"
                          />
                          <label
                            className="form-label"
                            htmlFor="form2Example27"
                          >
                            Şifre
                          </label>
                        </div>
                        <div className="pt-1 mb-4">
                          <button
                            className="btn btn-lg btn-block"
                            type="submit"
                            style={{
                              backgroundColor: "#862337",
                              color: "#fff",
                            }}
                          >
                            Giriş Yap
                          </button>
                        </div>
                        <Link to="/sifremiunuttum" className="small text-muted">
                          Şifrenizi mi unuttunuz?
                        </Link>
                        <p
                          className="mb-5 pb-lg-2"
                          style={{ color: "#393f81" }}
                        >
                          Hesabınız yok mu?{" "}
                          <Link to="/kayitol" style={{ color: "#393f81" }}>
                            Kayıt olun
                          </Link>
                        </p>
                        <a href="#!" className="small text-muted">
                          Terms of use.
                        </a>
                        <a href="#!" className="small text-muted">
                          Privacy policy
                        </a>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GirisYap;
