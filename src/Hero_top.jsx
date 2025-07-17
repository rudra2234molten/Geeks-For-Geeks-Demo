import React from 'react'

const Hero_top = () => {
  return <>
    <div className="hero_top_text_container flex">
      <div className="hero_top_text_left">
        <h3>Win 90% Refund on Courses</h3>
        <p>Upskill and get your course fee refunded!</p>
        <p><i className="ri-phone-fill"></i> 08069289001</p>
      </div>
      <div className="hero_top_input">
        <div className="hero_input">
          <input type="text" name="text" id="text" placeholder='Take the Three 90s challenge today' />
          <i className="ri-search-line"></i>
        </div>
      </div>
    </div>
  </>
}

export default Hero_top