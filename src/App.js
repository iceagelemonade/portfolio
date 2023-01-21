import React, { useEffect, useState } from 'react'

import Icon from './components/Icon'

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

    const [icon1, setIcon1] = useState(iconArray[0][0])
    const [icon2, setIcon2] = useState(iconArray[1][0])
    const [icon3, setIcon3] = useState(iconArray[2][0])

    const [rotate1, setRotate1] = useState(0)
    const [rotate2, setRotate2] = useState(0)
    const [rotate3, setRotate3] = useState(0)

    useEffect(() => {
        setInterval(setRotate1(rotate1 < 360 ? rotate1 + 1 : 0), 200)
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
                            {/* <Icon iconName="react-plain" />
                            <Icon iconName="javascript-plain" />
                            <Icon iconName="python-plain" />
                            <Icon iconName="postgresql-plain" />
                            <Icon iconName="nodejs-plain" />
                            <Icon iconName="mongodb-plain" />
                            <Icon iconName="html5-plain" />
                            <Icon iconName="css3-plain" />
                            <Icon iconName="django-plain" />
                            <Icon iconName="express-original" /> */}
                            <Icon iconName={icon1} rotate={rotate1} />
                            <Icon iconName={icon2} rotate={rotate2} />
                            <Icon iconName={icon3} rotate={rotate3} />
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
