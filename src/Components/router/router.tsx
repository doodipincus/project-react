import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Home';
import AllTrips from '../Trips';
import UserLogin from '../UserLogin';
import UserRegistration from '../UserRegistration';
import NewTripForm from '../NewTripForm';
import TripDetail from '../TripDetail';
import UpdateTripForm from '../UpdateTripForm';
import Negation from '../negation';


function Routers() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/trips" element={<AllTrips />} />
                    <Route path='/login' element={<UserLogin />} />
                    <Route path='/registration' element={<UserRegistration />} />
                    <Route path='/tripDetail/:id' element={<TripDetail />} />
                    <Route path='/newTrip' element={<NewTripForm />} />
                    <Route path='/update/:id' element={<UpdateTripForm />} />
                    <Route path='/negation' element={<Negation />} />
                </Routes>
            </Router>
        </div>
    )
}
export default Routers