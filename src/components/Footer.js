import React from "react"

function Footer() {
    return(
        <div>
            <div className="footer-page p-4 container-fluid d-flex justify-content-center">
            <i className="fa-brands fa-twitter-square me-4"></i>
            <i className="fa-brands fa-facebook-square me-4"></i>
            <i className="fa-brands fa-instagram-square me-4"></i>
            <i className="fa-brands fa-github-square"></i>
        </div>
        <div className="footer-pageB d-md-none p-4 container-fluid d-flex justify-content-center">
            <i className="fa-brands fa-twitter-square me-4"></i>
            <i className="fa-brands fa-facebook-square me-4"></i>
            <i className="fa-brands fa-instagram-square me-4"></i>
            <i className="fa-brands fa-github-square"></i>
        </div>
        </div>
    )
}

export default Footer