import { Link, useNavigate } from "react-router-dom";
import { Trip } from "./interface/interfaceTrip";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "./footer";

export default function TripDetail() {
  const [trip, setTrip] = useState<Trip | null>(null);
  const { id } = useParams();
  const navigate = useNavigate();

  const getTrip = async () => {
    try {
      const res = await axios.get<Trip>(
        `http://localhost:3000/api/trips/${id}`
      );

      if (res.data) {
        const tripsFromServer: Trip = res.data;
        setTrip(tripsFromServer);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const deleteTripFromServer = async () => {
    try {
      const options = {
        headers: { authorization: localStorage.getItem("token") },
      };
      const res = await axios.delete(
        `http://localhost:3000/api/trips/${id}`,
        options
      );

      if (res.data) {
        navigate(`/trips`);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrip();
  }, []);

  const updateTrip = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/negation");
    } else {
      navigate(`/update/${id}`);
    }
  };

  const deleteTrip = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/negation");
    } else {
      if (confirm("Delete trip?") === true) deleteTripFromServer();
    }
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
      {trip === null ? (
        <p></p>
      ) : (
        <div className="page">
          <div id="onlyTripCard" key={trip.id}>
            <img
              id={trip.id === "4" ? "ingOnlyCard4" : "imgOnlyCard"}
              src={trip.image}
            />
            <div>
              <h4>destination</h4>
              <p>{trip.destination}</p>

              <h4>name</h4>
              <p>{trip.name}</p>

              <h4>startDate</h4>
              <p>{trip.startDate}</p>

              <h4>endDate</h4>
              <p>{trip.endDate}</p>

              <h4>activities</h4>
              <p>{trip.activities.join(", ")}</p>

              <h4>id</h4>
              <p>{trip.id}</p>

              <hr></hr>

              <div id="icons">
                {
                  <link
                    href="https://fonts.googleapis.com/icon?family=Material+Icons"
                    rel="stylesheet"
                  ></link>
                }
                <i
                  id="deleteIcon"
                  className="material-icons"
                  onClick={() => {
                    deleteTrip();
                  }}
                >
                  delete
                </i>
                <i
                  id="editIcon"
                  className="material-icons"
                  onClick={() => updateTrip()}
                >
                  edit
                </i>
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </main>
  );
}
