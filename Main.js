// P4 Salon & Spa — main.js

document.addEventListener("DOMContentLoaded", () => {
  /* ---- Mobile nav toggle ---- */
  const navToggle = document.getElementById("navToggle");
  const navMenu = document.getElementById("navMenu");
  if (navToggle && navMenu) {
    navToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
  }

  /* ---- Services data ---- */
  const services = [
    { name: "Haircut & Styling", desc: "Precision cuts, blow-dry & styling for women and men.", price: "₹299 onwards" },
    { name: "Hair Coloring", desc: "Global color, highlights, root touch-ups & ammonia-free options.", price: "₹999 onwards" },
    { name: "Bridal Makeup Package", desc: "Complete bridal look with trial session, hairdo & draping.", price: "₹14,999 onwards" },
    { name: "Party Makeup", desc: "Glamorous looks for engagements, parties & events.", price: "₹1,999 onwards" },
    { name: "Facial & Clean-up", desc: "Gold, fruit, hydra & anti-tan facials for glowing skin.", price: "₹499 onwards" },
    { name: "Spa & Body Therapy", desc: "Relaxing head, body & aroma therapies to de-stress.", price: "₹1,299 onwards" },
    { name: "Manicure & Pedicure", desc: " lux mani-pedi, nail art, gel extensions & more.", price: "₹599 onwards" },
    { name: "Men's Grooming", desc: "Beard styling, shave, D-tan & hair spa for men.", price: "₹399 onwards" }
  ];

  const grid = document.getElementById("servicesGrid");
  if (grid) {
    services.forEach((s) => {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `<h3>${s.name}</h3><p>${s.desc}</p><span class="price">${s.price}</span>`;
      grid.appendChild(card);
    });
  }

  /* ---- Booking form ---- */
  const bookingForm = document.getElementById("bookingForm");
  if (bookingForm) {
    // Default date = today; block past dates
    const dateInput = document.getElementById("date");
    const today = new Date().toISOString().split("T")[0];
    if (dateInput) dateInput.min = today;

    bookingForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = document.getElementById("formSuccess");
      if (success) {
        success.hidden = false;
        bookingForm.reset();
        success.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    });
  }

  /* ---- Contact form ---- */
  const contactForm = document.getElementById("contactForm");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const success = document.getElementById("contactSuccess");
      if (success) {
        success.hidden = false;
        contactForm.reset();
      }
    });
  }
});
        
