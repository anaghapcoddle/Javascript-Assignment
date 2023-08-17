/* eslint-disable function-call-argument-newline */
/* eslint-disable function-paren-newline */
const box1 = document.querySelector('.box1');
const box2 = document.querySelector('.box2');
const box3 = document.querySelector('.box3');
const box4 = document.querySelector('.box4');
const box5 = document.querySelector('.box5');
const box6 = document.querySelector('.box6');
const box7 = document.querySelector('.box7');
const box8 = document.querySelector('.box8');
const box9 = document.querySelector('.box9');
const winnerPrintSpace = document.querySelector('.winner-print-space');

function checkWin() {
  const box1Value = document.querySelector('.box1').textContent;
  const box2Value = document.querySelector('.box2').textContent;
  const box3Value = document.querySelector('.box3').textContent;
  const box4Value = document.querySelector('.box4').textContent;
  const box5Value = document.querySelector('.box5').textContent;
  const box6Value = document.querySelector('.box6').textContent;
  const box7Value = document.querySelector('.box7').textContent;
  const box8Value = document.querySelector('.box8').textContent;
  const box9Value = document.querySelector('.box9').textContent;

  function winnerColorAndSize(boxname1, boxname2, boxname3) {
    boxname1.style.color = 'red';
    boxname1.style.fontSize = '100px';
    boxname2.style.color = 'red';
    boxname2.style.fontSize = '100px';
    boxname3.style.color = 'red';
    boxname3.style.fontSize = '100px';
  }

  function disableNonWinnerCells(boxname1, boxname2, boxname3, boxname4, boxname5, boxname6,
    boxfn1, boxfn2, boxfn3, boxfn4, boxfn5, boxfn6) {
    boxname1.removeEventListener('click', boxfn1);
    boxname2.removeEventListener('click', boxfn2);
    boxname3.removeEventListener('click', boxfn3);
    boxname4.removeEventListener('click', boxfn4);
    boxname5.removeEventListener('click', boxfn5);
    boxname6.removeEventListener('click', boxfn6);
  }

  if (box1Value === 'X' && box2Value === 'X' && box3Value === 'X') {
    winnerPrintSpace.innerHTML = 'Player \'X\' has won';
    winnerColorAndSize(box1, box2, box3);
    disableNonWinnerCells(box4, box5, box6, box7, box8, box9, box4Fn, box5Fn,
      box6Fn, box7Fn, box8Fn, box9Fn);
  } else if (box1Value === 'O' && box2Value === 'O' && box3Value === 'O') {
    winnerPrintSpace.innerHTML = 'Player \'O\' has won';
    winnerColorAndSize(box1, box2, box3);
    disableNonWinnerCells(box4, box5, box6, box7, box8, box9, box4Fn, box5Fn,
      box6Fn, box7Fn, box8Fn, box9Fn);
  } else if (box1Value === 'X' && box4Value === 'X' && box7Value === 'X') {
    winnerPrintSpace.innerHTML = 'Player \'X\' has won';
    winnerColorAndSize(box1, box4, box7);
    disableNonWinnerCells(box2, box3, box5, box6, box8, box9, box2Fn, box3Fn,
      box5Fn, box6Fn, box8Fn, box9Fn);
  } else if (box1Value === 'O' && box4Value === 'O' && box7Value === 'O') {
    winnerPrintSpace.innerHTML = 'Player \'O\' has won';
    winnerColorAndSize(box1, box4, box7);
    disableNonWinnerCells(box2, box3, box5, box6, box8, box9, box2Fn,
      box3Fn, box5Fn, box6Fn, box8Fn, box9Fn);
  } else if (box1Value === 'X' && box5Value === 'X' && box9Value === 'X') {
    winnerPrintSpace.innerHTML = 'Player \'X\' has won';
    winnerColorAndSize(box1, box5, box9);
    disableNonWinnerCells(box2, box3, box4, box6, box7, box8, box2Fn,
      box3Fn, box4Fn, box6Fn, box7Fn, box8Fn);
  } else if (box1Value === 'O' && box5Value === 'O' && box9Value === 'O') {
    winnerPrintSpace.innerHTML = 'Player \'O\' has won';
    winnerColorAndSize(box1, box5, box9);
    disableNonWinnerCells(box2, box3, box4, box6, box7, box8,
      box2Fn, box3Fn, box4Fn, box6Fn, box7Fn, box8Fn);
  } else if (box2Value === 'X' && box5Value === 'X' && box8Value === 'X') {
    winnerPrintSpace.innerHTML = 'Player \'X\' has won';
    winnerColorAndSize(box2, box5, box8);
    disableNonWinnerCells(box1, box3, box4, box6, box7,
      box9, box1Fn, box3Fn, box4Fn, box6Fn, box7Fn, box9Fn);
  } else if (box2Value === 'O' && box5Value === 'O' && box8Value === 'O') {
    winnerPrintSpace.innerHTML = 'Player \'O\' has won';
    winnerColorAndSize(box2, box5, box8);
    disableNonWinnerCells(box1, box3, box4, box6, box7, box9, box1Fn,
      box3Fn, box4Fn, box6Fn, box7Fn, box9Fn);
  } else if (box3Value === 'X' && box5Value === 'X' && box7Value === 'X') {
    winnerPrintSpace.innerHTML = 'Player \'X\' has won';
    winnerColorAndSize(box3, box5, box7);
    disableNonWinnerCells(box1, box2, box4, box6, box8, box9, box1Fn,
      box2Fn, box4Fn, box6Fn, box8Fn, box9Fn);
  } else if (box3Value === 'O' && box5Value === 'O' && box7Value === 'O') {
    winnerPrintSpace.innerHTML = 'Player \'O\' has won';
    winnerColorAndSize(box3, box5, box7);
    disableNonWinnerCells(box1, box2, box4, box6, box8, box9, box1Fn,
      box2Fn, box4Fn, box6Fn, box8Fn, box9Fn);
  } else if (box3Value === 'X' && box6Value === 'X' && box9Value === 'X') {
    winnerPrintSpace.innerHTML = 'Player \'X\' has won';
    winnerColorAndSize(box3, box6, box9);
    disableNonWinnerCells(box1, box2, box4, box5, box7, box8, box1Fn,
      box2Fn, box4Fn, box5Fn, box7Fn, box8Fn);
  } else if (box3Value === 'O' && box6Value === 'O' && box9Value === 'O') {
    winnerPrintSpace.innerHTML = 'Player \'O\' has won';
    winnerColorAndSize(box3, box6, box9);
    disableNonWinnerCells(box1, box2, box4, box5, box7, box8, box1Fn,
      box2Fn, box4Fn, box5Fn, box7Fn, box8Fn);
  } else if (box4Value === 'X' && box5Value === 'X' && box6Value === 'X') {
    winnerPrintSpace.innerHTML = 'Player \'X\' has won';
    winnerColorAndSize(box4, box5, box6);
    disableNonWinnerCells(box1, box2, box3, box7, box8, box9, box1Fn,
      box2Fn, box3Fn, box7Fn, box8Fn, box9Fn);
  } else if (box4Value === 'O' && box5Value === 'O' && box6Value === 'O') {
    winnerPrintSpace.innerHTML = 'Player \'O\' has won';
    winnerColorAndSize(box4, box5, box6);
    disableNonWinnerCells(box1, box2, box3, box7, box8, box9, box1Fn,
      box2Fn, box3Fn, box7Fn, box8Fn, box9Fn);
  } else if (box7Value === 'X' && box8Value === 'X' && box9Value === 'X') {
    winnerPrintSpace.innerHTML = 'Player \'X\' has won';
    winnerColorAndSize(box7, box8, box9);
    disableNonWinnerCells(box1, box2, box3, box4, box5, box6, box1Fn,
      box2Fn, box3Fn, box4Fn, box5Fn, box6Fn);
  } else if (box7Value === 'O' && box8Value === 'O' && box9Value === 'O') {
    winnerPrintSpace.innerHTML = 'Player \'O\' has won';
    winnerColorAndSize(box7, box8, box9);
    disableNonWinnerCells(box1, box2, box3, box4, box5, box6, box1Fn,
      box2Fn, box3Fn, box4Fn, box5Fn, box6Fn);
  } else if (box1Value !== '' && box2Value !== '' && box3Value !== '' && box4Value !== ''
  && box5Value !== '' && box6Value !== '' && box7Value !== '' && box8Value !== '' && box9Value !== '') {
    winnerPrintSpace.innerHTML = 'DRAW!!';
  }
}

let lastPlayer = 'o';

function box1Fn() {
  if (lastPlayer === 'o') {
    box1.innerHTML = 'X';
    lastPlayer = 'x';
    box1.removeEventListener('click', box1Fn);
  } else {
    box1.innerHTML = 'O';
    box1.disabled = true;
    lastPlayer = 'o';
    box1.removeEventListener('click', box1Fn);
  }
}

box1.addEventListener('click', box1Fn);
box1.addEventListener('click', checkWin);

function box2Fn() {
  if (lastPlayer === 'o') {
    box2.innerHTML = 'X';
    lastPlayer = 'x';
    box2.removeEventListener('click', box2Fn);
  } else {
    box2.innerHTML = 'O';
    lastPlayer = 'o';
    box2.removeEventListener('click', box2Fn);
  }
}

box2.addEventListener('click', box2Fn);
box2.addEventListener('click', checkWin);

function box3Fn() {
  if (lastPlayer === 'o') {
    box3.innerHTML = 'X';
    lastPlayer = 'x';
    box3.removeEventListener('click', box3Fn);
  } else {
    box3.innerHTML = 'O';
    lastPlayer = 'o';
    box3.removeEventListener('click', box3Fn);
  }
}

box3.addEventListener('click', box3Fn);
box3.addEventListener('click', checkWin);

function box4Fn() {
  if (lastPlayer === 'o') {
    box4.innerHTML = 'X';
    lastPlayer = 'x';
    box4.removeEventListener('click', box4Fn);
  } else {
    box4.innerHTML = 'O';
    lastPlayer = 'o';
    box4.removeEventListener('click', box4Fn);
  }
}

box4.addEventListener('click', box4Fn);
box4.addEventListener('click', checkWin);

function box5Fn() {
  if (lastPlayer === 'o') {
    box5.innerHTML = 'X';
    box5.removeEventListener('click', box5Fn);
    lastPlayer = 'x';
  } else {
    box5.innerHTML = 'O';
    box5.removeEventListener('click', box5Fn);
    lastPlayer = 'o';
  }
}

box5.addEventListener('click', box5Fn);
box5.addEventListener('click', checkWin);

function box6Fn() {
  if (lastPlayer === 'o') {
    box6.innerHTML = 'X';
    box6.removeEventListener('click', box6Fn);
    lastPlayer = 'x';
  } else {
    box6.innerHTML = 'O';
    box6.removeEventListener('click', box6Fn);
    lastPlayer = 'o';
  }
}

box6.addEventListener('click', box6Fn);
box6.addEventListener('click', checkWin);

function box7Fn() {
  if (lastPlayer === 'o') {
    box7.innerHTML = 'X';
    box7.removeEventListener('click', box7Fn);
    lastPlayer = 'x';
  } else {
    box7.innerHTML = 'O';
    box7.removeEventListener('click', box7Fn);
    lastPlayer = 'o';
  }
}

box7.addEventListener('click', box7Fn);
box7.addEventListener('click', checkWin);

function box8Fn() {
  if (lastPlayer === 'o') {
    box8.innerHTML = 'X';
    box8.removeEventListener('click', box8Fn);
    lastPlayer = 'x';
  } else {
    box8.innerHTML = 'O';
    box8.removeEventListener('click', box8Fn);
    lastPlayer = 'o';
  }
}

box8.addEventListener('click', box8Fn);
box8.addEventListener('click', checkWin);

function box9Fn() {
  if (lastPlayer === 'o') {
    box9.innerHTML = 'X';
    box8.removeEventListener('click', box9Fn);
    lastPlayer = 'x';
  } else {
    box9.innerHTML = 'O';
    box8.removeEventListener('click', box9Fn);
    lastPlayer = 'o';
  }
}

box9.addEventListener('click', box9Fn);
box9.addEventListener('click', checkWin);
