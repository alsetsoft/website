let slides = [
  {
    title: "ALSET formula",
    name: "Adaptability.",
    text: "Agile, Kanban, Lean and etc. We provide services with using different types of methodologies. Depends on customer needs.",
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
    title: "CoolFlow. Solution for retail merchandising",
    text: `<b style="font-weight: 500;">Business Need:</b> Automating the workflow of merchandisers and controlling refrigerator store placements to enhance product presentation and maximize sales.
    <br><b style="font-weight: 500;">Solution:</b> An Innovative IoT Solution includes a Cross-Platform app paired with smart sensors in refrigerators, transmitting data to our web servers. The app displays this data through an intuitive interface, offering real-time monitoring and insightful analytics. 
    <br><b style="font-weight: 500;">Value Delivered:</b> Solution provides inventory management in retail, provides real-time stock and product rotation insights, ensures planogram compliance, and reduces merchandising costs, thereby boosting efficiency and profitability in the retail sector.`,
  },
  {
    title: "Aloto. Online marketplace",
    text: `<b style="font-weight: 500;">Business Need:</b> Local buyers and sellers require a simplified and secure platform that can facilitate seamless peer-to-peer transactions, eliminating the need for unnecessary intermediaries and fostering community engagement.
    <br><b style="font-weight: 500;">Solution:</b> The Cross-Platform platform is designed to be user-friendly and accessible, featuring easy listing of items for sale. Additionally, an Admin panel is developed for store owners to manage the platform and address security challenges.
    <br><b style="font-weight: 500;">Value Delivered:</b> The platform offers multiple revenue streams including advertisement and premium listings. Users benefit from economic opportunities by conveniently buying or selling goods and services within their community.`,
  },
  {
    title: "Caregivers Management Solution",
    text: `<b style="font-weight: 500;">Business Need:</b> Streamlining real time caregiver management solution in healthcare is essential for consistent, high-quality patient care, requiring adherence to HIPAA and industry standards.
    <br><b style="font-weight: 500;">Solution:</b> System grant caregiver management, with a mobile app for schedule access, task tracking, and compliance updates. Prioritizing HIPAA adherence, it ensures data security and simplifies administration, enhancing healthcare efficiency and quality.
    <br><b style="font-weight: 500;">Value Delivered:</b> Delivers substantial value by streamlining the administrative processes related to caregiving. It ensures that caregivers are well-coordinated, compliant with regulations, and have real-time access to essential information. App is used over many caregivers clinics in USA.`,
  },
  {
    title: "Clean energy certificates trading solution",
    text: `<b style="font-weight: 500;">Business Need:</b> Solution was needed to efficiently manage energy certificate trading, representing renewable energy generation. Current processes lack transparency and are manual, requiring a simplified approach for compliance and market efficiency.
    <br><b style="font-weight: 500;">Solution:</b> Created a digital WEB platform for energy certificate trading, automating and streamlining the process. It ensures tracking, validation, and transparency through secure, real time, relational databases, enhancing efficiency and regulatory compliance.
    <br><b style="font-weight: 500;">Value Delivered:</b> Solution simplifies and secure energy certificate trading for companies that buy and sell clean energy, it fostering sustainability and trust among stakeholders.`,
  },
  {
    title: "Marine traveling optimization system",
    text: `<b style="font-weight: 500;">Business Need:</b> Integrated solution that addresses the various pain points experienced by employees during maritime travel. This solution aim to enhance the overall travel experience by focusing on aspects such as real time monitoring, ease of booking, onboard safety, connectivity, entertainment, and personalized services.
    <br><b style="font-weight: 500;">Solution:</b> Web platform streamlines real time monitoring, booking, safety, and amenities for maritime travel. It additionally provides customized certificates issuance and features related to video courses.
    <br><b style="font-weight: 500;">Value Delivered:</b> This solution enables companies to give more safety for their employees while working at sea, offering connectivity, real-time information, communication and employee well-being.`,
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
  document.getElementById("slideText2").innerHTML = slides2[currentSlide2].text;
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

// слайдер 3
let slides3 = [
  {
    img: "images/Team.png",
    name: `Liubomyr`,
    position: "CEO",
    text: `Started career in 2016 as a full-stack software engineer, and in 2023, took the
    leadership helm at Alsetsoft. <br>With a keen interest in both technology and business development, he
    assists
    customers in envisioning and planning comprehensive strategies to enhance their business through
    innovative technologies. <br>Collaborating closely with the Alsetsoft team, he turns these visions into
    reality, delivering tangible improvements and value to clients.
    <a href="https://www.linkedin.com/in/liubomyr-liubchynskyi-a50111144" class="link-block-6-copy w-inline-block">
    <div>in</div>
    </a>`,
  },
  {
    img: "images/Team.png",
    name: "Oleh",
    position: "CTO",
    text: `Oleh  is a seasoned professional with a comprehensive background in web and mobile development, primarily using Microsoft technologies.
    His expertise extends to development cloud solutions, managing large-scale projects, and implementing various types of architectures.
    Beyond his technical proficiency, he has a profound passion for the fields of IoT and Robotics systems, reflecting a forward-thinking approach to emerging technologies.
    Throughout his career, he has successfully managed over 30 software engineers, playing a pivotal role in significantly enhancing their skills and professional development.`,
  },
  {
    img: "images/Team.png",
    name: "Slide3",
    position: "CEO",
    text: "Agility. Initiation. Planning. Design. Implementation. Closure. It is our workflow and how we do our job to produce the best results at the best time for our customers.",
  },
  {
    img: "images/Team.png",
    name: "Slide4",
    position: "CEO",
    text: "Agility. Initiation. Planning. Design. Implementation. Closure. It is our workflow and how we do our job to produce the best results at the best time for our customers.",
  },
  {
    img: "images/Team.png",
    name: "Slide5",
    position: "CEO",
    text: "Agility. Initiation. Planning. Design. Implementation. Closure. It is our workflow and how we do our job to produce the best results at the best time for our customers.",
  },
];

let totalSlides3 = slides3.length;
let currentSlide3 = 0;

function prevSlide3() {
  if (currentSlide3 > 0) {
    currentSlide3--;
    updateSlide3();
  }
}

function nextSlide3() {
  if (currentSlide3 < totalSlides3 - 1) {
    currentSlide3++;
    updateSlide3();
  }
}

function updateSlide3() {
  document.getElementById("slideImg").src = slides3[currentSlide3].img;
  document.getElementById("slideImg").alt = slides3[currentSlide3].name;
  document.getElementById("slideName3").innerHTML = slides3[currentSlide3].name;
  document.getElementById("slideScript").innerHTML =
    slides3[currentSlide3].position;
  document.getElementById("slideText3").innerHTML = slides3[currentSlide3].text;
  document.getElementById("currentSlide3").innerText =
    currentSlide3 + 1 + "/" + totalSlides3;

  let prevBtn3 = document.getElementById("prevBtn3");
  prevBtn3.disabled = currentSlide3 === 0;
  prevBtn3.classList.toggle("disabled", currentSlide3 === 0);

  let nextBtn3 = document.getElementById("nextBtn3");
  nextBtn3.disabled = currentSlide3 === totalSlides3 - 1;
  nextBtn3.classList.toggle("disabled", currentSlide3 === totalSlides3 - 1);
}

updateSlide3();

// секція з технологіями

document.addEventListener("DOMContentLoaded", function () {
  const boxes = document.querySelectorAll(".my-box");
  let currentExpandedBox = null;

  function toggleBox(box) {
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

  if (boxes.length > 0) {
    boxes[0].classList.add("expanded");
    currentExpandedBox = boxes[0];
  }

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      toggleBox(this);
    });
  });
});

function getYear() {
  return (new Date).getFullYear();
}

function setYear() {
  let rightReserved = document.getElementById("rightReserved");
  rightReserved.innerText = `Ⓒ 2021 - ${getYear()} Alsetsoft. All Rights Reserved.`;
}

setYear();
