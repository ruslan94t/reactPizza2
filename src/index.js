import React from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
//import './scss/app.scss';
import './App.css'
import App from './App';


render(
  <BrowserRouter>
    {/* <Routes>
      <Route exact path="/" element={<App />} ></Route>

    </Routes> */}
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);

