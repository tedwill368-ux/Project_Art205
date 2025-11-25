// Bio modal logic
const bioModal = document.getElementById("bioModal");
const profilePic = document.getElementById("profilePic");
const closeBtn = document.getElementById("biocloseModal");

profilePic.onclick = function() {
    bioModal.style.display = "block";
}

closeBtn.onclick = function() {
    bioModal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == bioModal) {
        bioModal.style.display = "none";
    }
}

// Navigation menu toggle
//================================================================================================================================

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


// Contact form modal logic
//================================================================================================================================
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
