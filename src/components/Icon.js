import React from "react"

const Icon = (props) => {
    const { languageIcon, rotate } = props



    const thisClass = `devicon-${languageIcon} icon`
    return (
        <div className="icon-token" style={{ transform: `rotateY(${rotate}deg)` }}>
            <i className={thisClass}></i>
        </div>
    )

}

export default Icon