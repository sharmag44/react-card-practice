import React from "react";
import contact from "../contacts";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Card
        name="Beyonce"
        image="https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
        number="+123 456 789"
        email="b@beyonce.com"
      ></Card>
      <Card
        name="Jack Bauer"
        image="https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
        number="+987 654 321"
        email="jack@nowhere.com"
      ></Card>
      <Card
        name="Chuck Norris"
        image="https://i.pinimg.com/originals/e3/94/47/e39447de921955826b1e498ccf9a39af.png"
        number="+918 372 574"
        email="gmail@chucknorris.com"
      ></Card>
    </div>
  );
}

export default App;
