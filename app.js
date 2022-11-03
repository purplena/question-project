// const getElement = (selector, list) => {
//   const el = list
//     ? [...document.querySelectorAll(selector)]
//     : document.querySelector(selector);

//   // check if only one element
//   if (list && el.length === 1) return el[0];
//   // check if list is not empty
//   if (list && el.length > 0) return el;
//   // if not a list and element exists
//   if (!list && el) return el;
//   throw new Error(`Please double check the ${selector}`);
// };

// traversing the dom
// const btns = getElement('.question-btn', true);

// btns.forEach(function (btn) {
//   btn.addEventListener('click', function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle('show-text');
//   });
// });

//my code option 1
// const getElement = (selector) => {
//   const el = document.querySelector(selector);
//   if (el) return el;
//   throw new Error(`Please check your classes : ${selector} does not exist`);
// };

// const questionBtn = getElement(".question-btn");
// const answerContainer = getElement(".answer-container");

// questionBtn.addEventListener("click", function () {
//   answerContainer.classList.toggle("show-answer");
// });

// questionBtn.addEventListener("click", () => {
//   answerContainer.classList.remove("show-answer");
// });

//code of Stephane
// select button and links
const c = console.log.bind(document);

const questionBtn = document.getElementById("question-btn");
const answerContainer = document.getElementById("answer-container");

questionBtn.addEventListener("click", () => {
  answerContainer.classList.toggle("show-answer");
  questionBtn.classList.toggle("open");
});
