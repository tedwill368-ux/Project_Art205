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
