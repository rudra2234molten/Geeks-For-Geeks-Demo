import React from 'react'
import Live_course_banner from './Live_course_banner'

let bannerArray = [
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/458/Mobile/Other/Course_Tech_Int_1720846791.webp',
    interested: '319k+ interested Geeks',
    rating: 4.9,
    title: 'Tech Interview 101 - From DSA to System Design for Working Professionals',
    level: 'Biginner to Advance',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/517/Mobile/Other/Course_Software_testing_1720847295.webp',
    interested: '45k+ interested Geeks',
    rating: 4.5,
    title: 'Complete Software Testing Course - Beginner to Advance',
    level: 'Biginner to Advance',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/241/Web/Content/FSRNL_1705410152.webp',
    interested: '321k+ interested Geeks',
    rating: 4.7,
    title: 'Full Stack Development with React & Node JS - Live',
    level: 'Biginner to Advance',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/483/Mobile/Other/Course_Devops_1720845934.webp',
    interested: '94k+ interested Geeks',
    rating: 4.6,
    title: 'DevOps Engineering - Planning to Production',
    level: 'Biginner to Advance',
    available: '4 seats left'
  }
]

function Live_course_parent() {
  return (
    <>
      <div className="weekend_heading flex">
        <h3>Live Courses</h3>
        <p>View All <i className="ri-arrow-right-s-fill"></i></p>
      </div>
      <div className="weekend_banner_container flex">
        {bannerArray.map((banners) => (
          <Live_course_banner key={Math.random()} image={banners.image} interested={banners.interested} rating={banners.rating} title={banners.title} level={banners.level} available={banners.available} />
        ))}
      </div>
    </>
  )
}

export default Live_course_parent