import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class Dishdetail extends Component {
  renderDish(dish) {
    if (dish != null)
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else return <div />;
  }

  renderComments(dish) {
    if (dish != null) {
      return dish.comments.map(comment => {
        return (
          <ul>
            <li>{comment.author}</li>
            <li>{comment.comment}</li>
          </ul>
        );
      });
    } else return <div />;
  }

  render() {
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">
          <h4 className="text-center">Comments</h4>
          {this.renderComments(this.props.dish)}
        </div>
      </div>
    );
  }
}

export default Dishdetail;
