import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./appmodules/css/global.css";
import Welcomepage from './appmodules/Welcomepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User_Landing from './appmodules/users/dashboard/User_Landing';
import User_Loginpage from './appmodules/users/auth/User_Loginpage';
import User_Registorpage from './appmodules/users/auth/User_Registorpage';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
        <Route path='' element={<Welcomepage/>}></Route>
        <Route path='userlogin' element={<User_Loginpage/>}></Route>
        <Route path='registor' element={<User_Registorpage/>}></Route>
        <Route path='landing' element={<User_Landing/>}></Route>
        


    </Routes>
   </BrowserRouter>

  </React.StrictMode>
);

