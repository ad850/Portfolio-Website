import React from 'react';
import './intro.scss';
import { init } from 'ityped';
import { useEffect } from 'react';
import { useRef } from 'react';
import Down from '../images/down.png'
import programmer from '../images/programmer2.svg'


const Intro = () => {
    const textRef = useRef();

    useEffect(() => {

        init(textRef.current, {
            showCursor: false,
            backDelay: 1500,
            strings: ['Frontend developer', 'Designer', "Content Creator"]
        })

    }, [])

    return (
        <div className="intro" id="intro">

            <div className="left">
                <div className="imageContainer">
                    <img src={programmer} alt="google" />
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2> Hi There, I'm </h2>
                    <h1>Aditya Sharma</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                </div>

                <a href="#portfolio">

                    <img src={Down} alt="google" />

                </a>
            </div>
        </div>
    )
}

export default Intro;
