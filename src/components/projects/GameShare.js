import React from "react"
import { Image, Col, Row, Container } from "react-bootstrap"

const GameShare = () => {
    return (
        <Container>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <h1>GameShare</h1>
                    <Image src="gameshare/gameshare-splash.png" alt="GAMESHARE" rounded fluid />
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
            </div>
            <Row>
                <Col>
                    <p>
                        GameShare is a full-stack MERN application, that allows users to view a videogame library (utilizing the GiantBomb API), add games to their collection, and leave reviews. GameShare utilizes React, MongoDB, Express, and NodeJs.
                    </p>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg={2}>
                <Col>
                    <p className="blurb">
                        GameShare was my first team project, and was made with 3 other engineers over the course of 1 week. My role in the team was back-end manager. I created the back-end entirely myself, but the project went a bit sideways so I stepped in to help on the front-end.
                    </p>
                    <p className="blurb">
                        I created the logic for the login functions, that allows a user to login using either their registered email address or username, using only one field. Additionally, I provided some light sanitation to prevent users having the same username with either spaces or changing case.
                    </p>
                </Col>
                <Col>
                    <Image src="gameshare/gameshare-login.gif" alt="GAMESHARE login" rounded fluid />
                </Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg={2}>
                <Col>
                    <Image src="gameshare/gameshare-search.gif" alt="GAMESHARE search" rounded fluid />
                </Col>
                <Col>
                    <p className="blurb">
                        I also fixed a lot of issues we had with states and hooks across the app, and helped rebuild our search function. As I handled the back-end, I also built all of our connections to the third-party GiantBomb API.
                    </p>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg={2}>
                <Col>
                    <p className="blurb">
                        I built our profile section allows users to select a favorite game from their library to use as a user image. Users can also add their usernames from other platforms (XBOX, Playstation, etc.) so other users may find them there as well.
                    </p>
                </Col>
                <Col>
                    <Image src="gameshare/gameshare-profile.gif" alt="GAMESHARE profile" rounded fluid />
                </Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg={2}>
                <Col>
                    <Image src="gameshare/gameshare-review.gif" alt="GAMESHARE review" rounded fluid />
                </Col>
                <Col>
                    <p className="blurb">
                        Users can also review games, which in addition to being showing on the games page, will also update the overall score of the game in .5 increments.
                    </p>
                    <p className="blurb">
                        This project faced many issues due to some poor synergy between the team, but as the week went on we all learned how to work more effectivly in teams, and were able to pull through on reaching MVP.
                    </p>
                </Col>
            </Row>
            <hr />
            <Row style={{textAlign: 'center'}}>
                <Col>
                <a href="https://github.com/iceagelemonade/player-api" target="_blank" className="btn btn-primary">Click Here to see the back-end on github!</a>
                </Col>
                <Col>
                <a href="https://github.com/iceagelemonade/player-client" target="_blank" className="btn btn-primary">Click Here to see the front-end on github!</a>
                </Col>
            </Row>
        </Container>
    )
}

export default GameShare