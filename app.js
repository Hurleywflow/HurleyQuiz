const correctAnswer = ['B', 'B', 'B', 'B'];
const form = document.querySelector('.quiz-form');
const results = document.querySelector('.result');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  let score = 0;
  // get user answer by refer the name of input field value
  let userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];
  //check for correct answer
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswer[index]) {
      score += 25;
    }
  });
  // show results an scroll to top window to see the score
  scrollTo(0, 0);
  results.classList.remove('d-none');
  // animation score from 0 to score
  let output = 0;
  const timer = setInterval(() => {
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
      results.querySelector('span').textContent = `${output}%`;
    }
  }, 10);
});
