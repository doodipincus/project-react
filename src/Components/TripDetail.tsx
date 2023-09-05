import { Link, useNavigate } from "react-router-dom";
import { Trip } from "./interface/interfaceTrip"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import axios from 'axios'


export default function TripDetail() {

    const [trip, setTrip] = useState<Trip | null>(null)
    const { id } = useParams()
    const navigate = useNavigate();

    const getTrip = async () => {
        try {
            const res = await axios.get<Trip>(`http://localhost:3000/api/trips/${id}`)

            if (res.data) {
                const tripsFromServer: Trip = res.data
                setTrip(tripsFromServer)

            }
        } catch (error) {
            console.error(error)
        }
    }

    const deleteTripFromServer = async () => {
        try {
            const options = {
                headers: { 'authorization': 'test-token' }
            };
            const res = await axios.delete(`http://localhost:3000/api/trips/${id}`, options)

            if (res.data) {
                navigate(`/trips`);
            }
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getTrip()
    }, [])

    const updateTrip = () => {
        navigate(`/update/${id}`);
    }

    const deleteTrip = () => {
        deleteTripFromServer()
    }

    return (
        <main>
            <header>
                <Link to={'/trips'}>
                    <button>all trips</button>
                </Link>
            </header>
            {trip === null ? (
                <p></p>
            ) : (
                <div id="tripCard" key={trip.id}>
                    <img src={trip.image} />
                    <p>destination: {trip.destination}</p>
                    <p>endDate: {trip.endDate}</p>
                    <p>id: {trip.id}</p>
                    <p>name: {trip.name}</p>
                    <p>startDate: {trip.startDate}</p>
                    <button onClick={() => { deleteTrip() }}>delete</button>

                    <button onClick={() => updateTrip()}>update trip</button>

                </div>
            )}
        </main>
    )
}