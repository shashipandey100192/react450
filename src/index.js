import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "./style.css";
import Abc from './About';
import { About1 } from './About';
import Mybootstrappage from './Mybootstrappage';
import Myreactbootstrap from './Myreactbootstrap';
import Muipage from './Muipage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <h1>welcome to react</h1>
    <input/>
    <h6>sdfshdgf</h6>
    <Abc></Abc>
    <About1></About1>
    <Mybootstrappage></Mybootstrappage>
    <h1>react bootstrap</h1>
    <Myreactbootstrap></Myreactbootstrap>
    <h1>MUI components</h1>
    <Muipage></Muipage>

  </React.StrictMode>
);

