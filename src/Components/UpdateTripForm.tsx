import { Link, useNavigate } from "react-router-dom";
import { useState} from 'react'
import { Trip } from "./interface/interfaceTrip"
import axios from 'axios'
import { useParams } from "react-router-dom"



export default function UpdateTripForm() {

    // const [trip, setTrip] = useState<Trip | null>(null)
    const [input, setInput] = useState<Trip>({
        id: '',
        name: '',
        destination: '',
        startDate: '',
        endDate: '',
        description: '',
        price: 0,
        image: '',
        activities: []
    })
    const navigate = useNavigate();

    const { id } = useParams()


    const changeTrip = async () => {
        try {
            const options = {
                headers: { 'authorization': 'test-token' }
            };
            const res = await axios.put(`http://localhost:3000/api/trips/${id}`, input, options)
            if (res.data) {
                // setTrip(res.data)
                getTripById(res.data.id)
            }
        } catch (error) {
            console.error(error)
        }
    }

    function handleChange(e) {
        const value = e.target.value;
        setInput({
            ...input,
            [e.target.name]: value
        });
    }


    const getTripById = (id: string) => {
        navigate(`/tripDetail/${id}`);
    }
    const submit = (e) => {
        e.preventDefault();
        changeTrip()
    }

    return (
        <main>
            <header>
                <Link to={'/trips'}>
                    <button>all trips</button>
                </Link>
            </header>

            <form onSubmit={submit}>
                <h3>update</h3>
                <label>
                    id
                    <input
                        name="id"
                        value={input.id}
                        onChange={handleChange} >
                    </input>
                </label>
                <label>
                    name
                    <input name="name"
                        value={input.name}
                        onChange={handleChange} >

                    </input>
                </label>
                <label>
                    startDate
                    <input name="startDate"
                        value={input.startDate}
                        onChange={handleChange}></input>
                </label>
                <label>
                    endDate
                    <input name="endDate"
                        value={input.endDate}
                        onChange={handleChange}></input>
                </label>
                <label>
                    description
                    <input name="destination"
                        value={input.destination}
                        onChange={handleChange}></input>
                </label>
                <label>
                    price
                    <input name="price"
                        value={input.price}
                        onChange={handleChange}></input>
                </label>
                <label>
                    image
                    <input name="image"
                        value={input.image}
                        onChange={handleChange}></input>
                </label>
                <label>
                    activities
                    <input name="activities"
                        value={input.activities}
                        onChange={handleChange}></input>
                </label>
                <button type="submit">submit</button>
            </form>

        </main>
    )
}