// Event Handling
const revealBtn = document.getElementById("revealBtn");
const poemText = document.getElementById("poemText");


revealBtn.addEventListener("click", () => {
  poemText.textContent = "Roses are red, violets are blue, JS is fun, and so are you!";
});

revealBtn.addEventListener("dblclick", () => {
  alert("🎉 Secret double-click action unlocked!");
});

// Image Gallery
const galleryImage = document.getElementById("galleryImage");
const nextImage = document.getElementById("nextImage");

const images = [
  "/feb-2025-javascript-events-and-basic-interactivity-lonyamasi/images/poem3.jpg",
  "/feb-2025-javascript-events-and-basic-interactivity-lonyamasi/images/poem5.png",
  "/feb-2025-javascript-events-and-basic-interactivity-lonyamasi/images/poem6.jpg"
];

let currentImage = 0;

nextImage.addEventListener("click", () => {
  currentImage = (currentImage + 1) % images.length;
  galleryImage.src = images[currentImage];
});


// Accordion Tabs
const accordions = document.getElementsByClassName("accordion");
Array.from(accordions).forEach(button => {
  button.addEventListener("click", () => {
    const panel = button.nextElementSibling;
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  });
});

// Form Validation
const poemForm = document.getElementById("poemForm");
const feedback = document.getElementById("feedback");

poemForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  if (!name || !email || !password) {
    feedback.textContent = "All fields are required.";
    feedback.style.color = "red";
    return;
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 8) {
    feedback.textContent = "Password must be at least 8 characters long.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "Poem submitted successfully! ✨";
  feedback.style.color = "green";
});

// Keypress Detection
window.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    alert("Enter key pressed! Ready to create magic?");
  }
});
