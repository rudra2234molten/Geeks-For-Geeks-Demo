import React, { useContext } from 'react'
import Weekend_banner_parent from './Banner_props/Weekend_banner/Weekend_banner_parent'
import Classroom_banner_parent from './Banner_props/Classroom_course/Classroom_banner_parent'
import Live_course_parent from './Banner_props/Live_banner/Live_course_parent';
import Self_banner_parent from './Banner_props/Self_banners/Self_banner_parent';
import Build_banner_parent from './Banner_props/Build_banners/Build_banner_parent';
import Free_banner_parent from './Banner_props/Free_banners/Free_banner_parent';
import Popular_banner_parent from './Banner_props/Popular_banners/Popular_banner_parent';
import { themeContext } from './ThemeContext';

const Hero_main = () => {
  let {theme}=useContext(themeContext)
  return (
    <div className="hero_banner_content_container" style={{ backgroundColor: theme === 'light' ?'#171b1d':'#fff'}}>
      <div className="hero_top_banner_container flex">
        <img src="https://media.geeksforgeeks.org/img-practice/prod/courses/1/Web/Header/all-courses-leftside_1737715535.png" alt="" />
        <img src="https://media.geeksforgeeks.org/img-practice/prod/courses/1/Web/Header/all-courses-leftside_1737715535.png" alt="" />
      </div>
      <Weekend_banner_parent />
      <Classroom_banner_parent />
      <Live_course_parent />
      <Self_banner_parent />
      <Build_banner_parent />
      <Free_banner_parent />
      <Popular_banner_parent/>
    </div>
  )
}

export default Hero_main