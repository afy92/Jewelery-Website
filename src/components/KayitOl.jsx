import React, { useState, useCallback } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { Link } from "react-router-dom";

function KayitOl() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!email || !password) {
        return;
      }
      createUserWithEmailAndPassword(auth, email, password)
        .then(() => {
          alert("Kayıt oldunuz!");
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
      <section
        className="vh-100 bg-image"
        style={{
          backgroundImage:
            'url("https://mdbcdn.b-cdn.net/img/Photos/new-templates/search-box/img4.webp")',
        }}
      >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={{ borderRadius: "15px" }}>
                  <div className="card-body p-5">
                    <h2 className="text-uppercase text-center mb-5">
                      Hesap Oluştur
                    </h2>
                    <form onSubmit={handleSubmit}>
                      {/* <div className="form-outline mb-4"> */}
                      {/* <input
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" htmlFor="form3Example1cg">
                          Adınız
                        </label> */}
                      {/* </div> */}
                      <div className="form-outline mb-4">
                        <input
                          type="email"
                          className="form-control form-control-lg"
                          value={email}
                          onChange={(e) => setEmail(e.currentTarget.value)}
                        />
                        <label className="form-label" htmlFor="form3Example3cg">
                          Email adresiniz
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          type="password"
                          className="form-control form-control-lg"
                          value={password}
                          onChange={(e) => setPassword(e.currentTarget.value)}
                        />
                        <label className="form-label" htmlFor="form3Example4cg">
                          Şifre
                        </label>
                      </div>
                      {/* <div className="form-outline mb-4">
                        <input
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                        <label
                          className="form-label"
                          htmlFor="form3Example4cdg"
                        >
                          Şifre (Tekrar)
                        </label>
                      </div> */}
                      <div className="form-check d-flex justify-content-center mb-5">
                        <input
                          className="form-check-input me-2"
                          type="checkbox"
                          defaultValue
                          id="form2Example3cg"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="form2Example3g"
                        >
                          I agree all statements in{" "}
                          <a href="#!" className="text-body">
                            <u>Terms of service</u>
                          </a>
                        </label>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          disabled={!email || !password}
                          type="submit"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                          // onClick={handleSubmit}
                        >
                          Kayıt Ol!
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Zaten hesabınız var mı?{" "}
                        <Link to="/girisyap" style={{ color: "#393f81" }}>
                          Giriş Yap!
                        </Link>
                      </p>
                    </form>
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

export default KayitOl;
