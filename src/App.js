import './App.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Available from './components/Available';
import Unavailable from './components/Unavailable';
import Pay from './components/Pay';
import Handicap from './components/Handicap';
import Permit from './components/Permit';
import Details from './components/details';
import GoogleMap from './components/GoogleMap';
import HomePage_en from './components/HomePage_en';
import HomePage_fr from './components/HomePage_fr';

function App(props) {
  return (

    <BrowserRouter>
      <Routes>

        <Route path='/' element={[<HomePage_en/>]} />

        {/* Path to English ver of signs */}
        <Route path='/s001' element={[<Unavailable message="Available AFTER" date="Friday, April 8, 2022" time="8:00 A.M." sign="001" details="Details" alternatives="See alternatives" lang="001"/>]} />
        <Route path='/s002' element={[<Available message="Available for 15 Minutes" sign="002" details="Details"/>]} />
        <Route path='/s003' element={[<Permit sector="35" message="Available until" date="Tuesday, May 3, 2022" time="9:00 A.M." sign="003" details="Details" permitLabel="BY PERMIT ONLY" sectorLabel="SECTOR"/>]} />
        <Route path='/s004' element={[<Unavailable message="Available with Handicap permit AFTER" date="Thursday, November 17, 2022" time="1:30 P.M." sign="004" details="Details" alternatives="See alternatives" />]} />
        <Route path='/s005' element={[<Handicap sign="005" message="ONLY" details="Details"/>]}  />
        <Route path='/s006' element={[<Pay message="Payment required until" date="Saturday, April 9, 2022" time="6:00 P.M." sign="006"  details="Details" pay="Pay"/>]} />
        <Route path='/s007' element={[<Available message="Available until" date="Monday, February 7, 2022" time="8:00 A.M." sign="007"  details="Details" />]} />
        <Route path='/s008' element={[<Unavailable message="Available AFTER" date="Tuesday, July 12, 2022" time="8:00 A.M." sign="008" details="Details" alternatives="See alternatives"/>]} />
        <Route path='/s009' element={[<Unavailable message="Available AFTER" date="Wednesday, April 27, 2022" time="5:00 P.M." sign="009" details="Details" alternatives="See alternatives"/>]} />
        <Route path='/s010' element={[<Available message="Available until" date="Friday, April 8, 2022" time="9:00 A.M." sign="010" details="Details"/>]} />
        
        {/* Path to French ver of signs */}
        <Route path='/s001-fr' element={[<Unavailable message="Disponible APRÈS" date="Vendredi, 8 Avril, 2022" time="8h" sign="001" details="Détails" alternatives="Voir des alternatives" />]} />
        <Route path='/s002-fr' element={[<Available message="Disponible pendant 15 minutes" sign="002" details="Détails"/>]} />
        <Route path='/s003-fr' element={[<Permit sector="35" message="Disponible jusqu'au" date="Mardi, 3 Mai, 2022" time="9h" sign="003" details="Détails" permitLabel="AVEC PERMIS SEULEMENT" sectorLabel="SECTEUR" />]} />
        <Route path='/s004-fr' element={[<Unavailable message="Disponible avec le permis Handicap APRÈS" date="Jeudi , 17 Novembre, 2022" time="13h30" sign="004" details="Détails" alternatives="Voir des alternatives" />]} />
        <Route path='/s005-fr' element={[<Handicap sign="005" message="AVEC PERMIS SEULEMENT" details="Détails" />]}  />
        <Route path='/s006-fr' element={[<Pay message="Paiement requis jusqu'au" date="Samedi, 9 Avril, 2022" time="18h" sign="006" details="Détails"  pay="Payer" />]} />
        <Route path='/s007-fr' element={[<Available message="Disponible jusqu'au" date="Lundi, 7 Février, 2022" time="8h" sign="007" details="Détails"  />]} />
        <Route path='/s008-fr' element={[<Unavailable message="Disponible APRÈS" date="Mardi, 12 Juillet, 2022" time="8h" sign="008" details="Détails" alternatives="Voir des alternatives"/>]} />
        <Route path='/s009-fr' element={[<Unavailable message="Disponible APRÈS" date="Mercredi, 27 Avril, 2022" time="17h" sign="009" details="Détails" alternatives="Voir des alternatives"/>]} />
        <Route path='/s010-fr' element={[<Available message="Disponible jusqu'au" date="Vendredi, 8 Avril, 2022" time="9h" sign="010"  details="Détails"/>]} />

        {/* Page with list of sings */}
        <Route path='/HomePage_en' element={[<HomePage_en/>]} />
        <Route path='/HomePage_fr' element={[<HomePage_fr/>]} />


        {/* Path to Google Map with alternative parking spots */}
        <Route path='/map' element={[<GoogleMap />]} />

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
