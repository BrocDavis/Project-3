import React from 'react';
import axios from 'axios';
import {
  Card, CardText, CardBody,
  Button, CardHeader
} from 'reactstrap';
import './postpage.css'

export default class Posts extends React.Component {
  state = {
    posts: []
  }

  componentDidMount() {
    axios.get(`/api/v1/allposts`)
      .then(res => {
        const posts = res.data;
        this.setState({ posts });
        console.log(posts)
      })
  }

  // handleOnLike = event => {
  //   this.setState({
  //     likes: this.state.likes + 1
  //   });
  // };

  render() {
    return (
      <div className="posts">
        {this.state.posts.map(post =>
          <div className="pad" key={post.pid}>
            <Card>
              <CardHeader tag='h3'>{post.title}</CardHeader>
              <CardBody>
                <div className='lineup'>
                  <h6 className="inline right">Posted by </h6>
                  <h2 className="inline">{post.user_name}</h2>
                </div>
                  <br/>
                <CardText>{post.body}</CardText>
                <Button>likes </Button> {post.likes}
              </CardBody>
            </Card>
          </div>
        )}
      </div>

    )
  }
}
