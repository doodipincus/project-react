import { Link } from "react-router-dom";
import { User } from "./interface/interfaceUser"
import axios from 'axios'
import { useState } from 'react'

export default function UserRegistration() {

    const [input, setInput] = useState<any>({
        role: '',
        email: '',
        password: ''
    })

    const register = async () => {
        try {

            const options = {
                headers: { 'authorization': 'test-token' }
            };

            const res = await axios.post("http://localhost:3000/api/auth/register", input, options)

            if (res.data) {
                console.log(res.data);

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

    const submit = (e) => {
        e.preventDefault();
        register()
    }
    
    return (
        <main>
            <header>

                <Link to={'/home'}>
                    <button>all trips</button>
                </Link>
            </header>
            <form onSubmit={submit}>

                <label>
                    role
                    <input name="role"
                        value={input.role}
                        onChange={handleChange} >

                    </input>
                </label>
                <label>
                    email
                    <input name="email"
                        value={input.email}
                        onChange={handleChange} >

                    </input>
                </label>
                <label>
                    password
                    <input name="password"
                        value={input.password}
                        onChange={handleChange} >

                    </input>
                </label>
                <button type="submit">submit</button>

            </form>
        </main>
    )
}