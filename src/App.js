import React, { useEffect, useState } from 'react'

import Icon from './components/Icon'
import Icon2 from './components/Icon2'
import Icon3 from './components/Icon3'

import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Questions from './components/Questions'
import './App.css'

import { Tabs, Tab, Col, Row } from 'react-bootstrap'

const App = () => {

    // const [displayContent, setDisplayContent] = useState([])
    const [activeTab, setActiveTab] = useState('projects')
    const iconArray = [["nodejs-plain", "express-original", "mongodb-plain"], ["python-plain", "django-plain", "postgresql-plain"], ["html5-plain", "javascript-plain", "react-plain"]]

    const [spin, setSpin] = useState(true)

    const animateTestArr = iconArray[2]
    let animateIndex = 0
    useEffect(() => {
        const interval = setInterval(() => {
            // console.log(animateIndex)
            if (animateIndex === animateTestArr.length -1) {
                animateIndex = 0
            } else {
                animateIndex+=1
            }
            setSpin(animateTestArr[animateIndex])
        }, 20)
        return () => clearInterval(interval)
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
                            <Icon iconArray={iconArray[0]}  />
                            <Icon2 iconArray={iconArray[1]}  />
                            <Icon3 iconArray={iconArray[2]}  />
                            
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
