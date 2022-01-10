import React, { Component} from "react";
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class Post extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false,
          };
        this.likePost = this.likePost.bind(this)
        this.unlikePost = this.unlikePost.bind(this)
    }

    likePost () {
        this.setState({
            liked: true
        })
    }

    unlikePost () {
        this.setState({
            liked: false
        })
    }

    render() {
        if (this.state.liked) {
            return (
            <div>
                <h4>{this.props.info.title}</h4>
                <Image width="100%" rounded="true" src={this.props.info.url} />
                <Container className="mt-2 mb-3">
                    <Row>
                        <Col auto><h5>{this.props.info.date}</h5></Col>
                        <Col sm="1" fluid><Button onClick={this.unlikePost} variant="secondary"><FontAwesomeIcon icon={faHeart} /></Button></Col>
                    </Row>
                </Container>
                <p>{this.props.info.explanation}</p>
            </div>
            )
        } else {
            return (
            <div>
                <h4>{this.props.info.title}</h4>
                <Image width="100%" rounded="true" src={this.props.info.url} />
                <Container className="mt-2 mb-3">
                    <Row>
                        <Col auto><h5>{this.props.info.date}</h5></Col>
                        <Col sm="1" fluid><Button onClick={this.likePost} variant="outline-secondary"><FontAwesomeIcon icon={faHeart} /></Button></Col>
                    </Row>
                </Container>
                <p>{this.props.info.explanation}</p>
            </div> )
        }
    }
};

export default Post;

