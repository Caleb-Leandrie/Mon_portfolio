/* =========================================================
   MOBILE MENU
========================================================= */

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const body = document.body;

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", () => {

        navLinks.classList.toggle("active");

        body.classList.toggle("menu-open");

    });


    const links = navLinks.querySelectorAll("a");

    links.forEach(link => {

        link.addEventListener("click", () => {

            navLinks.classList.remove("active");

            body.classList.remove("menu-open");

        });

    });

}


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements = document.querySelectorAll(
    ".section, .project-card, .skill-card, .detail-card, .timeline-item, .focus-panel, .contact-box"
);


revealElements.forEach(element => {
    element.classList.add("reveal");
});


const revealObserver = new IntersectionObserver(
    (entries, observer) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

                observer.unobserve(entry.target);

            }

        });

    },
    {
        threshold: 0.08
    }
);


revealElements.forEach(element => {
    revealObserver.observe(element);
});


/* =========================================================
   HEADER ON SCROLL
========================================================= */

const header = document.querySelector(".header");

let lastScroll = 0;


window.addEventListener(
    "scroll",
    () => {

        const currentScroll = window.scrollY;


        if (currentScroll > 50) {

            header.style.background =
                "rgba(4, 10, 8, 0.94)";

            header.style.borderBottomColor =
                "rgba(125, 255, 178, 0.12)";

        } else {

            header.style.background =
                "rgba(5, 13, 10, 0.78)";

            header.style.borderBottomColor =
                "rgba(125, 255, 178, 0.07)";

        }


        lastScroll = currentScroll;

    },
    {
        passive: true
    }
);


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections = document.querySelectorAll("section[id]");
const navigationLinks = document.querySelectorAll(".nav-links a");


const sectionObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                navigationLinks.forEach(link => {
                    link.classList.remove("active");
                });


                const activeLink = document.querySelector(
                    `.nav-links a[href="#${entry.target.id}"]`
                );


                if (activeLink) {
                    activeLink.classList.add("active");
                }

            }

        });

    },
    {
        rootMargin: "-30% 0px -60% 0px"
    }
);


sections.forEach(section => {
    sectionObserver.observe(section);
});


/* =========================================================
   NETWORK PANEL
========================================================= */

const centerNode = document.querySelector(".node-inner");


if (centerNode) {

    let pulse = 0;

    setInterval(() => {

        pulse += 1;

        const opacity =
            0.45 + Math.sin(pulse * 0.15) * 0.25;

        const shadow =
            15 + Math.sin(pulse * 0.15) * 10;


        centerNode.style.boxShadow =
            `0 0 ${shadow}px rgba(125, 255, 178, ${opacity})`;

    }, 60);

}


/* =========================================================
   CURRENT YEAR
========================================================= */

const currentYear = document.querySelector("[data-year]");

if (currentYear) {
    currentYear.textContent = new Date().getFullYear();
}