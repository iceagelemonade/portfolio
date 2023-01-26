import React, { useEffect, useState } from "react"

const dwell = 50
let rotate = 0
let classIndex = 0
let wait = 0


const Icon2 = (props) => {
    const { iconArray } = props

    const [currentClass, setCurrentClass] = useState(iconArray[classIndex])

    useEffect(() => {
        const interval = setInterval(() => {
            if (rotate === 360) {
                rotate = 0
            }
            if (rotate === 0 && wait <= dwell) {
                wait++
            } else {
                wait = 0
                if (rotate === 90) {
                    rotate = 270
                    classIndex++
                    if (classIndex === iconArray.length) {
                        classIndex = 0
                    }
                    setCurrentClass(iconArray[classIndex])
                }
                rotate++
            }
            // console.log(rotate)
        }, 20)
        return () => clearInterval(interval)
    }, [])


    const thisClass = `devicon-${currentClass} icon`
    return (
        <div className="icon-token" style={{ transform: `rotateY(${rotate}deg)` }}>
            <i className={thisClass}></i>
        </div>
    )

}

export default Icon2