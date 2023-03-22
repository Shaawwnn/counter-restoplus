import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [count, setCount] = useState(null);

  useEffect(() => {
    async function getCount() {
      const res = await axios.get(
        "https://counter-backend-ht0t.onrender.com/api/count"
      );
      setCount(res.data.count);
    }
    getCount();
  }, []);

  const handleIncrement = () => {
    setCount(count + 1);
    axios.put("https://counter-backend-ht0t.onrender.com/api/add");
  };

  const handleDecrement = () => {
    setCount(count - 1);
    axios.put("https://counter-backend-ht0t.onrender.com/api/minus");
  };

  const reset = () => {
    setCount(0);
    axios.put("https://counter-backend-ht0t.onrender.com/api/reset");
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <h1>Counter with MongoDB</h1>
        <img src="/mongo.png" alt="mongo logo" style={{ height: "40px" }}></img>
      </div>

      <div className="counter-container">
        <button onClick={handleDecrement} disabled={count === 0 ? true : false}>
          {" "}
          -{" "}
        </button>
        <h1>{count != null ? count : <span className="loader"></span>}</h1>
        <button onClick={handleIncrement}> + </button>
      </div>

      <button onClick={reset} className="reset">
        Reset
      </button>
    </div>
  );
}

export default App;
