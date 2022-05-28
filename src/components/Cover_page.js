import React from "react";
import coverImage from "./Images/coverimage.jpg"
import "./styles/cover.css"

function Cover() {
    return(
        <img className="cover-img" src={coverImage} />
    )
}

export default Cover