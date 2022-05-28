import React from "react"

function Info() {
    return(
        <div className="info-general">
            <h1 className="ms-5 info">Laura Smith</h1>
            <p className="ms-5 info-text">Frontend Developer</p>
            <p className="ms-5 info-site">laurasmith.website</p>
            <div className="container d-flex link-info">
                <button className="btn btn-outline-secondary px-4 bg-button bg-white"><i className="fa-solid fa-envelope me-2"></i>Email</button>
                <button className="btn text-white btn-primary ms-3 px-4"><i className="fa-brands fa-linkedin me-2"></i>LinkedIn</button>
            </div>
        </div>
    )
}

export default Info