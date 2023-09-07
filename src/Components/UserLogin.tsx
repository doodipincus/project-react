import { Link } from "react-router-dom";
import axios from "axios";
import { useState, FormEvent, ChangeEvent } from "react";
import Footer from "./footer";

export default function UserLogin() {
  const [input, setInput] = useState<any>({
    email: "",
    password: "",
  });

  const [localToken, setLocalToken] = useState<string>("");

  const login = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3000/api/auth/login`,
        input
      );
      if (res.data) {
        localStorage.setItem("token", res.data.responseObj.token);
        setLocalToken(res.data.responseObj.token);
      }
    } catch (error) {
      console.error(error);
      localStorage.setItem("token", "");
    }
  };

  function handleChange(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = e.target.value;
    setInput({
      ...input,
      [e.target.name]: value,
    });
  }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await login();
  };

  return (
    <main>
      <header>
        <div id="icon-header">
          {
            <link
              href="https://fonts.googleapis.com/icon?family=Material+Icons"
              rel="stylesheet"
            ></link>
          }
          <Link to={"/"}>
            <i id="homeIcon" className="material-icons">
              home
            </i>
          </Link>
        </div>
      </header>
      <div className="page">
        <form onSubmit={submit}>
          <label>
            email
            <input
              name="email"
              value={input.email}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            password
            <input
              name="password"
              value={input.password}
              onChange={handleChange}
            ></input>
          </label>
          <button type="submit" className="buttons">
            Log in
          </button>
        </form>
        {!localToken ? (
          <p></p>
        ) : (
          <div className="approval">
            <h1>your token:</h1>
            <h3>{localToken}</h3>
            <Link to={"/trips"}>
              <button>All trips</button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
