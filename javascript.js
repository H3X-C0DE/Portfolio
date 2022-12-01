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
let isOriginal = false;
let imageEl = document.getElementById("avatar");
imageEl.addEventListener("click", changeImage);
function changeImage() {
  // console.log(isOriginal);
  if (!isOriginal) {
    document.images["avatar"].src = "/assets/hexy.gif";
    document.images["avatar"].alt = "meme";
    isOriginal = !isOriginal;
  } else {
    document.images["avatar"].src = "/assets/velte.jpg";
    document.images["avatar"].alt = "me";
    isOriginal = !isOriginal;
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
