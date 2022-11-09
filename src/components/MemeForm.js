import React from "react";

function MemeForm() {
  return(
    <React.Fragment>
      <main>
        <form className="form">
          <input className="form-input"
            type='text' 
            name='name'
            placeholder="text" />
          <input className="form-input"
            type='text' 
            name='name'
            placeholder="text" />
          <button type='submit' className="form-button">Get Meme</button>
        </form>
      </main>
    </React.Fragment>
  )
}

export default MemeForm;