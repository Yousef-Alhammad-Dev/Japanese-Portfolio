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

// 🧠 Japanese Quiz with Score + Restart Button
document.addEventListener("DOMContentLoaded", () => {
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
    {
      question: "「友達」 の意味は何ですか？",
      options: ["Teacher", "Friend", "Food"],
      answer: "Friend",
    },
    {
      question: "「空」 の意味は何ですか？",
      options: ["Sky", "Rain", "Bird"],
      answer: "Sky",
    },
    {
      question: "「日本」 の意味は何ですか？",
      options: ["China", "Japan", "Korea"],
      answer: "Japan",
    },
    {
      question: "「先生」 の意味は何ですか？",
      options: ["Student", "Teacher", "Doctor"],
      answer: "Teacher",
    },
  ];

  const questionEl = document.getElementById("question");
  const optionsEl = document.getElementById("options");
  const resultEl = document.getElementById("result");
  const scoreEl = document.getElementById("score");
  const restartBtn = document.getElementById("restart-btn");

  let score = 0;

  // 🎯 تحميل سؤال جديد عشوائي
  function loadQuestion() {
    const randomQuiz = quizData[Math.floor(Math.random() * quizData.length)];
    questionEl.textContent = randomQuiz.question;
    resultEl.textContent = "";
    optionsEl.innerHTML = "";

    randomQuiz.options.forEach((optionText) => {
      const btn = document.createElement("button");
      btn.classList.add("option");
      btn.textContent = optionText;

      btn.addEventListener("click", () => {
        if (optionText === randomQuiz.answer) {
          resultEl.textContent = "✅ 正解！(Correct!)";
          resultEl.style.color = "#388e3c";
          score++;
          scoreEl.textContent = `スコア: ${score}`;
          setTimeout(() => {
            loadQuestion();
          }, 800);
        } else {
          resultEl.textContent = "❌ 間違い！(Wrong!)";
          resultEl.style.color = "#d32f2f";
        }
      });

      optionsEl.appendChild(btn);
    });
  }

  // 🧮 زر إعادة التشغيل
  restartBtn.addEventListener("click", () => {
    score = 0;
    scoreEl.textContent = `スコア: ${score}`;
    resultEl.textContent = "";
    loadQuestion();
  });

  // 🚀 تحميل أول سؤال عند تشغيل الصفحة
  loadQuestion();
});
