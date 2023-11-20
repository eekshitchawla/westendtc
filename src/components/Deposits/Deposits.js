import React, { useEffect, useState } from "react";

const Deposits = () => {
  const [loanAmt, setLoanAmt] = useState(0);
  const [durationAmt, setDurationAmt] = useState(0);
  const loanAmtVal = (event) => {
    setLoanAmt(event.target.value);
  };
  const durationAmtVal = (event) => {
    setDurationAmt(event.target.value);
  };

  useEffect(() => {
    const datalist = document.getElementById("loanTicks");

    // Clear existing options
    datalist.innerHTML = "";

    // Generate and append options from 1 to 84
    for (let i = 1; i <= 84; i++) {
      const option = document.createElement("option");
      option.value = i;
      option.label = i;
      datalist.appendChild(option);
    }
  }, []);
  function calculateCompoundInterestForRD(P, r, n, t) {
    const rate = r / 100;
    const compoundInterest = P * Math.pow(1 + rate / n, (n * t) / 12);
    const futureValue = compoundInterest.toFixed(2); // You can adjust the precision as needed

    return parseFloat(futureValue);
  }

  return (
    <div className="addMem">
      <div>Deposits</div>
      <main>
        <br />
        <br />
        <div>Regular Deposits</div>
        <div>
          <h3>Installment Amount</h3>
          <div id="input-range">
            <input
              type="range"
              min={0}
              max={200000}
              step={10000}
              value={loanAmt}
              onChange={loanAmtVal}
              list="loanAmountTicks"
            />
            <datalist id="loanAmountTicks">
              <option value="0" label="0" />
              <option value="10000" label="10,000" />
              <option value="20000" label="20,000" />
              <option value="30000" label="30,000" />
              <option value="40000" label="40,000" />
              <option value="50000" label="50,000" />
              <option value="60000" label="60,000" />
              <option value="70000" label="70,000" />
              <option value="80000" label="80,000" />
              <option value="90000" label="90,000" />
              <option value="100000" label="100,000" />
              <option value="110000" label="110,000" />
              <option value="120000" label="120,000" />
              <option value="130000" label="130,000" />
              <option value="140000" label="140,000" />
              <option value="150000" label="150,000" />
              <option value="160000" label="160,000" />
              <option value="170000" label="170,000" />
              <option value="180000" label="180,000" />
              <option value="190000" label="190,000" />
              <option value="200000" label="200,000" />
            </datalist>
            <input
              type="number"
              value={loanAmt}
              onChange={loanAmtVal}
              list="loanAmountTicks"
            />
          </div>
          <h3>Duration (months)</h3>
          <div id="input-range">
            <input
              type="range"
              min={0}
              max={84}
              step={3}
              value={durationAmt}
              onChange={durationAmtVal}
              list="loanTicks"
            />
            <datalist id="loanTicks"></datalist>
            <input
              type="number"
              min={0}
              max={84}
              value={durationAmt}
              onChange={durationAmtVal}
              list="loanTicks"
            />
          </div>
          <br />
          {/* A = P x (1 + r/100)^nt */}
          <div>
            {calculateCompoundInterestForRD(loanAmt, 8, 12, durationAmt)}
          </div>
        </div>
      </main>
    </div>
  );
};

export default Deposits;
