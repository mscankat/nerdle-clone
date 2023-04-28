//popup function
function openPopupWin() {
  popupwindow = document.getElementById("popup-win");
  popupwindow.classList.add("open-popup");
}
function openPopupLose() {
  popupwindow = document.getElementById("popup-lose");
  popupwindow.classList.add("open-popup");
}
function closePopup() {
  popupwindow = document.querySelector(".open-popup");
  popupwindow.classList.remove("open-popup");
}
function openPopupInfo() {
  popupwindow = document.getElementById("popup-info");
  popupwindow.classList.add("open-popup");
}
