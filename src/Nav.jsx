import React, { useState, useEffect, useContext } from 'react';
import { themeContext } from './ThemeContext';

const Nav = () => {
  let { theme, toogleTheme } = useContext(themeContext)
  let allLinks = document.getElementsByTagName('a')
  let newLinks = Array.from(allLinks)
  newLinks.forEach(link => {
    link.style.color = theme === 'light' ? '#fff' : '#1f1f1f';
  });
  
  return (
    <header style={{ backgroundColor: theme === 'light' ?'#1f1f1f':'#fff'}}>
      <nav className='flex'>
        <div className="leftnav flex">
          <ul className="nav_left flex">
            <li className='drop d1'><a href="">Courses  <i className="ri-arrow-down-wide-fill"></i></a>
              <div className="courses_drop dropp cursor">
                  <p>DSA To Development</p>
                  <p>GATE Courses</p>
                  <p>Get IBM certification</p>
                  <p>Newly launched</p>
                  <p>For Workingprofesional</p>
                  <p>For Students</p>
                  <p>Full stack Development</p>
                  <p>Data Science Program</p>
                  <p>All Courses</p>
            </div>
            </li>
            <li className='drop d2'><a href="">Tutorials  <i className="ri-arrow-down-wide-fill"></i></a>
              <div className="tutorial_drop dropp cursor">
                <p>Data Structure & Algorithms</p>
                <p>ML & Data Science</p>
                <p>Interview Corner</p>
                <p>Languages</p>
                <p>Web Development</p>
                <p>GATE</p>
                <p>CS Subjects</p>
                <p>DevOPS & Linux</p>
              </div>
            </li>
            <li className='drop d3'><a href="">Jobs <i className="ri-arrow-down-wide-fill"></i></a>
              <div className="jobs_drop dropp cursor">
                <p>Get Hired:Apply For Jobs</p>
                <p>Corporate Hiring Solution</p>
                <p>Employer Branding</p>
                <p>All Job Updates</p>
              </div>
            </li>
            <li className='drop d4'><a href="">Practice <i className="ri-arrow-down-wide-fill"></i></a>
              <div className="practice_drop dropp cursor">
                <p>160 Days Of DSA</p>
                <p>Problem Of the Day</p>
                <p>Practice Coding Problems</p>
                <p>GfG SDE Sheets</p>
              </div>
            </li>
            <li className='drop d5'><a href="">Contests <i className="ri-arrow-down-wide-fill"></i></a>
              <div className="contests_drop dropp cursor">
                <p>GfG Weekly[Rated Contest]</p>
                <p>Job A Thon Hiring Challenge</p>
                <p>All Contents & Events</p>
              </div>
            </li>
          </ul>
          <figure>
            <img src="https://media.geeksforgeeks.org/gfg-gg-logo.svg" alt="" />
          </figure>
        </div>
        <ul className="nav_right flex">
          <li><a href=""><i className="ri-search-line"></i></a></li>
          <li className="them">
            {/* <a href="#"><i className={isDarkTheme ? "ri-moon-line" : "ri-sun-line"}></i></a> */}
            <a href="#"><i className="ri-sun-line" onClick={toogleTheme}></i></a>
          </li>
          <li><a href=""><i className="ri-notification-3-line"></i></a></li>
          <li><a href=""><i className="ri-translate-2"></i></a></li>
          <li><a href=""><button>Sign in</button></a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Nav;