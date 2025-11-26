
// Bio modal logic
const bioModal = document.getElementById("bioModal");
const profilePic = document.getElementById("profilePic");
const closeBtn = document.getElementById("biocloseModal");

if (profilePic && bioModal) {
    profilePic.addEventListener("click", function () {
        bioModal.style.display = "block";
    });
}

if (closeBtn && bioModal) {
    closeBtn.addEventListener("click", function () {
        bioModal.style.display = "none";
    });
}

// Close bio modal when clicking outside it
if (bioModal) {
    window.addEventListener("click", function (event) {
        if (event.target === bioModal) {
            bioModal.style.display = "none";
        }
    });
}

// Navigation menu toggle
//================================================================================================================================

function toggleMenu() {
    const nav = document.getElementById("navLinks");
    const icon = document.querySelector(".menu-icon");
    if (nav) {
        nav.classList.toggle("show");
        // keep aria-expanded in sync for accessible menu button
        if (icon && icon.setAttribute) {
            icon.setAttribute('aria-expanded', String(nav.classList.contains('show')));
        }
    }
}

// Close menu when clicking outside
document.addEventListener("click", function (e) {
    const menu = document.getElementById("navLinks");
    const icon = document.querySelector(".menu-icon");

    // If menu is open AND click is outside the menu & icon → close it
    if (menu && icon && menu.classList.contains("show") && !menu.contains(e.target) && !icon.contains(e.target)) {
        menu.classList.remove("show");
    }
});


// Contact form modal logic
//================================================================================================================================

const form = document.getElementById("contact-form");
const sendBtn = document.getElementById("send-btn");
const modal = document.getElementById("confirmModal");
const confirmYes = document.getElementById("confirmYes");
const confirmNo = document.getElementById("confirmNo");

// Show modal only if form is valid
sendBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (form.checkValidity()) {
        modal.classList.add("show");
    } else {
        form.reportValidity();
    }
});

// YES → submit the form
confirmYes.addEventListener("click", function () {
    modal.classList.remove("show");
    form.submit();
});

// NO → close modal
confirmNo.addEventListener("click", function () {
    modal.classList.remove("show");
});

// Close modal when clicking outside modal content
window.addEventListener("click", function (e) {
    if (e.target === modal) {
        modal.classList.remove("show");
    }
});