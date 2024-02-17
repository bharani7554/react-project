//1. Create a new React app.
//2. Create a App.jsx component.
//3. Create a Header.jsx component that renders a <header> element
//to show the Keeper App name in an <h1>.
//4. Create a Footer.jsx component that renders a <footer> element
//to show a copyright message in a <p> with a dynamically updated year.
//5. Create a Note.jsx component to show a <div> element with a
//<h1> for a title and a <p> for the content.
//6. Make sure that the final website is styled like the example shown here:
//https://l1pp6.csb.app/

//HINT: You will need to study the classes in teh styles.css file to appy styling.
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

ReactDOM.render(<App />, document.getElementById("root"));




/** {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  font-family: "Montserrat", sans-serif;
}
body {
  background: #eee;
  padding: 0 16px;
}

header {
  background-color: #f5ba13;
  margin: auto -16px;
  padding: 16px 32px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.3);
}

header h1 {
  color: #fff;
  font-family: "McLaren", cursive;
  font-weight: 200;
}

footer {
  position: absolute;
  text-align: center;
  bottom: 0;
  width: 100%;
  height: 2.5rem;
}

footer p {
  color: #ccc;
}
.note {
  background: #fff;
  border-radius: 7px;
  box-shadow: 0 2px 5px #ccc;
  padding: 10px;
  width: 240px;
  margin: 16px;
  float: left;
}
.note h1 {
  font-size: 1.1em;
  margin-bottom: 6px;
}
.note p {
  font-size: 1.1em;
  margin-bottom: 10px;
  white-space: pre-wrap;
  word-wrap: break-word;
}
*/