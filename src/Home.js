import React, { useState } from "react";
import Result from "./Result";

const Home = () => {
  const [error, setError] = useState(null);
  const [result, setResult] = useState(false);
  const [age, setAge] = useState(0);
  const [height, setHeight] = useState(0);
  const [weight, setWeight] = useState(0);
  const [ans, setAns] = useState(0);

  const calculate = () => {
    if (age < 2 || age > 120) {
      setError("Please Provide valid Age");
      return;
    }

    if (height <= 0) {
      setError("Please Provide valid Height");
      return;
    }

    if (weight <= 0) {
      setError("Please Provide valid Weight");
      return;
    }

    const cal = (weight / (height * height)) * 10000;
    setAns(cal.toFixed(2));
    setResult(true);
  };

  return (
    <div className="home">
      <Result result={result} ans={ans} setResult={setResult} />
      <div className="main">
        <div className="header">BMI CALCULATOR</div>

        {/**** age ****/}
        <div className="age">
          <h3>
            Enter Your Age <span>(2 - 120)</span>
          </h3>
          <div className="age-ip">
            <input
              type="number"
              className="age-ip-box"
              onChange={(e) => {
                setAge(e.target.value);
                setError(null);
              }}
            />
          </div>
        </div>

        {/***** height *****/}
        <div className="height">
          <h3>
            Enter Your Height <span>(cm)</span>
          </h3>
          <div className="age-ip">
            <input
              type="number"
              className="age-ip-box"
              onChange={(e) => {
                setHeight(e.target.value);
                setError(null);
              }}
            />
          </div>
        </div>

        {/***** weight *****/}
        <div className="weight">
          <h3>
            Enter Your Weight <span>(kg)</span>
          </h3>
          <div className="age-ip">
            <input
              type="number"
              className="age-ip-box"
              onChange={(e) => {
                setWeight(e.target.value);
                setError(null);
              }}
            />
          </div>
        </div>

        {/* error */}
        {error != null && <div className="error">{error}</div>}

        {/***** btn *****/}
        <div className="btn" onClick={calculate}>
          Calculate Your BMI
        </div>
      </div>
    </div>
  );
};

export default Home;
