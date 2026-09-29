// ==========================================
// PAGERANK ACADEMY
// VERSION 3
// ==========================================

const levels = [
  {
    title: "Search Battle",
    description: "Discover why counting words isn't enough.",
    reward: 100,
    achievement: "Link Detective",
    icon: "🔍",
    unlock: "Inspect Links"
  },
  {
    title: "Link Detective",
    description: "Discover why links matter.",
    reward: 150,
    achievement: "Web Explorer",
    icon: "🔗",
    unlock: "Link Vision"
  },
  {
    title: "Random Surfer",
    description: "Discover the random surfer model.",
    reward: 200,
    achievement: "Random Surfer",
    icon: "🧑‍💻",
    unlock: "Surfer Simulation"
  },
  {
    title: "Importance Energy",
    description: "Watch importance flow through a web.",
    reward: 550,
    achievement: "PageRanker",
    icon: "⚡",
    unlock: "Web Lab"
  },
  {
    title: "Power Transfer",
    description: "Discover why important sources matter.",
    reward: 250,
    achievement: "Power Broker",
    icon: "💎",
    unlock: "Source Inspector"
  },
  {
    title: "Loop Trap",
    description: "Find out what happens when surfers get trapped.",
    reward: 200,
    achievement: "Loop Breaker",
    icon: "🔄",
    unlock: "Loop Detector"
  },
  {
    title: "Damping Escape",
    description: "Use random jumps to escape the web.",
    reward: 250,
    achievement: "Escape Artist",
    icon: "🚪",
    unlock: "Damping Control"
  },
  {
    title: "Hack the Ranking",
    description: "Experiment with manipulating the web.",
    reward: 400,
    achievement: "Algorithm Hacker",
    icon: "😈",
    unlock: "Web Editor"
  },
  {
    title: "Web Lab Challenge",
    description: "Build a network and influence its ranking.",
    reward: 300,
    achievement: "Web Architect",
    icon: "🧪",
    unlock: "Custom Web Builder"
  },
  {
    title: "PageRank Master",
    description: "Prove that you understand the entire system.",
    reward: 500,
    achievement: "PageRank Master",
    icon: "🏆",
    unlock: "Master Badge"
  }
];

let xp = 0;
let currentLevel = 0;
let completed = [];
let achievements = [];
let rewardPending = null;

let round = 1;

function $(id) {
  return document.getElementById(id);
}

function showScreen(id) {
  document.querySelectorAll(".screen").forEach(s => {
    s.classList.remove("active");
  });

  $(id).classList.add("active");
}

function startGame() {
  showLevels();
}

function showLevels() {

  showScreen("levels");

  $("xp").textContent = xp;
  $("levelXP").textContent = xp + " XP";
  $("achievements").textContent = achievements.length;

  const grid = $("levelGrid");
  grid.innerHTML = "";

  levels.forEach((level, i) => {

    const unlocked = i === 0 || completed.includes(i - 1);
    const done = completed.includes(i);

    const card = document.createElement("div");

    card.className =
      "level-card " +
      (!unlocked ? "locked " : "") +
      (done ? "completed" : "");

    card.innerHTML = `
      <div class="level-number">LEVEL ${i + 1}</div>

      <h3>${level.icon} ${level.title}</h3>

      <p>${level.description}</p>

      <div class="status">
        ${done ? "✅" : unlocked ? "▶" : "🔒"}
      </div>
    `;

    if (unlocked) {
      card.onclick = () => startLevel(i);
    }

    grid.appendChild(card);
  });
}

function startLevel(index) {

  currentLevel = index;
  round = 1;

  $("levelNumber").textContent =
    "LEVEL " + (index + 1);

  $("levelTitle").textContent =
    levels[index].title;

  updateProgress();

  showScreen("game");

  renderLevel(index);
}

function updateProgress() {

  const maxRound =
    currentLevel === 3 ? 3 : 1;

  $("progressText").textContent =
    maxRound > 1
      ? `Round ${round} / ${maxRound}`
      : "Challenge";

  $("progressBar").style.width =
    `${Math.min(round / maxRound * 100, 100)}%`;
}


// ==========================================
// LEVEL RENDERING
// ==========================================

function renderLevel(level) {

  switch(level) {

    case 0:
      level1();
      break;

    case 1:
      level2();
      break;

    case 2:
      level3();
      break;

    case 3:
      level4();
      break;

    case 4:
      level5();
      break;

    case 5:
      level6();
      break;

    case 6:
      level7();
      break;

    case 7:
      level8();
      break;

    case 8:
      level9();
      break;

    case 9:
      level10();
      break;
  }
}


// ==========================================
// LEVEL 1
// ==========================================

function level1() {

  $("gameContent").innerHTML = `
    <div class="challenge">

      <div class="badge">ROUND 1</div>

      <h3>Which page should appear first?</h3>

      <p>
        Imagine a search engine sees these pages.
        Page A mentions the word "cats" 50 times.
        Page B mentions it only 5 times.
      </p>

      <p>
        But Page B is recommended by several respected websites.
      </p>

      <strong>Which information would you rather use?</strong>

      <div class="option-grid">

        <button class="option"
          onclick="answerLevel1(false)">
          🔤 Just count the word
        </button>

        <button class="option"
          onclick="answerLevel1(true)">
          🔗 Look at the web connections too
        </button>

      </div>

      <div id="answer"></div>

    </div>
  `;
}

function answerLevel1(correct) {

  const box = $("answer");

  if(correct) {

    box.innerHTML = `
      <div class="explanation">
        <strong>Exactly! 🎯</strong>
        <p>
          Counting words can be useful, but it doesn't tell us
          whether other important pages trust or recommend a page.
        </p>

        <button class="primary"
          onclick="finishLevel()">
          CONTINUE →
        </button>
      </div>
    `;

  } else {

    box.innerHTML = `
      <div class="explanation">
        <strong>Not quite.</strong>
        <p>
          Someone could repeat a word many times without the page
          actually being important.
        </p>

        <button class="primary"
          onclick="level1()">
          TRY AGAIN
        </button>
      </div>
    `;
  }
}


// ==========================================
// LEVEL 2
// ==========================================

function level2() {

  $("gameContent").innerHTML = `
    <div class="challenge">

      <div class="badge">ROUND 2</div>

      <h3>Become a Link Detective 🔗</h3>

      <p>
        Think of a link as a recommendation.
      </p>

      <div class="score-board">

        <div class="score">
          <small>Website A</small>
          <strong>→ B</strong>
        </div>

        <div class="score">
          <small>Website B</small>
          <strong>→ C</strong>
        </div>

        <div class="score">
          <small>Website C</small>
          <strong>→ A</strong>
        </div>

        <div class="score">
          <small>Website D</small>
          <strong>→ C</strong>
        </div>

      </div>

      <p>
        If many pages link to Page C, what does that tell us?
      </p>

      <div class="option-grid">

        <button class="option"
          onclick="answerLevel2(false)">
          Nothing. Links don't matter.
        </button>

        <button class="option"
          onclick="answerLevel2(true)">
          Other pages are pointing toward C.
        </button>

      </div>

      <div id="answer"></div>

    </div>
  `;
}

function answerLevel2(correct) {

  if(correct) {

    $("answer").innerHTML = `
      <div class="explanation">

        <strong>Correct! 🔗</strong>

        <p>
          PageRank uses the structure of links to help estimate
          the importance of pages.
        </p>

        <button class="primary"
          onclick="finishLevel()">
          CONTINUE →
        </button>

      </div>
    `;

  } else {

    $("answer").innerHTML = `
      <div class="explanation">

        <strong>Look again.</strong>

        <p>
          The whole idea we're investigating is whether links
          can tell us something about importance.
        </p>

        <button class="primary"
          onclick="level2()">
          TRY AGAIN
        </button>

      </div>
    `;
  }
}


// ==========================================
// LEVEL 3
// ==========================================

function level3() {

  $("gameContent").innerHTML = `
    <div class="challenge">

      <div class="badge">ROUND 3</div>

      <h3>You are the Random Surfer 🧑‍💻</h3>

      <p>
        Imagine a person randomly browsing the web.
        They click links and sometimes jump to another page.
      </p>

      <div class="graph">

        <div class="node node-a">
          <strong>A</strong>
          <small>Website</small>
        </div>

        <div class="node node-b">
          <strong>B</strong>
          <small>Website</small>
        </div>

        <div class="node node-c">
          <strong>C</strong>
          <small>Website</small>
        </div>

        <div class="node node-d">
          <strong>D</strong>
          <small>Website</small>
        </div>

        <div class="arrow a-b"></div>
        <div class="arrow a-c"></div>
        <div class="arrow b-a"></div>
        <div class="arrow c-a"></div>
        <div class="arrow d-c"></div>

      </div>

      <button class="primary"
        onclick="runSurfer()">
        START SURFER
      </button>

      <div id="surferResult"></div>

    </div>
  `;
}

function runSurfer() {

  const result = $("surferResult");

  let visits = {
    A: 0,
    B: 0,
    C: 0,
    D: 0
  };

  const pages = ["A", "B", "C", "D"];

  for(let i = 0; i < 30; i++) {

    const page =
      pages[Math.floor(Math.random() * pages.length)];

    visits[page]++;
  }

  let highest =
    Object.keys(visits).sort(
      (a,b) => visits[b] - visits[a]
    )[0];

  result.innerHTML = `
    <div class="explanation">

      <strong>Simulation complete! 🧑‍💻</strong>

      <p>
        Your surfer visited pages multiple times.
        In the PageRank model, the probability that a random
        surfer visits a page is connected to its PageRank.
      </p>

      <div class="score-board">

        ${pages.map(p => `
          <div class="score">
            <small>Page ${p}</small>
            <strong>${visits[p]}</strong>
            <small>visits</small>
          </div>
        `).join("")}

      </div>

      <p>
        You now have the basic intuition behind the
        <strong>random surfer</strong>.
      </p>

      <button class="primary"
        onclick="finishLevel()">
        CLAIM DISCOVERY →
      </button>

    </div>
  `;
}


// ==========================================
// LEVEL 4
// ==========================================

function level4() {

  const scores = [
    [0.25,0.25,0.25,0.25],
    [0.375,0.125,0.375,0.125],
    [0.4375,0.1875,0.3125,0.0625],
    [0.40625,0.21875,0.28125,0.09375]
  ];

  const s = scores[round];

  $("gameContent").innerHTML = `
    <div class="challenge">

      <div class="badge">
        ROUND ${round} / 3
      </div>

      <h3>⚡ Importance Energy</h3>

      <p>
        Every page begins with equal importance.
        Watch what happens when importance flows through links.
      </p>

      <div class="graph">

        <div class="node node-a">
          <strong>A</strong>
          <small>${s[0]}</small>
        </div>

        <div class="node node-b">
          <strong>B</strong>
          <small>${s[1]}</small>
        </div>

        <div class="node node-c">
          <strong>C</strong>
          <small>${s[2]}</small>
        </div>

        <div class="node node-d">
          <strong>D</strong>
          <small>${s[3]}</small>
        </div>

        <div class="arrow a-b"></div>
        <div class="arrow a-c"></div>
        <div class="arrow b-a"></div>
        <div class="arrow c-a"></div>
        <div class="arrow d-c"></div>

        <div class="energy" style="left:22%;top:38%"></div>

      </div>

      <div class="score-board">

        <div class="score">
          <small>Page A</small>
          <strong>${s[0]}</strong>
        </div>

        <div class="score">
          <small>Page B</small>
          <strong>${s[1]}</strong>
        </div>

        <div class="score">
          <small>Page C</small>
          <strong>${s[2]}</strong>
        </div>

        <div class="score">
          <small>Page D</small>
          <strong>${s[3]}</strong>
        </div>

      </div>

      <p>
        ${round === 1
          ? "Round 1: A and C receive importance from multiple links."
          : round === 2
          ? "Round 2: The new scores are shared again."
          : "Round 3: The scores are settling into a pattern."
        }
      </p>

      <button class="primary"
        onclick="nextPageRankRound()">
        ${round < 3 ? "RUN NEXT ROUND →" : "REVEAL DISCOVERY →"}
      </button>

    </div>
  `;
}

function nextPageRankRound() {

  if(round < 3) {

    round++;

    updateProgress();

    level4();

  } else {

    finishLevel();

  }
}


// ==========================================
// LEVEL 5
// ==========================================

function level5() {

  $("gameContent").innerHTML = `
    <div class="challenge">

      <div class="badge">POWER TRANSFER</div>

      <h3>💎 Not Every Vote Has Equal Influence</h3>

      <p>
        Imagine two pages recommend your website.
      </p>

      <div class="option-grid">

        <button class="option"
          onclick="powerChoice('small')">

          <strong>Page A</strong>

          <p>
            A tiny website with almost no connections
            recommends you.
          </p>

          Choose A

        </button>

        <button class="option"
          onclick="powerChoice('important')">

          <strong>Page B</strong>

          <p>
            A highly connected and important website
            recommends you.
          </p>

          Choose B

        </button>

      </div>

      <div id="powerResult"></div>

    </div>
  `;
}

function powerChoice(choice) {

  $("powerResult").innerHTML = `
    <div class="explanation">

      <strong>Discovery unlocked! 💎</strong>

      <p>
        PageRank doesn't simply treat every incoming link
        as identical. Importance can flow through the
        link structure.
      </p>

      <p>
        That recursive idea is what makes PageRank different
        from simply counting backlinks.
      </p>

      <button class="primary"
        onclick="finishLevel()">
        CLAIM REWARD →
      </button>

    </div>
  `;
}


// ==========================================
// LEVEL 6
// ==========================================

function level6() {

  $("gameContent").innerHTML = `
    <div class="challenge">

      <div class="badge">LOOP TRAP</div>

      <h3>🔄 The Internet Is Trapped</h3>

      <p>
        Your surfer enters this network:
      </p>

      <div class="graph">

        <div class="node node-a">
          <strong>A</strong>
          <small>→ B</small>
        </div>

        <div class="node node-b">
          <strong>B</strong>
          <small>→ A</small>
        </div>

        <div class="energy"
          style="left:30%;top:38%">
        </div>

      </div>

      <p>
        A → B → A → B → A...
      </p>

      <p>
        What problem do you see?
      </p>

      <div class="option-grid">

        <button class="option"
          onclick="loopAnswer(false)">
          The pages become too colorful.
        </button>

        <button class="option"
          onclick="loopAnswer(true)">
          The surfer can become trapped in the loop.
        </button>

      </div>

      <div id="loopResult"></div>

    </div>
  `;
}

function loopAnswer(correct) {

  if(correct) {

    $("loopResult").innerHTML = `
      <div class="explanation">

        <strong>Exactly! 🔄</strong>

        <p>
          A link-only system can get trapped in cycles
          or dead ends.
        </p>

        <p>
          We need a way for the surfer to escape.
        </p>

        <button class="primary"
          onclick="finishLevel()">
          CONTINUE →
        </button>

      </div>
    `;

  } else {

    $("loopResult").innerHTML = `
      <div class="explanation">

        Try again. Watch where the surfer goes.

        <br>

        <button class="primary"
          onclick="level6()">
          TRY AGAIN
        </button>

      </div>
    `;
  }
}


// ==========================================
// LEVEL 7
// ==========================================

function level7() {

  $("gameContent").innerHTML = `
    <div class="challenge">

      <div class="badge">DAMPING ESCAPE</div>

      <h3>🚪 Give the Surfer an Escape Route</h3>

      <p>
        Introduce a random-jump chance.
        Move the slider and see what happens.
      </p>

      <input
        class="slider"
        type="range"
        min="0"
        max="100"
        value="15"
        oninput="updateDamping(this.value)"
      >

      <h2>
        Random jump:
        <span id="dampingValue">15%</span>
      </h2>

      <div id="dampingMessage"
        class="explanation">

        At 15%, the surfer occasionally leaves
        the current link path and jumps elsewhere.

      </div>

      <button class="primary"
        onclick="finishLevel()">

        CLAIM DAMPING CONTROL →

      </button>

    </div>
  `;
}

function updateDamping(value) {

  $("dampingValue").textContent =
    value + "%";

  $("dampingMessage").innerHTML = `
    <strong>Surfer behaviour changed.</strong>

    <p>
      A higher random-jump probability gives the surfer
      more opportunities to escape a loop.
    </p>

    <p>
      Try several values and observe the difference.
    </p>
  `;
}


// ==========================================
// LEVEL 8
// ==========================================

let hackScore = 0;

function level8() {

  hackScore = 0;

  $("gameContent").innerHTML = `
    <div class="challenge">

      <div class="badge">DARK WEB LAB</div>

      <h3>😈 Can You Change the Ranking?</h3>

      <p>
        You control Page D.
        Add links pointing toward D.
        Watch the score change.
      </p>

      <div class="score-board">

        <div class="score">
          <small>Page A</small>
          <strong id="hackA">25</strong>
        </div>

        <div class="score">
          <small>Page B</small>
          <strong id="hackB">25</strong>
        </div>

        <div class="score">
          <small>Page C</small>
          <strong id="hackC">25</strong>
        </div>

        <div class="score">
          <small>Page D</small>
          <strong id="hackD">25</strong>
        </div>

      </div>

      <div class="lab-controls">

        <button class="small-button"
          onclick="addHack()">
          🔗 Add link to D
        </button>

        <button class="small-button"
          onclick="removeHack()">
          ✂ Remove link
        </button>

      </div>

      <div id="hackMessage"
        class="explanation">

        Links currently pointing to D:
        <strong>0</strong>

      </div>

      <button class="primary"
        onclick="finishLevel()">

        CLAIM DISCOVERY →

      </button>

    </div>
  `;
}

function addHack() {

  hackScore++;

  updateHack();

}

function removeHack() {

  hackScore =
    Math.max(0, hackScore - 1);

  updateHack();
}

function updateHack() {

  $("hackD").textContent =
    25 + hackScore * 7;

  $("hackA").textContent =
    Math.max(10, 25 - hackScore * 2);

  $("hackB").textContent =
    Math.max(10, 25 - hackScore);

  $("hackC").textContent =
    Math.max(10, 25 - hackScore);

  $("hackMessage").innerHTML = `
    Links currently pointing to D:
    <strong>${hackScore}</strong>

    <p>
      You've changed the structure of the network,
      so the ranking changes too.
    </p>

    <p>
      In the real world, attempts to manipulate search
      rankings can be treated as spam.
    </p>
  `;
}


// ==========================================
// LEVEL 9
// ==========================================

function level9() {

  $("gameContent").innerHTML = `
    <div class="challenge">

      <div class="badge">FINAL LAB</div>

      <h3>🧪 Build a Web That Ranks Your Target</h3>

      <p>
        Your target is <strong>Page D</strong>.
        You have 5 links to place.
      </p>

      <p>
        Every time you add a link to D,
        D gains influence in this simplified simulation.
      </p>

      <div class="score-board">

        <div class="score">
          <small>A</small>
          <strong id="labA">20</strong>
        </div>

        <div class="score">
          <small>B</small>
          <strong id="labB">20</strong>
        </div>

        <div class="score">
          <small>C</small>
          <strong id="labC">20</strong>
        </div>

        <div class="score">
          <small>D</small>
          <strong id="labD">20</strong>
        </div>

      </div>

      <p>
        Links remaining:
        <strong id="linksRemaining">5</strong>
      </p>

      <div class="lab-controls">

        <button class="small-button"
          onclick="labAdd('A')">
          A → D
        </button>

        <button class="small-button"
          onclick="labAdd('B')">
          B → D
        </button>

        <button class="small-button"
          onclick="labAdd('C')">
          C → D
        </button>

      </div>

      <div id="labResult"></div>

    </div>
  `;

  window.labLinks = 5;
  window.labD = 20;
}

function labAdd(source) {

  if(window.labLinks <= 0) {

    $("labResult").innerHTML = `
      <div class="explanation">
        No links left!
        <button class="primary"
          onclick="finishLevel()">
          FINISH CHALLENGE
        </button>
      </div>
    `;

    return;
  }

  window.labLinks--;
  window.labD += 8;

  $("labD").textContent =
    window.labD;

  $("labA").textContent =
    Math.max(5, 20 - (25 - window.labD) * .1);

  $("labB").textContent =
    Math.max(5, 20 - (25 - window.labD) * .1);

  $("labC").textContent =
    Math.max(5, 20 - (25 - window.labD) * .1);

  $("linksRemaining").textContent =
    window.labLinks;

  if(window.labLinks === 0) {

    $("labResult").innerHTML = `
      <div class="explanation">

        <strong>Challenge complete! 🧪</strong>

        <p>
          You changed the network structure and changed
          the resulting importance values.
        </p>

        <button class="primary"
          onclick="finishLevel()">
          CLAIM REWARD →
        </button>

      </div>
    `;
  }
}


// ==========================================
// LEVEL 10
// ==========================================

function level10() {

  const questions = [
    {
      q: "What does PageRank primarily use?",
      options: [
        "Only word frequency",
        "Web link structure",
        "Page color",
        "Website age"
      ],
      correct: 1
    },
    {
      q: "What is the random surfer idea?",
      options: [
        "A person randomly browsing pages",
        "A robot deleting pages",
        "A person writing websites",
        "A search advertisement"
      ],
      correct: 0
    },
    {
      q: "Why is damping useful?",
      options: [
        "It makes text larger",
        "It lets the surfer escape loops",
        "It deletes links",
        "It changes website colors"
      ],
      correct: 1
    },
    {
      q: "Can people attempt to manipulate link-based rankings?",
      options: [
        "No",
        "Yes",
        "Only on paper",
        "Only offline"
      ],
      correct: 1
    }
  ];

  let index = 0;

  function renderQuestion() {

    const q = questions[index];

    $("gameContent").innerHTML = `
      <div class="challenge">

        <div class="badge">
          FINAL EXAM — ${index + 1}/${questions.length}
        </div>

        <h3>${q.q}</h3>

        <div class="option-grid">

          ${q.options.map((o,i) => `
            <button
              class="option"
              onclick="answerFinal(${i},${q.correct})">

              ${o}

            </button>
          `).join("")}

        </div>

        <div id="finalAnswer"></div>

      </div>
    `;
  }

  window.answerFinal = function(choice, correct) {

    if(choice === correct) {

      index++;

      if(index >= questions.length) {

        finishLevel();

      } else {
$("finalAnswer").innerHTML = `
  <div class="explanation">

    <strong>Correct! 🎯</strong>

    <button class="primary"
      onclick="nextFinalQuestion()">

      NEXT QUESTION →

    </button>

  </div>
`;

      }

    } else {

      $("finalAnswer").innerHTML = `
        <div class="explanation">

          <strong>Not quite.</strong>

          <p>
            Think about the discoveries you made
            during the previous levels.
          </p>

        </div>
      `;
    }
  };

  renderQuestion();
}


// ==========================================
// REWARDS
// ==========================================

function finishLevel() {

  const level = levels[currentLevel];

  if(!completed.includes(currentLevel)) {

    completed.push(currentLevel);

    xp += level.reward;

    achievements.push(level.achievement);

  }

  rewardPending = currentLevel;

  showReward(level);

}

function showReward(level) {

  $("rewardIcon").textContent =
    level.icon;

  $("rewardTitle").textContent =
    level.achievement;

  $("rewardText").textContent =
    rewardDescription(currentLevel);

  $("rewardXP").textContent =
    level.reward;

  $("achievementIcon").textContent =
    level.icon;

  $("achievementName").textContent =
    level.achievement;

  $("unlockText").textContent =
    level.unlock;

  showScreen("reward");

}

function rewardDescription(index) {

  const descriptions = [

    "You discovered why word counting alone can be fooled.",

    "You discovered that links can act like recommendations.",

    "You experienced the random surfer idea.",

    "You performed a simplified PageRank calculation.",

    "You discovered that importance can flow recursively through links.",

    "You found the problem with loops and dead ends.",

    "You discovered why random jumps are useful.",

    "You experimented with changing the ranking by changing links.",

    "You built and manipulated your own mini web.",

    "You proved that you understand the PageRank system."

  ];

  return descriptions[index];
}

function continueAfterReward() {

  if(currentLevel === levels.length - 1) {

    showFinal();

  } else {

    showLevels();

  }

}

function showFinal() {

  $("finalXP").textContent =
    xp;

  $("finalAchievements").innerHTML =
    achievements.map(a =>
      `<span>🏅 ${a}</span>`
    ).join("");

  showScreen("final");

}


// ==========================================
// UTILITY
// ==========================================

function showLevels() {

  const screen =
    document.getElementById("levels");

  document.querySelectorAll(".screen")
    .forEach(s => s.classList.remove("active"));

  screen.classList.add("active");

  $("xp").textContent = xp;
  $("levelXP").textContent = xp + " XP";
  $("achievements").textContent =
    achievements.length;

  const grid = $("levelGrid");

  grid.innerHTML = "";

  levels.forEach((level,i) => {

    const unlocked =
      i === 0 || completed.includes(i - 1);

    const done =
      completed.includes(i);

    const card =
      document.createElement("div");

    card.className =
      "level-card " +
      (!unlocked ? "locked " : "") +
      (done ? "completed" : "");

    card.innerHTML = `
      <div class="level-number">
        LEVEL ${i + 1}
      </div>

      <h3>
        ${level.icon}
        ${level.title}
      </h3>

      <p>
        ${level.description}
      </p>

      <div class="status">
        ${done ? "✅" : unlocked ? "▶" : "🔒"}
      </div>
    `;

    if(unlocked) {

      card.onclick =
        () => startLevel(i);

    }

    grid.appendChild(card);

  });
}
