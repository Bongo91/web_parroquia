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

function setMobileMenu(open){
  if(!menuBtn || !navLinks) return;

  navLinks.classList.toggle('active', open);
  menuBtn.setAttribute('aria-controls', 'nav-links');
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
}

setMobileMenu(false);

menuBtn?.addEventListener('click', () => {
  setMobileMenu(!navLinks?.classList.contains('active'));
});

const navDropdowns = document.querySelectorAll('.nav-dropdown');

function closeNavDropdowns(except = null){
  navDropdowns.forEach(dropdown => {
    if(dropdown === except) return;
    dropdown.classList.remove('open');
    dropdown.querySelector('.nav-dropdown-toggle')?.setAttribute('aria-expanded', 'false');
  });
}

navDropdowns.forEach(dropdown => {
  const toggle = dropdown.querySelector('.nav-dropdown-toggle');

  toggle?.addEventListener('click', event => {
    event.stopPropagation();
    const willOpen = !dropdown.classList.contains('open');
    closeNavDropdowns(dropdown);
    dropdown.classList.toggle('open', willOpen);
    toggle.setAttribute('aria-expanded', String(willOpen));
  });
});

document.addEventListener('click', event => {
  if(!event.target.closest('.nav-dropdown')) closeNavDropdowns();
});

document.addEventListener('keydown', event => {
  if(event.key === 'Escape'){
    closeNavDropdowns();

    if(navLinks?.classList.contains('active')){
      setMobileMenu(false);
      menuBtn?.focus();
    }
  }
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

function formatFeaturedDeadline(dateValue){
  const date = parseLocalDate(dateValue);
  if(!date) return '';

  return new Intl.DateTimeFormat('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  }).format(date);
}

function isFeaturedActive(card, today){
  if(!card.featured) return false;

  const start = card.featuredStart ? parseLocalDate(card.featuredStart) : null;
  const end = card.featuredEnd ? parseLocalDate(card.featuredEnd) : null;

  if(card.featuredStart && !start){
    console.warn(`${card.id}: featuredStart debe usar una fecha válida AAAA-MM-DD.`);
    return false;
  }

  if(card.featuredEnd && !end){
    console.warn(`${card.id}: featuredEnd debe usar una fecha válida AAAA-MM-DD.`);
    return false;
  }

  return (!start || today >= start) && (!end || today <= end);
}

function createFeaturedItem(card, hidden){
  const item = document.createElement('a');
  item.className = 'featured-item reveal';
  item.href = getDetailUrl(card);
  item.target = '_blank';
  item.rel = 'noopener';
  item.hidden = hidden;
  item.setAttribute('aria-label', `Ver contenido destacado: ${card.title}`);

  const deadline = card.featuredEnd
    ? `<time class="featured-deadline" datetime="${card.featuredEnd}">Hasta el ${formatFeaturedDeadline(card.featuredEnd)}</time>`
    : '';

  item.innerHTML = `
    <img src="${card.image}" alt="${card.title}" loading="lazy">
    <div class="featured-copy">
      <span>${card.eyebrow || 'Destacado'}</span>
      <h3>${card.featuredTitle || card.title}</h3>
      <p>${card.featuredSummary || card.summary}</p>
      ${deadline}
      <strong>${card.featuredCta || 'Ver más'}</strong>
    </div>
  `;

  return item;
}

function renderFeaturedContent(){
  const container = document.getElementById('featured-content');
  const toggle = document.getElementById('featured-toggle');
  if(!container) return;

  const today = startOfToday();
  const featuredCards = getCards()
    .filter(card => isFeaturedActive(card, today))
    .sort((a, b) => {
      const priorityA = a.featuredPriority ?? a.featuredOrder ?? 99;
      const priorityB = b.featuredPriority ?? b.featuredOrder ?? 99;
      return priorityA - priorityB;
    });

  if(!featuredCards.length){
    container.innerHTML = '<p class="featured-empty">Ahora mismo no hay contenidos destacados.</p>';
    if(toggle) toggle.hidden = true;
    return;
  }

  container.innerHTML = '';
  featuredCards.forEach((card, index) => {
    container.appendChild(createFeaturedItem(card, index >= 3));
  });

  if(!toggle) return;

  if(featuredCards.length <= 3){
    toggle.hidden = true;
    return;
  }

  toggle.hidden = false;
  toggle.textContent = 'Mostrar más';
  toggle.setAttribute('aria-expanded', 'false');

  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    container.querySelectorAll('.featured-item').forEach((item, index) => {
      if(index >= 3) item.hidden = expanded;
    });
    toggle.setAttribute('aria-expanded', String(!expanded));
    toggle.textContent = expanded ? 'Mostrar más' : 'Mostrar menos';
    revealOnScroll();
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
  if(!/^\d{4}-\d{2}-\d{2}$/.test(dateValue || '')) return null;

  const [year, month, day] = dateValue.split('-').map(Number);
  const date = new Date(year, month - 1, day);

  if(
    date.getFullYear() !== year ||
    date.getMonth() !== month - 1 ||
    date.getDate() !== day
  ){
    return null;
  }

  return date;
}

function startOfToday(){
  const today = new Date();
  return new Date(today.getFullYear(), today.getMonth(), today.getDate());
}

function addMonths(date, months){
  const firstDay = new Date(date.getFullYear(), date.getMonth() + months, 1);
  const lastDay = new Date(firstDay.getFullYear(), firstDay.getMonth() + 1, 0).getDate();

  firstDay.setDate(Math.min(date.getDate(), lastDay));
  return firstDay;
}

function formatEventDay(dateValue){
  return new Intl.DateTimeFormat('es-ES', {
    day: '2-digit'
  }).format(parseLocalDate(dateValue));
}

function formatEventMonth(dateValue){
  return new Intl.DateTimeFormat('es-ES', {
    month: 'short'
  }).format(parseLocalDate(dateValue)).replace('.', '');
}

function formatMonthHeading(dateValue){
  const label = new Intl.DateTimeFormat('es-ES', {
    month: 'long',
    year: 'numeric'
  }).format(parseLocalDate(dateValue));

  return label.charAt(0).toUpperCase() + label.slice(1);
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

function validatePastoralEvents(events, cards){
  const errors = [];
  const eventIds = new Set();
  const cardIds = new Set(cards.map(card => card.id));

  events.forEach((event, index) => {
    const reference = event.id || `evento ${index + 1}`;

    ['id', 'date', 'title', 'summary'].forEach(field => {
      if(!event[field]) errors.push(`${reference}: falta el campo ${field}.`);
    });

    if(event.id){
      if(eventIds.has(event.id)){
        errors.push(`${reference}: el id está duplicado.`);
      }
      eventIds.add(event.id);
    }

    if(event.date && !parseLocalDate(event.date)){
      errors.push(`${reference}: la fecha debe ser válida y usar AAAA-MM-DD.`);
    }

    if(event.time && !/^([01]\d|2[0-3]):[0-5]\d$/.test(event.time)){
      errors.push(`${reference}: la hora debe usar HH:MM.`);
    }

    if(event.groupId && !cardIds.has(event.groupId)){
      errors.push(`${reference}: groupId no existe en content.js.`);
    }
  });

  if(errors.length){
    console.warn('Revisa los datos de calendar.js:\n' + errors.join('\n'));
  }

  return errors;
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
  const image = event.image
    ? `<img src="${event.image}" alt="${event.title}" loading="lazy">`
    : '';
  const category = event.category
    ? `<span class="calendar-category">${event.category}</span>`
    : '';
  const location = event.location
    ? `<p class="calendar-location">${event.location}</p>`
    : '';
  const actions = groupButton || signupButton || contactButton
    ? `<div class="calendar-actions">${groupButton}${signupButton}${contactButton}</div>`
    : '';

  return `
    <article class="calendar-event reveal${event.image ? ' has-image' : ''}">
      <time class="calendar-date" datetime="${event.date}${event.time ? `T${event.time}` : ''}">
        <strong>${formatEventDay(event.date)}</strong>
        <span>${formatEventMonth(event.date)}</span>
        ${event.time ? `<small>${event.time}</small>` : ''}
      </time>
      ${image}
      <div class="calendar-event-copy">
        ${category}
        <h3>${event.title}</h3>
        <p>${event.summary}</p>
        ${location}
        ${actions}
      </div>
    </article>
  `;
}

function createCalendarMonth(events){
  const monthKey = events[0].date.slice(0, 7);

  return `
    <section class="calendar-month" aria-labelledby="month-${monthKey}">
      <h2 id="month-${monthKey}">${formatMonthHeading(events[0].date)}</h2>
      <div class="calendar-month-events">
        ${events.map(createCalendarEvent).join('')}
      </div>
    </section>
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
      return eventDate && eventDate >= today && eventDate <= limit;
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
      <article class="calendar-event calendar-empty reveal">
        <div class="calendar-event-copy">
          <h3>No hay eventos programados</h3>
          <p>Cuando se añadan nuevos eventos en calendar.js aparecerán aquí automáticamente.</p>
        </div>
      </article>
    `;
    revealOnScroll();
    return;
  }

  const eventsByMonth = Object.values(events.reduce((groups, event) => {
    const month = event.date.slice(0, 7);
    groups[month] = groups[month] || [];
    groups[month].push(event);
    return groups;
  }, {}));

  timeline.innerHTML = eventsByMonth.map(createCalendarMonth).join('');
  revealOnScroll();
}

function setupCalendarFilters(){
  const filters = document.querySelectorAll('.calendar-filter');
  if(!filters.length) return;

  validatePastoralEvents(getEvents(), getCards());

  filters.forEach(button => {
    button.addEventListener('click', () => {
      filters.forEach(filter => {
        filter.classList.remove('active');
        filter.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('active');
      button.setAttribute('aria-pressed', 'true');
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
