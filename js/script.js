window.onload = function () {
    const modal = document.getElementById("learn-more-modal");
    const openBtn = document.querySelector(".learn-more-btn");
    const closeBtn = document.querySelector(".close");

    openBtn.addEventListener("click", function (e) {
        e.preventDefault();
        modal.style.display = "block";
    });

    closeBtn.addEventListener("click", function () {
        modal.style.display = "none";
    });

    window.addEventListener("click", function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
};
const buttons = document.querySelectorAll('.bio-btn');
const views = document.querySelectorAll('.view-text');

// Hide all views at first
views.forEach(v => v.style.display = 'none');

buttons.forEach((btn, index) => {
    btn.addEventListener('click', () => {

        // Remove active from all buttons
        buttons.forEach(b => b.classList.remove('active'));

        // Add active class to the clicked button
        btn.classList.add('active');

        // Hide all views
        views.forEach(v => v.style.display = 'none');

        // Show the matching view by index
        views[index].style.display = 'block';
    });
});
function toggleMenu() {
    document.getElementById("navLinks").classList.toggle("show");
}

// Close menu when clicking outside
document.addEventListener("click", function(e) {
    const menu = document.getElementById("navLinks");
    const icon = document.querySelector(".menu-icon");

    // If menu is open AND click is outside the menu & icon → close it
    if (menu.classList.contains("show") && !menu.contains(e.target) && !icon.contains(e.target)) {
        menu.classList.remove("show");
    }
});



const sendBtn = document.getElementById("send-btn");
const modal = document.getElementById("confirmModal");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");
const form = document.getElementById("contact-form");

// Show modal only if form is valid
sendBtn.addEventListener("click", function(e) {
    e.preventDefault(); // stop default submit

    if (form.checkValidity()) { // check required fields
        modal.style.display = "flex";
    } else {
        form.reportValidity(); // show browser validation messages
    }
});

// YES → submit form (opens email client)
confirmYes.addEventListener("click", function() {
    modal.style.display = "none";
    form.submit(); // now valid, so safe to submit
});

// NO → close modal
confirmNo.addEventListener("click", function() {
    modal.style.display = "none";
});

// Close modal if clicked outside
window.addEventListener("click", function(e) {
    if (e.target == modal) {
        modal.style.display = "none";
    }
});
