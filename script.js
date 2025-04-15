document.getElementById("booking-form").addEventListener("submit", function(e) {
    e.preventDefault();
    const unit = document.getElementById("unit").value;
    const date = document.getElementById("date").value;
    const confirmation = document.getElementById("confirmation");
    confirmation.innerHTML = `<p>Thanks! Your booking for <strong>${unit}</strong> on <strong>${date}</strong> is confirmed.</p>`;
});
