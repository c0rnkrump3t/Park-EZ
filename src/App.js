import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import AvailableParking from './components/AvailableParking';
import S001 from './components/S001';

function App() {
  return (
    <Routes>
  
   <Route path='/available' element={[<AvailableParking/>]} />
   <Route path='/s001' element={[<S001/>]} />



    </Routes>


  );
}

export default App;
