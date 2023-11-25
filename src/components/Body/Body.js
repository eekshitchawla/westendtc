import React from "react";
import acc from "../../assets/accounts.webp";
import money from "../../assets/loans.webp";
import deposit from "../../assets/deposits.webp";
import logo from "../../assets/westendLogo.png";
import About from "../About/About";
import Footer from "../Footer/Footer";
import Testimonials from "../Testimonials/Testimonials";
import "./Body.css";

const Body = () => {
  const data = [
    {
      name: "Accounts",
      desc: "Earn Interest upto 7% as monthly instalments!!",
      url: acc,
    },
    {
      name: "Loans",
      desc: "Bag the loan for less than 6% in 1 day!!",
      url: money,
    },
    {
      name: "Deposits",
      desc: "Get Personal and Emergency Loans !!",
      url: deposit,
    },
  ];

  return (
    <div id="body-container">
      <div id="banner-container">
        <div id="slogan-container">
          <p id="slogan">
            TRUST IN CO-OPERATIVE,
            <br /> GROW WITH CO-OPERATIVE
          </p>
          <p id="under-slogan">
            The primary objective of the Society revolves around the cultivation
            and enhancement of a culture of prudent Savings amongst its{" "}
          </p>
          <div style={{ display: "flex", gap: 15 }}>
            <button id="banner-button1">Get Started</button>
            <button id="banner-button2">Loan Calculator</button>
          </div>
        </div>
        <div id="logo-container">
          <img src={logo} alt="co-operative" id="coop-img" />
        </div>
      </div>
      <div id="features">
        <div id="features-heading">FEATURES</div>
        <div id="features-sub-heading">Have a look at our features</div>
        <div id="info-cards">
          {data.map((item, i) => (
            <div key={i} className="info-card" id="accounts-card">
              <div id="card-data">
                <div
                  style={{
                    height: "50%",
                  }}
                >
                  <img
                    id={item.name}
                    src={item.url}
                    alt=""
                    width={i === 2 ? "20%" : "25%"}
                  />
                </div>
                <div
                  style={{
                    height: "50%",
                  }}
                >
                  <div>
                    <b>{item.name.toUpperCase()}</b>
                  </div>
                  <div
                    style={{
                      // width: "11vw",
                      fontSize: 13,
                      paddingTop: 10,
                    }}
                  >
                    {item.desc}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <About />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Body;
