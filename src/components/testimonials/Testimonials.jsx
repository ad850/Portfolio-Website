import React from 'react';
import './testimonials.scss';
import github from '../images/github-dots.svg'
import html from '../images/html.svg'
import javascript from '../images/javascript.svg'
import materialui from '../images/materialui.svg'
import sass from '../images/sass.svg'
import react from '../images/react.svg'
import github2 from '../images/github.svg'
import redux from '../images/redux.svg'
import css from '../images/css.svg'
import gitt from '../images/gitt.svg'

const Testimonials = () => {
    return (
        <div className="testimonials" id="testimonials">
            <div className="heading">
                <h1>My Tech Stack</h1>
            </div>

            <div className="wrapper">

                <div className="left" >

                    <img src={github} alt="google" />

                </div>

                <div className="right">
                    <div className="item"><img src={html} alt="google" /> </div>
                    <div className="item"><img src={javascript} alt="google" /></div>
                    <div className="item"><img src={materialui} alt="google" /></div>
                    <div className="item"><img src={sass} alt="google" /></div>
                    <div className="item"><img src={react} alt="google" /></div>
                    <div className="item"><img src={github2} alt="google" /></div>
                    <div className="item"><img src={redux} alt="google" /></div>
                    <div className="item"><img src={css} alt="google" /></div>
                    <div className="item"><img src={gitt} alt="google" /></div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials
