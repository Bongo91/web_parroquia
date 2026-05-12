// HEADER SCROLL

const header = document.getElementById('header');

window.addEventListener('scroll', () => {

  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }

});

// MOBILE MENU

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn.addEventListener('click', () => {

  navLinks.classList.toggle('active');

});

const navDropdowns = document.querySelectorAll('.nav-dropdown');

navDropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.nav-dropdown-toggle');
  const links = dropdown.querySelectorAll('.nav-dropdown-menu a');

  toggle?.addEventListener('click', () => {
    const isOpen = dropdown.classList.toggle('open');
    toggle.setAttribute('aria-expanded', isOpen);

    navDropdowns.forEach(otherDropdown => {
      if(otherDropdown !== dropdown){
        otherDropdown.classList.remove('open');
        otherDropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
      }
    });
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      dropdown.classList.remove('open');
      toggle?.setAttribute('aria-expanded', 'false');
      navLinks.classList.remove('active');
    });
  });
});

// REVEAL ON SCROLL

const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){

  const triggerBottom = window.innerHeight * 0.88;

  reveals.forEach(element => {

    const top = element.getBoundingClientRect().top;

    if(top < triggerBottom){
      element.classList.add('active');
    }

  });

}

window.addEventListener('scroll', revealOnScroll);

revealOnScroll();


// Wecolme slider fade

const slides = document.querySelectorAll('.welcome-slider img');

let current = 0;

if(slides.length){
  slides[current].classList.add('active');

  setInterval(() => {

    slides[current].classList.remove('active');

    current = (current + 1) % slides.length;

    slides[current].classList.add('active');

  }, 2000);
}


// Pillars carousel and modal

const pillarsTrack = document.querySelector('.pillars-track');
const pillarCards = document.querySelectorAll('.pillar-card');
const prevPillar = document.querySelector('.carousel-control.prev');
const nextPillar = document.querySelector('.carousel-control.next');
const pillarModal = document.getElementById('pillar-modal');
const modalTitle = document.getElementById('pillar-modal-title');
const modalDescription = document.getElementById('pillar-modal-description');
const modalImage = document.getElementById('pillar-modal-img');
const closeModalButtons = document.querySelectorAll('[data-close-modal]');

function scrollPillars(direction){
  if(!pillarsTrack) return;

  const firstCard = pillarsTrack.querySelector('.pillar-card');
  const cardWidth = firstCard ? firstCard.offsetWidth + 26 : 360;

  pillarsTrack.scrollBy({
    left: direction * cardWidth,
    behavior: 'smooth'
  });
}

function openPillarModal(card){
  if(!pillarModal || !card) return;

  modalTitle.textContent = card.dataset.title;
  modalDescription.textContent = card.dataset.description;
  modalImage.src = card.dataset.image;
  modalImage.alt = card.dataset.title;

  pillarModal.classList.add('open');
  pillarModal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePillarModal(){
  if(!pillarModal) return;

  pillarModal.classList.remove('open');
  pillarModal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

prevPillar?.addEventListener('click', () => scrollPillars(-1));
nextPillar?.addEventListener('click', () => scrollPillars(1));

pillarCards.forEach(card => {
  const button = card.querySelector('.pillar-cta');

  button?.addEventListener('click', () => openPillarModal(card));
});

closeModalButtons.forEach(button => {
  button.addEventListener('click', closePillarModal);
});

document.addEventListener('keydown', event => {
  if(event.key === 'Escape'){
    closePillarModal();
    navDropdowns.forEach(dropdown => {
      dropdown.classList.remove('open');
      dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
    });
  }
});


// Progressive grids

const loadMoreButtons = document.querySelectorAll('.load-more');

loadMoreButtons.forEach(button => {
  const grid = button.previousElementSibling;

  if(!grid || !grid.classList.contains('progressive-grid')){
    return;
  }

  const extraCards = grid.querySelectorAll('.is-extra');

  if(!extraCards.length){
    button.hidden = true;
  }

  button.addEventListener('click', () => {
    const isExpanded = grid.classList.toggle('expanded');
    button.textContent = isExpanded ? 'Mostrar menos' : 'Mostrar más';
  });
});
