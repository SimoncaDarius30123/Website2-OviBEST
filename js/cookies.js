document.addEventListener("DOMContentLoaded", function () {
    const modalbox = document.getElementById("modalbox");

    function acceptCookies() {
        // Aici puteți adăuga cod pentru gestionarea cookie-urilor, dacă este necesar
        // ...

        // După ce utilizatorul a dat accept la cookie-uri, ascundem notificarea și marcăm-o ca acceptată
        modalbox.style.display = "none";

        // Exemplu de activare a cookie-urilor - puteți adapta acest cod la nevoile dvs.
        document.cookie = "cookiesAccepted=true; expires=Thu, 01 Jan 2030 00:00:00 UTC; path=/;";
    }

    function rejectCookies() {
        // Aici puteți adăuga cod pentru gestionarea respingerii cookie-urilor, dacă este necesar
        // ...

        // După ce utilizatorul a respins cookie-urile, ascundem notificarea și marcăm-o ca respinsă
        modalbox.style.display = "none";

        // Exemplu de respingere a cookie-urilor - puteți adapta acest cod la nevoile dvs.
        document.cookie = "cookiesAccepted=false; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    }

    // Verificăm dacă notificarea a fost deja acceptată sau respinsă
    const hasAcceptedNotification = localStorage.getItem("notificationAccepted");
    const hasRejectedNotification = localStorage.getItem("notificationRejected");
    const cookiesAccepted = document.cookie.split(';').some(item => item.trim().startsWith('cookiesAccepted='));

    if (!hasAcceptedNotification && !hasRejectedNotification && !cookiesAccepted) {
        // Afișăm notificarea la prima accesare a paginii pe localhost
        modalbox.style.display = "block";
    }

    window.acceptCookies = acceptCookies;
    window.rejectCookies = rejectCookies;
});