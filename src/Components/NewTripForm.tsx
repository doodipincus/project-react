import { Link, useNavigate } from "react-router-dom";
import { useState, ChangeEvent, FormEvent } from "react"
import axios from 'axios'
import { Trip } from "./interface/interfaceTrip"


export default function NewTripForm() {

    const [input, setInput] = useState<Trip>({
        id: '',
        name: '',
        destination: '',
        startDate: '',
        endDate: '',
        description: '',
        price: null,
        image: '',
        activities: []
    })
    const navigate = useNavigate();

    const addTrip = async () => {
        try {
            const options = {
                headers: { 'authorization': localStorage.getItem('token') }
            };
            const res = await axios.post("http://localhost:3000/api/trips", input, options)
            if (res.data) {
                getTripById(res.data.id)
            }
        } catch (error) {
            console.error(error)
        }
    }

    const getTripById = (id: string) => {
        navigate(`/tripDetail/${id}`);
    }

    function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
        const { name, value } = e.target;
        let arr: any[] = []
        if (name === "activities") {
            arr = value.split(',')
        }
        setInput({
            ...input,
            [name]: name === "activities" ? arr : value,
        });
    }

    const submit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        addTrip()
    }

    return (
        <main>
            <header>
            <div id="icon-header">
                    {<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet"></link>}
                    <Link to={'/'}>
                        <i id="homeIcon" className="material-icons">home</i>
                    </Link>
                </div>
                <Link to={'/trips'}>
                    <button>All trips</button>
                </Link>
            </header>
            <div className="page">
                <form onSubmit={submit}>

                    <h3 className="titles">add trip</h3>

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
                        destination
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

                    <button type="submit" className="buttons">submit</button>
                </form>
            </div>

            <footer>
                <h2>
                    בניית אתרים: דודי 0533114605
                </h2>
            </footer>
        </main >
    )
}
