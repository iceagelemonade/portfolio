import React, { useState } from 'react'
import Projects from './components/Projects'
import About from './components/About'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Questions from './components/Questions'
import './App.css'


import { Tabs, Tab } from 'react-bootstrap'

const App = () => {

    // const [displayContent, setDisplayContent] = useState([])
    const [activeTab, setActiveTab] = useState('projects')

    return (
        <div className="conatiner-md m-3">
            <header>
                <h1>Bryan Carr</h1>
                <h3>Full-Stack Engineer</h3>
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
            <div className="container-fluid" style={{textAlign: 'center', padding: '10px'}}>
                Find me on:<br />
                <a href="https://github.com/iceagelemonade" target="_blank"><img src="logos/github-mark-white.png" alt="github link" width="40" height="40" /></a>
                <a href="https://www.linkedin.com/in/bryan-j-carr/" target="_blank"><img src="logos/LI-In-Bug.png" alt="linkedin link" height="40" /></a>
            </div>
        </div>
    );
}

export default App;