import { useState } from "react";

import "./App.css";

function App() {
  const [isValidFace, setIsValidFace] = useState(false);
  function Validator() {}
  return (
    <>
      <div>Headers</div>
      <div>{isValidFace ? <Home /> : <Validator />}</div>
    </>
  );
}

export default App;
