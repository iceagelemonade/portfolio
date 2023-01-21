import React from "react"

const Icon = (props) => {
    const { iconName, rotate } = props

    const thisClass = `devicon-${iconName} icon`
    return (
        <div className="icon-token" style={{transform: `rotateY(${rotate}deg)`}}>
            <i className={thisClass}></i>
        </div>
    )

}

export default Icon