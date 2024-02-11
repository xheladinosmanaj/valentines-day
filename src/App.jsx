import { useState } from "react";
import gif from "./assets/photo.gif";
import gif2 from "./assets/photo-2.gif";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [confirm, setConfirm] = useState(false);
  console.log(count);
  const buttonSize = () => {
    switch (count) {
      case 0:
        return { width: "70px" };
      case 1:
        return { width: "100px", height: "70px", fontSize: "2rem" };
      case 2:
        return { width: "120px", height: "90px", fontSize: "3rem" };
      case 3:
        return { width: "140px", height: "110px", fontSize: "3.5rem" };
      case 4:
        return { width: "160px", height: "130px", fontSize: "3.5rem" };
      case 5:
        return { width: "180px", height: "150px", fontSize: "4.5rem" };
      case 6:
        return { width: "200px", height: "170px", fontSize: "4.5rem" };
      case 7:
        return { width: "220px", height: "190px", fontSize: "7rem" };
      case 8:
        return { width: "240px", height: "210px", fontSize: "8rem" };
      case 9:
        return { width: "260px", height: "230px", fontSize: "9rem" };
      case 10:
        return { width: "280px", height: "250px", fontSize: "10rem" };
      case 11:
        return { width: "300px", height: "270px", fontSize: "10.5rem" };
      case 12:
        return { width: "320px", height: "290px", fontSize: "11.5rem" };
      case 13:
        return { width: "340px", height: "310px", fontSize: "12.5rem" };
      case 14:
        return { width: "360px", height: "330px", fontSize: "13rem" };
      default:
        return { width: "360px", height: "330px", fontSize: "13rem" };
    }
  };

  const text = () => {
    switch (count) {
      case 0:
        return "No";
      case 1:
        return "Are you sure?";
      case 2:
        return "Really Sure?";
      case 3:
        return "Think again!";
      case 4:
        return "Last chance!";
      case 5:
        return "Surely not?";
      case 6:
        return "You might regret this!";
      case 7:
        return "Give it another thought!";
      case 8:
        return "Are you absolutely certain?";
      case 9:
        return "This could be a mistake!";
      case 10:
        return "Have a heart!";
      case 11:
        return "Dont be so cold!";
      case 12:
        return "Change of heart?";
      case 13:
        return "Wouldnt you reconsider?";
      case 14:
        return "Is that your final answer?";
      default:
        return "Your breaking my heart ;(";
    }
  };

  return (
    <div className="container">
      {!confirm ? (
        <div>
          <img src={gif} width="200" />
          <h1>Will you be my Valentine?</h1>
          <div className="buttons">
            <button
              className="confirm-button"
              onClick={() => setConfirm(!confirm)}
              style={buttonSize()}
            >
              Yes
            </button>
            <button
              type="button"
              className="reject-button"
              onClick={() => setCount(count + 1)}
            >
              {text()}
            </button>
          </div>
        </div>
      ) : (
        <div>
          <img src={gif2} width="200" />
          <h1>OK, Yay!!!</h1>
        </div>
      )}
    </div>
  );
}

export default App;
