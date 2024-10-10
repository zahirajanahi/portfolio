import React, { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
        setToggleState(index);
    };
    
  return (
    <section className="qualification section">
        <h2 className='section__title'>Qualification</h2>
        <span className='section__subtitle'>My personel journey</span>

        <div className="qualification__container container">
            <div className="qualification__tabs">
                <div className={toggleState === 1  
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button   button--flex"}
                onClick = {() => toggleTab(1)} 
                >
                <i class="uil uil-graduation-cap qualification__icon"></i>
                    Education
                </div>

                <div className={toggleState === 2  
                ? "qualification__button qualification__active  button--flex"
                : "qualification__button   button--flex"}
                onClick = {() => toggleTab(2)} 
                >
                    <i className="uil uil-briefcase-alt qualification__icon"></i>
                    Experience
                </div>
            </div>

            <div className="qualification__sections">
                <div className={toggleState === 1 
                 ? "qualification__content qualification__content-active"
                 : "qualification__content "
                 }>
                     <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">baccalauréat science physique</h3>
                            <span className="qualification__subtitle"> oum banin - baqalani</span>
                            <div className="qualification__calender">
                            <i class="uil uil-calender"></i> 2018 - 2021
                            </div>
                        </div> 

                        <div>
                             <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                        </div>

                     </div>


                     <div className="qualification__data">
                        <div></div>

                        <div>
                             <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                        </div>

                        <div>
                        <h3 className="qualification__title"> Full stack development </h3>
                            <span className="qualification__subtitle">ofppt lalla-aicha </span>
                            <div className="qualification__calender">
                            <i class="uil uil-calender"></i>2021 - 2023
                            </div>
                        </div>
                     </div>

                     <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">ui/ux design Design</h3>
                            <span className="qualification__subtitle"> Great Learning</span>
                            <div className="qualification__calender">
                            <i class="uil uil-calender"></i> 2024
                            </div>
                        </div> 

                        <div>
                             <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                        </div>

                     </div>
                </div>

                <div className= {toggleState === 2 
                 ? "qualification__content qualification__content-active"
                 : "qualification__content "
                 } >
                     <div className="qualification__data">
                        <div>
                        <h3 className="qualification__title">react developer intern</h3>
                            <span className="qualification__subtitle">DIGIMPERIAL</span>
                            <div className="qualification__calender">
                                <i class="uil uil-calender"></i> 2023
                            </div>
                        </div> 

                        <div>
                             <span className="qualification__rounder"></span>
                              <span className="qualification__line"></span>
                        </div>

                     </div>

                 </div>

            </div>
        </div>
    </section>
  )
}

export default Qualification
