import React from 'react'
import {HeroData} from "../../assets/data/heroData";
import "./Landing.css"

function Landing() {
  return (
    <main className='hero-container'>
      {
        HeroData
        .map((data,indx)=>{
            return(
             <div key={indx} className='hero-content-container'>
               <div className="hero-img">
                <img src={data.img} alt="hero" />
              </div>
              <div className='hero-info'>
                <h2>{data.appSattus}</h2>
                <hr />
                <p>{data.category}</p>
                <p>{data.Date}</p>
              </div>
              {/* <FontAwesomeIcon icon="fa-thin fa-ellipsis-vertical" /> */}
             </div>
            )
        })
      }
    </main> 
  )
}

export default Landing