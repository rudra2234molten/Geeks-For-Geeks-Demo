import React from 'react'
import Classroom_banner from './Classroom_banner'
let bannerArray = [
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/540/Mobile/Other/Course_CDA_6_11zon_1720848399.webp',
    interested: '34k+ interested Geeks',
    rating: 4.5,
    title: 'Complete Data Analytics Program',
    level: 'Biginner to Advance',
    available: '5 seats left'
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/542/Mobile/Other/Course_Backend_1720848540.webp',
    interested: '26k+ interested Geeks',
    rating: 4.6,
    title: 'Complete Backend Development Program- Mastering OOPS, Spring Boot, and Microservices',
    level: 'Intermediate and Advance',
    available: '5 seats left'
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/499/Mobile/Other/dsa_1720848769.webp',
    interested: '77k+ interested Geeks',
    rating: 4.6,
    title: 'DSA for Interview Preparation',
    level: 'Biginner to Advance',
    available: '3 seats left'
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/500/Mobile/Other/MERN_1720848943.webp',
    interested: '83k+ interested Geeks',
    rating: 4.6,
    title: 'MERN Full Stack Web Development',
    level: 'Biginner to Advance',
    available: '3 seats left'
  }
]

function Classroom_banner_parent() {
  return (
    <>
      <div className="weekend_heading flex">
        <h3>Classroom Courses Near You</h3>
        <p>View All <i className="ri-arrow-right-s-fill"></i></p>
      </div>
      <div className="weekend_banner_container flex">
        {bannerArray.map((banners) => (
          <Classroom_banner key={Math.random()} image={banners.image} interested={banners.interested} rating={banners.rating} title={banners.title} level={banners.level} available={banners.available} />
        ))}
      </div>
    </>
  )
}

export default Classroom_banner_parent