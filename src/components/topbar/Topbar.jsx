import React from 'react'
import './topbar.scss';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Topbar = ({ menuopen, setmenuOpen }) => {

    return (
        <div className={"topbar " + (menuopen && "active")} >

            <div className="wrapper">


                <div className="left">

                    <a href="#intro" className="logo"> {"< Aditya />"} </a>

                    <div className="itemcontainer">

                        <PersonIcon className="icon" />

                        <span> +91-8505085063</span>

                    </div>
                    <div className="itemcontainer">

                        <EmailIcon className="icon" />

                        <span> Aditya.sharma9827.as@gmail.com</span>
                        <a href="https://github.com/ad850" target="_blank" id="git" > <GitHubIcon  style={{color:"gray"}}/></a>
                        <a href="https://linkedin.com/in/aditya-sharma-986a84a2/" target="_blank" id="link" > <LinkedInIcon style={{color:"gray"}}/></a>

                    </div>
                </div>
                <div className="right">

                    <div className="hamburger" onClick={() => setmenuOpen(!menuopen)} >

                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>

                    </div>
                </div>
            </div>

        </div >
    )
}

export default Topbar;
