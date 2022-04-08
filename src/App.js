import logo from './logo.svg';
import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import AvailableParking from './components/AvailableParking';
import Available from './components/Available';
import Unavailable from './components/Unavailable';
import Pay from './components/Pay';
import Handicap from './components/Handicap';
import Permit from './components/Permit';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/available' element={[<AvailableParking />]} />
        <Route path='/s001' element={[<Available />]} />
        <Route path='/s002' element={[<Unavailable />]} />
        <Route path='/s003' element={[<Pay />]} />
        <Route path='/s004' element={[<Handicap />]} />
        <Route path='/s005' element={[<Permit />]} />
      </Routes>
    </BrowserRouter>


  );
}

export default App;
