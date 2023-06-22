import React from "react";

class Card extends React.Component {
  render() {
    return (
      <>
        <div className="card_book">
          <p className="title">{this.props.title}</p>
          <p className="author">{this.props.author}</p>
          <p className="publisher">{`${this.props.publisher}, ${this.props.year}`}</p>
        </div>
      </>
    );
  }
}

export default Card;
