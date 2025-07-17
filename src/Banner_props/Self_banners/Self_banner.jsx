import React from 'react'

function Self_banner({ image, interested, rating, title, level, available }) {
  return (
    <div className="weekend_banner_content">
      <img src={image} alt="" />
      <div className="intrest_rate flex">
        <div className="intrest flex">
          <i className="ri-funds-line"></i>
          <p>{interested}</p>
        </div>
        <div className="rate">
          <i className="ri-star-fill"></i>
          <span>{rating}</span>
        </div>
      </div>
      <h3 className="banner_title">{title}</h3>
      <p className="banner_level"><i className="ri-bar-chart-fill"></i> {level}</p>
      <p className="banner_available"> <i className="ri-team-fill"></i> {available}</p>
      <div className="banner_button flex">
        <button>Avail 2 Offers</button>
      </div>
    </div>
  )
}

export default Self_banner