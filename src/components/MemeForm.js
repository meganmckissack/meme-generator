import React, { useState } from "react";
import MemeData from '../memeData.js'

function MemeForm() {
  const [memeImgVisible, setMemeImgVisible] = useState(null);

  const handleClick = () => {
    const memesArray = MemeData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMemeImgVisible(url);
    console.log(url);
    // var imgResults = [];
    // for(const image in memesArray) {
    //   if(memesArray.hasOwnProperty(image)) {
    //     imgResults.push(image);
    //   }
    // }
    // return imgResults[imgResults.length * Math.random() << 0];
  }


  return(
    <React.Fragment>
      <main>
        <div className="form">
          <input className="form-input"
            type='text' 
            name='name'
            placeholder="text" />
          <input className="form-input"
            type='text' 
            name='name'
            placeholder="text" />
          <button className="form-button" onClick={handleClick}>Get Meme</button>
        </div>
        <img src={memeImgVisible} className="meme-image" />
      </main>
    </React.Fragment>
  )
}

export default MemeForm;