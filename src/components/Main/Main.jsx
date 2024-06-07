import React, { useContext } from "react";
import "./Main.css";
import { Context } from "../../context/Context";
import { assets } from "../../assets/assets";

const Main = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleSend = () => {
    onSent(input);
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini Doppelganger</p>
        <img src={assets.user_icon} alt="User icon" />
        {/* <!-- Add this button inside your main container or nav --> */}
{/* <button id="toggle-dark-mode">Toggle Dark Mode</button> */}

      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Human.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>
                  What are some hidden gems to explore on a scenic road trip?
                </p>
                <img src={assets.compass_icon} alt="Compass icon" />
              </div>
              <div className="card">
                <p>
                  What are some unique team-building activities for our retreat?
                </p>
                <img src={assets.bulb_icon} alt="Bulb icon" />
              </div>
              <div className="card">
                <p>
                  Can you summarize urban planning's key concepts and goals?
                </p>
                <img src={assets.message_icon} alt="Message icon" />
              </div>
              <div className="card">
                <p>How can we make this document clearer and more engaging?</p>
                <img src={assets.code_icon} alt="Code icon" />
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="User icon" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="Result icon" />
              {loading ? (
                <div className="loader">
                  <hr></hr>
                  <hr></hr>
                  <hr></hr>
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              type="text"
              placeholder="Enter a prompt here..."
            />
            <div>
              <img src={assets.gallery_icon} alt="Gallery icon" />
              <img src={assets.mic_icon} alt="Mic icon" />
              {input ? (
                <img
                  onClick={handleSend}
                  src={assets.send_icon}
                  alt="Send icon"
                />
              ) : null}
            </div>
          </div>
          <p className="bottom-info">
            Gemini may display inaccurate info, including about people, so
            double-check its responses.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
