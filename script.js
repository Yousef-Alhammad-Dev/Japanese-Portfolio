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
      question: "「花」 の意味は何ですか？",
      options: ["Sky", "Flower", "Mountain"],
      answer: "Flower",
    },
    {
      question: "「学校」 の意味は何ですか？",
      options: ["Car", "School", "Book"],
      answer: "School",
    },
    {
      question: "パン ___ 食べます。",
      options: ["を", "に", "で"],
      answer: "を",
    },
    {
      question: "学校 ___ 行きます。",
      options: ["を", "へ", "で"],
      answer: "へ",
    },
    {
      question: "日本 ___ 行きます。",
      options: ["を", "に", "で"],
      answer: "に",
    },
    {
      question: "家 ___ 勉強します。",
      options: ["で", "に", "を"],
      answer: "で",
    },
    {
      question: "水 ___ 飲みます。",
      options: ["を", "に", "へ"],
      answer: "を",
    },
    {
      question: "友だち ___ 話します。",
      options: ["を", "と", "に"],
      answer: "と",
    },
    {
      question: "バス ___ 学校に行きます。",
      options: ["で", "に", "を"],
      answer: "で",
    },
    {
      question: "ここ ___ トイレがあります。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "へや ___ ベッドがあります。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "パン ___ 食べません。",
      options: ["を", "に", "で"],
      answer: "を",
    },
    {
      question: "学校 ___ 行きません。",
      options: ["を", "へ", "で"],
      answer: "へ",
    },
    {
      question: "日本 ___ 行きません。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "家 ___ ごはんを食べます。",
      options: ["で", "に", "を"],
      answer: "で",
    },
    {
      question: "友だち ___ 行きます。",
      options: ["と", "に", "で"],
      answer: "と",
    },
    {
      question: "いす ___ 座ります。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "公園 ___ 行きます。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "テレビ ___ 見ます。",
      options: ["を", "に", "で"],
      answer: "を",
    },
    {
      question: "音楽 ___ 聞きます。",
      options: ["を", "に", "へ"],
      answer: "を",
    },
    {
      question: "学校 ___ 先生がいます。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "机 ___ 本があります。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "毎日 ___ 日本語を勉強します。",
      options: ["は", "を", "に"],
      answer: "は",
    },
    {
      question: "今日は ___ 勉強します。",
      options: ["は", "を", "に"],
      answer: "は",
    },
    {
      question: "コーヒー ___ 飲みません。",
      options: ["を", "に", "で"],
      answer: "を",
    },
    {
      question: "朝 ___ パンを食べます。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "日曜日 ___ 何をしますか。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "学校 ___ 日本語を勉強します。",
      options: ["で", "に", "を"],
      answer: "で",
    },
    {
      question: "友だち ___ 手紙を書きます。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "毎朝 ___ コーヒーを飲みます。",
      options: ["は", "を", "に"],
      answer: "は",
    },
    {
      question: "へや ___ だれがいますか。",
      options: ["に", "を", "で"],
      answer: "に",
    },
    {
      question: "学校 ___ 行きますか。",
      options: ["へ", "を", "で"],
      answer: "へ",
    },
    {
      question: "「みず」 のいみはなんですか？",
      options: ["Water", "Fire", "Tree"],
      answer: "Water",
    },
    {
      question: "「ごはん」 のいみはなんですか？",
      options: ["Rice / Meal", "Bread", "Meat"],
      answer: "Rice / Meal",
    },
    {
      question: "「ともだち」 のいみはなんですか？",
      options: ["Teacher", "Friend", "Family"],
      answer: "Friend",
    },
    {
      question: "「がっこう」 のいみはなんですか？",
      options: ["House", "Hospital", "School"],
      answer: "School",
    },
    {
      question: "「せんせい」 のいみはなんですか？",
      options: ["Student", "Teacher", "Doctor"],
      answer: "Teacher",
    },
    {
      question: "「いえ」 のいみはなんですか？",
      options: ["House", "Room", "Garden"],
      answer: "House",
    },
    {
      question: "「やさい」 のいみはなんですか？",
      options: ["Fruit", "Vegetables", "Meat"],
      answer: "Vegetables",
    },
    {
      question: "「さかな」 のいみはなんですか？",
      options: ["Fish", "Chicken", "Egg"],
      answer: "Fish",
    },
    {
      question: "「きょう」 のいみはなんですか？",
      options: ["Yesterday", "Today", "Tomorrow"],
      answer: "Today",
    },
    {
      question: "「あした」 のいみはなんですか？",
      options: ["Today", "Tomorrow", "Yesterday"],
      answer: "Tomorrow",
    },
    {
      question: "「きのう」 のいみはなんですか？",
      options: ["Tomorrow", "Yesterday", "Today"],
      answer: "Yesterday",
    },
    {
      question: "「へや」 のいみはなんですか？",
      options: ["House", "Room", "Kitchen"],
      answer: "Room",
    },
    {
      question: "「おちゃ」 のいみはなんですか？",
      options: ["Coffee", "Tea", "Water"],
      answer: "Tea",
    },
    {
      question: "「にく」 のいみはなんですか？",
      options: ["Fish", "Vegetables", "Meat"],
      answer: "Meat",
    },
    {
      question: "「くるま」 のいみはなんですか？",
      options: ["Train", "Bus", "Car"],
      answer: "Car",
    },
    {
      question: "「水」 のいみはなんですか？",
      options: ["Water", "Fire", "Tree"],
      answer: "Water",
    },
    {
      question: "「火」 のいみはなんですか？",
      options: ["Fire", "Water", "Earth"],
      answer: "Fire",
    },
    {
      question: "「木」 のいみはなんですか？",
      options: ["Tree", "Mountain", "River"],
      answer: "Tree",
    },
    {
      question: "「金」 のいみはなんですか？",
      options: ["Gold / Money", "Day", "Earth"],
      answer: "Gold / Money",
    },
    {
      question: "「土」 のいみはなんですか？",
      options: ["Earth", "Water", "Fire"],
      answer: "Earth",
    },
    {
      question: "「人」 のいみはなんですか？",
      options: ["Person", "Child", "Woman"],
      answer: "Person",
    },
    {
      question: "「男」 のいみはなんですか？",
      options: ["Man", "Woman", "Child"],
      answer: "Man",
    },
    {
      question: "「女」 のいみはなんですか？",
      options: ["Woman", "Man", "Mother"],
      answer: "Woman",
    },
    {
      question: "「子」 のいみはなんですか？",
      options: ["Child", "Student", "Friend"],
      answer: "Child",
    },
    {
      question: "「山」 のいみはなんですか？",
      options: ["Mountain", "River", "Forest"],
      answer: "Mountain",
    },
    {
      question: "「川」 のいみはなんですか？",
      options: ["River", "Sea", "Lake"],
      answer: "River",
    },
    {
      question: "「上」 のいみはなんですか？",
      options: ["Up", "Down", "Inside"],
      answer: "Up",
    },
    {
      question: "「下」 のいみはなんですか？",
      options: ["Down", "Up", "Outside"],
      answer: "Down",
    },
    {
      question: "「中」 のいみはなんですか？",
      options: ["Middle", "Outside", "Front"],
      answer: "Middle",
    },
    {
      question: "「外」 のいみはなんですか？",
      options: ["Outside", "Inside", "Near"],
      answer: "Outside",
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
