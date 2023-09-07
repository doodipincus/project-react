import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import "../style.css";
import { Trip } from "./interface/interfaceTrip";
import Footer from "./footer";

export default function AllTrips() {
  const [trips, setTrips] = useState<Trip[] | null>(null);
  const navigate = useNavigate();

  const getTrips = async () => {
    try {
      const res = await axios.get<Trip[]>("http://localhost:3000/api/trips");
      if (res.data) {
        const tripsFromServer: Trip[] = res.data;
        setTrips(tripsFromServer);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTrips();
  }, []);

  const getTripById = (id: string) => {
    navigate(`/tripDetail/${id}`);
  };

  const addTrip = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/negation");
    } else {
      navigate("/newTrip");
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

          <i
            id="addIcon"
            className="material-icons"
            onClick={() => {
              addTrip();
            }}
          >
            add_circle_outline
          </i>
        </div>
      </header>
      <div className="page">
        <div id="cards">
          {trips === null ? (
            <p></p>
          ) : (
            trips.map((trip) => {
              return (
                <div
                  id="tripCard"
                  key={trip.id}
                  onClick={() => getTripById(trip.id)}
                >
                  <img src={trip.image} />
                  <hr></hr>
                  <h3>{trip.name}</h3>
                </div>
              );
            })
          )}
        </div>
      </div>
      <Footer />
    </main>
  );
}
