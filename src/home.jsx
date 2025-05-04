import { useState } from "react";
import "./home.css";
import "./index.scss";
import { saveCardAsImage } from "./context/fetch.service";
import { influncers, posters } from "./context/data";
import title from "./assets/title.png";
import frame from "./assets/frame.png";
import { RiTwitterXFill } from "react-icons/ri";

export const App = () => {
  const [userInfo, setUserInfo] = useState({
    nickname: "",
    bounty: 0,
    poster: 0,
    user_img: "",
  });
  const [done, setDone] = useState(false);
  const [modal, setModal] = useState(false);
  const downloadCard = async () => {
    const cardElement = document.querySelector(".tombstone");
    saveCardAsImage(cardElement);
  };

  const reset = () => {
    setUserInfo({
      nickname: "",
      bounty: 0,
      poster: 0,
    });
    setDone(false);
  };

  const selectInfluencer = (name, img) => {
    console.log(name, img);
    setUserInfo({ ...userInfo, nickname: name, user_img: img });
    setModal(true);
  };

  const classes = ["poster1", "poster2"];

  return (
    <div className="df fdc aic wrapper">
      <div className="w100 df fdc aic gap-20 main-content">
        {done ? (
          <div
            className="w100 df fdc aic gap-20 result content"
            data-aos="fade-up"
            data-aos-duration="700"
          >
            <h3 data-aos="fade-up" data-aos-duration="700">
              Wanted Poster is ready
            </h3>
            <figure
              className={`p-r df fdc aic gap-10 wanted-poster ${
                classes[userInfo.poster]
              }`}
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="100"
              data-aos-offset="0"
            >
              <img
                src={userInfo?.user_img}
                alt="poster"
                className="poster-img"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="150"
                data-aos-offset="0"
              />
              {userInfo?.poster === 0 ? (
                <>
                  <h2>
                    known by the name <br />
                    <b>{userInfo.nickname}</b>{" "}
                  </h2>
                  <p className="df aic gap-20">
                    <b>REWARD</b>
                    {userInfo.bounty
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span>$</span>
                  </p>
                </>
              ) : (
                <>
                  <h2>
                    <b>{userInfo.nickname}</b>{" "}
                  </h2>
                  <p className="df aic gap-20">
                    {userInfo.bounty
                      ?.toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                    <span>$</span>
                  </p>
                </>
              )}
            </figure>
            <div
              className="df aic gap-20"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="230"
              data-aos-offset="0"
            >
              <div
                class="df aic jcc button-result"
                onClick={downloadCard}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="280"
                data-aos-offset="0"
              >
                Download
              </div>
              <div
                class="df aic jcc button-result"
                onClick={reset}
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                Reset
              </div>
            </div>
          </div>
        ) : (
          <>
            {" "}
            <img
              src={title}
              alt="title"
              className="title"
              data-aos="fade-down"
              data-aos-duration="700"
            />
            <div className="df fw aic jcc gap-20 grid">
              {influncers.map((influencer, index) => (
                <div
                  className="df fdc aic gap-10 influencer"
                  key={index}
                  data-aos="fade-up"
                  data-aos-duration="700"
                >
                  <figure
                    className="w100 p-r"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="100"
                    data-aos-offset="0"
                  >
                    <img
                      src={influencer.image}
                      alt={influencer.name}
                      className="influencer-img"
                    />
                    <img src={frame} alt="frame" className="frame" />
                  </figure>
                  <h3>{influencer.name}</h3>
                  <a
                    href={influencer.x_profile}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="150"
                    data-aos-offset="0"
                  >
                    Get more info <RiTwitterXFill />
                  </a>
                  <button
                    onClick={() =>
                      selectInfluencer(influencer.name, influencer.image)
                    }
                    className="button-select"
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="200"
                    data-aos-offset="0"
                  ></button>
                </div>
              ))}
            </div>
          </>
        )}

        {modal && (
          <div className="w100 modal">
            <div
              className="w100 df fdc aic gap-20 user-info-form"
              data-aos="fade-up"
              data-aos-duration="700"
            >
              <label
                className="w100 df fdc gap-10 fs-20"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="100"
                data-aos-offset="0"
              >
                <span
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="130"
                  data-aos-offset="0"
                >
                  Enter Bounty Amount
                </span>
                <label className="w100 df aic gap-10 input-label">
                  <span>$</span>
                  <input
                    type="number"
                    placeholder="Enter the amount"
                    required
                    data-aos="fade-up"
                    data-aos-duration="700"
                    data-aos-delay="170"
                    data-aos-offset="0"
                    onChange={(e) =>
                      setUserInfo({ ...userInfo, bounty: e.target.value })
                    }
                  />
                </label>
              </label>
              <div
                className="w100 df fdc stones"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="300"
                data-aos-offset="0"
              >
                <span>Choose Poster Style</span>
                <div className="w100 df gap-20 stones-container">
                  {posters.map((stone, index) => (
                    <img
                      key={index}
                      src={stone}
                      alt={`stone-${index}`}
                      className={`stone ${
                        userInfo.poster === index ? "selected" : ""
                      }`}
                      onClick={() => {
                        setUserInfo({ ...userInfo, poster: index });
                      }}
                    />
                  ))}
                </div>
              </div>
              <div className="w100 df aic gap-20">
                <button
                  className="frame-btn"
                  onClick={() => {
                    setModal(false);
                    setUserInfo({ ...userInfo, poster: 0 });
                  }}
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="400"
                  data-aos-offset="0"
                >
                  Cancel
                </button>
                <button
                  className="frame-btn"
                  onClick={() => {
                    setDone(true);
                    setModal(false);
                  }}
                  data-aos="fade-up"
                  data-aos-duration="700"
                  data-aos-delay="450"
                  data-aos-offset="0"
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="df fdc aic gap-20 about-us">
        <h1>About Us</h1>
        <p>
          We are a team of passionate developers and designers who love to
          create unique and fun experiences. Our goal is to bring a smile to
          your face with our creative projects. Thank you for visiting our
          website!
        </p>
        <p>
          If you have any questions or feedback, feel free to reach out to us at{" "}
          <u>SOCIAL</u> or <u>EMAIL</u>.
        </p>
        <button className="df aic jcc gap-10 frame-btn">
          Follow Us on <RiTwitterXFill />
        </button>
      </div>
      <div className="w100 df aic jcc content footer">
        <p>© 2025 Bountyboard - All rights reserved</p>
      </div>
    </div>
  );
};
