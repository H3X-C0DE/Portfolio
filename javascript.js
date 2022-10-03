const navbarToggle = navbar.querySelector("#navbar-toggle");
let isNavbarExpanded = navbarToggle.getAttribute("aria-expanded") === "true";

const toggleNavbarVisibility = () => {
  isNavbarExpanded = !isNavbarExpanded;
  navbarToggle.setAttribute("aria-expanded", isNavbarExpanded);
};

navbarToggle.addEventListener("click", toggleNavbarVisibility);

const navbarMenu = document.querySelector("#navbar-menu");
const navbarLinksContainer = navbarMenu.querySelector(".navbar-links");

navbarLinksContainer.addEventListener("click", (e) => e.stopPropagation());
navbarMenu.addEventListener("click", toggleNavbarVisibility);

// pfp click switch
let newsrc = "velte.jpg";

function changeImage() {
  if (newsrc == "velte.jpg") {
    document.images["avatar"].src = "/assets/hexy.gif";
    document.images["avatar"].alt = "meme";
    newsrc = "Hexy.gif";
  } else {
    document.images["avatar"].src = "/assets/velte.jpg";
    document.images["avatar"].alt = "me";
    newsrc = "velte.jpg";
  }
}
// copy to clipboard button
function CopyToClip() {
  const copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  alert("Copied Discord ID " + copyText.value + " to your clipboard!");
}
