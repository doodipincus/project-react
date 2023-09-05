import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import '../style.css';
import { Trip } from "./interface/interfaceTrip";

export default function AllTrips() {
    const [trips, setTrips] = useState<Trip[] | null>(null);
    const navigate = useNavigate();

    const getTrips = async () => {
        try {
            const res = await axios.get<Trip[]>('http://localhost:3000/api/trips');
            if (res.data) {
                const tripsFromServer: Trip[] = res.data;
                setTrips(tripsFromServer);
            }
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getTrips();
    }, []);

    const getTripById = (id: string) => {
        navigate(`/tripDetail/${id}`);
    }

    return (
        <main>
            <header>
                <Link to={'/home'}>
                    <button>עמוד בית</button>
                </Link>
                <Link to={'/newTrip'}>
                    <button>יצירת טיול חדש</button>
                </Link>
            </header>

            <div id="cards">
                {trips === null ? (
                    <p></p>
                ) : (
                    trips.map((trip) => {
                        return (
                            <div id="tripCard" key={trip.id} onClick={() => getTripById(trip.id)}>
                                <img src={trip.image} />
                                <h4>name: {trip.name}</h4>
                                {/* <button onClick={() => { }}>delete</button> */}
                            </div>
                        );
                    })
                )}
            </div>
        </main>
    )
}
