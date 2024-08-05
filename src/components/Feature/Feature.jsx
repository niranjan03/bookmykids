import React from 'react'
import './Feature.css'

const Feature = ({ title, location, daysRemaining, iconUrl })=> {
  return (
      <div className="garba-card">
      <div className="card-left">
        <div className="color-box">
          <img src={iconUrl} alt="Icon" />
        </div>
        <div className="card-details">
          <div className='heading'> 
          <h3>{title}</h3>
          <span>Daner</span> 
          </div>         
          <p>{location} | {daysRemaining} days remaining</p>
        </div>
      </div>
      <button className="apply-now-button">Apply Now →</button>
    </div>
  )
}

export default Feature
