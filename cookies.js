document.addEventListener("DOMContentLoaded", function () {

  const banner = document.getElementById("cookie-banner");
  const accept = document.getElementById("accept-cookies");
  const refuse = document.getElementById("refuse-cookies");

  if (!banner || !accept || !refuse) return;

  const choice = localStorage.getItem("cookieConsent");

  if (choice === null) {
    banner.style.display = "flex";
  } else {
    banner.style.display = "none";
  }

  accept.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "accepted");
    banner.style.display = "none";
  });

  refuse.addEventListener("click", function () {
    localStorage.setItem("cookieConsent", "refused");
    banner.style.display = "none";
  });

});
