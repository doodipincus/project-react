import { Link } from "react-router-dom";


export default function Negation() {
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
                <h1 id="negation">You are not a manager</h1>
            </div>
            <footer>
                <h2>
                    בניית אתרים: דודי 0533114605
                </h2>
            </footer>
        </main>
    )
}