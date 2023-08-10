import React, { useState, useEffect } from 'react'
import './index2.css';
import TabsData from'./TabsData';
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

function Tabs() {
  
  const [jobs, setJobs] = useState(TabsData)
  const [value, setValue] = useState(0)
  
 
  const { company, dates, duties, title } = jobs[value]
  return (
    <section className="Home">
      <div className="title">
        <h2>Municipality Report</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index) => {
            return (
              <button
                key={item.id}
                onClick={() => setValue(index)}
                className={`job-btn ${index === value && 'active-btn'}`}
              >
                {item.company}
              </button>
            )
          })}
        </div>
        {/* job info */}
        <article className="job-info">
       
          <h4>{company}</h4>
          <p className="job-date">{dates}</p>
          {duties.map((duty, index) => {
            return (
              <div key={index} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{duty}</p>
              </div>
            )
          })}
        </article>
      </div>

      
      <button type="button" className="btn">
        more info
      </button>
    </section>
  )
}

export default Tabs