import './App.css';
import 'antd/dist/antd.css';

import Footer from './components/UI/organisms/footer/Footer';
import LandingPage from './components/pages/landing-page/LandingPage';
import Navbar from './components/UI/organisms/navbar/Navbar';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

const App = () => {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <Routes>
                    <Route path="/" element={<LandingPage />}/>
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
