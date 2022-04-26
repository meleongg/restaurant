import Rest1 from "../src/images/restaurant/restaurant-1.png";
import Rest2 from "../src/images/restaurant/restaurant-2.png";
import Rest3 from "../src/images/restaurant/restaurant-3.png";
import Rest4 from "../src/images/restaurant/restaurant-4.png";
import Rest5 from "../src/images/restaurant/restaurant-5.png";

const content = document.getElementById("content");
let slideIndex = 0;
let timer;

const checkPageChange = () => {
    const menuBtn = document.getElementById("Menu");
    const contactBtn = document.getElementById("Contact");

    menuBtn.addEventListener("click", () => {
        clearTimeout(timer);
    });

    contactBtn.addEventListener("click", () => {
        clearTimeout(timer);
    });
}

const startSlides = () => {
    const slides = document.getElementsByClassName("slides");
    const dots = document.getElementsByClassName("dot");

    checkPageChange();

    for (let i=0; i<dots.length; i++) {
        dots[i].classList.remove("active");
    }

    for (let i=0; i<slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    if (slideIndex <= 0) {
        slideIndex = slides.length;
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    timer = setTimeout(startSlides, 3000);
}

const renderSlide = (slideObj) => {
    const slide = document.createElement("div");
    slide.classList.add("slides");
    slide.classList.add("fade");

    const img = new Image();
    img.src = slideObj.source;
    img.classList.add("restaurant-photo");
    slide.appendChild(img);

    const caption = document.createElement("div");
    caption.classList.add("caption");
    caption.innerText = slideObj.caption;
    slide.appendChild(caption);

    return slide;
}

const renderDots = (len) => {
    const dots = document.createElement("div");
    dots.classList.add("dots");

    for (let i=0; i<len; i++) {
        const dot = document.createElement("span");
        dot.classList.add("dot");
        dots.appendChild(dot);
    }

    return dots;
}

const detectDotClick = (elm, slides, dots, index) => {
    elm.addEventListener("click", () => {
        slideIndex = index;
        for (let i=0; i<dots.length; i++) {
            dots[i].classList.remove("active");
        }

        for (let i=0; i<slides.length; i++) {
            slides[i].style.display = "none";
        }

        slides[slideIndex].style.display = "block";
        elm.classList.add("active");
    });
}

const detectPrevClick = (elm, slides, dots) => {
    elm.addEventListener("click", () => {
        slideIndex -= 1;
        for (let i=0; i<dots.length; i++) {
            dots[i].classList.remove("active");
        }

        for (let i=0; i<slides.length; i++) {
            slides[i].style.display = "none";
        }
    
        if (slideIndex <= 0) {
            slideIndex = slides.length;
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    });
}

const detectNextClick = (elm, slides, dots) => {
    elm.addEventListener("click", () => {
        slideIndex += 1;
        for (let i=0; i<dots.length; i++) {
            dots[i].classList.remove("active");
        }

        for (let i=0; i<slides.length; i++) {
            slides[i].style.display = "none";
        }

        if (slideIndex > slides.length) {
            slideIndex = 1;
        }

        slides[slideIndex - 1].style.display = "block";
        dots[slideIndex - 1].classList.add("active");
    });
}

const renderSlides = () => {
    const photos = [{source: Rest1, caption: "Splash Interior"}, 
                    {source: Rest2, caption: "Splash Exterior"}, 
                    {source: Rest3, caption: "Elegant Washrooms"}, 
                    {source: Rest4, caption: "Splash Interior Decor"}, 
                    {source: Rest5, caption: "Outside Seating"}];
    const photoDiv = document.createElement("div");
    photoDiv.classList.add("card");
    
    const slideshowContainer = document.createElement("div");
    slideshowContainer.id = "slideshow-container";
    photoDiv.appendChild(slideshowContainer);

    for (let i=0; i<photos.length; i++) {
        let slide = renderSlide(photos[i]);
        slideshowContainer.appendChild(slide);
    }

    const prev = document.createElement("a");
    prev.classList.add("prev");
    prev.innerText = "<";

    const next = document.createElement("a");
    next.classList.add("next");
    next.innerText = ">";

    slideshowContainer.appendChild(prev);
    slideshowContainer.appendChild(next);

    const dots = renderDots(photos.length);
    photoDiv.appendChild(dots);

    content.appendChild(photoDiv);

    startSlides();

    const slides = document.getElementsByClassName("slides");
    const dotsList = document.getElementsByClassName("dot");
    detectNextClick(next, slides, dotsList);
    detectPrevClick(prev, slides, dotsList);

    for (let i=0; i<dotsList.length; i++) {
        detectDotClick(dotsList[i], slides, dotsList, i);
        dotsList[i].classList.remove("active");
    }
}

const renderQuote = () => {
    const quoteDiv = document.createElement("div");
    quoteDiv.classList.add("card");
    quoteDiv.id = "quote";

    const header = document.createElement("h2");
    header.classList.add("card-heading");
    header.innerHTML = "Testimony";

    const quoteText = document.createElement("p");
    quoteText.classList.add("card-text");
    quoteText.innerHTML = `" Splash has an amazing restaurant atmosphere!
        It makes me feel tres chic when I'm chowing down on Roblox's 
        finest seafood! This is the kind of place that I'll be telling
        all my friends about! "`

    const speaker = document.createElement("h2");
    speaker.id = "card-quote";
    speaker.innerHTML = "- Chenna_man";

    quoteDiv.appendChild(header);
    quoteDiv.appendChild(quoteText);
    quoteDiv.appendChild(speaker);

    content.appendChild(quoteDiv);
}

const renderHours = () => {
    const hoursDiv = document.createElement("div");
    hoursDiv.classList.add("card");
    hoursDiv.id = "hours";

    const header = document.createElement("h2");
    header.classList.add("card-heading");
    header.innerHTML = "Hours";

    const hoursText = document.createElement("p");
    hoursText.classList.add("card-text");
    hoursText.id = "hours";

    const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday",
                          "Thursday", "Friday", "Saturday"];
    for (let i=0; i<DAYS_OF_WEEK.length; i++) {
        const day = document.createElement("p");
        if ((DAYS_OF_WEEK[i] === "Thursday") || 
            (DAYS_OF_WEEK[i] === "Friday") || 
            (DAYS_OF_WEEK[i] === "Saturday")) {
            day.innerHTML = `${DAYS_OF_WEEK[i]}: 8am - 12pm`;
        } else {
            day.innerHTML = `${DAYS_OF_WEEK[i]}: 8am - 8pm`;
        }
        hoursText.appendChild(day);
    }
    hoursDiv.appendChild(header);
    hoursDiv.appendChild(hoursText);

    content.appendChild(hoursDiv);
}

const renderLocation = () => {
    const locDiv = document.createElement("div");
    locDiv.classList.add("card");
    locDiv.id = "location";

    const header = document.createElement("h2");
    header.classList.add("card-heading");
    header.innerHTML = "Location";

    const locText = document.createElement("p");
    locText.classList.add("card-text");
    locText.innerHTML = "787 Goatkoto Avenue";
    locDiv.appendChild(header);
    locDiv.appendChild(locText);

    content.appendChild(locDiv);
}

const renderHomePage = () => {
    renderSlides();
    renderQuote();
    renderHours();
    renderLocation();
}


export { renderHomePage }