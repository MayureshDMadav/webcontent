import React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import "../component/style.css";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Modal from "../component/modal";
import Weatherapp from "../component/weatherapp/weatherapp";
import BoxSx from "../component/box";
import data from "../component/assets/data.json";
import weather from "../component/weatherapp/img/weather.png";
import music from "../component/musicplayer/img/music.png";
import urlShort from "../component/urlshortner/img/urlshortener.png";
import Musicplayer from "../component/musicplayer/musicplayer";
import Reciepe from "../component/reciepe/reciepe";
import Youtube from "../component/ytomp3/youtube";
import YoutubeImg from "../component/ytomp3/img/Youtube.png";
import Dictonary from "../component/dictionary/dictionary";
import Urlshortner from "../component/urlshortner/urlshortner";
import Receipe from "../component/reciepe/img/reciepe.png";
import dicImg from "../component/dictionary/img/dic.png";
import "../pages/mainPage.css";

const Mainpage = () => {
  function createData(column, column1, colum2) {
    return { column, column1, colum2 };
  }

  //Weather Box
  const weatherapp = <Weatherapp />;
  const box = (
    <BoxSx
      title={data[0].title}
      description={data[0].Description}
      img={weather}
    />
  );

  //MusicApp
  const musicApp = <Musicplayer />;
  const musicplayer = (
    <BoxSx
      title={data[1].title}
      description={data[1].Description}
      img={music}
    />
  );

  //URL Shortner
  const urlShortner = <Urlshortner />;
  const urlShortnertxt = (
    <BoxSx
      title={data[2].title}
      description={data[2].Description}
      img={urlShort}
    />
  );

  //Receipe App
  const reciepeC = <Reciepe />;
  const reciepe = (
    <BoxSx
      title={data[3].title}
      description={data[3].Description}
      img={Receipe}
    />
  );

  //Dictonary
  const dictonary = <Dictonary />;
  const dictonorytext = (
    <BoxSx
      title={data[4].title}
      description={data[4].Description}
      img={dicImg}
    />
  );

  //YoututbetoMP3
  const youtubeV = <Youtube />;
  const youtubeText = (
    <BoxSx
      title={data[5].title}
      description={data[5].Description}
      img={YoutubeImg}
    />
  );

  const rows = [
    createData(
      <Modal data={weatherapp} value={box} />,
      <Modal data={musicApp} value={musicplayer} />,
      <Modal data={urlShortner} value={urlShortnertxt} />
    ),
    createData(
      <Modal data={reciepeC} value={reciepe} />,
      <Modal data={dictonary} value={dictonorytext} />,
      <Modal data={youtubeV} value={youtubeText} />
    ),
  ];

  return (
    <article class="wrapper">
      <div className="Container">
        <h2 class="title">Web App Continent</h2>
        <TableContainer component={Paper}>
          <TableBody sx={{ textAlign: "center" }}>
            {rows.map((row) => (
              <TableRow>
                <TableCell align="right">{row.column}</TableCell>
                <TableCell align="right">{row.column1}</TableCell>
                <TableCell align="right">{row.colum2}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </div>
    </article>
  );
};

export default Mainpage;
