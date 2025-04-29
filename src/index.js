import React, { Suspense,lazy } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./appmodules/css/global.css";
import Welcomepage from './appmodules/Welcomepage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import User_Landing from './appmodules/users/dashboard/User_Landing';
import User_Loginpage from './appmodules/users/auth/User_Loginpage';
import User_Registorpage from './appmodules/users/auth/User_Registorpage';
import Myexprpage from './appmodules/users/dashboard/Myexprpage';
import User_Mainpage from './appmodules/users/dashboard/User_Mainpage';
import Myaxiospage from './appmodules/users/dashboard/Myaxiospage';
import Productdetailspage from './appmodules/users/dashboard/Productdetailspage';
import Mygraphpage from './appmodules/users/dashboard/Mygraphpage';
import Mainbranch from './appmodules/users/dashboard/Mainbranch';
// import Myloading from './appmodules/users/dashboard/Myloading';
const Myloading = lazy(()=>import('./appmodules/users/dashboard/Myloading'));


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <BrowserRouter>
    <Routes>
        <Route path='' element={<Welcomepage/>}></Route>
        <Route path='userlogin' element={<User_Loginpage/>}></Route>
        <Route path='registor' element={<User_Registorpage/>}></Route>
        <Route path='landing' element={<User_Landing/>}>
            <Route path='' element={<User_Mainpage/>}></Route>
            <Route path='aboutjsx' element={<Myexprpage/>}></Route>
            <Route path='axiosapi' element={<Myaxiospage/>}></Route>
            <Route path='axiosapi/productdetails/:id' element={<Productdetailspage/>}></Route>
            <Route path='mychart' element={<Mygraphpage/>}></Route>
            <Route path='myprops' element={<Mainbranch/>}></Route>
            <Route path='lazypage' element={
              <Suspense fallback={<h1 className='loading'>Page is loading...</h1>}>
                <Myloading></Myloading>
              </Suspense>
            }></Route>
        
        </Route>
        
    </Routes>
   </BrowserRouter>

  </React.StrictMode>
);

