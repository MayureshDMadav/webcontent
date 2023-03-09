import React from 'react'

function dictionary() {

    const axios = require("axios");

    const options = {
      method: 'GET',
      url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
      params: {word: 'hot'},
      headers: {
        'X-RapidAPI-Key': '9192bec45bmsh602ac3bc1adcc05p12a311jsnc89398bab041',
        'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
      }
    };
    
    axios.request(options).then(function (response) {
        console.log(response.data);
    }).catch(function (error) {
        console.error(error);
    });



  return (
    <div>dictionary</div>
  )
}

export default dictionary