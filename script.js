// HEADER SCROLL

const header = document.getElementById('header');

window.addEventListener('scroll', () => {
  if(!header) return;

  if(window.scrollY > 50){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});


// MOBILE MENU

const menuBtn = document.getElementById('menu-btn');
const navLinks = document.getElementById('nav-links');

menuBtn?.addEventListener('click', () => {
  navLinks?.classList.toggle('active');
});


// EDITABLE CARDS

function getCards(){
  return typeof parishCards !== 'undefined' && Array.isArray(parishCards) ? parishCards : [];
}

function getDetailUrl(card){
  return `detalle.html?id=${encodeURIComponent(card.id)}`;
}

function createVisualCard(card){
  const article = document.createElement('a');
  article.className = 'visual-card reveal';
  article.id = card.id;
  article.href = getDetailUrl(card);
  article.target = '_blank';
  article.rel = 'noopener';
  article.setAttribute('aria-label', `Ver detalle de ${card.title}`);

  article.innerHTML = `
    <img src="${card.image}" alt="${card.title}" loading="lazy">
    <div>
      <span>${card.eyebrow || card.section}</span>
      <h3>${card.title}</h3>
      <p>${card.summary}</p>
    </div>
  `;

  return article;
}

function createMiniCard(card, index, visibleCount){
  const article = document.createElement('a');
  article.className = `mini-card reveal${index >= visibleCount ? ' is-extra' : ''}`;
  article.href = getDetailUrl(card);
  article.target = '_blank';
  article.rel = 'noopener';
  article.setAttribute('aria-label', `Ver detalle de ${card.title}`);

  article.innerHTML = `
    <span>${card.eyebrow || card.section}</span>
    <h3>${card.title}</h3>
    <p>${card.summary}</p>
  `;

  return article;
}

function renderEditableCards(){
  const cards = getCards();
  const containers = document.querySelectorAll('[data-card-section]');

  containers.forEach(container => {
    const section = container.dataset.cardSection;
    const visibleCount = Number(container.dataset.visible || cards.length);
    const sectionCards = cards.filter(card => card.section === section);

    container.innerHTML = '';

    sectionCards.forEach((card, index) => {
      const element = container.classList.contains('visual-grid')
        ? createVisualCard(card)
        : createMiniCard(card, index, visibleCount);

      container.appendChild(element);
    });
  });
}

function renderDetailPage(){
  const detailRoot = document.getElementById('detail-root');
  if(!detailRoot) return;

  const params = new URLSearchParams(window.location.search);
  const id = params.get('id');
  const card = getCards().find(item => item.id === id);

  if(!card){
    detailRoot.innerHTML = `
      <section class="page-section detail-empty">
        <div class="container">
          <h1>No hemos encontrado esta ficha</h1>
          <p>Puede que la actividad ya no esté disponible o que el enlace haya cambiado.</p>
          <a class="btn" href="index.html#comunidades">Volver a la portada</a>
        </div>
      </section>
    `;
    return;
  }

  document.title = `${card.title} | Parroquia Jesús y San Martín`;

  const signupButton = card.signupUrl
    ? `<a class="btn" href="${card.signupUrl}" target="_blank" rel="noopener">Formulario de inscripción</a>`
    : '';

  const contactButton = card.contactUrl
    ? `<a class="btn btn-secondary" href="${card.contactUrl}" target="_blank" rel="noopener">${card.contactLabel || 'Contactar'}</a>`
    : '';

  detailRoot.innerHTML = `
    <section class="page-hero detail-hero">
      <div class="container">
        <span class="page-kicker">${card.eyebrow || card.section}</span>
        <h1>${card.title}</h1>
        <p>${card.summary}</p>
      </div>
    </section>

    <section class="page-section">
      <div class="container detail-layout">
        <div class="detail-copy reveal">
          <span class="page-kicker">${card.eyebrow || 'Vida parroquial'}</span>
          <h2>${card.title}</h2>
          <p>${card.description}</p>
          <div class="detail-actions">
            ${signupButton}
            ${contactButton}
          </div>
        </div>
        <div class="detail-image reveal">
          <img src="${card.image}" alt="${card.title}" loading="lazy">
        </div>
      </div>
    </section>
  `;
}

renderEditableCards();
renderDetailPage();


// REVEAL ON SCROLL

function revealOnScroll(){
  const reveals = document.querySelectorAll('.reveal');
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


// WELCOME SLIDER FADE

const slides = document.querySelectorAll('.welcome-slider img');
let current = 0;

if(slides.length){
  slides[current].classList.add('active');

  setInterval(() => {
    slides[current].classList.remove('active');
    current = (current + 1) % slides.length;
    slides[current].classList.add('active');
  }, 3000);
}


// PROGRESSIVE GRIDS

function setupProgressiveGrids(){
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
      revealOnScroll();
    });
  });
}

setupProgressiveGrids();
