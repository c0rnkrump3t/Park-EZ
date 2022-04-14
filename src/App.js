import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Available from './components/Available';
import Unavailable from './components/Unavailable';
import Pay from './components/Pay';
import Handicap from './components/Handicap';
import Permit from './components/Permit';
import Details from './components/details';

function App() {
  return (

    <BrowserRouter>
      <Routes>

        <Route path='/s001' element={[<Unavailable message="Available AFTER" date="Friday, April 8, 2022" time="8:00 A.M." sign="001"/>]} />
        <Route path='/s002' element={[<Available message="Available for 15 Minutes" sign="002"/>]} />
        <Route path='/s003' element={[<Permit sector="35" message="Available until" date="Tuesday, May 3, 2022" time="9:00 A.M." sign="003" />]} />
        <Route path='/s004' element={[<Unavailable message="Available with Handicap permit AFTER" date="Thursday, November 17, 2022" time="1:30 P.M." sign="004" />]} />
        <Route path='/s005' element={[<Handicap sign="005" />]}  />
        <Route path='/s006' element={[<Pay message="Payment required until" date="Saturday, April 9, 2022" time="6:00 P.M." sign="006" />]} />
        <Route path='/s007' element={[<Available message="Available until" date="Monday, February 7, 2022" time="8:00 A.M." sign="007" />]} />
        <Route path='/s008' element={[<Unavailable message="Available AFTER" date="Tuesday, July 12, 2022" time="8:00 A.M." sign="008"/>]} />
        <Route path='/s009' element={[<Unavailable message="Available AFTER" date="Wednesday, April 27, 2022" time="5:00 P.M." sign="009"/>]} />
        <Route path='/s010' element={[<Available message="Available until" date="Friday, April 8, 2022" time="9:00 A.M." sign="010"/>]} />
       
       {/* Signage Details */}
        <Route path='/details001' element={[<Details image= 'https://imgur.com/lK63dXC.png' sign="001"/>]} />
        <Route path='/details002' element={[<Details image= 'https://imgur.com/PUjNLsG.png' sign="002"/>]} />
        <Route path='/details003' element={[<Details image= 'https://imgur.com/jVmGizh.png' sign="003"/>]} />
        <Route path='/details004' element={[<Details image= 'https://imgur.com/eeGer77.png' sign="004"/>]} />
        <Route path='/details005' element={[<Details image= 'https://imgur.com/YjjOPhs.png' sign="005"/>]} />
        <Route path='/details006' element={[<Details image= 'https://imgur.com/Y8NIETU.png' sign="006"/>]} />
        <Route path='/details007' element={[<Details image= 'https://imgur.com/HpmcTeB.png' sign="007"/>]} />
        <Route path='/details008' element={[<Details image= 'https://imgur.com/AS0y7bt.png' sign="008"/>]} />
        <Route path='/details009' element={[<Details image= 'https://imgur.com/5J0Zf6U.png' sign="009"/>]} />
        <Route path='/details010' element={[<Details image= 'https://imgur.com/j86d4ry.png' sign="010"/>]} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
