function openQuoteModal() {
        const modal = document.getElementById("quote-modal");
        if (modal) {
          modal.classList.remove("hidden");
        }
      }

      // Function to close the quote modal
      function closeQuoteModal() {
        const modal = document.getElementById("quote-modal");
        if (modal) {
          modal.classList.add("hidden");
        }
      }

      // Function to initiate a phone call
      function callNow() {
        window.location.href = "tel:+33142868300";
      }
      // Function to initiate a phone call
      function callNowAcceuil() {
        window.location.href = "tel:0679456987";
      }
      // Ensure DOM is fully loaded
      document.addEventListener("DOMContentLoaded", () => {
        // Mobile menu functionality
        const mobileMenuButton = document.getElementById("mobile-menu-button");
        const mobileMenu = document.getElementById("mobile-menu");

        if (mobileMenuButton && mobileMenu) {
          // Toggle menu visibility
          mobileMenuButton.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
          });

          // Close menu on link click
          mobileMenu.querySelectorAll("a").forEach(link => {
            link.addEventListener("click", () => {
              mobileMenu.classList.add("hidden");
            });
          });
        } else {
          console.warn("Mobile menu elements not found.");
        }

        // Quote form functionality
        const quoteForm = document.getElementById("quote-form");
        if (quoteForm) {
          quoteForm.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Demande envoyée ! Nous vous répondrons sous peu.");
            closeQuoteModal();
          });
        }

        // Close modal when clicking outside of it
        const quoteModal = document.getElementById("quote-modal");
        if (quoteModal) {
          quoteModal.addEventListener("click", function(e) {
            if (e.target === quoteModal) {
              closeQuoteModal();
            }
          });
        }

        // Close modal with Escape key
        document.addEventListener("keydown", function(e) {
          if (e.key === "Escape") {
            closeQuoteModal();
          }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
          anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
              target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }
          });
        });
      });