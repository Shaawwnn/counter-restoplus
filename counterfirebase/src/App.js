import "./App.css";
import "./App.css";
import { useEffect, useState } from "react";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "./firebase.js";

function App() {
  const [count, setCount] = useState(null);

  const docRef = doc(db, "counter", "count1");

  useEffect(() => {
    async function getCount() {
      const docSnap = await getDoc(docRef);
      setCount(docSnap.data().count);
    }
    getCount();
  }, []);

  const handleIncrement = async () => {
    setCount(count + 1);
    await setDoc(docRef, { count: count + 1 });
  };

  const handleDecrement = async () => {
    setCount(count - 1);
    await setDoc(docRef, { count: count - 1 });
  };

  const reset = async () => {
    setCount(0);
    await setDoc(docRef, { count: 0 });
  };

  return (
    <div className="App">
      <div style={{ display: "flex" }}>
        <h1>Counter with Firebase</h1>
        <img
          src="/firebase.png"
          alt="firebase logo"
          style={{ height: "40px" }}
        ></img>
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

      <a href="https://counter-client-mongo.vercel.app/">
        Counter with MongoDB
      </a>
    </div>
  );
}

export default App;
