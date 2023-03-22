import React, { useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./musicplayer.css";

const Musicplayer = () => {
  const [state, setState] = useState([]);
  const [data, setData] = useState("");

  const Headers = {
    "x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com",
    "x-rapidapi-key": process.env.REACT_APP_SECRET_KEY,
  };

  const handleChange = (e) => {
    setData(e.target.value);
  };

  const findMusic = (e) => {
    axios
      .get("https://deezerdevs-deezer.p.rapidapi.com/search?q=" + data, {
        headers: Headers,
      })
      .then((response) => {
        setState(response.data.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="music-player">
      <h1>Music Player</h1>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField
          id="outlined-basic"
          size="small"
          label="Enter Music Name"
          variant="outlined"
          sx={{ height: "1.8em !important", color: "white" }}
          onChange={handleChange}
        />
        <br />
        <Button variant="contained" size="large" onClick={findMusic}>
          Search Music
        </Button>
      </Box>
      <div className="grid-container">
        {!state
          ? "NO LIST TO DISPLAY"
          : state.map((post) => (
              <div className="item 1">
                <img src={post.artist.picture_medium} alt="" /> <br />{" "}
                <audio src={post.preview} controls></audio>{" "}
              </div>
            ))}
      </div>
    </div>
  );
};

export default Musicplayer;
