document.addEventListener("DOMContentLoaded", () => {
  const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const answer = item.querySelector(".faq-answer");

    question.addEventListener("click", () => {
      const isActive = question.classList.contains("active");

      // Close all other questions
      faqItems.forEach((otherItem) => {
        const otherQuestion = otherItem.querySelector(".faq-question");
        const otherAnswer = otherItem.querySelector(".faq-answer");

        if (otherQuestion !== question) {
          otherQuestion.classList.remove("active");
          otherAnswer.classList.remove("show");
        }
      });

      // Toggle current question
      question.classList.toggle("active");
      answer.classList.toggle("show");
    });
  });
});

