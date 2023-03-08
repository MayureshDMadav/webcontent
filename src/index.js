import React from 'react';
import ReactDOM from 'react-dom/client';
import Musicplayer from './component/musicplayer/musicplayer';
import Mainpage from './pages/mainpage'
import Urlshortner from './component/urlshortner/urlshortner';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   {/* <Musicplayer/> */}
    {/* <Weatherapp /> */}
    <Mainpage/>
  </React.StrictMode>
);
