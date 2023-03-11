"use strict";
const personal = document.querySelector(".personal-info");
const form = document.querySelector(".form");
const email = document.querySelector(".form_input");
const buttonSubmit = document.querySelector(".btn-primary");

console.log(email);
buttonSubmit.addEventListener("click", function (e) {
  e.preventDefault();
  const text = email.value;
  const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (text.match(mailformat)) {
    console.log("email");
    personal.style.display = "block";
    form.style.display = "none";
  } else {
    alert("Email không hợp lệ!!!");
  }
  return true;
});

// const mouseOverEl = document.getElementsByClassName("mouseover");
// const btnViewless = document.querySelector(".btnviewless");
// const expEl = document.querySelector(".exp");
// const eduEl = document.querySelector(".edu");
// const workEl = document.querySelector(".work");
// const hobbyEl = document.querySelector(".hobby");
// const languageEl = document.querySelector(".language");
// const skillEl = document.querySelector("skill");

// for (let i = 0; i < mouseOverEl.length; i++) {
//   const btnViewmore = mouseOverEl[i].children;
//   const btnParentEl = mouseOverEl[i];

//   mouseOverEl[i].addEventListener("mouseover", function () {
//     console.log(mouseOverEl[i]);
//     btnViewmore[1].classList.remove("hidden");
//   });
//   //  đầu ra//
//   mouseOverEl[i].addEventListener("mouseout", function () {
//     console.log(mouseOverEl[i]);
//     btnViewmore[1].classList.add("hidden");
//   });

//   btnViewmore[1].addEventListener("click", function () {
//     const cardContent =
//       btnParentEl.parentElement.parentElement.nextElementSibling;
//     //console.log(cardContent);
//     if (
//       btnViewmore[1].textContent == `▲ VIEW LESS` &&
//       !btnViewmore[1].classList.contains("hidden")
//     ) {
//       cardContent.classList.add("hidden");
//       btnViewmore[1].textContent = `▼ VIEW MORE`;
//     } else {
//       cardContent.classList.remove("hidden");
//       btnViewmore[1].textContent = `▲ VIEW LESS`;
//     }
//   });
// }

const handleInputChange = () => {
  let emailValue = document.getElementById("email").value;
  let errMessage = document.querySelector(".message");
  if (validateEmail(emailValue)) {
    errMessage.textContent = "";
  } else if (emailValue.length === 0) {
    errMessage.textContent = "Vui lòng nhập email";
    errMessage.style.color = "red";
  } else {
    errMessage.textContent = "Sai định dạng email";
    errMessage.style.color = "red";
  }
};
const handleShowHide = (element) => {
  let jobContent = element.parentNode.parentNode.childNodes[3];
  if (window.getComputedStyle(jobContent).display === "none") {
    jobContent.style.display = "block";
    element.textContent = "View less";
  } else {
    jobContent.style.display = "none";
    element.textContent = "View more";
  }
};
document.getElementById("submit-btn").addEventListener("click", handleSubmit);
document.getElementById("email").addEventListener("input", handleInputChange);
document.querySelector(".close-btn").addEventListener("click", handleClose);
