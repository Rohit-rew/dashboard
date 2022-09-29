import React from "react";

export default function App() {
  
  React.useEffect(function () {
    fetch("http://localhost:4000/api/data")
      .then((res) => res.json())
      .then((data) => console.log(data));
  });

  return <h1> Hello world</h1>;
}
