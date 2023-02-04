import React, { useEffect, useState } from 'react'

import Icon from './components/Icon'

import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Questions from './components/Questions'
import './App.css'

import { Tabs, Tab, Col, Row } from 'react-bootstrap'
let delay = [-50, -100, -150]
let rotate = [0, 0, 0]
const iconArray = [["nodejs-plain", "express-original", "mongodb-plain"], ["python-plain", "django-plain", "postgresql-plain"], ["html5-plain", "javascript-plain", "react-plain"]]
let iconIndex = [0, 0, 0]

const App = () => {

    const [activeTab, setActiveTab] = useState('projects')
    const [spin, setSpin] = useState(true)

    const animateTestArr = iconArray[2]
    let animateIndex = 0
    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(animateIndex)
            if (animateIndex === animateTestArr.length - 1) {
                animateIndex = 0
            } else {
                animateIndex += 1
            }
            setSpin(animateTestArr[animateIndex])
        }, 20)
        return () => clearInterval(interval)
    }, [])

    useEffect(() => {
        const int = setInterval(() => {
            const currentRotate = rotate.slice()
            const currentDelay = delay.slice()
            const currentIconIndex = iconIndex.slice()
            currentRotate.forEach((value, index) => {
                if (value === 360) {
                    value = 0
                    currentDelay[index] = -50
                }
                if (value === 0 && currentDelay[index] < 0) {
                    currentDelay[index]++
                } else {
                    if (value === 90) {
                        value = 270
                        currentIconIndex[index]++
                        if (currentIconIndex[index] === iconArray[index].length) {
                            currentIconIndex[index] = 0
                        }
                    }
                    value++

                }
                currentRotate[index] = value
            })
            rotate = currentRotate
            delay = currentDelay
            iconIndex = currentIconIndex

        }, 20)
        return () => clearInterval(int)
    }, [])

    return (
        <div className="conatiner-md m-3">
            <header>
                <Row>
                    <Col>
                        <h1>Bryan Carr</h1>
                        <h3>Full-Stack Engineer</h3>
                    </Col>
                    <Col>
                        <div className='float-end'>
                            <Icon languageIcon={iconArray[0][iconIndex[0]]} rotate={rotate[0]} />
                            <Icon languageIcon={iconArray[1][iconIndex[1]]} rotate={rotate[1]} />
                            <Icon languageIcon={iconArray[2][iconIndex[2]]} rotate={rotate[2]} />
                        </div>
                    </Col>
                </Row>
            </header>
            <Tabs id="main-tabs" activeKey={activeTab} onSelect={(e) => setActiveTab(e)}>
                <Tab eventKey="projects" title="Projects">
                    <Projects />
                </Tab>
                <Tab eventKey="about" title="About Me">
                    <About />
                </Tab>
                <Tab eventKey="contact" title="Contact">
                    <Contact />
                </Tab>
                <Tab eventKey="resume" title="Resume">
                    <Resume />
                </Tab>
                <Tab eventKey="questions" title="Interview FAQ's">
                    <Questions />
                </Tab>
            </Tabs>
            {/* <main class="container-fluid" id="current-view">
                <span class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </span>
                Loading...
            </main> */}
            <div className="container-fluid" style={{ textAlign: 'center', padding: '10px' }}>
                Find me on:<br />
                <a href="https://github.com/iceagelemonade" target="_blank" rel="noreferrer"><img src="logos/github-mark-white.png" alt="github link" width="40" height="40" /></a>
                <a href="https://www.linkedin.com/in/bryan-j-carr/" target="_blank" rel="noreffer"><img src="logos/LI-In-Bug.png" alt="linkedin link" height="40" /></a>
            </div>
        </div>
    );
}

export default App;
