import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Available from './components/Available';
import Unavailable from './components/Unavailable';
import Pay from './components/Pay';
import Handicap from './components/Handicap';
import Permit from './components/Permit';

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path='/s001' element={[<Unavailable message="Available AFTER" date="Friday, April 8, 2022" time="8:00 A.M." />]} />
        <Route path='/s002' element={[<Available message="Available for 15 Minutes" />]} />
        <Route path='/s003' element={[<Permit sector="35" message="Available until" date="Tuesday, May 3, 2022" time="9:00 A.M." />]} />
        <Route path='/s004' element={[<Unavailable message="Available with Handicap permit AFTER" date="Thursday, November 17, 2022" time="1:30 P.M." />]} />
        <Route path='/s005' element={[<Handicap />]} />
        <Route path='/s006' element={[<Pay message="Payment required until" date="Saturday, April 9, 2022" time="6:00 P.M." />]} />
        <Route path='/s007' element={[<Available message="Available until" date="Monday, February 7, 2022" time="8:00 A.M." />]} />
        <Route path='/s008' element={[<Unavailable message="Available AFTER" date="Tuesday, July 12, 2022" time="8:00 A.M." />]} />
        <Route path='/s009' element={[<Unavailable message="Available AFTER" date="Wednesday, April 27, 2022" time="5:00 P.M." />]} />
        <Route path='/s010' element={[<Available message="Available until" date="Friday, April 8, 2022" time="9:00 A.M." />]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
