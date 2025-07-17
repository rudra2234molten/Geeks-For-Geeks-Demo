import React from 'react'
import Popular_banner from './Popular_banner'
let bannerArray = [
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/504/Mobile/Other/Course_DSA_to_Dev_1720846081.webp',
    interested: '477k+ interested Geeks',
    rating: 4.4,
    title: 'DSA to Development: A Complete Guide',
    level: 'Biginner to Advance',
    available: '4 seats left'
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/227/Mobile/Other/Course_Backend_1720846992.webp',
    interested: '275k+ interested Geeks',
    rating: 4.7,
    title: 'JAVA Backend Development - Live',
    level: 'Intermediate and Advance',
    available: '6 seats left'
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/405/Mobile/Other/Course_ML_&_DS_1720846555.webp',
    interested: '368k+ interested Geeks',
    rating: 4.7,
    title: 'Complete Machine Learning & Data Science Program',
    level: 'Biginner to Advance',
    available: '8 seats left'
  },
  {
    image: 'https://media.geeksforgeeks.org/img-practice/prod/courses/198/Web/Content/dsa_1723009292.webp',
    interested: '1316k+ interested Geeks',
    rating: 4.7,
    title: 'Data Structures and Algorithms - Self Paced [Online Course]',
    level: 'Biginner to Advance',
  }
]

function Popular_banner_parent() {
  return (
    <>
      <div className="weekend_heading flex">
        <h3>Popular Now</h3>
        <p>View All <i className="ri-arrow-right-s-fill"></i></p>
      </div>
      <div className="weekend_banner_container flex">
        {bannerArray.map((banners) => (
          <Popular_banner key={Math.random()} image={banners.image} interested={banners.interested} rating={banners.rating} title={banners.title} level={banners.level} available={banners.available} />
        ))}
      </div>
    </>
  )
}

export default Popular_banner_parent