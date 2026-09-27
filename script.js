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

// NAVEGACIÓN PRINCIPAL
// Se mantiene aquí para que la misma estructura llegue a todas las páginas.
function createNavigationDropdown(label, menuId, items, featuredHref = ''){
  const wrapper = document.createElement('li');
  wrapper.className = 'nav-dropdown';

  const toggle = document.createElement('button');
  toggle.className = 'nav-dropdown-toggle';
  toggle.type = 'button';
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-controls', menuId);
  toggle.textContent = label;

  const menu = document.createElement('ul');
  menu.className = 'nav-dropdown-menu';
  menu.id = menuId;

  items.forEach((item, index) => {
    const row = document.createElement('li');
    const link = document.createElement('a');
    link.href = item.href;
    link.textContent = item.label;
    if(index === 0 && featuredHref) link.className = 'featured-link';
    row.appendChild(link);
    menu.appendChild(row);
  });

  wrapper.append(toggle, menu);
  return wrapper;
}

function setupGlobalNavigation(){
  if(!navLinks) return;

  const pastoralLink = [...navLinks.querySelectorAll('a')]
    .find(link => link.getAttribute('href') === 'vida-parroquial.html');
  if(pastoralLink && !document.getElementById('vida-parroquial-menu')){
    const pastoralDropdown = createNavigationDropdown('Vida parroquial', 'vida-parroquial-menu', [
      {label: 'Ver toda Vida parroquial', href: 'vida-parroquial.html'},
      {label: 'Infancia', href: 'categoria.html?id=infancia'},
      {label: 'Adolescentes y jóvenes', href: 'categoria.html?id=juventud'},
      {label: 'Primer anuncio', href: 'categoria.html?id=primer-anuncio'},
      {label: 'Adultos', href: 'categoria.html?id=adultos'},
      {label: 'Sacramentos', href: 'categoria.html?id=sacramentos'},
      {label: 'Novios', href: 'categoria.html?id=novios'},
      {label: 'Matrimonios', href: 'categoria.html?id=matrimonios'},
      {label: 'Oración, celebraciones y retiros', href: 'categoria.html?id=oracion'},
      {label: 'Encuentros y actividades', href: 'categoria.html?id=comunidad'}
    ], 'vida-parroquial.html');
    pastoralLink.closest('li')?.replaceWith(pastoralDropdown);
  }

  const whoLink = [...navLinks.querySelectorAll('a')]
    .find(link => link.getAttribute('href') === 'quienes-somos.html');
  if(whoLink && !document.getElementById('quienes-somos-menu')){
    const whoMenu = createNavigationDropdown('Quiénes somos', 'quienes-somos-menu', [
      {label: 'Conocer la parroquia', href: 'quienes-somos.html'},
      {label: 'Comisión de Comunicaciones', href: 'comisiones-parroquiales.html#comunicaciones'},
      {label: 'Cultura y Fe', href: 'comisiones-parroquiales.html#cultura-fe'},
      {label: 'Montaña', href: 'comisiones-parroquiales.html#montana'}
    ], 'quienes-somos.html');
    whoLink.closest('li')?.replaceWith(whoMenu);
  }

  const pastoralMenu = document.getElementById('vida-parroquial-menu');
  if(pastoralMenu){
    pastoralMenu.replaceChildren();
    [
      {label: 'Ver toda Vida parroquial', href: 'vida-parroquial.html'},
      {label: 'Infancia', href: 'categoria.html?id=infancia'},
      {label: 'Adolescentes y jóvenes', href: 'categoria.html?id=juventud'},
      {label: 'Primer anuncio', href: 'categoria.html?id=primer-anuncio'},
      {label: 'Adultos', href: 'categoria.html?id=adultos'},
      {label: 'Sacramentos', href: 'categoria.html?id=sacramentos'},
      {label: 'Novios', href: 'categoria.html?id=novios'},
      {label: 'Matrimonios', href: 'categoria.html?id=matrimonios'},
      {label: 'Oración, celebraciones y retiros', href: 'categoria.html?id=oracion'},
      {label: 'Encuentros y actividades', href: 'categoria.html?id=comunidad'}
    ].forEach((item, index) => {
      const row = document.createElement('li');
      const link = document.createElement('a');
      link.href = item.href;
      link.textContent = item.label;
      if(index === 0) link.className = 'featured-link';
      row.appendChild(link);
      pastoralMenu.appendChild(row);
    });
  }

  if(!document.getElementById('servicios-menu')){
    const services = createNavigationDropdown('Servicios', 'servicios-menu', [
      {label: 'Cáritas', href: 'caritas.html'},
      {label: 'Biblioteca', href: 'biblioteca.html'},
      {label: 'Visita de enfermos', href: 'visita-enfermos.html'}
    ]);
    const blog = [...navLinks.querySelectorAll('a')]
      .find(link => link.textContent.trim() === 'Blog');
    blog?.closest('li')?.before(services);
  }
}

setupGlobalNavigation();

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

  const categoryLinks = getCategories().filter(category => (card.categories || []).includes(category.id))
    .map(category => `<a href="categoria.html?id=${category.id}">${category.title}</a>`).join('');
  const descriptionContent = card.descriptionHtml || `<p>${card.description || ''}</p>`;
  const detailImage = card.detailImage || card.image || 'images/logo_parroquia_1.jpeg';
  const detailImageAlt = detailImage.includes('logo_parroquia_1')
    ? 'Logotipo de la parroquia, imagen provisional'
    : (card.detailImageAlt || card.imageAlt || card.title);

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
          </div>
          <div id="group-contact"></div>
          <nav class="detail-navigation" aria-label="Categorías del grupo">
            <span class="navigation-label">También en</span>
            <div class="navigation-links">${categoryLinks}
              <a href="vida-parroquial.html">Todas las categorías</a>
            </div>
          </nav>
        </div>
        <div class="detail-image reveal">
          <img src="${detailImage}" alt="${detailImageAlt}" loading="lazy" width="1200" height="1500">
        </div>
      </div>
    </section>
  `;
  renderGroupContact(card);
}

// Los campos opcionales se convierten en enlaces mediante el DOM.
function getGroupContacts(card){
  const contacts = [];
  const common = typeof parishContact !== 'undefined' ? parishContact : {};
  if(common.email) contacts.push({label: `Correo: ${common.email}`, href: `mailto:${common.email}`});
  if(common.phone) contacts.push({label: `Teléfono: ${common.phone}`, href: `tel:${common.phone.replace(/[^+0-9]/g, '')}`});
  if(common.whatsappUrl) contacts.push({label: 'Grupo de WhatsApp', href: common.whatsappUrl});
  const formUrl = card.contactFormUrl || (/^https?:/i.test(card.contactUrl || '') ? card.contactUrl : '');
  if(formUrl) contacts.push({label: 'Formulario de contacto', href: formUrl});
  return contacts;
}

function buildInquiryMailto(email, groupTitle, subject, message){
  return `mailto:${email}?subject=${encodeURIComponent(`[${groupTitle}] ${subject.trim()}`)}&body=${encodeURIComponent(message.trim())}`;
}

function renderGroupContact(card){
  const root = document.getElementById('group-contact');
  if(!root) return;
  const contacts = getGroupContacts(card);
  if(!contacts.length) return;
  const section = document.createElement('section');
  section.className = 'group-contact';
  section.setAttribute('aria-labelledby', 'group-contact-title');
  const heading = document.createElement('h3');
  heading.id = 'group-contact-title';
  heading.textContent = 'Contacto';
  const links = document.createElement('div');
  links.className = 'detail-actions';
  contacts.forEach(contact => {
    const link = document.createElement('a');
    link.className = 'btn btn-secondary';
    link.href = contact.href;
    link.textContent = contact.label;
    if(/^https?:/i.test(contact.href)){
      link.target = '_blank';
      link.rel = 'noopener';
    }
    links.appendChild(link);
  });
  section.append(heading, links);
  if(typeof parishContact !== 'undefined' && parishContact.email){
    const inquiry = document.createElement('details');
    inquiry.className = 'group-inquiry';
    inquiry.innerHTML = `<summary>Enviar una consulta</summary>
      <form class="inquiry-form">
        <p id="inquiry-help">Se abrirá tu aplicación de correo con el mensaje preparado. Revísalo y pulsa Enviar allí. Si no se abre, puedes escribirnos al correo indicado arriba.</p>
        <label for="inquiry-subject">Asunto</label>
        <input id="inquiry-subject" name="subject" required maxlength="150" placeholder="¿En qué podemos ayudarte?">
        <label for="inquiry-message">Mensaje</label>
        <textarea id="inquiry-message" name="message" rows="5" required maxlength="2000"></textarea>
        <button class="btn" type="submit" aria-describedby="inquiry-help">Abrir correo para enviar</button>
      </form>`;
    const form = inquiry.querySelector('form');
    form.addEventListener('submit', event => {
      event.preventDefault();
      const subject = form.elements.namedItem('subject');
      const message = form.elements.namedItem('message');
      if(!subject.value.trim() || !message.value.trim()) return;
      window.location.href = buildInquiryMailto(parishContact.email, card.title, subject.value, message.value);
    });
    section.appendChild(inquiry);
  }
  root.appendChild(section);
}

// DIRECTORIO Y CATEGORÍAS (contenido local de content.js)
function getCategories(){
  return typeof parishCategories !== 'undefined' ? parishCategories : [];
}

function getCategoryCards(id){
  return getCards().filter(card => (card.categories || []).includes(id));
}

function renderPastoralNavigation(){
  const navigation = document.querySelector('.pastoral-nav ul');
  if(!navigation) return;
  navigation.replaceChildren();
  getCategories().forEach(category => {
    const item = document.createElement('li');
    const link = document.createElement('a');
    link.href = `#${category.id}`;
    link.textContent = category.title;
    item.appendChild(link);
    navigation.appendChild(item);
  });
}

function createCategoryCard(category){
  const groups = getCategoryCards(category.id);
  const article = document.createElement('article');
  article.className = 'page-card pastoral-category-card';
  article.id = category.id;
  article.innerHTML = `
    <figure class="category-media" aria-label="Propuestas de ${category.title}">
      <img loading="lazy" width="1200" height="800" alt="">
      <figcaption aria-live="polite" aria-atomic="true"></figcaption>
    </figure>
    <div class="category-copy">
      <h3>${category.title}</h3>
      <p>${category.summary}</p>
      <a class="btn" href="${groups.length === 1 ? getDetailUrl(groups[0]) : `categoria.html?id=${category.id}`}">${groups.length === 1 ? 'Conocer el grupo' : 'Ver grupos'}</a>
    </div>`;
  const media = article.querySelector('figure');
  const image = media.querySelector('img');
  const caption = media.querySelector('figcaption');
  let currentIndex = 0;
  function showGroup(){
    const group = groups[currentIndex];
    const src = group?.image || 'images/logo_parroquia_1.jpeg';
    image.src = src;
    image.alt = src.includes('logo_parroquia_1') ? 'Logotipo de la parroquia, imagen provisional' : (group.imageAlt || group.title);
    image.classList.toggle('is-placeholder', src.includes('logo_parroquia_1'));
    caption.textContent = group ? `${group.title}${groups.length > 1 ? ` · ${currentIndex + 1} de ${groups.length}` : ''}` : 'Próximamente';
  }
  if(groups.length > 1){
    for(const [step, label, symbol] of [[-1, 'Anterior', '‹'], [1, 'Siguiente', '›']]){
      const button = document.createElement('button');
      button.type = 'button';
      button.className = `carousel-arrow ${step < 0 ? 'previous' : 'next'}`;
      button.setAttribute('aria-label', `${label}: ${category.title}`);
      button.textContent = symbol;
      button.addEventListener('click', () => {
        currentIndex = (currentIndex + step + groups.length) % groups.length;
        showGroup();
      });
      media.appendChild(button);
    }
  }
  showGroup();
  return article;
}

function renderPastoralCategories(){
  const grid = document.getElementById('pastoral-categories');
  if(!grid) return;
  getCategories().forEach(category => grid.appendChild(createCategoryCard(category)));
  // Conserva los enlaces antiguos a las categorías reorganizadas.
  const aliases = {catequesis:'infancia', jovenes:'juventud', celebracion:'oracion', matrimonio:'sacramentos', belenismo:'comunidad', retiros:'oracion'};
  const target = aliases[location.hash.slice(1)] || location.hash.slice(1);
  if(target) document.getElementById(target)?.scrollIntoView();
}

function renderCategoryPage(){
  const root = document.getElementById('category-root');
  if(!root) return;
  const id = new URLSearchParams(location.search).get('id');
  const category = getCategories().find(item => item.id === id);
  if(!category){
    document.title = 'Categoría no encontrada | Parroquia Jesús y San Martín';
    root.innerHTML = '<section class="page-hero"><div class="container"><h1>No hemos encontrado esta categoría</h1><a class="btn" href="vida-parroquial.html">Volver a Vida parroquial</a></div></section>';
    return;
  }
  document.title = `${category.title} | Parroquia Jesús y San Martín`;
  root.innerHTML = `<section class="page-hero"><div class="container"><a href="vida-parroquial.html#${category.id}">← Vida parroquial</a><h1>${category.title}</h1><p>${category.summary}</p></div></section><section class="page-section"><div class="container"><h2>Grupos y propuestas</h2><div class="page-card-grid category-groups"></div></div></section>`;
  const grid = root.querySelector('.page-card-grid');
  const groups = getCategoryCards(id);
  if(!groups.length) grid.textContent = 'Próximamente compartiremos las propuestas de esta categoría.';
  groups.forEach(group => {
    const article = document.createElement('article');
    article.className = 'page-card group-card';
    const groupImage = group.image || 'images/logo_parroquia_1.jpeg';
    const placeholder = groupImage.includes('logo_parroquia_1');
    article.innerHTML = `<img class="${placeholder ? 'is-placeholder' : ''}" src="${groupImage}" alt="${placeholder ? 'Logotipo de la parroquia, imagen provisional' : (group.imageAlt || group.title)}" loading="lazy" width="1200" height="800"><div><h3>${group.title}</h3><p>${group.summary}</p><a class="btn" href="${getDetailUrl(group)}">Conocer el grupo<span class="sr-only">: ${group.title}</span></a></div>`;
    grid.appendChild(article);
  });
}

renderPastoralCategories();
renderPastoralNavigation();
renderCategoryPage();

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
