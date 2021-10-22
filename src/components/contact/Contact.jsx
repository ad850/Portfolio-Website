import React from 'react'
import './contact.scss';
import { useState } from 'react';
import shake from '../images/shake.svg';


const Contact = () => {
    const [state1, setstate1] = useState("")
    const [state2, setstate2] = useState("")



    var handelsubmit = (e) => {

        if (!state1 && !state2) {

            alert("pleas enter valid detalis")

        } else if (state2.length <= 10) {

            alert("pleas enter valid detalis")
        }
        else {


            e.preventDefault();
            alert(`Thank you for contacting us!`)
            setstate1("")
            setstate2("")
        }

    }

    const change1 = (e) => {

        setstate1(e.target.value);
    }
    const change2 = (e) => {

        setstate2(e.target.value);
    }

    return (
        <div className="contact" id="contact">

            <div className="left">

                <img src={shake} alt="google" />

            </div>

            <div className="right">

                <h2>Contact.</h2>

                <form onSubmit={handelsubmit}>

                    <input type="email" placeholder="Email" value={state1} onChange={change1} />

                    <textarea placeholder="Message" value={state2} onChange={change2} ></textarea>

                    <button type="submit"> Send</button>

                </form>

            </div>

        </div>
    )
}

export default Contact
