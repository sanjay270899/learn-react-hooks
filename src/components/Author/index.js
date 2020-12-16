import React from 'react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { SiCodechef } from 'react-icons/si'

function Author() {
    return (
        <div className="container">
            <div className="Sanjay">
                <div className="Sanjay-title">
                    Sanjay R. Prajapati
                </div>
                <div className="Sanjay-content">
                    <p>Front-end web developer at DiOlO</p>
                    <p>CSE Undergrad @IIITV</p>
                    <p>HTML5, CSS3, JavaScript, Node.js, ReactJs, MongoDB, Express.js, Sass</p>
                </div>
                <div className="Sanjay-social-links">
                    <a href="https://github.com/sanjay270899" target="_"><div className="Sanjay-social-links-items"><FaGithub /></div></a>
                    <a href="https://www.linkedin.com/in/sanjay270899/" target="_"><div className="Sanjay-social-links-items"><FaLinkedinIn /></div></a>
                    <a href="https://www.codechef.com/users/sanjay270899" target="_"><div className="Sanjay-social-links-items"><SiCodechef /></div></a>
                </div>
            </div>
        </div>
    )
}

export default Author
