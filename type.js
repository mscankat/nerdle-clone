//get an array of the input equation

function getEquation(currentRow) {
  let userInputEquation = [];
  currentRow.childNodes.forEach((element) => {
    userInputEquation.push(element.textContent);
  });
  return userInputEquation;
}

window.addEventListener("keydown", (number) => {
  let currentItem = document.querySelector(".active");
  let operators = ["=", "+", "-", "*", "/"];

  if (currentItem) {
    //check if input is valid
    if (!isNaN(parseInt(number.key)) || operators.includes(number.key)) {
      currentItem.innerHTML = number.key;
      if (!currentRow.lastChild.className.includes("active")) {
        currentItem.nextElementSibling.classList.add("active");
        currentItem.classList.remove("active");
      }
    }

    //check if equation given by the user is valid
    function isValidEquation() {
      if (getEquation(currentRow).join("").length < 8) {
        alert("fill in the blanks");
        return false;
      }
      let splitEquation = getEquation(currentRow).join("").split("=");
      if (eval(splitEquation[0]) !== parseInt(splitEquation[1])) {
        alert("Equation is not valid");
        return false;
      } else {
        return true;
      }
    }

    //proceed to the next row
    function nextRow() {
      currentRow.nextElementSibling.classList.remove("locked");
      currentRow.classList.add("locked");
      currentItem.classList.remove("active");
      selectRow();
      currentRow.firstChild.classList.add("active");
    }
    // 1> correct
    // 0> absent
    // 2> wrong index
    if (number.key === "Enter") {
      if (isValidEquation()) {
        let answerArray = answer.map((x) => x);
        let inputEquation = getEquation(currentRow);
        let stateArray = [];
        inputEquation.forEach((e, i) => {
          if (e === answerArray[i]) {
            stateArray[i] = 1;
            answerArray[i] = "";
            inputEquation[i] = "";
          }
        });

        inputEquation.forEach((e, i) => {
          if (!(e === "") && !(stateArray[i] === 1)) {
            if (answerArray.includes(e)) {
              stateArray[i] = 2;
              answerArray[answer.findIndex((r) => r === e)] = "";
              inputEquation[i] = "";
            } else {
              stateArray[i] = 0;
            }
          }
        });

        stateArray.forEach((e, i) => {
          if (e === 1) {
            currentRow.childNodes[i].classList.add("correct");
          } else if (e === 2) {
            currentRow.childNodes[i].classList.add("position");
          }
        });
        if (stateArray.reduce((p, c) => p * c, 1) === 1) {
          document
            .querySelectorAll(".row")
            .forEach((x) => x.classList.add("locked"));
          document.querySelector(".active").classList.remove("active");

          openPopupWin();
        } else {
          try {
            nextRow();
          } catch {
            openPopupLose();
          }
        }
      }
    }
  }

  //Functioning useful keys
  if (number.key === "ArrowLeft") {
    if (currentItem.previousElementSibling) {
      currentItem.previousElementSibling.classList.add("active");
      currentItem.classList.remove("active");
    }
  }
  if (number.key === "ArrowRight") {
    if (currentItem.nextElementSibling) {
      currentItem.nextElementSibling.classList.add("active");
      currentItem.classList.remove("active");
    }
  }
  if (number.key === "Backspace") {
    if (currentItem.previousElementSibling) {
      currentItem.previousElementSibling.innerHTML = "";
      currentItem.classList.remove("active");
      currentItem.previousElementSibling.classList.add("active");
    }
  }
  if (number.key === "Delete") {
    currentItem.innerHTML = "";
  }
});

function openPopup() {
  popupwindow = document.getElementById("popup");
  popupwindow.classList.add("open-popup");
}
//choosing a solution from solutions.js
let answer;
function chooseAnswer() {
  let randomNumber = Math.floor(Math.random() * 17723);
  answer = solutions[randomNumber].split("");
}
chooseAnswer();
//creating solution row
answer.forEach((e, i) => {
  document.querySelector(".solution").children[i].textContent = e;
});
console.log(answer);
