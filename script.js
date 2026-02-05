/* ===== Portfolio Filter ===== */
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    // Remove active state
    filterButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");

    const filter = button.dataset.filter;

    galleryItems.forEach(item => {
      if (filter === "all" || item.classList.contains(filter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});

/* ===== Contact Form Validation ===== */
const form = document.getElementById("contactForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", e => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const text = document.getElementById("message").value.trim();

  if (!name || !email || !text) {
    message.textContent = "Please fill in all fields.";
    return;
  }

  message.textContent = "Message sent successfully!";
  form.reset();
});
