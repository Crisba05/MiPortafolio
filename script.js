"use strict";
// MANEJA CABEZERA
let underlineMenuItems = document.querySelectorAll(".underline-menu li");
underlineMenuItems[0].classList.add("active");
underlineMenuItems.forEach(item => {
    item.addEventListener("click", () => {
        underlineMenuItems.forEach(item => item.classList.remove("active"));
        item.classList.add("active");
    });
});
// ICONO HAMBURGESA EN RESPOMSIVE
let burgerMenuToggle = document.querySelector("#burger-toggle");
let burgerMenuLinks = document.querySelectorAll(".burger-nav li a");
burgerMenuLinks.forEach(link => {
    link.addEventListener("click", () => {
        burgerMenuToggle.checked = false;
    });
});
// MOUSE PUNTO NARANJA
let cursor = document.querySelector(".cursor");
let cursorBorder = document.querySelector(".cursor-border");
let getXY = (event, element) => {
    let x = event.clientX;
    let y = event.clientY;
    let rect = element.getBoundingClientRect();
    x -= rect.width / 2;
    y -= rect.height / 2;
    return [x, y];
};
document.addEventListener("mouseenter", e => {
    cursor.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 300,
        fill: "forwards"
    });
    cursorBorder.animate([
        {
            opacity: 0
        },
        {
            opacity: 0.8
        }
    ], {
        duration: 300,
        fill: "forwards"
    });
});
document.addEventListener("mousemove", e => {
    let [cursorX, cursorY] = getXY(e, cursor);
    let [cursorBorderX, cursorBorderY] = getXY(e, cursorBorder);
    let targetName = e.target.tagName;
    if (targetName === "A" || targetName === "LABEL" || targetName === "BUTTON") {
        cursorBorder.classList.add("on-focus");
    }
    else {
        cursorBorder.classList.remove("on-focus");
    }
    cursor.animate([{ transform: `translate(${cursorX}px, ${cursorY}px)` }, { transform: `translate(${cursorX}px, ${cursorY}px)` }], {
        duration: 300,
        fill: "forwards",
        delay: 50
    });
    cursorBorder.animate([{ transform: `translate(${cursorBorderX}px, ${cursorBorderY}px)` }, { transform: `translate(${cursorBorderX}px, ${cursorBorderY}px)` }], {
        duration: cursorBorder.classList.contains("on-focus") ? 1500 : 300,
        fill: "forwards",
        delay: 150
    });
});
document.addEventListener("mouseleave", e => {
    cursor.animate([{ opacity: 0.8 }, { opacity: 0 }], {
        duration: 500,
        fill: "forwards"
    });
    cursorBorder.animate([
        {
            opacity: 0.8
        },
        {
            opacity: 0
        }
    ], {
        duration: 500,
        fill: "forwards"
    });
});
// SCROLL CON EL EFECTO GLITCH
const random = (min, max) => min + Math.floor(Math.random() * (max - min + 1));
let crossBarGlitchTexts = document.querySelectorAll(".cross-bar-glitch");
crossBarGlitchTexts.forEach(text => {
    let content = text.textContent;
    text.textContent = "";
    let slice = text.dataset.slice;
    let glitchText = document.createElement("div");
    glitchText.className = "glitch";
    glitchText.style.setProperty("--slice-count", slice);
    for (let i = 0; i <= Number(slice); i++) {
        let span = document.createElement("span");
        span.textContent = content;
        span.style.setProperty("--i", `${i + 1}`);
        if (i !== Number(slice)) {
            span.style.animationDelay = `${800 + random(100, 300)}ms`;
        }
        glitchText.append(span);
    }
    text.appendChild(glitchText);
    let bars = document.createElement("div");
    bars.className = "bars";
    for (let i = 0; i < 5; i++) {
        let bar = document.createElement("div");
        bar.className = "bar";
        bars.append(bar);
    }
    text.append(bars);
});

let staggeredRiseInTexts = document.querySelectorAll(".staggered-rise-in");
staggeredRiseInTexts.forEach(text => {
    let letters = text.textContent.split("");
    text.textContent = "";
    letters.forEach((letter, i) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.style.animationDelay = `${i / 20}s`;
        text.append(span);
    });
});

let observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("active");
        }
    });
}, { rootMargin: "0px 0px -140px" });
let titles = document.querySelectorAll(".titles > *");
titles.forEach(title => observer.observe(title));
let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(p => observer.observe(p));
let profileCards = document.querySelectorAll(".card");
profileCards.forEach(profileCard => observer.observe(profileCard));




let sponsorList = document.querySelectorAll(".sponsors-list li");
sponsorList.forEach(sponsor => observer.observe(sponsor));

// pantalla de carga
document.addEventListener("DOMContentLoaded", function() {
    // Espera a que todos los recursos de la página estén completamente cargados
    window.addEventListener("load", function() {
        // Añade la clase 'loaded' para activar las transiciones de CSS
        document.body.classList.add("loaded");
        document.querySelector(".overlay2").classList.add("loaded");

        // Oculta el overlay después de la transición (2 segundos en este caso)
        setTimeout(function() {
            document.querySelector(".overlay2").style.display = "none";
        }, 2000);
    });

    // Opción de respaldo: remueve el overlay después de 1 minuto si no se carga correctamente
    setTimeout(function() {
        document.body.classList.add("loaded");
        document.querySelector(".overlay2").style.display = "none";
    }, 60000);
});

  // Carrusel básico
  document.querySelectorAll('.carousel').forEach(carousel => {
    let imgs = carousel.querySelectorAll('img');
    let i = 0;
    imgs.forEach((img, index) => img.style.display = index === 0 ? 'block' : 'none');
    setInterval(() => {
      imgs[i].style.display = 'none';
      i = (i + 1) % imgs.length;
      imgs[i].style.display = 'block';
    }, 3000);
  });

  // Zoom imagen
  function expandImage(img) {
    const modal = document.getElementById('imgModal');
    const modalImg = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImg.src = img.src;
    modal.onclick = () => modal.style.display = 'none';
  }

