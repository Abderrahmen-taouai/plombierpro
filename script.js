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