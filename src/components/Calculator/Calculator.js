import { useState } from 'react'
import { PieChart } from 'react-minimal-pie-chart';
import Navbar from '../Navbar/Navbar'
import './Calculator.css';
const Calculator = () => {
    const [loanAmt,setLoanAmt]= useState(0)
    const [interestAmt,setInterestAmt]= useState(0)
    const [durationAmt,setDurationAmt]= useState(0)
    const loanAmtVal = (event) =>{
      setLoanAmt(event.target.value)
    }
    const interestAmtVal = (event) =>{
      setInterestAmt(event.target.value)
    }
    const durationAmtVal = (event) =>{
      setDurationAmt(event.target.value)
    }
    return (<>
      <Navbar/>
      <div id='loan-page'>
        <div id='loan-left'>
          <h2>Loan Calculator</h2>
          <h3>Loan Term</h3>
          <div id='btns'>
            <button id='timeBtn'>Yearly</button>
            <button id='timeBtn'>Monthly</button>
            <button id='timeBtn'>Quarterly</button>
          </div>
  
          <h3>Loan Amount</h3>
          <div id='input-range'>
            <input 
              type="range" 
              min={0} 
              max={200000} 
              step={10000} 
              value={loanAmt} 
              onInput={loanAmtVal} 
              list='loanAmountTicks' />
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
            <p id='loanVal'>{loanAmt}</p>
          </div>
  
          <h3>Interest Rate</h3>
          <div id='input-range'>
            <input 
              type="range" 
              min={0} 
              max={10} 
              value={interestAmt} 
              onInput={interestAmtVal} 
              list='interestTicks'/>
              <datalist id='interestTicks'>
                <option value="0" label="0"></option>
                <option value="1" label="1"></option>
                <option value="2" label="2"></option>
                <option value="3" label="3"></option>
                <option value="4" label="4"></option>
                <option value="5" label="5"></option>
                <option value="6" label="6"></option>
                <option value="7" label="7"></option>
                <option value="8" label="8"></option>
                <option value="9" label="9"></option>
                <option value="10" label="10"></option>
              </datalist>
            <p id='loanVal'>{interestAmt}</p>
          </div>
  
          <h3>Duration</h3>
          <div id='input-range'>
            <input 
              type="range" 
              min={0} 
              max={10} 
              value={durationAmt} 
              onInput={durationAmtVal} 
              list='loanTicks'/>
              <datalist id='loanTicks'>
                <option value="0" label="0"></option>
                <option value="1" label="1"></option>
                <option value="2" label="2"></option>
                <option value="3" label="3"></option>
                <option value="4" label="4"></option>
                <option value="5" label="5"></option>
                <option value="6" label="6"></option>
                <option value="7" label="7"></option>
                <option value="8" label="8"></option>
                <option value="9" label="9"></option>
                <option value="10" label="10"></option>
              </datalist>
            <p id='loanVal'>{durationAmt}</p>
          </div>
        </div>
        <div id='loan-right'>
        <PieChart
          data={[
            { title: 'Principal', value: 80, color: '#482dad' },
            { title: 'Interest', value: 15, color: '#9DD8FF' },
          ]}
        />
        <div id='display'>
          <div id='d-left'>
          EMI Principal <br/> <br/>
          Interest <br/> <br/>
          Tenure <br/> <br/>
          </div>
          <div id='d-right'>
            {loanAmt} <br/> <br/>
            {interestAmt} <br/> <br/>
            {durationAmt} <br/> <br/>
          </div>
        </div>
        <div id='display-foot'>
          <hr/>
          <div id='display'>
            <div id='d-left'>
              Amount 
            </div>
            <div id='d-right'>
              {loanAmt*interestAmt*durationAmt / 100}
            </div>
          </div>
        </div>
        </div>
      </div>
    </>
    )
}

export default Calculator
