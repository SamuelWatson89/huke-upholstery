import "boxicons";
import "./style.css";
import "./nav";
import PhotoSwipeLightbox from "photoswipe/lightbox";
import "photoswipe/style.css";
import PhotoSwipe from "photoswipe";

const lightbox = new PhotoSwipeLightbox({
  gallery: "#hukeGallery",
  children: "a",
  pswpModule: PhotoSwipe,
});
lightbox.init();

const footerYearSpan = document.getElementById("footerYear");
const yearNow = new Date().getFullYear();

footerYearSpan.innerHTML = yearNow;
