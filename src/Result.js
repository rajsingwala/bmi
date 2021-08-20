import React, { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";

const Result = ({ result, setResult, ans }) => {
  const [stat, setStat] = useState("");

  useEffect(() => {
    if (ans >= 18.5 && ans <= 25) {
      setStat("Normal Weight");
    } else if (ans < 18.5) {
      setStat("Under Weight");
    } else {
      setStat("Over Weight");
    }
  }, [ans]);

  return (
    <div className={result ? "result active" : "result"}>
      <div className="result_head">
        <AiOutlineClose onClick={() => setResult(false)} />
      </div>

      <div className="emoji">
        {ans >= 18.5 && ans <= 25 && (
          <img src="/img/checked.png" alt="ok" className="status" />
        )}
        {(ans < 18.5 || ans > 25) && (
          <img src="/img/danger.png" alt="ok" className="status" />
        )}
      </div>

      <div className="bmi">
        Your Body Mass Index is: <span> {ans} </span>
      </div>
      <div className="bmi_status">
        You are : <span>{stat}</span>
      </div>
    </div>
  );
};

export default Result;
