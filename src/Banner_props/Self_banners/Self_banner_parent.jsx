import React from 'react'
import Self_banner from './Self_banner'
let bannerArray = [
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/244/Web/Content/CIP_1720782273.webp',
    interested: '949k+ interested Geeks',
    rating: 4.8,
    title: 'Complete Interview Preparation',
    level: 'Biginner to Advance',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/261/Web/Content/dspy_1723008711.webp',
    interested: '310k+ interested Geeks',
    rating: 4.7,
    title: 'Data Structures & Algorithms in Python - Self Paced',
    level: 'Biginner to Advance',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/503/Web/Content/System-Design_1705407692.webp',
    interested: '140k+ interested Geeks',
    rating: 4.6,
    title: 'Mastering System Design: From Low-Level to High-Level Solutions',
    level: 'Biginner to Advance',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/CourseJavaProgrammin_1716371938.webp',
    interested: '265k+ interested Geeks',
    rating: 4.6,
    title: 'Java Programming Online Course [Complete Beginner to Advanced]',
    level: 'Biginner to Advance',
  }
]

function Self_banner_parent() {
  return (
    <>
      <div className="weekend_heading flex">
        <h3>Self-Paced Courses</h3>
        <p>View All <i className="ri-arrow-right-s-fill"></i></p>
      </div>
      <div className="weekend_banner_container flex">
        {bannerArray.map((banners) => (
          <Self_banner key={Math.random()} image={banners.image} interested={banners.interested} rating={banners.rating} title={banners.title} level={banners.level} available={banners.available} />
        ))}
      </div>
    </>
  )
}

export default Self_banner_parent