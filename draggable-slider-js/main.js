const carousel = document.querySelector(".carousel");
const arrowIcons = document.querySelectorAll(".wrapper i");
const firstImg = document.querySelector("img");

let isDragStart = false;
let isDragging = false;
let prevPageX;
let prevScrollLeft;
let positionDiff;

const showHideArrowIcons = () => {
  // showing/hiding back and forward icons acc to carousel scrollLeft value
  let scrollWidth = carousel.scrollWidth - carousel.clientWidth; // max scrollable width
  arrowIcons[0].style.display = carousel.scrollLeft === 0 ? "none" : "block";
  arrowIcons[1].style.display =
    carousel.scrollLeft === scrollWidth ? "none" : "block";
};

arrowIcons.forEach((icon) => {
  let imgWidth = firstImg.clientWidth + 14; // 14px - gap between images
  icon.addEventListener("click", () => {
    carousel.scrollLeft += icon.id === "left" ? -imgWidth : imgWidth;
    setTimeout(() => showHideIcons(), 60);
  });
});

const autoSlide = () => {
  // if there is no image left to scroll => return
  // if (carousel.scrollLeft === carousel.scrollWidth - carousel.clientWidth)
  // return;
  if (
    carousel.scrollLeft - (carousel.scrollWidth - carousel.clientWidth) > -1 ||
    carousel.scrollLeft <= 0
  )
    return;

  positionDiff = Math.abs(positionDiff);

  let imgWidth = firstImg.clientWidth + 14;

  // difference value that need to be added or reduced from carousel left to take middle img center
  let valDifference = imgWidth - positionDiff;

  // if user is scrolling to the right
  if (carousel.scrollLeft > prevScrollLeft) {
    // show next/prev image if user scrolled over 33% of its width, otherwise hide it and show current image in the middle
    if (positionDiff > imgWidth / 3) {
      carousel.scrollLeft += valDifference;
    } else {
      carousel.scrollLeft -= positionDiff;
    }
  } else {
    // if user is scrolling to the left
    if (positionDiff > imgWidth / 3) {
      carousel.scrollLeft -= valDifference;
    } else {
      carousel.scrollLeft += positionDiff;
    }
  }
};

const dragStart = (e) => {
  //updating global variables value on mouse down event
  isDragStart = true;
  prevPageX = e.pageX || e.touches[0].pageX;
  prevScrollLeft = carousel.scrollLeft;
};

const dragStop = () => {
  isDragStart = false;
  carousel.classList.remove("dragging");

  if (!isDragging) return;
  isDragging = false;
  autoSlide();
};

const dragging = (e) => {
  //scrolling carousel to left according to mouse pointer
  if (!isDragStart) return;
  e.preventDefault();
  isDragging = true;
  carousel.classList.add("dragging");
  positionDiff = (e.pageX || e.touches[0].pageX) - prevPageX;
  carousel.scrollLeft = prevScrollLeft - positionDiff;
  showHideArrowIcons();
};

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("touchend", dragStop);
