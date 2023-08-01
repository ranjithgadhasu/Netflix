import React from 'react';
import './css/App.css';
import { Routes,  Route, BrowserRouter} from "react-router-dom";
import Main from './pages/index';
import Login from './pages/Login';
import ChoosePlan from './pages/ChoosePlan';


function App() {
  return (
    <BrowserRouter>
 <Routes>
  <Route path="/" Component={Main} />
  <Route path="/login" Component={Login} />
  <Route path="/choose-plan" Component={ChoosePlan} />
 </Routes>
 </BrowserRouter>
  );
};


export default App;
