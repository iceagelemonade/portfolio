import React, { useState } from 'react'
import { Button, Container, Row, Col } from 'react-bootstrap'

import Connect from "./projects/Connect"
import Conjure from './projects/Conjure'
import GameShare from './projects/GameShare'
import Baraka from './projects/Baraka'

const Projects = (props) => {

    const { tooltipText } = props

    const [activeProject, setActiveProject] = useState({
        connect: false,
        conjure: true,
        gameShare: false,
        baraka: false
    })

    const [displayProject, setDisplayProject] = useState(<Conjure tooltipText={tooltipText} />)

    const [connectButtonState, setConnectButtonState] = useState(false)
    const [conjureButtonState, setConjureButtonState] = useState(true)
    const [gameShareButtonState, setGameShareButtonState] = useState(false)
    const [barakaButtonState, setBarakaButtonState] = useState(false)

    const viewProject = (project) => {
        const viewProject = activeProject
        const disabledKeys = Object.keys(viewProject)
        disabledKeys.forEach(key => {
            viewProject[key] = false
        })
        viewProject[project] = true

        setActiveProject(viewProject)
        setConnectButtonState(activeProject.connect)
        setConjureButtonState(activeProject.conjure)
        setGameShareButtonState(activeProject.gameShare)
        setBarakaButtonState(activeProject.baraka)
        switch (project) {
            case 'connect':
                setDisplayProject(<Connect tooltipText={tooltipText} />)
                break
            case 'conjure':
                setDisplayProject(<Conjure tooltipText={tooltipText} />)
                break
            case 'gameShare':
                setDisplayProject(<GameShare tooltipText={tooltipText} />)
                break
            case 'baraka':
                setDisplayProject(<Baraka tooltipText={tooltipText} />)
                break
            default:
                setDisplayProject(<Conjure tooltipText={tooltipText} />) 
        }
    }
    
    return (
        <div className='content-window'>
            <Container>
                <Row>
                    <Col>
                        <Button style={{width: '100%'}} onClick={() => viewProject('connect')} disabled={connectButtonState}>
                            Connect Between 3 & 5
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{width: '100%'}} onClick={() => viewProject('conjure')} disabled={conjureButtonState}>
                            Conjure Backpack
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{width: '100%'}} onClick={() => viewProject('gameShare')} disabled={gameShareButtonState}>
                            Game Share
                        </Button>
                    </Col>
                    <Col>
                        <Button style={{width: '100%'}} onClick={() => viewProject('baraka')} disabled={barakaButtonState}>
                            Baraka
                        </Button>
                    </Col>
                </Row>
                <hr />
            </Container>
            {displayProject}
        </div>
    )
}

export default Projects