// Select the custom cursor element
const cursor = document.querySelector('.cursor');

// Update cursor position
document.addEventListener('mousemove', (e) => {
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

// Add hover effect for all elements
const elements = document.querySelectorAll('header, nav-button, h1');
elements.forEach(element => {
  element.addEventListener('mouseenter', () => cursor.classList.add('hover'));
  element.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
});

// Optional: Scale up cursor when hovering over clickable elements
document.querySelectorAll('a, button').forEach(element => {
  element.addEventListener('mouseenter', () => {
    document.querySelector('.cursor').classList.add('active');
  });
  element.addEventListener('mouseleave', () => {
    document.querySelector('.cursor').classList.remove('active');
  });
});





/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  var menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

/*--dark mode---*/
const body = document.querySelector("body");
toggleSwitch = document.getElementById("toggle-switch");

toggleSwitch.addEventListener("click", () => {
  body.classList.toggle("dark");
});

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () { headerShadow() };

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {

    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";

  } else {

    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";

  }
}


/* ----- TYPING EFFECT ----- */
var typingEffect = new Typed(".typedText", {
  strings: ["Software Engineer"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000
})


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
})

/* -- HOME -- */
sr.reveal('.featured-text-card', {})
sr.reveal('.featured-name', { delay: 100 })
sr.reveal('.featured-text-info', { delay: 200 })
sr.reveal('.featured-text-btn', { delay: 200 })
sr.reveal('.social_icons', { delay: 200 })
sr.reveal('.featured-image', { delay: 300 })


/* -- PROJECT BOX -- */
sr.reveal('.project-box', { interval: 200 })

/* -- HEADINGS -- */
sr.reveal('.top-header', {})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

/* -- ABOUT INFO & CONTACT INFO -- */
const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info', { delay: 100 })
srLeft.reveal('.contact-info', { delay: 100 })

/* -- ABOUT SKILLS & FORM BOX -- */
const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box', { delay: 100 })
srRight.reveal('.form-control', { delay: 100 })



/* ----- CHANGE ACTIVE LINK ----- */

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    try {
      const menuLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
      if (menuLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          menuLink.classList.add('active-link');
        } else {
          menuLink.classList.remove('active-link');
        }
      }
    } catch (error) {
      console.warn(`Could not find nav link for section: ${sectionId}`);
    }
  })
}
window.addEventListener('scroll', scrollActive)


/*------send email-----*/

function sendEmail(e) {
  e.preventDefault();

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  const mailtoLink = `mailto:sunilchunchu056@gmail.com?subject=Contact from ${name}&body=From: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;

  window.location.href = mailtoLink;

  successMessage.style.display = 'flex';

  // Clear the form
  document.getElementById('contactForm').reset();
  setTimeout(() => {
    successMessage.style.display = 'none';
  }, 3000);

}



////
function scrollToContact() {
  const contactSection = document.getElementById('contact');
  contactSection.scrollIntoView({ behavior: 'smooth' });
}

