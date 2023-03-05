import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import Mainpage from './pages/mainpage';
import Weatherapp from './pages/weatherapp';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Mainpage /> */}
    <Weatherapp />
  </React.StrictMode>
);
