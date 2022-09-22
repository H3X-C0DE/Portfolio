function CopyToClip() {
  var copyText = document.getElementById("myInput");

  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices

  navigator.clipboard.writeText(copyText.value);

  alert("Copied " + copyText.value + "to clipboard!");
}

// pfp click switch
var newsrc = "velte.jpg";

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
