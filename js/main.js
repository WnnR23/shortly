const elHeroBtn = document.querySelector("#shortly-button");
const elHeroResults = document.querySelector(".hero-result-items");
elHeroBtn.addEventListener("click", function () {
  elHeroResults.classList.toggle("hero-result-items-active")
});


const elLinkCopyBtn = document.querySelector(".hero-result-link-copy");
elLinkCopyBtn.addEventListener("click", function () {
  elLinkCopyBtn.classList.toggle("hero-result-link-copy-active")
});