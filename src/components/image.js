import React from "react";
import profile from "./Images/profile-img.png"
import "./styles/cover.css"

function Profile() {
    return(
        <img className="profile-img w-md-100 ms-2" src={profile} />
    )
}

export default Profile