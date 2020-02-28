import React from 'react';
import { Container, Jumbotron } from 'reactstrap';
import RetrieveHeadlines from './HeadlineCard';
import "./feed.css";

function LiveFeed() {
    return (
        <Jumbotron>
            <Container>
                <div className="background-color: #eee;">
                <div className="jumbotron w-75 p-3 mx-auto">
                    <h1 className="display-3 text-center text-success" id="headlineTitle">Daily Investment News</h1>
                        <p className="lead"></p>
                        <hr className="my-4" />
                </div>
        <RetrieveHeadlines/>
            </div>
            </Container>
        </Jumbotron>
    );
}

export default LiveFeed;