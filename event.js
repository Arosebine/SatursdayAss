let q = document.querySelector('#secondDiv p');
nextQuestion();
let nextBtn = document.getElementById('next');
nextBtn.addEventListener('click', nextQuestion, false);
function nextQuestion() {
  let no = Functions.randNo(0, history.length - 1);
  q.innerHTML = history[no].question;
}
