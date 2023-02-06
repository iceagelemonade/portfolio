import React from "react"
import { OverlayTrigger } from "react-bootstrap"

const Icon = (props) => {
    const { languageIcon, rotate, popText, tooltipText } = props

    const thisClass = `devicon-${languageIcon} icon`
    return (
        <OverlayTrigger placement="bottom" overlay={tooltipText(popText)}>
        <div className="icon-token" style={{ transform: `rotateY(${rotate}deg)` }}>
            <i className={thisClass}></i>
        </div>
        </OverlayTrigger>
    )

}

export default Icon