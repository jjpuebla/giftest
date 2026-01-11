const optionLabels = ["A", "B", "C", "D"];
const selectedAnswers = {};
const checkedAnswers = {};

const questions = [
  {
    "id": "figure-classification-1",
    "category": "Figure Classification",
    "image": "images/figure-classification-q1.png",
    "answer": "A",
    "explanation": "Arrows in the same size pointing down."
  },
  {
    "id": "figure-classification-2",
    "category": "Figure Classification",
    "image": "images/figure-classification-q2.png",
    "answer": "D",
    "explanation": "Combos of a white parallelogram, a black circle, a white circle; the 2 circles lie on 2 opposite corners of the parallelogram."
  },
  {
    "id": "figure-classification-3",
    "category": "Figure Classification",
    "image": "images/figure-classification-q3.png",
    "answer": "C",
    "explanation": "Same figure in different colors but in the same size, rotated by several degrees."
  },
  {
    "id": "figure-classification-4",
    "category": "Figure Classification",
    "image": "images/figure-classification-q4.png",
    "answer": "A",
    "explanation": "Two figures of the same type side by side; the right figure is black and smaller. The 2 figures point in the same direction."
  },
  {
    "id": "figure-classification-5",
    "category": "Figure Classification",
    "image": "images/figure-classification-q5.png",
    "answer": "C",
    "explanation": "Combos of a circle, a square, a white arrow and a black arrow; arrows point in the same direction."
  },
  {
    "id": "figure-classification-6",
    "category": "Figure Classification",
    "image": "images/figure-classification-q6.png",
    "answer": "A",
    "explanation": "3 black circles, 1 white circle, 1 black star. The black star is always above the white circle."
  },
  {
    "id": "figure-matrices-1",
    "category": "Figure Matrices",
    "image": "images/figure-matrices-q1.png",
    "answer": "C",
    "explanation": "The larger figure rotates by 180 degrees."
  },
  {
    "id": "figure-matrices-2",
    "category": "Figure Matrices",
    "image": "images/figure-matrices-q2.png",
    "answer": "B",
    "explanation": "The larger shape becomes black. The inside shape go to the right of the larger figure. A new white shape appears above the larger figure."
  },
  {
    "id": "figure-matrices-3",
    "category": "Figure Matrices",
    "image": "images/figure-matrices-q3.png",
    "answer": "B",
    "explanation": "The larger shape becomes black. The inside shape doesn?t change color; a new white circle, containing the smaller shape, appears."
  },
  {
    "id": "figure-matrices-4",
    "category": "Figure Matrices",
    "image": "images/figure-matrices-q4.png",
    "answer": "A",
    "explanation": "The larger external figure disappears and it is replaced by a figure of the same type as the inside one. The smaller inside figure turns black."
  },
  {
    "id": "figure-matrices-5",
    "category": "Figure Matrices",
    "image": "images/figure-matrices-q5.png",
    "answer": "D",
    "explanation": "The larger figure rotates by 90 degrees clockwise. The white triangle doesn?t rotate."
  },
  {
    "id": "figure-matrices-6",
    "category": "Figure Matrices",
    "image": "images/figure-matrices-q6.png",
    "answer": "C",
    "explanation": "The second figure takes the place of the first and vice versa. The fourth figure takes the place of the third and vice versa."
  },
  {
    "id": "paper-folding-1",
    "category": "Paper Folding",
    "image": "images/paper-folding-q1.png",
    "answer": "C",
    "explanation": ""
  },
  {
    "id": "paper-folding-2",
    "category": "Paper Folding",
    "image": "images/paper-folding-q2.png",
    "answer": "A",
    "explanation": ""
  },
  {
    "id": "paper-folding-3",
    "category": "Paper Folding",
    "image": "images/paper-folding-q3.png",
    "answer": "D",
    "explanation": ""
  },
  {
    "id": "paper-folding-4",
    "category": "Paper Folding",
    "image": "images/paper-folding-q4.png",
    "answer": "B",
    "explanation": ""
  },
  {
    "id": "paper-folding-5",
    "category": "Paper Folding",
    "image": "images/paper-folding-q5.png",
    "answer": "A",
    "explanation": ""
  },
  {
    "id": "paper-folding-6",
    "category": "Paper Folding",
    "image": "images/paper-folding-q6.png",
    "answer": "C",
    "explanation": ""
  },
  {
    "id": "number-analogies-1",
    "category": "Number Analogies",
    "image": "images/number-analogies-q1.png",
    "answer": "D",
    "explanation": "6 more."
  },
  {
    "id": "number-analogies-2",
    "category": "Number Analogies",
    "image": "images/number-analogies-q2.png",
    "answer": "B",
    "explanation": "3 less."
  },
  {
    "id": "number-analogies-3",
    "category": "Number Analogies",
    "image": "images/number-analogies-q3.png",
    "answer": "C",
    "explanation": "6 more."
  },
  {
    "id": "number-analogies-4",
    "category": "Number Analogies",
    "image": "images/number-analogies-q4.png",
    "answer": "A",
    "explanation": "7 less."
  },
  {
    "id": "number-analogies-5",
    "category": "Number Analogies",
    "image": "images/number-analogies-q5.png",
    "answer": "B",
    "explanation": "2 less."
  },
  {
    "id": "number-analogies-6",
    "category": "Number Analogies",
    "image": "images/number-analogies-q6.png",
    "answer": "C",
    "explanation": "3 less."
  },
  {
    "id": "number-puzzle-1",
    "category": "Number Puzzle",
    "image": "images/number-puzzle-q1.png",
    "answer": "C",
    "explanation": "15=3+12"
  },
  {
    "id": "number-puzzle-2",
    "category": "Number Puzzle",
    "image": "images/number-puzzle-q2.png",
    "answer": "B",
    "explanation": "9=18-9"
  },
  {
    "id": "number-puzzle-3",
    "category": "Number Puzzle",
    "image": "images/number-puzzle-q3.png",
    "answer": "C",
    "explanation": "1=13-2-10"
  },
  {
    "id": "number-puzzle-4",
    "category": "Number Puzzle",
    "image": "images/number-puzzle-q4.png",
    "answer": "A",
    "explanation": "18=9+1+8"
  },
  {
    "id": "number-puzzle-5",
    "category": "Number Puzzle",
    "image": "images/number-puzzle-q5.png",
    "answer": "D",
    "explanation": "14=5+10-1"
  },
  {
    "id": "number-puzzle-6",
    "category": "Number Puzzle",
    "image": "images/number-puzzle-q6.png",
    "answer": "A",
    "explanation": "17=7-1+11"
  },
  {
    "id": "number-series-1",
    "category": "Number Series",
    "image": "images/number-series-q1.png",
    "answer": "C",
    "explanation": "-3, +5, -3, +5, -3, +5, etc. , etc."
  },
  {
    "id": "number-series-2",
    "category": "Number Series",
    "image": "images/number-series-q2.png",
    "answer": "D",
    "explanation": "+1, +5, -4, +1, +5, -4, etc."
  },
  {
    "id": "number-series-3",
    "category": "Number Series",
    "image": "images/number-series-q3.png",
    "answer": "B",
    "explanation": "-2, +1, +0, -2, +1, +0, etc."
  },
  {
    "id": "number-series-4",
    "category": "Number Series",
    "image": "images/number-series-q4.png",
    "answer": "A",
    "explanation": "-3, -0, -1, -3, -0, -1, etc."
  },
  {
    "id": "number-series-5",
    "category": "Number Series",
    "image": "images/number-series-q5.png",
    "answer": "C",
    "explanation": "+0, +0, -1, +0, +0, -1 etc."
  },
  {
    "id": "number-series-6",
    "category": "Number Series",
    "image": "images/number-series-q6.png",
    "answer": "B",
    "explanation": "+1, -1, +3, +1, -1, +3, etc."
  },
  {
    "id": "sentence-completion-1",
    "category": "Sentence Completion",
    "image": "images/sentence-completion-q1.png",
    "answer": "B",
    "explanation": "Cats can climb trees."
  },
  {
    "id": "sentence-completion-2",
    "category": "Sentence Completion",
    "image": "images/sentence-completion-q2.png",
    "answer": "D",
    "explanation": "He will drive a firefighter truck."
  },
  {
    "id": "sentence-completion-3",
    "category": "Sentence Completion",
    "image": "images/sentence-completion-q3.png",
    "answer": "A",
    "explanation": "The doctor doesn't need a telescope."
  },
  {
    "id": "sentence-completion-4",
    "category": "Sentence Completion",
    "image": "images/sentence-completion-q4.png",
    "answer": "D",
    "explanation": "Mom doesn't need a hatchet."
  },
  {
    "id": "sentence-completion-5",
    "category": "Sentence Completion",
    "image": "images/sentence-completion-q5.png",
    "answer": "C",
    "explanation": "Sharks are fishes."
  },
  {
    "id": "sentence-completion-6",
    "category": "Sentence Completion",
    "image": "images/sentence-completion-q6.png",
    "answer": "D",
    "explanation": "Mary surely won't see a polar bear."
  },
  {
    "id": "picture-analogies-1",
    "category": "Picture Analogies",
    "image": "images/picture-analogies-q1.png",
    "answer": "D",
    "explanation": "Bunny recalls the Easter holiday; reindeer recalls the Christmas holiday."
  },
  {
    "id": "picture-analogies-2",
    "category": "Picture Analogies",
    "image": "images/picture-analogies-q2.png",
    "answer": "C",
    "explanation": "Rabbits love carrots; squirrels love nuts."
  },
  {
    "id": "picture-analogies-3",
    "category": "Picture Analogies",
    "image": "images/picture-analogies-q3.png",
    "answer": "B",
    "explanation": "The skater wears skates; the skier wears sky boots."
  },
  {
    "id": "picture-analogies-4",
    "category": "Picture Analogies",
    "image": "images/picture-analogies-q4.png",
    "answer": "D",
    "explanation": "The enemy of the knight is the dragon; the enemy of Little Red Riding Hood is the wolf."
  },
  {
    "id": "picture-analogies-5",
    "category": "Picture Analogies",
    "image": "images/picture-analogies-q5.png",
    "answer": "A",
    "explanation": "Dollar is the currency of the United States; Euro is the currency of France."
  },
  {
    "id": "picture-analogies-6",
    "category": "Picture Analogies",
    "image": "images/picture-analogies-q6.png",
    "answer": "D",
    "explanation": "To paint a wall you need a paint roller; to paint a painting you need a paintbrush."
  },
  {
    "id": "picture-classification-1",
    "category": "Picture Classification",
    "image": "images/picture-classification-q1.png",
    "answer": "A",
    "explanation": "All objects are related to disease."
  },
  {
    "id": "picture-classification-2",
    "category": "Picture Classification",
    "image": "images/picture-classification-q2.png",
    "answer": "C",
    "explanation": "Organs of the body."
  },
  {
    "id": "picture-classification-3",
    "category": "Picture Classification",
    "image": "images/picture-classification-q3.png",
    "answer": "D",
    "explanation": "Signs of the playing cards."
  },
  {
    "id": "picture-classification-4",
    "category": "Picture Classification",
    "image": "images/picture-classification-q4.png",
    "answer": "D",
    "explanation": "Cleaning objects."
  },
  {
    "id": "picture-classification-5",
    "category": "Picture Classification",
    "image": "images/picture-classification-q5.png",
    "answer": "B",
    "explanation": "Objects related to spring season."
  },
  {
    "id": "picture-classification-6",
    "category": "Picture Classification",
    "image": "images/picture-classification-q6.png",
    "answer": "A",
    "explanation": "Odd numbers."
  }
];

const categoryBounds = {};
questions.forEach((q, index) => {
  if (!categoryBounds[q.category]) {
    categoryBounds[q.category] = { start: index, end: index };
  } else {
    categoryBounds[q.category].end = index;
  }
});
const categories = Object.keys(categoryBounds);

const app = document.getElementById("app");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const checkBtn = document.getElementById("check");
const scoreEl = document.getElementById("score");
const gradeEl = document.getElementById("grade");
const progressEl = document.getElementById("progress");
const progressBarEl = document.getElementById("progress-bar");
const answeredCountEl = document.getElementById("answered-count");
const categoryNameEl = document.getElementById("category-name");
const categoryStatsEl = document.getElementById("category-stats");
const overallTimeEl = document.getElementById("overall-time");
const categoryTimeEl = document.getElementById("category-time");
const timersEl = document.getElementById("timers");
const resultsPanelEl = document.getElementById("results-panel");
const confirmModalEl = document.getElementById("confirm-modal");
const confirmMessageEl = document.getElementById("confirm-message");
const confirmCancelBtn = document.getElementById("confirm-cancel");
const confirmEndBtn = document.getElementById("confirm-end");
const questionNavEl = document.getElementById("question-nav");
const resultsBtn = document.getElementById("results");
const resetCategoryBtn = document.getElementById("reset-category");
const resetTestBtn = document.getElementById("reset-test");
const resetModalEl = document.getElementById("reset-modal");
const resetTitleEl = document.getElementById("reset-title");
const resetMessageEl = document.getElementById("reset-message");
const resetCancelBtn = document.getElementById("reset-cancel");
const resetConfirmBtn = document.getElementById("reset-confirm");

const state = {
  currentIndex: 0,
  activeCategory: null,
  categoryStart: performance.now(),
  appStart: performance.now(),
  appElapsed: 0,
  timeByCategory: Object.fromEntries(categories.map((c) => [c, 0])),
  timerPaused: false,
  appPaused: false,
  isComplete: false,
  completedCategory: null,
  confirmOpen: false,
  completedCategories: new Set()
};
let pendingReset = null;

function formatTime(ms) {
  const totalSeconds = Math.max(0, Math.floor(ms / 1000));
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, "0");
  const seconds = String(totalSeconds % 60).padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function setActiveCategory(category) {
  const now = performance.now();
  if (state.activeCategory && !state.timerPaused) {
    state.timeByCategory[state.activeCategory] += now - state.categoryStart;
  }
  state.activeCategory = category;
  state.categoryStart = now;
  state.timerPaused = false;
}

function getTimeByCategory() {
  const now = performance.now();
  const times = { ...state.timeByCategory };
  if (state.activeCategory && !state.timerPaused) {
    times[state.activeCategory] =
      (times[state.activeCategory] || 0) + (now - state.categoryStart);
  }
  return times;
}

function pauseTimers() {
  const now = performance.now();
  if (!state.timerPaused && state.activeCategory) {
    state.timeByCategory[state.activeCategory] += now - state.categoryStart;
    state.timerPaused = true;
  }
  if (!state.appPaused) {
    state.appElapsed += now - state.appStart;
    state.appPaused = true;
  }
}

function setResultsVisible(isVisible) {
  if (timersEl) {
    timersEl.classList.toggle("hidden", !isVisible);
  }
  resultsPanelEl.classList.toggle("hidden", !isVisible);
}

function isLastInCategory(index) {
  const category = questions[index].category;
  return index === categoryBounds[category].end;
}

function getNextCategoryStart(index) {
  const category = questions[index].category;
  const categoryIndex = categories.indexOf(category);
  if (categoryIndex === -1 || categoryIndex === categories.length - 1) {
    return null;
  }
  const nextCategory = categories[categoryIndex + 1];
  return categoryBounds[nextCategory].start;
}

function getUnansweredInCategory(category) {
  return questions
    .map((q, index) => ({
      question: q,
      index,
      number: index + 1
    }))
    .filter(
      (item) =>
        item.question.category === category && !selectedAnswers[item.question.id]
    );
}

function showConfirmModal(unanswered) {
  const count = unanswered.length;
  const suffix = count === 1 ? "" : "s";
  confirmMessageEl.innerHTML = "";
  const message = document.createElement("div");
  message.textContent =
    `You have ${count} unanswered question${suffix} in this category. End category anyway?`;
  confirmMessageEl.appendChild(message);

  const list = document.createElement("div");
  list.className = "modal-list";
  unanswered.forEach((item) => {
    const link = document.createElement("a");
    link.href = "#";
    link.dataset.index = String(item.index);
    link.textContent = `Question ${item.number}`;
    list.appendChild(link);
  });
  confirmMessageEl.appendChild(list);

  confirmModalEl.classList.remove("hidden");
  state.confirmOpen = true;
}

function hideConfirmModal() {
  confirmModalEl.classList.add("hidden");
  state.confirmOpen = false;
}

function showResetModal(type) {
  pendingReset = type;
  const category = questions[state.currentIndex].category;
  if (type === "category") {
    resetTitleEl.textContent = "Reset category";
    resetMessageEl.textContent =
      `This will clear all answers in ${category} and reset its timer.`;
  } else {
    resetTitleEl.textContent = "Reset test";
    resetMessageEl.textContent =
      "This will clear all answers and timers for the entire test.";
  }
  resetModalEl.classList.remove("hidden");
}

function hideResetModal() {
  resetModalEl.classList.add("hidden");
  pendingReset = null;
}

function attemptEndCategory() {
  const category = questions[state.currentIndex].category;
  const unanswered = getUnansweredInCategory(category);
  if (unanswered.length > 0) {
    showConfirmModal(unanswered);
    return;
  }
  renderComplete();
}

function resetCategory() {
  const category = questions[state.currentIndex].category;
  questions.forEach((q) => {
    if (q.category === category) {
      delete selectedAnswers[q.id];
      delete checkedAnswers[q.id];
    }
  });
  state.timeByCategory[category] = 0;
  state.completedCategories.delete(category);
  state.isComplete = false;
  state.completedCategory = null;
  setResultsVisible(false);
  state.currentIndex = categoryBounds[category].start;
  state.activeCategory = category;
  state.categoryStart = performance.now();
  state.timerPaused = false;
  renderQuestion();
}

function resetTest() {
  Object.keys(selectedAnswers).forEach((key) => delete selectedAnswers[key]);
  Object.keys(checkedAnswers).forEach((key) => delete checkedAnswers[key]);
  state.completedCategories.clear();
  state.timeByCategory = Object.fromEntries(categories.map((c) => [c, 0]));
  state.appElapsed = 0;
  state.appStart = performance.now();
  state.categoryStart = performance.now();
  state.activeCategory = null;
  state.timerPaused = false;
  state.appPaused = false;
  state.isComplete = false;
  state.completedCategory = null;
  setResultsVisible(false);
  state.currentIndex = 0;
  renderQuestion();
}

function getScore() {
  return questions.reduce(
    (sum, q) => sum + (selectedAnswers[q.id] === q.answer ? 1 : 0),
    0
  );
}

function getAnsweredCount() {
  return questions.filter((q) => selectedAnswers[q.id]).length;
}

function getAccuracy() {
  const answered = getAnsweredCount();
  if (!answered) {
    return 0;
  }
  return Math.round((getScore() / answered) * 100);
}

function setAnswer(questionId, choice) {
  selectedAnswers[questionId] = choice;
  updateSummary();
  renderQuestionNav();
}

function applyResult(card, result, question) {
  const picked = selectedAnswers[question.id] || "";
  if (picked === question.answer) {
    card.classList.add("correct");
    card.classList.remove("wrong");
    result.textContent = `Correct. ${question.explanation}`;
  } else {
    card.classList.add("wrong");
    card.classList.remove("correct");
    const extra = picked ? `You chose ${picked}. ` : "No answer selected. ";
    result.textContent = `${extra}Correct answer is ${question.answer}. ${question.explanation}`;
  }
}

function renderQuestion() {
  app.innerHTML = "";
  const question = questions[state.currentIndex];

  state.isComplete = false;
  state.completedCategory = null;
  setResultsVisible(false);
  state.isComplete = false;
  if (state.appPaused) {
    state.appStart = performance.now();
    state.appPaused = false;
  }

  setActiveCategory(question.category);

  categoryNameEl.textContent = question.category;
  progressEl.textContent = `Question ${state.currentIndex + 1} of ${questions.length}`;
  progressBarEl.style.width = `${((state.currentIndex + 1) / questions.length) * 100}%`;
  answeredCountEl.textContent = `Answered ${getAnsweredCount()} of ${questions.length}`;

  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h2");
  title.textContent = `Question ${state.currentIndex + 1}`;

  const img = document.createElement("img");
  img.className = "question-image";
  img.alt = `Question ${state.currentIndex + 1}`;
  img.src = question.image;

  const choices = document.createElement("div");
  choices.className = "choices";
  optionLabels.forEach((choice) => {
    const label = document.createElement("label");
    label.className = "choice";
    const input = document.createElement("input");
    input.type = "radio";
    input.name = question.id;
    input.value = choice;
    input.checked = selectedAnswers[question.id] === choice;
    input.addEventListener("change", () => setAnswer(question.id, choice));
    const span = document.createElement("span");
    span.textContent = `Option ${choice}`;
    label.appendChild(input);
    label.appendChild(span);
    choices.appendChild(label);
  });

  const result = document.createElement("div");
  result.className = "result";

  card.appendChild(title);
  card.appendChild(img);
  card.appendChild(choices);
  card.appendChild(result);

  app.appendChild(card);

  if (checkedAnswers[question.id]) {
    applyResult(card, result, question);
  }

  updateNav();
  updateSummary();
  renderQuestionNav();
}

function renderComplete() {
  pauseTimers();
  state.isComplete = true;
  const completedCategory = questions[state.currentIndex].category;
  state.completedCategory = completedCategory;
  state.completedCategories.add(completedCategory);
  setResultsVisible(true);
  app.innerHTML = "";

  categoryNameEl.textContent = completedCategory;
  progressEl.textContent = "Category complete";
  progressBarEl.style.width = "100%";
  answeredCountEl.textContent = `Answered ${getAnsweredCount()} of ${questions.length}`;

  const card = document.createElement("div");
  card.className = "card";

  const title = document.createElement("h2");
  title.textContent = `Finished ${completedCategory}`;

  const summary = document.createElement("div");
  summary.className = "result";
  summary.textContent = `Final score ${getScore()} / ${questions.length}. Accuracy ${getAccuracy()}%.`;

  card.appendChild(title);
  card.appendChild(summary);
  app.appendChild(card);

  updateNav();
  updateSummary();
  renderQuestionNav();
}

function updateNav() {
  if (state.isComplete) {
    prevBtn.disabled = state.currentIndex === 0;
    prevBtn.textContent = "Back";
    nextBtn.disabled = false;
    nextBtn.textContent = getNextCategoryStart(state.currentIndex) === null
      ? "Review"
      : "Continue";
    checkBtn.disabled = true;
    return;
  }

  prevBtn.disabled = state.currentIndex === 0;
  prevBtn.textContent = "Previous";
  nextBtn.disabled = false;
  nextBtn.textContent = isLastInCategory(state.currentIndex)
    ? "Finish category"
    : "Next";
  checkBtn.disabled = true;
}

function updateSummary() {
  const correct = getScore();
  const answered = getAnsweredCount();
  const total = questions.length;

  scoreEl.textContent = `Score ${correct} / ${total}`;
  gradeEl.textContent = `Answered ${answered} of ${total} | Accuracy ${getAccuracy()}%`;

  const times = getTimeByCategory();
  categoryStatsEl.innerHTML = "";
  categories.forEach((category) => {
    const rows = questions.filter((q) => q.category === category);
    const categoryCorrect = rows.filter(
      (q) => selectedAnswers[q.id] === q.answer
    ).length;
    const categoryAnswered = rows.filter((q) => selectedAnswers[q.id]).length;
    const categoryWrong = categoryAnswered - categoryCorrect;
    const categoryUnanswered = rows.length - categoryAnswered;

    const row = document.createElement("div");
    row.className = "category-row";

    const name = document.createElement("div");
    name.className = "category-name";
    name.textContent = category;

    const meta = document.createElement("div");
    meta.className = "category-meta";
    meta.textContent =
      `Correct ${categoryCorrect} | Wrong ${categoryWrong} | Unanswered ${categoryUnanswered}`;

    const time = document.createElement("div");
    time.className = "category-time";
    time.textContent = `Time ${formatTime(times[category] || 0)}`;

    row.appendChild(name);
    row.appendChild(meta);
    row.appendChild(time);
    categoryStatsEl.appendChild(row);
  });
}

function renderQuestionNav() {
  questionNavEl.innerHTML = "";
  categories.forEach((category) => {
    const section = document.createElement("div");
    section.className = "nav-section";

    const title = document.createElement("div");
    title.className = "nav-title";
    title.textContent = category;

    const list = document.createElement("div");
    list.className = "nav-list";

    let categoryIndex = 1;
    questions.forEach((q, index) => {
      if (q.category !== category) {
        return;
      }
      const item = document.createElement("button");
      item.type = "button";
      item.className = "nav-item";
      if (index === state.currentIndex) {
        item.classList.add("active");
      }
      item.dataset.index = String(index);

      const dot = document.createElement("span");
      dot.className = "nav-dot";
      if (state.completedCategories.has(q.category)) {
        const isCorrect = selectedAnswers[q.id] === q.answer;
        dot.classList.add(isCorrect ? "correct" : "wrong");
      } else {
        dot.classList.add(selectedAnswers[q.id] ? "answered" : "unanswered");
      }

      const label = document.createElement("span");
      label.textContent = `Q${categoryIndex}`;

      item.appendChild(dot);
      item.appendChild(label);
      list.appendChild(item);
      categoryIndex += 1;
    });

    section.appendChild(title);
    section.appendChild(list);
    questionNavEl.appendChild(section);
  });
}

function updateTimers() {
  const now = performance.now();
  const totalElapsed = state.appPaused
    ? state.appElapsed
    : state.appElapsed + (now - state.appStart);
  if (overallTimeEl) {
    overallTimeEl.textContent = formatTime(totalElapsed);
  }
  const times = getTimeByCategory();
  const currentCategory = state.completedCategory || state.activeCategory;
  if (categoryTimeEl) {
    categoryTimeEl.textContent = formatTime(times[currentCategory] || 0);
  }
  if (state.isComplete) {
    updateSummary();
  }
}

function checkAnswer() {
  const question = questions[state.currentIndex];
  const card = app.querySelector(".card");
  const result = card.querySelector(".result");
  checkedAnswers[question.id] = true;
  applyResult(card, result, question);
  updateSummary();
}

prevBtn.addEventListener("click", () => {
  if (state.currentIndex > 0) {
    state.currentIndex -= 1;
    renderQuestion();
  }
});

nextBtn.addEventListener("click", () => {
  if (state.isComplete) {
    const nextCategoryStart = getNextCategoryStart(state.currentIndex);
    if (nextCategoryStart === null) {
      state.currentIndex = Math.max(0, questions.length - 1);
      renderQuestion();
    } else {
      state.currentIndex = nextCategoryStart;
      renderQuestion();
    }
    return;
  }
  if (isLastInCategory(state.currentIndex)) {
    attemptEndCategory();
    return;
  }
  if (state.currentIndex < questions.length - 1) {
    state.currentIndex += 1;
    renderQuestion();
  }
});

confirmCancelBtn.addEventListener("click", () => {
  hideConfirmModal();
});

confirmEndBtn.addEventListener("click", () => {
  hideConfirmModal();
  renderComplete();
});

resetCancelBtn.addEventListener("click", () => {
  hideResetModal();
});

resetConfirmBtn.addEventListener("click", () => {
  if (pendingReset === "category") {
    resetCategory();
  } else if (pendingReset === "test") {
    resetTest();
  }
  hideResetModal();
});

resultsBtn.addEventListener("click", () => {
  if (!state.isComplete) {
    attemptEndCategory();
  }
});

resetCategoryBtn.addEventListener("click", () => {
  showResetModal("category");
});

resetTestBtn.addEventListener("click", () => {
  showResetModal("test");
});

confirmMessageEl.addEventListener("click", (event) => {
  const target = event.target;
  if (target instanceof HTMLAnchorElement && target.dataset.index) {
    event.preventDefault();
    const index = Number(target.dataset.index);
    if (!Number.isNaN(index)) {
      hideConfirmModal();
      state.currentIndex = index;
      renderQuestion();
    }
  }
});

questionNavEl.addEventListener("click", (event) => {
  const target = event.target;
  const button = target.closest(".nav-item");
  if (!button || !button.dataset.index) {
    return;
  }
  const index = Number(button.dataset.index);
  if (!Number.isNaN(index)) {
    state.currentIndex = index;
    renderQuestion();
  }
});

checkBtn.addEventListener("click", (event) => event.preventDefault());

renderQuestion();
updateTimers();
setInterval(updateTimers, 1000);
