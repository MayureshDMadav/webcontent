import React, { useState } from "react";
import axios from "axios";
import { Button } from "@mui/material";
import { TextField } from "@mui/material";
import "./youtube.css";
import stringSort from "../ytomp3/stringsort";

const Youtube = () => {
  const [value, setValue] = useState();
  const [words, getWords] = useState();
  const [error, setError] = useState();

  const handlSubmit = () => {
    const options = {
      method: "GET",
      url: "https://youtube-mp3-download1.p.rapidapi.com/dl",
      params: { id: stringSort(value) },
      headers: {
        "X-RapidAPI-Key": "9192bec45bmsh602ac3bc1adcc05p12a311jsnc89398bab041",
        "X-RapidAPI-Host": "youtube-mp3-download1.p.rapidapi.com",
      },
    };

    axios
      .request(options)
      .then(function (response) {
        getWords(response.data);
      })
      .catch((error) => {
        setError(error);
      });
  };

  const handledonwload = (data) => {
    const fileName = words.title;
    const aTag = document.createElement("a");
    aTag.href = data;
    aTag.setAttribute("download", fileName);
    document.body.appendChild(aTag);
    aTag.click();
    aTag.remove();
  };

  return (
    <div className="youtube-mp3">
      <h1>Youtube To MP3</h1>
      <br />
      <TextField
        id="outlined-basic"
        label="Enter Youtube Here"
        variant="outlined"
        onChange={(e) => setValue(e.target.value)}
      />
      <br />
      <Button
        onClick={handlSubmit}
        variant="contained"
        sx={{ marginTop: "1rem", marginBottom: "3rem" }}
      >
        Click To Convert
      </Button>
      <br />
      <strong style={{ color: "white", fontSize: "1.5rem" }}>
        {!words ? "" : words.title}
      </strong>
      <br />
      <br />
      {words ? (
        <span>
          <p style={{ color: "white", fontSize: "25px" }}>
            Conversion was Successfull!!!
          </p>{" "}
          <Button
            variant="text"
            style={{ color: "white" }}
            onClick={() => handledonwload(words.link)}
          >
            {" "}
            Click Here to Download
          </Button>{" "}
        </span>
      ) : (
        ""
      )}
      {error ? <p>Conversion was Unsuccessfull!!!</p> : ""}
    </div>
  );
};

export default Youtube;
