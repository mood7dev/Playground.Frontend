// JS
window.onload = () => {
  const panelFaqContainers = document.querySelectorAll(".panel-faq-container");
  const btnAllClose = document.getElementById("btn-all-close");

  panelFaqContainers.forEach((container) => {
    const answer = container.querySelector(".panel-faq-answer");
    const title = container.querySelector(".panel-faq-title");

    title.addEventListener("click", () => {
      if (answer.classList.contains("active")) {
        // 닫기
        answer.style.maxHeight = null;
        answer.classList.remove("active");
      } else {
        // 열기 전에 모두 닫기
        document.querySelectorAll(".panel-faq-answer.active").forEach((el) => {
          el.style.maxHeight = null;
          el.classList.remove("active");
        });

        // 열기
        answer.classList.add("active");
        answer.style.maxHeight = answer.scrollHeight + 15 + "px";
      }
    });
  });

  btnAllClose.addEventListener("click", () => {
    document.querySelectorAll(".panel-faq-answer.active").forEach((el) => {
      el.style.maxHeight = null;
      el.classList.remove("active");
    });
  });
};
