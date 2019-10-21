import axios from 'axios';

export const saveHistory = (history, squares, isNext) => ({
  type: 'SAVE_HISTORY',
  history,
  squares,
  isNext
});

export const checkAsWin = winSquares => ({
  type: 'CHECK_AS_WIN',
  winSquares
});

export const checkIfLastStep = (step, winSquaresTemp) => ({
  type: 'CHECK_IF_LAST_STEP',
  step,
  winSquaresTemp
});

export const checkIfNotLastStep = step => ({
  type: 'CHECK_IF_NOT_LAST_STEP',
  step
});

export const resetSquares = () => ({
  type: 'RESET_SQUARES'
});

export const ascendingSort = () => ({
  type: 'ASCENDING_SORT'
});

export const decreasingSort = () => ({
  type: 'DECREASING_SORT'
});

export function fetchRegister(username, password) {
  console.log(username);
  return axios
    .post(`https://restful-api-1612907.herokuapp.com/user/register`, {
      username,
      password
    })
    .then( respond => console.log('Respond:', respond)
    )
    .catch(err => console.log("Error occured", err))
}
