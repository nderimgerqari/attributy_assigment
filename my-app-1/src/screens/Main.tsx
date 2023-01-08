import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Details } from "./Details";
import { Overview } from "./Overview";

// Screens

const Main = () => {
    return (
        <div className='dashboard__wrapper'>
            <Router>
                <Routes>
                    <Route path='/' element={<Overview />} />
                    <Route path='/details/:id' element={<Details />} />
                </Routes>
            </Router>
        </div>
    );
};

export default Main;
