import React from "react";
import "./App.css";
import Board from "./components/Board";
import Swal from "sweetalert2";

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
      moves: [],
      checkWin: false,
      winSquares: [],
      winSquaresTemp: [],
      isUp: true,
      isDown: false,
    };
  }

  onHandleClick = i => {
    const history = this.state.history.slice(0, this.state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winSquares = [];
    if (this.state.checkWin) {
      return
    }

    else if (squares[i] === null) {
      squares[i] = this.state.isNext ? "X" : "O";
      this.setState({
        history: history.concat([{
          squares: squares,
        }]),
        stepNumber: history.length,
        isNext: !this.state.isNext
      });
      switch (squares[i]) {
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

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
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

          //cheo phai
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

              // confirmButtonText: "Chơi lại",
              // onAfterClose: () => {
              //   window.location.reload();
              // }
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

          //cheo trai
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

          //cheo phai
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

          //cheo trai
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
  };

  jumpTo(step) {
    
    // const history = this.state.history;
    const endPoint = this.state.history.length - 1
    if (this.state.win === true && step === endPoint) {
      this.setState({
        stepNumber: step,
        isNext: (step % 2) === 0,
        isHighLight: (step ? true : false),
        winSquares: this.state.winSquaresTemp,
        checkWin: true
      });
    }
    else {
      this.setState({
        stepNumber: step,
        isNext: (step % 2) === 0,
        isHighLight: (step ? true : false),
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
      moves: [],
      winSquares: [],
      checkWin: false,
      winSquaresTemp: [],
      win: false,
      isUp: true,
      isDown: false,
    })
  }
  sort(list) {
    const newList = [];
    var size = list.length
    for (var i = 0; i < list.length; i++) {
      newList.push(list[size - 1])
      size -= 1;
    }
    this.setState({
      moves: newList,

    })
  }

  sortMoveList(list) {
    const newArr = [];
    var length = list.length
    for (var i = 0; i < list.length; i++) {
      newArr.push(list[length - 1])
      length -= 1;
    }
    return newArr;
  }

  ascending(moves) {
    if (this.state.isDown) {
      this.sort(moves)
      this.setState({
        isUp: true,
        isDown: false
      })
    }
    else {
      return;
    }

  }
  decrease(moves) {
    if (this.state.isUp) {
      this.sort(moves)
      this.setState({
        isDown: true,
        isUp: false
      })
    }
    else {
      return;
    }
  }

  render() {
    const history = this.state.history;
    const current = history[this.state.stepNumber];
    const status = "Next player: " + (this.state.isNext ? "X" : "O");
    var moves = history.map((step, move) => {
      const desc = move ?
        'Go to move #' + move :
        'Go to game start';
      return (
        <li key={move}>
          <button
            onClick={() => this.jumpTo(move)}
          >{this.state.stepNumber === move ? <span style={{ color: 'red' }}>{desc}</span> : <span>{desc}</span>}</button>
        </li>
      );
    });

    if (this.state.isDown) {
      moves = this.sortMoveList(moves);
    }

    return (
      <div className="game">
        <div className="game-board">
          <Board
            squares={current.squares}
            isNext={this.state.isNext}
            onHandleClick={this.onHandleClick}
            winSquares={this.state.winSquares}
          />
        </div>
        <div className="game-info">
          <div>{status}</div>
          <br></br>
          <div><button onClick={() => this.Reset()} type="button" className="restart btn btn-outline-danger">Restart</button></div>
          <br></br>
          <div>
            <button type="button" class="btn btn-outline-secondary" onClick={() => this.ascending(moves)} >Tăng</button>  &emsp;
            <button type="button" class="btn btn-outline-secondary" onClick={() => this.decrease(moves)}>Giảm</button>
          </div>
          <br></br>
          <ol>{moves}</ol>
        </div>
      </div>
    );
  }
}

export default App;
