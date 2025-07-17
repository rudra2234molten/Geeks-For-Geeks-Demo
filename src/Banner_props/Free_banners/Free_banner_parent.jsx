import React from 'react'
import Free_banner from './Free_banner'
let bannerArray = [
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/628/Web/Content/mongo_1720781490.webp',
    interested: '106k+ interested Geeks',
    rating: 4.7,
    title: "MongoDB Developer's Toolkit: CRUD Mastery with Node.js, Java, Python, C#",
    level: 'Biginner to Advance',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/404/Web/Content/bc-ds-web_1705400602.webp',
    interested: '88k+ interested Geeks',
    rating: 4.9,
    title: 'Data Science BootCamp - From Analysing Data To Creating ML Models',
    level: 'Biginner',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/383/Web/Content/fullstack_1720781548.webp',
    interested: '141k+ interested Geeks',
    rating: 4.6,
    title: 'Full Stack Developer Bootcamp - Master Frontend to Backend',
    level: 'Biginner',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/528/Web/Content/IOS_1720781341.webp',
    interested: '39k+ interested Geeks',
    rating: 4.7,
    title: 'IOS Development for Beginners: Master Swift & App Building for Free',
    level: 'Biginner',
  }
]

function Free_banner_parent() {
  return (
    <>
      <div className="weekend_heading flex">
        <h3>Free Courses</h3>
        <p>View All <i className="ri-arrow-right-s-fill"></i></p>
      </div>
      <div className="weekend_banner_container flex">
        {bannerArray.map((banners) => (
          <Free_banner key={Math.random()} image={banners.image} interested={banners.interested} rating={banners.rating} title={banners.title} level={banners.level} available={banners.available} />
        ))}
      </div>
    </>
  )
}

export default Free_banner_parent