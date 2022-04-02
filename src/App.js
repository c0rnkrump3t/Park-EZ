import logo from './logo.svg';
import './App.css';
import {Route, Routes} from 'react-router-dom';
import AvailableParking from './components/AvailableParking';

function App() {
  return (
    <Routes>
  
   <Route path='/available' element={[<AvailableParking/>]} />



    </Routes>


  );
}

export default App;
