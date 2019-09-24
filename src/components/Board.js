import React from "react";
import Square from "./Square";

class Board extends React.Component {
  renderSquare = i => {
    var winSquares = this.props.winSquares
    if (winSquares.length === 0) {
      return (
        <Square
          style="white"
          value={this.props.squares[i]}
          onClick={() => this.props.onHandleClick(i)}
        />
      );
    }
    else {
      var check = false;
      winSquares.forEach(element => {
        if (element === i) {
          check = true;
        }
      })
      if (check) {
        return (
          <Square
            style="red"
            value={this.props.squares[i]}
            onClick={() => this.props.onHandleClick(i)}
          />
        );
      }
      else {
        return (
          <Square
            style="white"
            value={this.props.squares[i]}
            onClick={() => this.props.onHandleClick(i)}
          />
        );
      }
    }
  };

  render() {
    console.log('winSquares', this.props.winSquares);

    let items = [];
    let listItems = [];
    for (let i = 0; i < 20; i++) {
      for (let j = 20 * i; j < 20 * (i + 1); j++) {
        items.push(this.renderSquare(j));
      }
      listItems.push(<div className="board-row">{items}</div>);
      items = [];
    }

    return (
      <div>
        <div>{listItems}</div>
      </div>
    );
  }
}
export default Board;
