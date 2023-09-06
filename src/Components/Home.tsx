import { Link } from "react-router-dom";

export default function Home() {

    return (
        <main>
            <header id="headerHome">
                <h1>
                welcome
                </h1>
            </header>
            <div className="page">
                <Link to={'/trips'}>
                    <button
                    >All trips</button>
                </Link>

                <Link to={'/login'}>
                    <button
                    >Log in</button>
                </Link>

                <Link to={'/registration'}>
                    <button
                    >Registration</button>
                </Link>
            </div>
            <footer>
                <h2>
                    בניית אתרים: דודי 0533114605
                </h2>
            </footer>
        </main>
    )
}