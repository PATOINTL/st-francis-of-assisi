        setTimeout(function () {
                document.querySelector('.loader-container').style.display = 'none';
                window.location.href = 'main.html'; // redirect to main page
            }, 2000); // adjust timeout duration
document.addEventListener("DOMContentLoaded", function () {
    // Optional: Add a timer to remove the loader after 5 seconds
    setTimeout(function () {
        document.querySelector('.loader-container').style.display = 'none';
    }, 5000);
});
