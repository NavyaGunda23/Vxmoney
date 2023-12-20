import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimaryButton from './components/Button/PrimaryButton';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom'; 
import GameLandinPage from './GameLandinPage';
import FullAppViewPage from './FullAppViewPage';
import IndividualAppDetail from './IndividualAppDetail';
function App() {
  return (
    <div className="gamepage">
          <Router>  
           <Routes>  
           <Route  element={< GameLandinPage />}></Route>  
           <Route  path='/' element={< GameLandinPage />}></Route>
           <Route  path='/full' element={< FullAppViewPage />}></Route>
           <Route  path='/individual' element={< IndividualAppDetail />}></Route>
                 {/* <Route exact path='/' element={< DetailsPage />}></Route>  
                 <Route exact path='/nft' element={< NFTPage />}></Route> */}
          </Routes>  
       </Router> 
    </div>
  );
}

export default App;
