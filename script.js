function openQuoteModal() {
    document.getElementById("quote-modal").classList.remove("hidden");
}

function closeQuoteModal() {
    document.getElementById("quote-modal").classList.add("hidden");
}

document.getElementById("quote-form").addEventListener("submit", function(e) {
    e.preventDefault();
    alert("Demande envoyée ! Nous vous répondrons sous peu.");
    closeQuoteModal();
});

function callNow() {
    window.location.href = "tel:+33142868300";
}

// Ensure DOM is fully loaded
  document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById("mobile-menu-button");
    const menu = document.getElementById("mobile-menu");

    if (button && menu) {
      // Toggle menu visibility
      button.addEventListener("click", () => {
        menu.classList.toggle("hidden");
      });

      // Close menu on link click
      menu.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", () => {
          menu.classList.add("hidden");
        });
      });
    } else {
      console.warn("Mobile menu elements not found.");
    }
  });