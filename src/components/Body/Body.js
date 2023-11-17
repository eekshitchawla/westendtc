import React from "react";
import acc from "../../assets/accountant.png";
import money from "../../assets/money.png";
import deposit from "../../assets/deposit.png";
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
        </div>
        <div id="logo-container">
          <img src={logo} alt="co-operative" id="coop-img" />
        </div>
      </div>
      <div id="features">
        <h1 id="features-heading">FEATURES</h1>
        <p>Have a look at our features</p>
        <div id="info-cards">
          {data.map((item, i) => (
            <div key={i} className="info-card" id="accounts-card">
              <div id="card-data">
                <h3>{item.name.toUpperCase()}</h3>
                <p>{item.desc}</p>
              </div>
              <img id="accountant-img" src={item.url} alt="" />
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
