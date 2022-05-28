import React from "react";

function About() {
    return(
        <div>
            <div className="ms-4 ms-md-5 rounded mt-5 p-info bg-light p-3">
            <h3><b>About</b></h3>
            <p className="text-secondary">I am a frontend developer with a particular interest in making things simple
            and automating daily tasks. I try to <br/>keep up with security and best practices,
            and am always looking for new things to learn.</p>
        </div>
        <div className="ms-4 ms-md-5 mb-4 rounded bg-light p-3 mt-5 p-info">
            <h3><b>Interests</b></h3>
            <p className="text-secondary">
                Food expert. Music scholar. Reader . Internet fanatic. Bacon buff. Entrepreneur. Travel geek.
                Pop culture ninja. <br/>Coffee fanatic.
            </p>
        </div>
        </div>
    )
}

export default About