import React from "react"
import { Image, Col, Row, Container, OverlayTrigger } from "react-bootstrap"

const Connect = (props) => {

    const { tooltipText } = props

    return (
        <Container>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <h1>Connect Between 3 & 5</h1>
                    <h5>CHAOS EDITION</h5>
                    <Image src="connect3and5/cb3a5splash.gif" alt="Connect Between 3 & 5" rounded fluid />
                </Col>
            </Row>
            <div style={{ textAlign: 'center' }}>
                <OverlayTrigger placement="top" overlay={tooltipText('HTML5')}>
                    <div className="icon-token" >
                        <i className={'devicon-html5-plain icon'}></i>
                    </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={tooltipText('CSS')}>
                    <div className="icon-token" >
                        <i className={'devicon-css3-plain icon'}></i>
                    </div>
                </OverlayTrigger>
                <OverlayTrigger placement="top" overlay={tooltipText('JavaScript')}>
                    <div className="icon-token" >
                        <i className={'devicon-javascript-plain icon'}></i>
                    </div>
                </OverlayTrigger>
            </div>
            <Row>
                <Col>
                    <p>
                        My first major project, Connect between 3 & 5 CHAOS EDITION is a local 2-player twist on the classic 4-In-A-Row game. Players take turns selecting columns in which to place tokens, and the tokens will fall to the lowest available position. The twist is two-fold: 1) When a player creates a line of 4 tokens, they are awarded 25 points for each and those tokens are removed from the game board, and 2) After every 6th token placed the board rotates 90 degrees in a random direction.
                    </p>
                </Col>
            </Row>
            <Row xs={1} sm={1} md={1} lg={2}>
                <Col>
                    <p className="blurb">
                        This game is made entirely using HTML, CSS, and Vanilla Javascript without the use of any third-party frameworks or libraries. All animations are achieved via DOM manipulation and JS timers.
                    </p>
                    <p className="blurb">
                        Due to the game not ending when a player initially creates a line of 4, this game is more similar to games like Tetris, but because I wanted to capture the feeling of Connect 4, I used a 7 x 6 grid. This means that when the board rotates, I had to programmatically determine where the tokens should be redrawn and calculated so that they would slide downwards to the correct point. I also had to account that new lines could be created because of this, and check game over conditions correctly. To keep the code as DRY as possible, regardless of rotating, I always needed the upper left position to be indexed as 0, which led to me creating a specific index to achieve just this. And due to the fluid nature of the game board, all functions had to be calculated based on whether the board is currently 7 x 6 or 6 x 7.
                    </p>
                </Col>
                <Col>
                    <Image src="connect3and5/rotation.gif" alt="Game Board Rotation" rounded fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        I also wanted to prevent using many arrays to check against for scoring, because lines could be greater than 4, and additional tokens should still be counted towards the score, and because of the rotation, I would have to have tables for each orientation. Ultimately I decided to build two tables that only listed each position that could possibly be the first token in a line of at least 4, and which directions that line could be drawn in, allowing an additional function to check said line.
                    </p>
                </Col>
            </Row>
            <hr />
            <Row style={{ textAlign: 'center' }}>
                <Col>
                    <a href="https://github.com/iceagelemonade/connect-between-3-and-5" target="_blank" className="btn btn-primary">Click Here to see on github!</a>
                </Col>
                <Col>
                    <a href="https://iceagelemonade.github.io/connect-between-3-and-5/" target="_blank" className="btn btn-primary">Click Here to play the deployed game!</a>
                </Col>
            </Row>

        </Container>
    )
}

export default Connect