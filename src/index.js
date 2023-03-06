import React from 'react';
import ReactDOM from 'react-dom/client';
import Mainpage from './pages/mainpage';
import Openaiimage from './component/imageGen/openaiimage';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Openaiimage />
    {/* <Weatherapp /> */}
  </React.StrictMode>
);
