// لاحقًا نضيف حركة الساكورا أو تأثيرات بسيطة
console.log("Welcome to Yousef Alhammad’s Japanese Portfolio!");

// 🌸 Sakura falling effect
document.addEventListener("DOMContentLoaded", () => {
  const sakuraContainer = document.querySelector(".sakura");

  for (let i = 0; i < 20; i++) {
    const petal = document.createElement("div");
    petal.classList.add("petal");
    petal.style.left = Math.random() * 100 + "vw";
    petal.style.width = Math.random() * 10 + 8 + "px";
    petal.style.height = petal.style.width;
    petal.style.animationDuration = 5 + Math.random() * 5 + "s";
    petal.style.animationDelay = Math.random() * 5 + "s";
    sakuraContainer.appendChild(petal);
  }
});
// ✨ تأثير الظهور التدريجي عند التمرير
window.addEventListener("scroll", () => {
  document.querySelectorAll(".fade-in").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("visible");
    }
  });
});

// 🌸 Sakura Glow Effect
document.addEventListener("DOMContentLoaded", () => {
  const glowContainer = document.querySelector(".sakura-glow");

  setInterval(() => {
    const glow = document.createElement("div");
    glow.classList.add("glow");
    glow.style.left = Math.random() * 100 + "vw";
    glow.style.top = Math.random() * 100 + "vh";
    glow.style.width = Math.random() * 15 + 10 + "px";
    glow.style.height = glow.style.width;

    glowContainer.appendChild(glow);

    setTimeout(() => glow.remove(), 4000);
  }, 2000); // كل ثانيتين يظهر وميض جديد
});

// 🌸 MINI QUIZ - FIXED VERSION (Works 100%)
document.addEventListener("DOMContentLoaded", function () {
  const quizData = [
    {
      question: "「猫」 の意味は何ですか？",
      options: ["Dog", "Cat", "Water"],
      answer: "Cat",
    },
    {
      question: "「水」 の意味は何ですか？",
      options: ["Fire", "Tree", "Water"],
      answer: "Water",
    },
    {
      question: "「花」 の意味は何ですか？",
      options: ["Sky", "Flower", "Mountain"],
      answer: "Flower",
    },
    {
      question: "「山」 の意味は何ですか？",
      options: ["River", "Mountain", "House"],
      answer: "Mountain",
    },
    {
      question: "「学校」 の意味は何ですか？",
      options: ["Car", "School", "Book"],
      answer: "School",
    },
  ];

  let remainingQuestions = [...quizData];

  const questionEl = document.getElementById("mini-question");
  const optionsEl = document.getElementById("mini-options");
  const resultEl = document.getElementById("mini-result");
  const scoreEl = document.getElementById("mini-score");
  const restartBtn = document.getElementById("mini-restart-btn");

  // لو الصفحة مش فيها الكويز
  if (!questionEl || !optionsEl) return;

  let score = 0;

  function loadQuestion() {
    // إذا خلصت كل الأسئلة، نرجع نعبّيهم من جديد
    if (remainingQuestions.length === 0) {
      remainingQuestions = [...quizData];
    }

    // اختيار سؤال عشوائي بدون تكرار
    const randomIndex = Math.floor(Math.random() * remainingQuestions.length);
    const randomQuiz = remainingQuestions.splice(randomIndex, 1)[0];

    // عرض السؤال
    questionEl.textContent = randomQuiz.question;
    resultEl.textContent = "";
    optionsEl.innerHTML = "";

    // إنشاء الأزرار
    randomQuiz.options.forEach((optionText) => {
      const btn = document.createElement("button");
      btn.classList.add("option");
      btn.textContent = optionText;
      optionsEl.appendChild(btn);

      // عند الضغط على خيار
      btn.addEventListener("click", function () {
        if (optionText === randomQuiz.answer) {
          resultEl.textContent = "✅ Correct!";
          resultEl.style.color = "#388e3c";
          score++;
          scoreEl.textContent = "Score: " + score;

          // تحميل سؤال جديد بعد نصف ثانية
          setTimeout(loadQuestion, 800);
        } else {
          resultEl.textContent = "❌ Wrong!";
          resultEl.style.color = "#d32f2f";
        }
      });
    });
  }

  // زر إعادة التشغيل
  restartBtn.addEventListener("click", function () {
    score = 0;
    scoreEl.textContent = "Score: " + score;
    resultEl.textContent = "";
    loadQuestion();
  });

  // أول سؤال عند التشغيل
  loadQuestion();
});

// 🌸 Sakura Toggle Button
let sakuraActive = true;
const toggleButton = document.getElementById("toggle-sakura");
const sakuraContainer = document.querySelector(".sakura");

toggleButton.addEventListener("click", () => {
  if (sakuraActive) {
    sakuraContainer.style.display = "none";
    toggleButton.textContent = "🌸 Resume Sakura";
  } else {
    sakuraContainer.style.display = "block";
    toggleButton.textContent = "🌸 Pause Sakura";
  }
  sakuraActive = !sakuraActive;
});

document.querySelectorAll(".kanji-card").forEach((card) => {
  card.addEventListener("click", () => {
    if (card.classList.contains("flipped")) return;

    card.classList.add("flipped");

    setTimeout(() => {
      card.classList.remove("flipped");
    }, 5000);
  });
});
