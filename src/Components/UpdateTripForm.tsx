import { Link, useNavigate } from "react-router-dom";
import { useState, FormEvent, ChangeEvent } from "react";
import { Trip } from "./interface/interfaceTrip";
import axios from "axios";
import { useParams } from "react-router-dom";
import Footer from "./footer";

export default function UpdateTripForm() {
  const [input, setInput] = useState<Trip>({
    id: "",
    name: "",
    destination: "",
    startDate: "",
    endDate: "",
    description: "",
    price: null,
    image: "",
    activities: [],
  });
  const navigate = useNavigate();

  const { id } = useParams();

  const changeTrip = async () => {
    try {
      const options = {
        headers: { authorization: localStorage.getItem("token") },
      };
      const res = await axios.put(
        `http://localhost:3000/api/trips/${id}`,
        input,
        options
      );
      if (res.data) {
        getTripById(res.data.id);
      }
    } catch (error) {
      console.error(error);
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

  const getTripById = (id: string) => {
    navigate(`/tripDetail/${id}`);
  };
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    changeTrip();
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
        <Link to={"/trips"}>
          <button>All trips</button>
        </Link>
      </header>
      <div className="page">
        <form onSubmit={submit}>
          <h3 className="titles">update</h3>
          <label>
            name
            <input
              name="name"
              value={input.name}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            startDate
            <input
              name="startDate"
              value={input.startDate}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            endDate
            <input
              name="endDate"
              value={input.endDate}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            description
            <input
              name="destination"
              value={input.destination}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            price
            <input
              name="price"
              value={input.price}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            image
            <input
              name="image"
              value={input.image}
              onChange={handleChange}
            ></input>
          </label>
          <label>
            activities
            <input
              name="activities"
              value={input.activities}
              onChange={handleChange}
            ></input>
          </label>
          <button type="submit" className="buttons">
            submit
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}
