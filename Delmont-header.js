function toggleMenu(element) {
    const menu = element.querySelector('.toggle-menu');
    menu.classList.toggle('hidden');
}
function toggleMenu(element) {
    document.querySelectorAll('.toggle-menu').forEach(menu => {
        if (!element.contains(menu)) {
            menu.classList.add('hidden');
        }
    });

    element.querySelector('.toggle-menu').classList.toggle('hidden');
}

// Image slider
let slider = document.getElementById("slider");
let wrapper = document.getElementById("slider-wrapper");
let index = 0;
let total = slider.children.length;

function updateSlide() {
    let slideWidth = wrapper.clientWidth; // responsive width
    slider.style.transform = `translateX(-${index * slideWidth}px)`;
}
window.addEventListener("resize", updateSlide);
function getSlideWidth() {
    if (window.innerWidth < 640) return 360;      // sm
    if (window.innerWidth < 768) return 640;      // md
    if (window.innerWidth < 1024) return 768;     // lg
    return 1260;                                  // xl
}

// slider.style.transform = `translateX(-${index * getSlideWidth()}px)`;

function next() {
    index++;
    if (index >= total) index = 0;
    updateSlide();
}

function prev() {
    index--;
    if (index < 0) index = total - 1;
    updateSlide();
}
setInterval(next, 10000);

// Clients review slider 2
const slider2 = document.getElementById("slider2");
const wrapper2 = document.getElementById("slider-wrapper2");
const slides2 = slider2.children;

let index2 = 0;
const total2 = slides2.length;

function updateSlide2() {
    const slideWidth = wrapper2.clientWidth;
    slider2.style.transform = `translateX(-${index2 * slideWidth}px)`;
}

function next2() {
    index2 = (index2 + 1) % total2;
    updateSlide2();
}

function prev2() {
    index2 = (index2 - 1 + total2) % total2;
    updateSlide2();
}

window.addEventListener("resize", updateSlide2);

// Init
updateSlide2();



// about toggle
function toggleAbout(item) {
    const content = item.querySelector(".accordion-content");
    const icon = item.querySelector("i");
    const isOpen = content.style.height && content.style.height !== "0px";

    // Close all items
    document.querySelectorAll(".accordion-content").forEach(c => {
        c.style.height = "0px";
        c.classList.add("opacity-0");
    });

    document.querySelectorAll(".accordion-item i").forEach(i => {
        i.classList.remove("fa-minus");
        i.classList.add("fa-plus");
    });

    // Open clicked item
    if (!isOpen) {
        content.style.height = content.scrollHeight + "px";
        content.classList.remove("opacity-0");

        icon.classList.remove("fa-plus");
        icon.classList.add("fa-minus");
    }
}