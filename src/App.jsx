import Button from "./Button";

import "./App.css";

function App() {
  return (
    <div className="App">
      <img src="bg.png" className="Background" alt="" />
      <img src="./bgl.png" className="Image" alt="image" />
      <p className="Title">Order Summary</p>
      <p className="Subtitle">
        You can now learn from thousands of talented teachers on demand at you
        fingertips.
      </p>
      <div className="Container">
        <div className="circle2">
          <div className="circle1"></div>
        </div>
        <div className="item">
          <p>Annual Plan</p>
          <p>$2399/year</p>
        </div>
        <a href="#" className="text-underline-offset">
          Change
        </a>
      </div>
      <Button />
    </div>
  );
}

export default App;
