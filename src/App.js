import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function CoolButton({changeMainText, changeMainImage}){

  function HandleButtonClick(){
    console.log("clicked ")
    fetch("http://localhost:5000/showerthoughtimage")

    .then(response => {
      console.log("fetching");
      return response.json();  // Parse the response as JSON
    })
    .then(data => {
      changeMainText(data.thought);
      changeMainImage(data.image)
      console.log("should have worked :P");
    });

  }

  return (
    <button onClick = {HandleButtonClick} >
      Click me for new stuff
    </button>

  )
}


function App() {
  const [mainText ,  changeMainText]  = useState("Placeholder")
  const [mainImage,  changeMainImage] = useState("")

  return (
    <div className="App">
      <header className="App-header">

        <CoolButton changeMainText={changeMainText} changeMainImage={changeMainImage} className="CoolButton"/>

        <img src = {mainImage} alt="logo"></img>

        <p>
          {mainText}
        </p>

      </header>
    </div>
  );
}

export default App;
