import React from "react";
import Swal from "sweetalert2";
import { connect } from 'react-redux'
import "./App.css";
import Board from "./components/Board";
import { saveHistory, checkAsWin, checkIfLastStep, checkIfNotLastStep,
  resetSquares, ascendingSort, decreasingSort } from "./actions/index";

class App extends React.Component {
  onHandleClick = i => {
    const {state, saveHistories, checkAsWinning} = this.props;
    let {history} = state;
    const {stepNumber, checkWin, isNext} = state;
    history = history.slice(0, stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    const winSquares = [];
    if (checkWin) {
      return null;
    }

    if (squares[i] === null) {
      squares[i] = isNext ? "X" : "O";
      saveHistories(history, squares, isNext);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
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
            checkAsWinning(winSquares);
          }
          break;
      }
    }
    return null;
  };

  jumpTo(step) {
    const {state, checkIfLastSteps, checkIfNotLastSteps} = this.props;
    const {history, win, winSquaresTemp} = state;
    const endPoint = history.length - 1
    if (win === true && step === endPoint) {
      checkIfLastSteps(step, winSquaresTemp);
    }
    else {
      checkIfNotLastSteps(step);
    }
  }

  Reset() {
    const {resetSquaress} = this.props;
    resetSquaress();
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
    const {state, ascendSort} = this.props;
    const {isDown} = state;
    if (isDown) {
      this.sort(moves)
      ascendSort();
    }
    return null;
  }

  decrease(moves) {
    const {state, decreaseSort} = this.props;
    const {isUp} = state;
    if (isUp) {
      this.sort(moves)
      decreaseSort();
    }
    return null;
  }

  render() {
    const {state} = this.props;
    const {history, stepNumber, isNext, isDown, winSquares} = state;
    const current = history[stepNumber];
    const status = ` Người chơi: ${isNext ? "X" : "O"}`;
    let moves = history.map((step, move) => {
      const desc = move ?
        `Bước thứ #${move}` :
        'Bước đầu tiên';
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
          <div><button onClick={() => this.Reset()} type="button" className="restart btn btn-outline-danger">Chơi lại</button></div>
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

const mapStateToProps = state => ({
  state: state.appReducer
});

const mapDispatchToProps = dispatch => ({
  saveHistories: (history, squares, isNext) => dispatch(saveHistory(history, squares, isNext)),
  checkAsWinning: (winSquares) => dispatch(checkAsWin(winSquares)),
  checkIfLastSteps: (step, winSquaresTemp) => dispatch(checkIfLastStep(step, winSquaresTemp)),
  checkIfNotLastSteps: (step) => dispatch(checkIfNotLastStep(step)),
  resetSquaress: () => dispatch(resetSquares()),
  ascendSort: () => dispatch(ascendingSort()),
  decreaseSort: () => dispatch(decreasingSort())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
