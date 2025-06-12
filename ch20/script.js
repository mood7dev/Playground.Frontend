//nav
const headerNavs = [
  { title: " 얄코강좌는", link: "#about" },
  { title: "HTML", link: "#html" },
  { title: "css", link: "#css" },
  { title: "커리큘럼", link: "#curriculum" },
  { title: "문의하기", link: "#contact" },
];

const $headerNavUl = document.querySelector("header nav.header__nav > ul");

for (const item of headerNavs) {
  const li = document.createElement("li"); // 여기 "li"로 수정
  li.classList.add("header_nav-item"); // 변수명 li로 수정
  li.innerHTML = `
      <a href="${item.link}">${item.title}</a>
    `;
  $headerNavUl.appendChild(li); // 변수명 li로 수정
}

//about
const aboutCards = [
  {
    img: "./images/about_1.svg",
    title: "빠른 강의",
    descs: ["군더더기 없는 진행으로", "여러분의 시간을 절약합니다."],
  },
  {
    img: "./images/about_2.svg",
    title: "손쉬운 학습",
    descs: ["강의 페이지를 활용해서", "편리하게 실습할 수 있습니다."],
  },
  {
    img: "./images/about_3.svg",
    title: "플레이그라운드",
    descs: ["강의를 위해 제작한 도구가", "반복 학습을 도와줍니다."],
  },
];

const $aboutDiv = document.querySelector("#about > div.about");
/*
aboutCards.forEach((card, index) => {
  const $card = document.createElement("div");
  $card.classList.add("about__card");

  const $img = document.createElement("img");
  $img.classList.add("about__icon");
  $img.src = card.img;
  $img.alt = card.title;

  const $title = document.createElement("h2");
  $title.classList.add("about__title", `_${index + 1}`);
  $title.textContent = card.title;

  const $text = document.createElement("p");
  $text.classList.add("about__text");
  $text.innerHTML = card.descs.join("<br>");

  // 순서대로 조립
  $card.appendChild($img);
  $card.appendChild($title);
  $card.appendChild($text);

  $aboutDiv.appendChild($card);
});

*/

aboutCards.forEach((item, idx) => {
  let desc = "";
  if (item.descs.length > 0) {
    desc = item.descs[0];
    for (let i = 1; i < item.descs.length; i++) {
      desc += `<br>${item.descs[i]}`;
    }
  }
  const $div = document.createElement("div");
  $div.classList.add("about__card");
  $div.innerHTML = `
  <img class="about__icon" src="${item.img}" alt="">
   <h2 class="about__title _${idx + 1}">${item.title}</h2>
  <p class="about__text">${desc}</p>
  `;

  $aboutDiv.appendChild($div);
});

//curriculum
const $currLiList = document.querySelectorAll(
  "#curriculum .curriculum__list > li"
);
const $currProgBar = document.querySelector(
  "#curriculum .curriculum__progress .bar"
);

$currLiList.forEach((item, idx) => {
  item.addEventListener(
    "mouseenter",
    () => ($currProgBar.style.width = `${200 * idx}px`)
  );
  item.addEventListener("mouseleave", () => ($currProgBar.style.width = "0px"));
});
