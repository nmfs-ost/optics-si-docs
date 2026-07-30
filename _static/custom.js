document.addEventListener('DOMContentLoaded', function () {
  function applyTheme(theme) {
    localStorage.setItem('theme', theme);
    localStorage.setItem('mode', theme);
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.mode = theme;
  }

  function forceTwoStateColorToggle() {
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const storedTheme = localStorage.getItem('theme');
    const initialTheme = storedTheme === 'light' || storedTheme === 'dark'
      ? storedTheme
      : (prefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);

    const themeButtons = Array.from(document.querySelectorAll('.theme-switch-button'));
    themeButtons.forEach(function (button) {
      button.addEventListener('click', function (event) {
        event.preventDefault();
        event.stopPropagation();

        const currentTheme = localStorage.getItem('theme') === 'dark' ? 'dark' : 'light';
        const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
        applyTheme(nextTheme);

        const modeLabel = nextTheme === 'dark' ? 'Dark' : 'Light';
        button.setAttribute('aria-label', 'Color mode: ' + modeLabel);
      }, true);
    });
  }

  forceTwoStateColorToggle();

  const headerInner = document.querySelector('#pst-header .bd-header__inner');
  const topPrimaryToggle = headerInner?.querySelector('button.pst-navbar-icon.sidebar-toggle.primary-toggle');
  const topHeaderEnd = document.querySelector('#pst-header .navbar-header-items__end');
  const articleHeaderButtons = document.querySelector('.bd-header-article .article-header-buttons');

  if (headerInner && topPrimaryToggle && topHeaderEnd) {
    const topSearchButton = topHeaderEnd.querySelector('button.search-button-field.search-button__button');
    if (topSearchButton) {
      let headerSearchHost = headerInner.querySelector('.custom-header-search');
      if (!headerSearchHost) {
        headerSearchHost = document.createElement('div');
        headerSearchHost.className = 'custom-header-search';
        topPrimaryToggle.insertAdjacentElement('afterend', headerSearchHost);
      }
      headerSearchHost.appendChild(topSearchButton);
    }
  }

  if (topHeaderEnd && articleHeaderButtons) {
    let headerActionsHost = topHeaderEnd.querySelector('.custom-header-actions');
    if (!headerActionsHost) {
      headerActionsHost = document.createElement('div');
      headerActionsHost.className = 'navbar-item custom-header-actions';
      topHeaderEnd.insertBefore(headerActionsHost, topHeaderEnd.firstChild);
    }
    headerActionsHost.appendChild(articleHeaderButtons);
  }

  const buttons = Array.from(document.querySelectorAll('button.sidebar-toggle.primary-toggle.btn.btn-sm'));

  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      event.preventDefault();
      event.stopPropagation();

      const sidebar = document.getElementById('pst-primary-sidebar');
      const modal = document.getElementById('pst-primary-sidebar-modal');
      const isOpen = sidebar && sidebar.classList.contains('show');

      if (sidebar) {
        sidebar.classList.toggle('show', !isOpen);
      }
      if (modal) {
        if (!isOpen) {
          modal.showModal();
        } else {
          modal.close();
        }
      }
    });
  });
});
