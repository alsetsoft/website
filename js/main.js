let slides = [
  {
    title: "ALSET formula",
    name: "Adaptability.",
    text: "Agile. Waterfall, Lean and etc. We provide services with using different types of methodologies. Depends on customer needs.",
  },
  {
    title: "ALSET formula",
    name: "Loyalty.",
    text: "For our company is very important deep understanding of the customer journey, long-term strategy and always support customers in their Information Technology and Software needs.",
  },
  {
    title: "ALSET formula",
    name: "Smartness.",
    text: 'We are gang of smart and experienced developers and always prefer difficult and interesting tasks where we can demonstrate our ability to think quickly and inteligently. Our main qualities are combination of logical thinking and creativity together. Our credo is classic: "Modern Problems Require Modern Solutions".',
  },
  {
    title: "ALSET formula",
    name: "Efficacy.",
    text: "As your trusted partner, we measure our success based on your results. Besides making a huge effort to satisfy your needs and create the best product we also always improve ourselves. It means that every day we will be more and more effective in knowing your business and how to help you improve it more.",
  },
  {
    title: "ALSET formula",
    name: "Trust.",
    text: "You can be 101% sure that we will do our best to help UPGRADE your business with honest and sincere relationships. And of course we leverage the latest technologies, tools and frameworks for collaboration to ensure that our engagements are transparent and instantly traceable from anywhere in the world.",
  },
];

let totalSlides = slides.length;
let currentSlide = 0;

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlide();
  }
}

function nextSlide() {
  if (currentSlide < totalSlides - 1) {
    currentSlide++;
    updateSlide();
  }
}

function updateSlide() {
  document.getElementById("slideTitle").innerText = slides[currentSlide].title;
  document.getElementById("slideName").innerText = slides[currentSlide].name;
  document.getElementById("slideText").innerText = slides[currentSlide].text;
  document.getElementById("currentSlide").innerText =
    currentSlide + 1 + "/" + totalSlides;

  let prevBtn = document.getElementById("prevBtn");
  prevBtn.disabled = currentSlide === 0;
  prevBtn.classList.toggle("disabled", currentSlide === 0);

  let nextBtn = document.getElementById("nextBtn");
  nextBtn.disabled = currentSlide === totalSlides - 1;
  nextBtn.classList.toggle("disabled", currentSlide === totalSlides - 1);
}

updateSlide();

// сладйдер2
let slides2 = [
  {
    title: "ALOTO1",
    text: "Agility. Initiation. Planning. Design. Implementation. Closure. It is our workflow and how we do our job to produce the best results at the best time for our customers.",
  },
  {
    title: "ALOTO2",
    text: "Agility. Initiation. Planning. Design. Implementation. Closure. It is our workflow and how we do our job to produce the best results at the best time for our customers.",
  },
  {
    title: "ALOTO3",
    text: "Agility. Initiation. Planning. Design. Implementation. Closure. It is our workflow and how we do our job to produce the best results at the best time for our customers.",
  },
  {
    title: "ALOTO4",
    text: "Agility. Initiation. Planning. Design. Implementation. Closure. It is our workflow and how we do our job to produce the best results at the best time for our customers.",
  },
  {
    title: "ALOTO5",
    text: "Agility. Initiation. Planning. Design. Implementation. Closure. It is our workflow and how we do our job to produce the best results at the best time for our customers.",
  },
];

let totalSlides2 = slides2.length;
let currentSlide2 = 0;

function prevSlide2() {
  if (currentSlide2 > 0) {
    currentSlide2--;
    updateSlide2();
  }
}

function nextSlide2() {
  if (currentSlide2 < totalSlides2 - 1) {
    currentSlide2++;
    updateSlide2();
  }
}

function updateSlide2() {
  document.getElementById("slideTitle2").innerText =
    slides2[currentSlide2].title;
  document.getElementById("slideText2").innerText = slides2[currentSlide2].text;
  document.getElementById("currentSlide2").innerText =
    currentSlide2 + 1 + "/" + totalSlides2;

  let prevBtn2 = document.getElementById("prevBtn2");
  prevBtn2.disabled = currentSlide === 0;
  prevBtn2.classList.toggle("disabled", currentSlide2 === 0);

  let nextBtn2 = document.getElementById("nextBtn2");
  nextBtn2.disabled = currentSlide2 === totalSlides2 - 1;
  nextBtn2.classList.toggle("disabled", currentSlide2 === totalSlides2 - 1);
}

updateSlide2();

// секція з технологіями

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".my-btn");
  const boxes = document.querySelectorAll(".my-box");
  let currentExpandedBox = null;

  function toggleBox(button) {
    const box = button.closest(".my-box");
    if (box) {
      if (box === currentExpandedBox) {
        box.classList.remove("expanded");
        currentExpandedBox = null;
      } else {
        boxes.forEach((b) => {
          if (b === box) {
            b.classList.add("expanded");
            currentExpandedBox = b;
          } else {
            b.classList.remove("expanded");
          }
        });
      }
    }
  }

  if (boxes.length > 0) {
    boxes[0].classList.add("expanded");
    currentExpandedBox = boxes[0];
  }

  buttons.forEach((button) => {
    button.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleBox(this);
    });
  });
});
