// Fact List (array of objects)
const initialFacts = [
  {
    id: 1,
    text: "React is being developed by Meta (formerly facebook)",
    source: "https://opensource.fb.com/",
    category: "technology",
    votesInteresting: 24,
    votesMindblowing: 9,
    votesFalse: 4,
    createdIn: 2021,
  },
  {
    id: 2,
    text: "Millennial dads spend 3 times as much time with their kids than their fathers spent with them. In 1982, 43% of fathers had never changed a diaper. Today, that number is down to 3% ",
    source:
      "https://www.mother.ly/parenting/millennial-dads-spend-more-time-with-their-kids",
    category: "society",
    votesInteresting: 11,
    votesMindblowing: 2,
    votesFalse: 0,
    createdIn: 2019,
  },
  {
    id: 3,
    text: "Lisbon is the capital of Portugal",
    source: "https://en.wikipedia.org/wiki/Lisbon",
    category: "society",
    votesInteresting: 8,
    votesMindblowing: 3,
    votesFalse: 1,
    createdIn: 2015,
  },
];

const CATEGORIES = [
  { name: "technology", color: "#3b82f6" },
  { name: "science", color: "#16a34a" },
  { name: "finance", color: "#ef4444" },
  { name: "society", color: "#eab308" },
  { name: "entertainment", color: "#db2777" },
  { name: "health", color: "#14b8a6" },
  { name: "history", color: "#f97316" },
  { name: "news", color: "#8b5cf6" },
];

// Selecting DOM elements
const btn = document.querySelector(".btn-open");
const form = document.querySelector(".fact-form");
const factsList = document.querySelector(".facts-list");

// DOM elements: Render facts in list
factsList.innerHTML = "";

// Load data from Supabase
loadFacts();
async function loadFacts() {
  const res = await fetch(
    "https://pijzctognwscfkmnjkfe.supabase.co/rest/v1/facts",
    {
      headers: {
        apikey:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpanpjdG9nbndzY2ZrbW5qa2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyMjEyODIsImV4cCI6MTk5Nzc5NzI4Mn0.lRKLPI6xXn7urXgwG5pvfGP-Xo683PE0U1QAGF3wSj8",
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBpanpjdG9nbndzY2ZrbW5qa2ZlIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODIyMjEyODIsImV4cCI6MTk5Nzc5NzI4Mn0.lRKLPI6xXn7urXgwG5pvfGP-Xo683PE0U1QAGF3wSj8",
      },
    }
  );
  const data = await res.json();
  // console.log(data);
  // How to filter API data
  // const filteredData = data.filter((fact) => fact.category === "society");
  createFactsList(data);
}

function createFactsList(dataArray) {
  const htmlArr = dataArray.map(
    (fact) => `<li class="fact">
      <p>
      ${fact.text}
      <a
        class="source"
        href="${fact.source}"
        target="_blank"
      >(Source)</a>
    </p>
    <span class="tag" style="background-color: ${
      CATEGORIES.find((cat) => cat.name === fact.category)?.color
    }">${fact.category}</span>
    </li>`
  );

  const html = htmlArr.join("");
  factsList.insertAdjacentHTML("afterbegin", html);
}
// afterbeing places the new element at the top of the list +
//   beforeend at the bottom
//factsList.insertAdjacentHTML("afterbegin", "<li>Mike</li>");

// Conditional statment to show or hide the share a fact button content
btn.addEventListener("click", function () {
  console.log("CLICK");
  if (form.classList.contains("hidden")) {
    form.classList.remove("hidden");
    btn.textContent = "Close";
  } else {
    form.classList.add("hidden");
    btn.textContent = "Share a fact";
  }
});

// const ageFacts = initialFacts.map((x) => calFactAge(x.createdIn));
// // .join creates a string out of the array
// console.log(ageFacts.join(" & "));

console.log([7, 64, 6, -23, 11].filter((el) => el > 10));
console.log([7, 64, 6, -23, 11].find((el) => el > 10));
