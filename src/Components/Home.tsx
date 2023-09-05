import { Link } from "react-router-dom";

export default function Home() {

    return (
        <div>
            <Link to={'/trips'}>
                <button
                >כל הטיולים</button>
            </Link>

            <Link to={'/login'}>
                <button
                >התחברות</button>
            </Link>

            <Link to={'/registration'}>
                <button
                >רישום משתמש חדש</button>
            </Link>

        </div>
    )
}