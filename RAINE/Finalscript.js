const menu = document.getElementById("menu");
const closeButton = document.getElementById("close-mobile");
const nav = document.getElementById("nav-mobile");
const navLink = document.querySelectorAll(".nav-link");

menu.addEventListener("click", () => {
  nav.classList.add("show");
});

closeButton.addEventListener("click", () => {
  nav.classList.remove("show");
});

navLink.forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("show");
  });
});

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const name = contactForm.elements["name"].value.trim();
  const email = contactForm.elements["email"].value.trim();
  const phone = contactForm.elements["phone"].value.trim();
  const subject = contactForm.elements["subject"].value.trim();
  const message = contactForm.elements["message"].value.trim();

  if (!name) {
    alert("Please enter your name.");
    return;
  }

  if (!email) {
    alert("Please enter your email.");
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    alert("Please enter a valid email address.");
    return;
  }

  if (phone) {
    const phonePattern = /^[0-9\-\+\s\(\)]+$/;
    if (!phonePattern.test(phone)) {
      alert("Please enter a valid phone number.");
      return;
    }
  }

  if (!subject) {
    alert("Please enter the subject.");
    return;
  }

  if (!message) {
    alert("Please enter your message.");
    return;
  }

  // If all validations pass, submit the form or do further processing
  alert("Form submitted successfully!");
  contactForm.reset();
});

const getInTouchButton = document.getElementById("getInTouchButton");
getInTouchButton.addEventListener("click", () => {
  const contactSection = document.getElementById("contact");
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: "smooth" });
  }
});

// Scroll to project section on "Show my Work" button click
const showMyWorkButton = document.getElementById("showMyWorkButton");
showMyWorkButton.addEventListener("click", () => {
  const projectSection = document.getElementById("project");
  if (projectSection) {
    projectSection.scrollIntoView({ behavior: "smooth" });
  }
});
