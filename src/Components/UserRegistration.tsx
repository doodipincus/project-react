import { Link } from "react-router-dom";
import axios from "axios";
import { useState, FormEvent, ChangeEvent } from "react";
import Footer from "./footer";

export default function UserRegistration() {
  const [input, setInput] = useState<any>({
    email: "",
    password: "",
  });
  const [resp, setResp] = useState<string>("");

  const register = async () => {
    try {
      const options = {
        headers: { authorization: "test-token" },
      };
      const res = await axios.post(
        "http://localhost:3000/api/auth/register",
        input,
        options
      );
      if (res.data) {
        setResp(res.data.message);
      }
    } catch (error) {
      console.error(error);
      setResp("");
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

  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    register();
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
            submit
          </button>
        </form>
        {!resp ? (
          <p></p>
        ) : (
          <div className="approval">
            <h1>{resp}</h1>
            <Link to={"/login"}>
              <button>Log in</button>
            </Link>
          </div>
        )}
      </div>
      <Footer />
    </main>
  );
}
