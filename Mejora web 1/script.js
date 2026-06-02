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

function getEvents(){
  return typeof pastoralEvents !== 'undefined' && Array.isArray(pastoralEvents) ? pastoralEvents : [];
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
    <img src="${card.image}" alt="${card.title}" loading="lazy">
    <div>
      <span>${card.eyebrow || card.section}</span>
      <h3>${card.title}</h3>
      <p>${card.summary}</p>
    </div>
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

function createFeaturedItem(card){
  const item = document.createElement('a');
  item.className = 'featured-item reveal';
  item.href = getDetailUrl(card);
  item.target = '_blank';
  item.rel = 'noopener';
  item.setAttribute('aria-label', `Ver contenido destacado: ${card.title}`);

  item.innerHTML = `
    <div class="featured-copy">
      <span>${card.eyebrow || 'Destacado'}</span>
      <h3>${card.featuredTitle || card.title}</h3>
      <p>${card.featuredSummary || card.summary}</p>
      <strong>${card.featuredCta || 'Ver más'}</strong>
    </div>
    <img src="${card.image}" alt="${card.title}" loading="lazy">
  `;

  return item;
}

function renderFeaturedContent(){
  const container = document.getElementById('featured-content');
  if(!container) return;

  const featuredCards = getCards()
    .filter(card => card.featured)
    .sort((a, b) => (a.featuredOrder || 99) - (b.featuredOrder || 99));

  const section = container.closest('.featured-section');

  if(!featuredCards.length){
    section?.setAttribute('hidden', '');
    return;
  }

  container.innerHTML = '';
  featuredCards.forEach(card => container.appendChild(createFeaturedItem(card)));
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

  const descriptionContent = card.descriptionHtml || `<p>${card.description || ''}</p>`;

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
          <div class="detail-rich-text">
            ${descriptionContent}
          </div>
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
renderFeaturedContent();
renderDetailPage();


// PASTORAL CALENDAR

function parseLocalDate(dateValue){
  const [year, month, day] = dateValue.split('-').map(Number);
  return new Date(year, month - 1, day);
}

function startOfToday(){
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function addMonths(date, months){
  return new Date(date.getFullYear(), date.getMonth() + months, date.getDate());
}

function formatEventDate(dateValue){
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(parseLocalDate(dateValue));
}

function formatDateObject(dateValue){
  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(dateValue);
}

function getLinkedGroup(event){
  if(!event.groupId) return null;
  return getCards().find(card => card.id === event.groupId) || null;
}

function createCalendarEvent(event){
  const group = getLinkedGroup(event);
  const groupButton = group
    ? `<a class="calendar-link" href="${getDetailUrl(group)}" target="_blank" rel="noopener">Ver grupo</a>`
    : '';
  const signupButton = event.signupUrl
    ? `<a class="calendar-link" href="${event.signupUrl}" target="_blank" rel="noopener">Inscripción</a>`
    : '';
  const contactButton = event.contactUrl
    ? `<a class="calendar-link" href="${event.contactUrl}" target="_blank" rel="noopener">Contacto</a>`
    : '';

  return `
    <article class="timeline-item calendar-event reveal">
      <img src="${event.image}" alt="${event.title}" loading="lazy">
      <div class="calendar-event-copy">
        <time datetime="${event.date}">${formatEventDate(event.date)}${event.time ? ` · ${event.time}` : ''}</time>
        <span>${event.category}</span>
        <h3>${event.title}</h3>
        <p>${event.summary}</p>
        <p class="calendar-location">${event.location || ''}</p>
        <div class="calendar-actions">
          ${groupButton}
          ${signupButton}
          ${contactButton}
        </div>
      </div>
    </article>
  `;
}

function renderPastoralCalendar(months = 12){
  const timeline = document.getElementById('pastoral-timeline');
  const rangeLabel = document.getElementById('calendar-range');
  if(!timeline) return;

  const today = startOfToday();
  const limit = addMonths(today, months);

  const events = getEvents()
    .filter(event => {
      const eventDate = parseLocalDate(event.date);
      return eventDate >= today && eventDate <= limit;
    })
    .sort((a, b) => {
      const dateDifference = parseLocalDate(a.date) - parseLocalDate(b.date);
      if(dateDifference !== 0) return dateDifference;
      return (a.time || '00:00').localeCompare(b.time || '00:00');
    });

  if(rangeLabel){
    rangeLabel.textContent = `Mostrando eventos desde hoy hasta ${formatDateObject(limit)}.`;
  }

  if(!events.length){
    timeline.innerHTML = `
      <article class="timeline-item calendar-event reveal">
        <div class="calendar-event-copy">
          <h3>No hay eventos programados</h3>
          <p>Cuando se añadan nuevos eventos en calendar.js aparecerán aquí automáticamente.</p>
        </div>
      </article>
    `;
    revealOnScroll();
    return;
  }

  timeline.innerHTML = events.map(createCalendarEvent).join('');
  revealOnScroll();
}

function setupCalendarFilters(){
  const filters = document.querySelectorAll('.calendar-filter');
  if(!filters.length) return;

  filters.forEach(button => {
    button.addEventListener('click', () => {
      filters.forEach(filter => filter.classList.remove('active'));
      button.classList.add('active');
      renderPastoralCalendar(Number(button.dataset.months || 12));
    });
  });

  renderPastoralCalendar(12);
}

setupCalendarFilters();


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
