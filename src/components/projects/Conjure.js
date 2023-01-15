import React from "react"
import { Image, Col, Row, Container} from "react-bootstrap"

const Conjure = () => {
    return (
        <Container>
            <Row>
                <Col style={{ textAlign: 'center' }}>
                    <h1>Conjure Backpack</h1>
                    <Image src="conjure-backpack/conjure-splash.png" alt="Conjure Backpack" rounded fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                    <p>
                        Conjure Backpack is full-stack tool designed to help players of the popular table-top game Dungeons & Dragons manage their character inventories. It was created using NodeJs, Express, MongoDB, and LiquidJs for rendering.
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="blurb">
                        Game Masters can create campaigns, and add other users (as players) to it. Once the campaign is create, the creator can chose to import nearly 600 pre-built items (from the D&D source material), as well as create their own items. This same user can at any point remove items from the game, instantly making them inaccessible to the players.
                    </p>
                    <p className="blurb">
                        Players can create "backpacks" which serve as their own inventories. Game Masters and the backpack create can add and remove items to this backpack.
                    </p>
                </Col>
                <Col>
                <Image src="conjure-backpack/conjure-item-library.gif" alt="Conjure Backpack Item Library" rounded fluid />
                </Col>
            </Row>
            <Row>
                <Col>
                <Image src="conjure-backpack/conjure-search.gif" alt="Conjure Backpack Search Function" rounded fluid />
                </Col>
                <Col>
                    <p className="blurb">
                        Once the campaign and backpack(s) are set up, users can navigate through the library curated by the Game Master. This can be done by looking at items through a list filtered by item type, or by using the search function. These options persist when looking through an individual inventory as well.
                    </p>
                    <p className="blurb">
                        Any item card can be "opened" to view more information, added to a backpack (if one is selected), or edited (if created by the user).
                    </p>
                </Col>
            </Row>
            <Row>
                <Col>
                    <p className="blurb">
                        This project is one of the ones I've enjoyed the most, as it is a tool I actually use. That is why I have decided to re-build with a React front-end, and moving my database over to mySQL. I haven't decided yet is I wish to use Django or Node for my backend yet (I'm building both).
                    </p>
                </Col>
                <Col>
                <Image src="conjure-backpack/conjure-add-item.gif" alt="Conjure Backpack Adding Items" rounded fluid />
                </Col>
            </Row>
            <hr />
            <Row style={{textAlign: 'center'}}>
                <Col>
                <a href="https://github.com/iceagelemonade/5e-conjure-backpack" target="_blank" className="btn btn-primary">Click Here to see on github!</a>
                </Col>
                <Col>
                <a href="https://conjure-backpack.fly.dev/" target="_blank" className="btn btn-primary">Click Here to test out the app!</a>
                </Col>
            </Row>
        </Container>
    )
}

export default Conjure