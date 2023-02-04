import React from "react"
import { Image, Col, Row, Container, Button } from "react-bootstrap"

const Baraka = () => {
    return (
        <Container>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <h1>Baraka</h1>
                    <Image src="baraka/baraka-splash.png" alt="Baraka" rounded fluid />
                </Col>
            </Row>
            <div style={{ textAlign: 'center' }}>
                <div className="icon-token" >
                    <i className={'devicon-mongodb-plain icon'}></i>
                </div>
                <div className="icon-token" >
                    <i className={'devicon-express-original icon'}></i>
                </div>
                <div className="icon-token" >
                    <i className={'devicon-react-plain icon'}></i>
                </div>
                <div className="icon-token" >
                    <i className={'devicon-nodejs-plain icon'}></i>
                </div>
                <div className="icon-token" >
                    <i className={'devicon-socketio-original icon'}></i>
                </div>
            </div>
            <Row>
                <Col>
                    <p>
                        Baraka is a full-stack MERN game, where up to 4 players can compete in a unique strategy boardgame. Baraka utilizes React, MongoDB, Express, NodeJs, and relies on a websocket (through SocketIO) to allow players to see the board in real time.
                    </p>
                    <p>
                        After creating and joining a game, players take turns placing units on up to two territories (that are procedurally generated). Once this is complete, all players issue hidden commands to their units to advance to new territories, create units, earn gold, and strengthen territories. Once commands are issued, the game executes them in a specific order, meaning some commands may become invalid due to other players' actions. The last player standing wins. 
                    </p>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg={2}>
                <Col>
                    <p className="blurb">
                        Baraka was made in conjunction with 2 other engineers. We decided that to learn as much as possible, we would have our own main roles, but each touch all aspects to some degree.
                    </p>
                    <p className="blurb">
                        My work on this project was primarily back-end related. I built the massive data-structure we use, which takes multiple documents (game, territories, commands, etc), and combines them into one JSON object, so that the front-end gets all of it's info with one request. Unfortunately, I descovered too late that my data-structure was poorly optimized, but kept it as was when delivering MVP (I did learn a lot from this error, however). I also heavily helped develop the game logic.
                    </p>
                </Col>
                <Col>
                    <video controls loop muted autoPlay width={'100%'}>
                        <source src="baraka/baraka-gameplay.mp4" type="video/mp4" />
                                Your browser does not support the video tag.
                    </video>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Despite achieving MVP, the team is continuing to work on this game, as we enjoyed what we have accomplished thus far. As such, the source code is ever changing, and may be broken at some times, depending on the branch viewed.
                    </p>
                </Col>
            </Row>
            <hr />
            <Row style={{textAlign: 'center'}}>
                <Col>
                <a href="https://github.com/iceagelemonade/Server-Baraka-Capstone" target="_blank" className="btn btn-primary">Click Here to see the back-end on github!</a>
                </Col>
                <Col>
                <a href="https://github.com/iceagelemonade/Client-Baraka-Capstone" target="_blank" className="btn btn-primary">Click Here to see the front-end on github!</a>
                </Col>
            </Row>
                    </Container>
                    )
}

                    export default Baraka