(function () {
  'use strict';

  var pageName = (document.title || 'Heliot Media').split('·')[0].trim();
  var pageLinks = [
    { label: 'Inicio', href: 'index.html' },
    { label: 'Portafolio', href: 'index.html#portafolio' },
    { label: 'Servicios', href: 'index.html#servicios' },
    { label: 'El estudio', href: 'sobre-nosotros.html' },
    { label: 'Fotografía', href: 'contratar.html' },
    { label: 'Producción audiovisual', href: 'contratar.html' },
    { label: 'Diseño y branding', href: 'contratar.html' },
    { label: 'Promociones', href: 'promociones.html' },
    { label: 'Cotizar proyecto', href: 'contratar.html' },
    { label: 'Contacto', href: 'contactanos.html' }
  ];

  function logoMarkup(extraClass) {
    return '<a class="' + (extraClass || '') + ' site-logo" href="index.html" aria-label="Heliot Media, inicio">' +
      '<span class="site-logo-mark" aria-hidden="true">hm</span>' +
      '<span class="site-logo-copy"><strong>Heliot</strong><small>Media</small></span>' +
      '</a>';
  }

  function headerMarkup() {
    return '<div class="header-inner site-header-inner">' +
      '<div class="site-brand">' + logoMarkup('') + '</div>' +
      '<button class="menu-mobile-toggle site-menu-toggle" id="mobileToggle" type="button" aria-label="Abrir menú" aria-expanded="false"><svg fill="none" height="22" stroke="currentColor" stroke-linecap="round" stroke-width="1.8" viewBox="0 0 24 24" width="22" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"></path></svg></button>' +
      '<nav class="site-nav-wrap" aria-label="Navegación principal">' +
      '<ul class="nav-main site-nav" id="navMain">' +
      '<li><a href="index.html">Inicio</a></li>' +
      '<li><a href="index.html#portafolio">Portafolio</a></li>' +
      '<li><a href="index.html#servicios">Servicios</a></li>' +
      '<li><a href="sobre-nosotros.html">El estudio</a></li>' +
      '<li class="dropdown site-nav-more"><button class="dropbtn" type="button" aria-expanded="false">Más <span aria-hidden="true">+</span></button><ul class="submenu"><li><a href="beneficios.html">Beneficios</a></li><li><a href="cide-heliot.html">CIDE</a></li><li><a href="el-tiempo.html">El tiempo</a></li><li><a href="promociones.html">Promociones</a></li><li><a href="aranceles.html">Aranceles</a></li></ul></li>' +
      '<li><a href="contactanos.html">Contacto</a></li>' +
      '</ul></nav>' +
      '<button class="search-toggle site-search-toggle" id="searchToggle" type="button" aria-label="Buscar en Heliot Media" aria-haspopup="dialog">' +
      '<svg fill="none" height="20" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" viewBox="0 0 24 24" width="20" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg>' +
      '</button></div>';
  }

  function footerMarkup() {
    return '<div class="footer-inner site-footer-inner">' +
      '<div class="footer-grid site-footer-grid">' +
      '<div class="footer-brand site-footer-brand">' + logoMarkup('site-footer-logo') + '<p class="tagline">Estudio fotográfico y de producción visual para ideas con intención.</p></div>' +
      '<div class="footer-col"><h4>Estudio</h4><ul><li><a href="index.html#portafolio">Portafolio</a></li><li><a href="index.html#servicios">Servicios</a></li><li><a href="sobre-nosotros.html">Quiénes somos</a></li><li><a href="promociones.html">Promociones</a></li></ul></div>' +
      '<div class="footer-col"><h4>Conecta</h4><ul><li><a href="contratar.html">Solicitar cotización</a></li><li><a href="contactanos.html">Contáctanos</a></li><li><a href="https://www.instagram.com/heliotmedia" target="_blank" rel="noopener noreferrer">Instagram ↗</a></li></ul></div>' +
      '<div class="footer-col"><h4>Legal</h4><ul><li><a href="politica-de-privacidad.html">Privacidad</a></li><li><a href="politica-de-cookies.html">Cookies</a></li><li><a href="terminos-y-condiciones-de-uso.html">Términos</a></li><li><a href="aviso-legal.html">Aviso legal</a></li></ul></div>' +
      '</div><div class="footer-bottom site-footer-bottom"><span>© 2026 Heliot Media</span><span>Fotografía · Video · Diseño</span></div></div>';
  }

  function searchMarkup() {
    return '<div class="search-overlay site-search-overlay" id="searchOverlay" role="dialog" aria-modal="true" aria-labelledby="siteSearchTitle">' +
      '<div class="search-modal site-search-modal"><button class="search-close" id="searchClose" type="button" aria-label="Cerrar búsqueda">×</button>' +
      '<p class="eyebrow eyebrow-dark"><span></span> Buscar</p><h2 id="siteSearchTitle">Encuentra tu próximo punto de conexión.</h2>' +
      '<div class="search-container"><label class="sr-only" for="searchInput">Escribe una búsqueda</label><input class="search-input" id="searchInput" type="search" placeholder="Busca una sección o servicio…" autocomplete="off">' +
      '<button class="search-submit-btn" id="searchButton" type="button" aria-label="Ejecutar búsqueda"><svg fill="none" height="22" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.3" viewBox="0 0 24 24" width="22" aria-hidden="true"><circle cx="11" cy="11" r="8"></circle><line x1="21" x2="16.65" y1="21" y2="16.65"></line></svg></button></div>' +
      '<div class="search-results" id="searchResults" aria-live="polite"></div><p class="search-hint">Presiona ESC para cerrar</p></div></div>';
  }

  function renderShell() {
    var header = document.querySelector('.header');
    if (header) {
      header.className = 'header site-header';
      header.innerHTML = headerMarkup();
    }
    var footer = document.querySelector('.footer');
    if (footer) {
      footer.className = 'footer site-footer';
      footer.innerHTML = footerMarkup();
    }
    var oldOverlay = document.getElementById('searchOverlay');
    if (oldOverlay) oldOverlay.remove();
    document.body.insertAdjacentHTML('beforeend', searchMarkup());
    var content = document.querySelector('body > .container');
    if (content) {
      content.classList.add('site-content');
      var crumb = document.createElement('div');
      crumb.className = 'site-breadcrumb';
      crumb.innerHTML = '<a href="index.html">Heliot Media</a><span aria-hidden="true">/</span><strong>' + pageName + '</strong>';
      content.insertBefore(crumb, content.firstChild);
    }
    document.body.classList.add('site-page');
  }

  function bindNavigation() {
    var toggle = document.getElementById('mobileToggle');
    var nav = document.getElementById('navMain');
    if (toggle && nav) {
      toggle.addEventListener('click', function () {
        var open = nav.classList.toggle('active');
        toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        toggle.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
      });
    }
    document.querySelectorAll('.site-nav .dropbtn').forEach(function (button) {
      button.addEventListener('click', function (event) {
        if (window.innerWidth <= 768) {
          event.preventDefault();
          var dropdown = button.parentElement;
          var open = dropdown.classList.toggle('active');
          button.setAttribute('aria-expanded', open ? 'true' : 'false');
        }
      });
    });
    document.querySelectorAll('.site-nav a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (nav) nav.classList.remove('active');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  function bindSearch() {
    var overlay = document.getElementById('searchOverlay');
    var input = document.getElementById('searchInput');
    var results = document.getElementById('searchResults');
    var openButton = document.getElementById('searchToggle');
    var closeButton = document.getElementById('searchClose');
    var submitButton = document.getElementById('searchButton');
    if (!overlay || !input || !results || !openButton) return;

    function closeSearch() {
      overlay.classList.remove('active');
      input.value = '';
      results.innerHTML = '';
      openButton.focus();
    }
    function search() {
      var query = input.value.trim().toLowerCase();
      if (query.length < 2) { results.innerHTML = ''; return; }
      var matches = pageLinks.filter(function (item) { return item.label.toLowerCase().indexOf(query) !== -1; });
      results.innerHTML = matches.length ? matches.slice(0, 8).map(function (item) {
        return '<div class="result-item"><a href="' + item.href + '">' + item.label + '<span aria-hidden="true">↗</span></a></div>';
      }).join('') : '<div class="no-results">No encontramos resultados para <strong>“' + input.value + '”</strong>.</div>';
    }
    openButton.addEventListener('click', function () { overlay.classList.add('active'); setTimeout(function () { input.focus(); }, 80); });
    closeButton.addEventListener('click', closeSearch);
    submitButton.addEventListener('click', search);
    input.addEventListener('input', search);
    input.addEventListener('keydown', function (event) { if (event.key === 'Enter') { event.preventDefault(); search(); } });
    overlay.addEventListener('click', function (event) { if (event.target === overlay) closeSearch(); });
    document.addEventListener('keydown', function (event) { if (event.key === 'Escape' && overlay.classList.contains('active')) closeSearch(); });
  }

  function bindCursor() {
    var cursor = document.getElementById('customCursor');
    if (!cursor) return;
    document.addEventListener('mousemove', function (event) { cursor.style.left = event.clientX + 'px'; cursor.style.top = event.clientY + 'px'; cursor.style.opacity = '0.9'; });
    document.addEventListener('mouseleave', function () { cursor.style.opacity = '0'; });
  }

  function bindScrollHeader() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var lastY = window.scrollY;
    window.addEventListener('scroll', function () {
      var currentY = window.scrollY;
      header.classList.toggle('is-scrolled', currentY > 16);
      header.classList.toggle('scroll-hidden', currentY > 180 && currentY > lastY);
      if (currentY < lastY) header.classList.remove('scroll-hidden');
      lastY = currentY;
    }, { passive: true });
  }

  renderShell();
  bindNavigation();
  bindSearch();
  bindCursor();
  bindScrollHeader();
}());
