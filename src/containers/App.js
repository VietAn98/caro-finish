import React from "react";
import Swal from "sweetalert2";
import "./App.css";
import Board from "../components/Board";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      history: [{
        squares: Array(400).fill(null)
      }],
      isNext: true,
      win: false,
      stepNumber: 0,
      checkWin: false,
      winSquares: [],
      winSquaresTemp: [],
      isUp: true,
      isDown: false,
    };
  }

  onHandleClick = i => {
    let {history} = this.state;
    const {stepNumber, checkWin, isNext} = this.state;
    history = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winSquares = [];
    if (checkWin) {
      return null;
    }

    if (squares[i] === null) {
      squares[i] = isNext ? "X" : "O";
      this.setState({
        history: history.concat([{
          squares,
        }]),
        stepNumber: history.length,
        isNext: !isNext
      });
      switch (squares[i]) {
        default:
          break;
        case "X":
          if (
            squares[i + 1] === "X" &&
            squares[i + 2] === "X" &&
            squares[i + 3] === "X" &&
            squares[i + 4] === "X" &&
            ((squares[i - 1] === "O" && squares[i + 5] !== "O") ||
              (squares[i - 1] !== "O" && squares[i + 5] === "O") ||
              (squares[i - 1] !== "O" && squares[i + 5] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",
            });

            winSquares.push(i + 1, i + 2, i, i + 3, i + 4);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1] === "X" &&
            squares[i + 2] === "X" &&
            squares[i + 3] === "X" &&
            squares[i - 1] === "X" &&
            ((squares[i - 2] === "O" && squares[i + 4] !== "O") ||
              (squares[i - 2] !== "O" && squares[i + 4] === "O") ||
              (squares[i - 2] !== "O" && squares[i + 4] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",
            });

            winSquares.push(i + 1, i + 2, i, i + 3, i - 1);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1] === "X" &&
            squares[i + 2] === "X" &&
            squares[i - 1] === "X" &&
            squares[i - 2] === "X" &&
            ((squares[i - 3] === "O" && squares[i + 3] !== "O") ||
              (squares[i - 3] !== "O" && squares[i + 3] === "O") ||
              (squares[i - 3] !== "O" && squares[i + 3] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1, i + 2, i, i - 2, i - 1);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1] === "X" &&
            squares[i - 2] === "X" &&
            squares[i - 3] === "X" &&
            squares[i + 1] === "X" &&
            ((squares[i - 4] === "O" && squares[i + 2] !== "O") ||
              (squares[i - 4] !== "O" && squares[i + 2] === "O") ||
              (squares[i - 4] !== "O" && squares[i + 2] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 1, i - 2, i, i - 3, i + 1);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1] === "X" &&
            squares[i - 2] === "X" &&
            squares[i - 3] === "X" &&
            squares[i - 4] === "X" &&
            ((squares[i + 1] === "O" && squares[i - 5] !== "O") ||
              (squares[i + 1] !== "O" && squares[i - 5] === "O") ||
              (squares[i + 1] !== "O" && squares[i - 5] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 1, i - 2, i, i - 3, i - 4);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }

          // hang doc
          if (
            squares[i + 20] === "X" &&
            squares[i + 40] === "X" &&
            squares[i + 60] === "X" &&
            squares[i + 80] === "X" &&
            ((squares[i - 20] === "O" && squares[i + 100] !== "O") ||
              (squares[i - 20] !== "O" && squares[i + 100] === "O") ||
              (squares[i - 20] !== "O" && squares[i + 100] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 20, i + 40, i, i + 60, i + 80);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 20] === "X" &&
            squares[i + 2 * 20] === "X" &&
            squares[i + 3 * 20] === "X" &&
            squares[i - 1 * 20] === "X" &&
            ((squares[i - 2 * 20] === "O" && squares[i + 4 * 20] !== "O") ||
              (squares[i - 2 * 20] !== "O" && squares[i + 4 * 20] === "O") ||
              (squares[i - 2 * 20] !== "O" && squares[i + 4 * 20] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 20, i + 40, i, i + 60, i - 20);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 20] === "X" &&
            squares[i + 2 * 20] === "X" &&
            squares[i - 1 * 20] === "X" &&
            squares[i - 2 * 20] === "X" &&
            ((squares[i - 3 * 20] === "O" && squares[i + 3 * 20] !== "O") ||
              (squares[i - 3 * 20] !== "O" && squares[i + 3 * 20] === "O") ||
              (squares[i - 3 * 20] !== "O" && squares[i + 3 * 20] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 20, i - 40, i, i + 20, i + 40);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1 * 20] === "X" &&
            squares[i - 2 * 20] === "X" &&
            squares[i - 60] === "X" &&
            squares[i + 20] === "X" &&
            ((squares[i - 80] === "O" && squares[i + 40] !== "O") ||
              (squares[i - 80] !== "O" && squares[i + 40] === "O") ||
              (squares[i - 80] !== "O" && squares[i + 40] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",
            });

            winSquares.push(i - 20, i - 40, i, i - 60, i + 20);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 20] === "X" &&
            squares[i - 40] === "X" &&
            squares[i - 60] === "X" &&
            squares[i - 80] === "X" &&
            ((squares[i + 20] === "O" && squares[i - 100] !== "O") ||
              (squares[i + 20] !== "O" && squares[i - 100] === "O") ||
              (squares[i + 20] !== "O" && squares[i - 100] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",
            });

            winSquares.push(i - 20, i - 40, i, i - 60, i - 80);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }

          // cheo phai
          if (
            squares[i + 1 * 19] === "X" &&
            squares[i + 2 * 19] === "X" &&
            squares[i + 3 * 19] === "X" &&
            squares[i + 4 * 19] === "X" &&
            ((squares[i - 1 * 19] === "O" && squares[i + 5 * 19] !== "O") ||
              (squares[i - 1 * 19] !== "O" && squares[i + 5 * 19] === "O") ||
              (squares[i - 1 * 19] !== "O" && squares[i + 5 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",
            });

            winSquares.push(i + 1 * 19, i + 2 * 19, i, i + 3 * 19, i + 4 * 19);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 19] === "X" &&
            squares[i + 2 * 19] === "X" &&
            squares[i + 3 * 19] === "X" &&
            squares[i - 1 * 19] === "X" &&
            ((squares[i - 2 * 19] === "O" && squares[i + 4 * 19] !== "O") ||
              (squares[i - 2 * 19] !== "O" && squares[i + 4 * 19] === "O") ||
              (squares[i - 2 * 19] !== "O" && squares[i + 4 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1 * 19, i + 2 * 19, i, i + 3 * 19, i - 1 * 19);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 19] === "X" &&
            squares[i + 2 * 19] === "X" &&
            squares[i - 1 * 19] === "X" &&
            squares[i - 2 * 19] === "X" &&
            ((squares[i - 3 * 19] === "O" && squares[i + 3 * 19] !== "O") ||
              (squares[i - 3 * 19] !== "O" && squares[i + 3 * 19] === "O") ||
              (squares[i - 3 * 19] !== "O" && squares[i + 3 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 1 * 19, i - 2 * 19, i, i + 1 * 19, i + 2 * 19);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1 * 19] === "X" &&
            squares[i - 2 * 19] === "X" &&
            squares[i - 3 * 19] === "X" &&
            squares[i + 1 * 19] === "X" &&
            ((squares[i - 4 * 19] === "O" && squares[i + 2 * 19] !== "O") ||
              (squares[i - 4 * 19] !== "O" && squares[i + 2 * 19] === "O") ||
              (squares[i - 4 * 19] !== "O" && squares[i + 2 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 1 * 19, i - 2 * 19, i, i - 3 * 19, i + 1 * 19);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1 * 19] === "X" &&
            squares[i - 2 * 19] === "X" &&
            squares[i - 3 * 19] === "X" &&
            squares[i - 4 * 19] === "X" &&
            ((squares[i + 1 * 19] === "O" && squares[i - 5 * 19] !== "O") ||
              (squares[i + 1 * 19] !== "O" && squares[i - 5 * 19] === "O") ||
              (squares[i + 1 * 19] !== "O" && squares[i - 5 * 19] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 1 * 19, i - 2 * 19, i, i - 3 * 19, i - 4 * 19);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }

          // cheo trai
          if (
            squares[i + 1 * 21] === "X" &&
            squares[i + 2 * 21] === "X" &&
            squares[i + 3 * 21] === "X" &&
            squares[i + 4 * 21] === "X" &&
            ((squares[i - 1 * 21] === "O" && squares[i + 5 * 21] !== "O") ||
              (squares[i - 1 * 21] !== "O" && squares[i + 5 * 21] === "O") ||
              (squares[i - 1 * 21] !== "O" && squares[i + 5 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1 * 21, i + 2 * 21, i, i + 3 * 21, i + 4 * 21);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 21] === "X" &&
            squares[i + 2 * 21] === "X" &&
            squares[i + 3 * 21] === "X" &&
            squares[i - 1 * 21] === "X" &&
            ((squares[i - 2 * 21] === "O" && squares[i + 4 * 21] !== "O") ||
              (squares[i - 2 * 21] !== "O" && squares[i + 4 * 21] === "O") ||
              (squares[i - 2 * 21] !== "O" && squares[i + 4 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1 * 21, i + 2 * 21, i, i + 3 * 21, i - 1 * 21);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 21] === "X" &&
            squares[i + 2 * 21] === "X" &&
            squares[i - 1 * 21] === "X" &&
            squares[i - 1 * 21] === "X" &&
            ((squares[i - 3 * 21] === "O" && squares[i + 3 * 21] !== "O") ||
              (squares[i - 3 * 21] !== "O" && squares[i + 3 * 21] === "O") ||
              (squares[i - 3 * 21] !== "O" && squares[i + 3 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1 * 21, i + 2 * 21, i, i - 1 * 21, i - 1 * 21);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1 * 21] === "X" &&
            squares[i - 2 * 21] === "X" &&
            squares[i - 2 * 21] === "X" &&
            squares[i + 1 * 21] === "X" &&
            ((squares[i - 4 * 21] === "O" && squares[i + 2 * 21] !== "O") ||
              (squares[i - 4 * 21] !== "O" && squares[i + 2 * 21] === "O") ||
              (squares[i - 4 * 21] !== "O" && squares[i + 2 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 1 * 21, i - 2 * 21, i, i - 2 * 21, i + 1 * 21);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1 * 21] === "X" &&
            squares[i - 2 * 21] === "X" &&
            squares[i - 3 * 21] === "X" &&
            squares[i - 4 * 21] === "X" &&
            ((squares[i + 1 * 21] === "O" && squares[i - 5 * 21] !== "O") ||
              (squares[i + 1 * 21] !== "O" && squares[i - 5 * 21] === "O") ||
              (squares[i + 1 * 21] !== "O" && squares[i - 5 * 21] !== "O"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng X đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 1 * 21, i - 2 * 21, i, i - 3 * 21, i - 4 * 21);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          break;
        case "O":
          if (
            squares[i + 1] === "O" &&
            squares[i + 2] === "O" &&
            squares[i + 3] === "O" &&
            squares[i + 4] === "O" &&
            ((squares[i - 1] === "X" && squares[i + 5] !== "X") ||
              (squares[i - 1] !== "X" && squares[i + 5] === "X") ||
              (squares[i - 1] !== "X" && squares[i + 5] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1, i + 2, i, i + 3, i + 4);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1] === "O" &&
            squares[i + 2] === "O" &&
            squares[i + 3] === "O" &&
            squares[i - 1] === "O" &&
            ((squares[i - 2] === "X" && squares[i + 4] !== "X") ||
              (squares[i - 2] !== "X" && squares[i + 4] === "X") ||
              (squares[i - 2] !== "X" && squares[i + 4] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1, i + 2, i, i + 3, i - 1);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1] === "O" &&
            squares[i + 2] === "O" &&
            squares[i - 1] === "O" &&
            squares[i - 2] === "O" &&
            ((squares[i - 3] === "X" && squares[i + 3] !== "X") ||
              (squares[i - 3] !== "X" && squares[i + 3] === "X") ||
              (squares[i - 3] !== "X" && squares[i + 3] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1, i + 2, i, i - 1, i - 2);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1] === "O" &&
            squares[i - 2] === "O" &&
            squares[i - 3] === "O" &&
            squares[i + 1] === "O" &&
            ((squares[i - 4] === "X" && squares[i + 2] !== "X") ||
              (squares[i - 4] !== "X" && squares[i + 2] === "X") ||
              (squares[i - 4] !== "X" && squares[i + 2] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1, i - 2, i, i - 3, i - 1);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1] === "O" &&
            squares[i - 2] === "O" &&
            squares[i - 3] === "O" &&
            squares[i - 4] === "O" &&
            ((squares[i + 1] === "X" && squares[i - 5] !== "X") ||
              (squares[i + 1] !== "X" && squares[i - 5] === "X") ||
              (squares[i + 1] !== "X" && squares[i - 5] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 1, i - 2, i, i - 3, i - 4);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }

          // hang doc
          if (
            squares[i + 20] === "O" &&
            squares[i + 40] === "O" &&
            squares[i + 60] === "O" &&
            squares[i + 80] === "O" &&
            ((squares[i - 20] === "X" && squares[i + 100] !== "X") ||
              (squares[i - 20] !== "X" && squares[i + 100] === "X") ||
              (squares[i - 20] !== "X" && squares[i + 100] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 20, i + 40, i, i + 60, i + 80);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 20] === "O" &&
            squares[i + 2 * 20] === "O" &&
            squares[i + 3 * 20] === "O" &&
            squares[i - 1 * 20] === "O" &&
            ((squares[i - 2 * 20] === "X" && squares[i + 4 * 20] !== "X") ||
              (squares[i - 2 * 20] !== "X" && squares[i + 4 * 20] === "X") ||
              (squares[i - 2 * 20] !== "X" && squares[i + 4 * 20] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 20, i + 40, i, i + 60, i - 20);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 20] === "O" &&
            squares[i + 2 * 20] === "O" &&
            squares[i - 1 * 20] === "O" &&
            squares[i - 2 * 20] === "O" &&
            ((squares[i - 3 * 20] === "X" && squares[i + 3 * 20] !== "X") ||
              (squares[i - 3 * 20] !== "X" && squares[i + 3 * 20] === "X") ||
              (squares[i - 3 * 20] !== "X" && squares[i + 3 * 20] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 20, i + 40, i, i - 20, i - 40);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1 * 20] === "O" &&
            squares[i - 2 * 20] === "O" &&
            squares[i - 60] === "O" &&
            squares[i + 20] === "O" &&
            ((squares[i - 80] === "X" && squares[i + 40] !== "X") ||
              (squares[i - 80] !== "X" && squares[i + 40] === "X") ||
              (squares[i - 80] !== "X" && squares[i + 40] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 20, i - 20, i, i - 40, i - 60);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 20] === "O" &&
            squares[i - 40] === "O" &&
            squares[i - 60] === "O" &&
            squares[i - 80] === "O" &&
            ((squares[i + 20] === "X" && squares[i - 100] !== "X") ||
              (squares[i + 20] !== "X" && squares[i - 100] === "X") ||
              (squares[i + 20] !== "X" && squares[i - 100] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 20, i - 40, i, i - 60, i - 80);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }

          // cheo phai
          if (
            squares[i + 1 * 19] === "O" &&
            squares[i + 2 * 19] === "O" &&
            squares[i + 3 * 19] === "O" &&
            squares[i + 4 * 19] === "O" &&
            ((squares[i - 1 * 19] === "X" && squares[i + 5 * 19] !== "X") ||
              (squares[i - 1 * 19] !== "X" && squares[i + 5 * 19] === "X") ||
              (squares[i - 1 * 19] !== "X" && squares[i + 5 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 19, i + 2 * 19, i, i + 3 * 19, i + 4 * 19);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 19] === "O" &&
            squares[i + 2 * 19] === "O" &&
            squares[i + 3 * 19] === "O" &&
            squares[i - 1 * 19] === "O" &&
            ((squares[i - 2 * 19] === "X" && squares[i + 4 * 19] !== "X") ||
              (squares[i - 2 * 19] !== "X" && squares[i + 4 * 19] === "X") ||
              (squares[i - 2 * 19] !== "X" && squares[i + 4 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 19, i + 2 * 19, i, i + 3 * 19, i - 1 * 19);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 19] === "O" &&
            squares[i + 2 * 19] === "O" &&
            squares[i - 1 * 19] === "O" &&
            squares[i - 2 * 19] === "O" &&
            ((squares[i - 3 * 19] === "X" && squares[i + 3 * 19] !== "X") ||
              (squares[i - 3 * 19] !== "X" && squares[i + 3 * 19] === "X") ||
              (squares[i - 3 * 19] !== "X" && squares[i + 3 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 19, i + 2 * 19, i, i - 1 * 19, i - 2 * 19);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1 * 19] === "O" &&
            squares[i - 2 * 19] === "O" &&
            squares[i - 3 * 19] === "O" &&
            squares[i + 1 * 19] === "O" &&
            ((squares[i - 4 * 19] === "X" && squares[i + 2 * 19] !== "X") ||
              (squares[i - 4 * 19] !== "X" && squares[i + 2 * 19] === "X") ||
              (squares[i - 4 * 19] !== "X" && squares[i + 2 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 19, i - 1 * 19, i, i - 2 * 19, i - 3 * 19);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1 * 19] === "O" &&
            squares[i - 2 * 19] === "O" &&
            squares[i - 3 * 19] === "O" &&
            squares[i - 4 * 19] === "O" &&
            ((squares[i + 1 * 19] === "X" && squares[i - 5 * 19] !== "X") ||
              (squares[i + 1 * 19] !== "X" && squares[i - 5 * 19] === "X") ||
              (squares[i + 1 * 19] !== "X" && squares[i - 5 * 19] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 19, i - 2 * 19, i, i - 3 * 19, i - 4 * 19);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }

          // cheo trai
          if (
            squares[i + 1 * 21] === "O" &&
            squares[i + 2 * 21] === "O" &&
            squares[i + 3 * 21] === "O" &&
            squares[i + 4 * 21] === "O" &&
            ((squares[i - 1 * 21] === "X" && squares[i + 5 * 21] !== "X") ||
              (squares[i - 1 * 21] !== "X" && squares[i + 5 * 21] === "X") ||
              (squares[i - 1 * 21] !== "X" && squares[i + 5 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1 * 21, i + 2 * 21, i, i + 3 * 21, i + 4 * 21);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 21] === "O" &&
            squares[i + 2 * 21] === "O" &&
            squares[i + 3 * 21] === "O" &&
            squares[i - 1 * 21] === "O" &&
            ((squares[i - 2 * 21] === "X" && squares[i + 4 * 21] !== "X") ||
              (squares[i - 2 * 21] !== "X" && squares[i + 4 * 21] === "X") ||
              (squares[i - 2 * 21] !== "X" && squares[i + 4 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1 * 21, i + 2 * 21, i, i + 3 * 21, i - 1 * 21);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i + 1 * 21] === "O" &&
            squares[i + 2 * 21] === "O" &&
            squares[i - 1 * 21] === "O" &&
            squares[i - 2 * 21] === "O" &&
            ((squares[i - 3 * 21] === "X" && squares[i + 3 * 21] !== "X") ||
              (squares[i - 3 * 21] !== "X" && squares[i + 3 * 21] === "X") ||
              (squares[i - 3 * 21] !== "X" && squares[i + 3 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1 * 21, i + 2 * 21, i, i - 1 * 21, i - 2 * 21);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1 * 21] === "O" &&
            squares[i - 2 * 21] === "O" &&
            squares[i - 3 * 21] === "O" &&
            squares[i + 1 * 21] === "O" &&
            ((squares[i - 4 * 21] === "X" && squares[i + 2 * 21] !== "X") ||
              (squares[i - 4 * 21] !== "X" && squares[i + 2 * 21] === "X") ||
              (squares[i - 4 * 21] !== "X" && squares[i + 2 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i + 1 * 21, i - 2 * 21, i, i - 3 * 21, i - 1 * 21);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          if (
            squares[i - 1 * 21] === "O" &&
            squares[i - 2 * 21] === "O" &&
            squares[i - 3 * 21] === "O" &&
            squares[i - 4 * 21] === "O" &&
            ((squares[i + 1 * 21] === "X" && squares[i - 5 * 21] !== "X") ||
              (squares[i + 1 * 21] !== "X" && squares[i - 5 * 21] === "X") ||
              (squares[i + 1 * 21] !== "X" && squares[i - 5 * 21] !== "X"))
          ) {
            Swal.fire({
              title: "Chúc Mừng!",
              text: "Chúc mừng O đã thắng",

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
            });

            winSquares.push(i - 4 * 21, i - 2 * 21, i, i - 3 * 21, i - 1 * 21);
            this.setState({
              winSquares,
              checkWin: true,
              winSquaresTemp: winSquares,
              win: true
            });
          }
          break;
      }
    }
    return null;
  };

  jumpTo(step) {
    
    const {history, win, winSquaresTemp} = this.state;
    const endPoint = history.length - 1
    if (win === true && step === endPoint) {
      this.setState({
        stepNumber: step,
        isNext: (step % 2) === 0,
        winSquares: winSquaresTemp,
        checkWin: true
      });
    }
    else {
      this.setState({
        stepNumber: step,
        isNext: (step % 2) === 0,
        winSquares: [],
        checkWin: false
      });
    }
  }

  Reset() {
    this.setState({
      history: [{
        squares: Array(400).fill(null)
      }],
      isNext: true,
      stepNumber: 0,
      winSquares: [],
      checkWin: false,
      winSquaresTemp: [],
      win: false,
      isUp: true,
      isDown: false,
    })
  }

  sort(list) {
    // eslint-disable-next-line no-console
    console.log('sort', this);
    const newList = [];
    let size = list.length
    for (let i = 0; i < list.length; i+=1) {
      newList.push(list[size - 1])
      size -= 1;
    }
    return newList;
  }

  sortMoveList(list) {
    // eslint-disable-next-line no-console
    console.log('sortMoveList', this);
    const newArr = [];
    let {length} = list
    for (let i = 0; i < list.length; i+=1) {
      newArr.push(list[length - 1])
      length -= 1;
    }
    return newArr;
  }

  ascending(moves) {
    const {isDown} = this.state;
    if (isDown) {
      this.sort(moves)
      this.setState({
        isUp: true,
        isDown: false
      })
    }
    return null;
  }

  decrease(moves) {
    const {isUp} = this.state;
    if (isUp) {
      this.sort(moves)
      this.setState({
        isDown: true,
        isUp: false
      })
    }
    return null;
  }

  render() {
    const {history, stepNumber, isNext, isDown, winSquares} = this.state;
    const current = history[stepNumber];
    const status = `Next player: ${isNext ? "X" : "O"}`;
    let moves = history.map((step, move) => {
      const desc = move ?
        `Go to move #${move}` :
        'Go to game start';
      const key = move;
      return (
        <li key={key}>
          <button
          type="button"
            onClick={() => this.jumpTo(move)}
          >{stepNumber === move ? <span style={{ color: 'red' }}>{desc}</span> : <span>{desc}</span>}</button>
        </li>
      );
    });

    if (isDown) {
      moves = this.sortMoveList(moves);
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            isNext={isNext}
            onHandleClick={this.onHandleClick}
            winSquares={winSquares}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <br />
          <div><button onClick={() => this.Reset()} type="button" className="restart btn btn-outline-danger">Restart</button></div>
          <br />
          <div>
            <button type="button" className="btn btn-outline-secondary" onClick={() => this.ascending(moves)} >Tăng</button>  &emsp;
            <button type="button" className="btn btn-outline-secondary" onClick={() => this.decrease(moves)}>Giảm</button>
          </div>
          <br />
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default App;
