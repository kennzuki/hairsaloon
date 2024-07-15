import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Admin from './pages/Admin.jsx';
import Services from './pages/Services.jsx';
import Staff from './pages/Staff.jsx';
import Home from './pages/Home.jsx';
import Booking from './pages/Booking.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Routes>
      {/*Set the default route to render the App component containing the header along with the target page*/}
      <Route path='/' element={<App />}>
        {/*Set global routes with Home as the default Outlet route*/}
        <Route index element={<Home />} />
        <Route path='staff' element={<Staff />} />
        <Route path='services' element={<Services />} />
        <Route path='booking' element={<Booking />} />
        <Route path='admin' element={<Admin />} />
      </Route>
    </Routes>
  </Router>
);
