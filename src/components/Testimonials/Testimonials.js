import React from 'react'
import './Testimonials.css'
const Testimonials = () => {

const data = [
  {
    name:"Virat Sharma",
    comment:"Very good service and excellent staff",
    date:"10/08/2023"
  },
  {
    name:"Anushka Kohli",
    comment:"Very good service and excellent money",
    date:"12/08/2023"
  },
  {
    name:"Dinesh Rajput",
    comment:"Quick procedure and good people",
    date:"30/08/2023"
  },
  {
    name:"Prem Jain",
    comment:"Homely Welcome and good staff",
    date:"06/08/2023"
  },
]
  return (
    <div id='testimonials-container'>
      <h1 id='test-heading'>TESTIMONIALS</h1>
      <p>WHAT DO ARE CUSTOMERS SAY?...</p>
      <div id='test-container'>
        {data.map((item)=>(
            <div id='test'>
              <h3>{item.comment}</h3>
              <h5 id='name-date'>{item.name +"  ("+ item.date+")"}</h5>
            </div>
        ))}
      </div>
    </div>
  )
}

export default Testimonials
