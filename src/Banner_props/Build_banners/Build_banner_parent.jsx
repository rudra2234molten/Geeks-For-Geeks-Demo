import React from 'react'
import Build_banner from './Build_banner'
let bannerArray = [
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/270/Web/Content/CourseJavaProgrammin_1716371938.webp',
    interested: '265k+ interested Geeks',
    rating: 4.6,
    title: 'Java Programming Online Course [Complete Beginner to Advanced]',
    level: 'Biginner to Advance',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/221/Web/Content/cpp_1723009538.webp',
    interested: '218k+ interested Geeks',
    rating: 4.7,
    title: 'C++ Programming Course Online - Complete Beginner to Advanced',
    level: 'Biginner to Advance',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/345/Web/Content/javasc_1724254497.webp',
    interested: '70k+ interested Geeks',
    rating: 4.7,
    title: 'JavaScript Full Course Online | Learn JavaScript with Certification',
    level: 'Biginner to Advance',
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/287/Web/Content/c_1722949071.webp',
    interested: '155k+ interested Geeks',
    rating: 4.6,
    title: 'C Programming Course Online - Learn C with Data Structures',
    level: 'Biginner to Advance',
  }
]

function Build_banner_parent() {
  return (
    <>
      <div className="weekend_heading flex">
        <h3>Build Your Foundations</h3>
        <p>View All <i className="ri-arrow-right-s-fill"></i></p>
      </div>
      <div className="weekend_banner_container flex">
        {bannerArray.map((banners) => (
          <Build_banner key={Math.random()} image={banners.image} interested={banners.interested} rating={banners.rating} title={banners.title} level={banners.level} available={banners.available} />
        ))}
      </div>
    </>
  )
}

export default Build_banner_parent