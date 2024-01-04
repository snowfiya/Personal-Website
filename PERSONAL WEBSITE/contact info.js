document.addEventListener("DOMContentLoaded", function () {
    const telephoneSection = document.getElementById('telephone');
    const emailSection = document.getElementById('email');

    telephoneSection.addEventListener('mouseenter', function () {
        toggleBackgroundColor(telephoneSection);
    });

    telephoneSection.addEventListener('mouseleave', function () {
        toggleBackgroundColor(telephoneSection);
    });

    emailSection.addEventListener('mouseenter', function () {
        toggleBackgroundColor(emailSection);
    });

    emailSection.addEventListener('mouseleave', function () {
        toggleBackgroundColor(emailSection);
    });

    function toggleBackgroundColor(element) {
        element.style.backgroundColor = element.style.backgroundColor === 'white' ? '#BC998B' : 'white';
    }
});
   