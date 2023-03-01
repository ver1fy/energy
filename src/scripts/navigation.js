/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens.
 */

// Future: we could make these customisable to allow reuse.
const ACTIVE_NAV_CLASS = 'navbar__content--visible';
const ACTIVE_TOGGLE_CLASS = 'navbar__toggle--visible';

/**
 * A very simple script to enable the nav content to be toggled in and out of view.
 */
const initNavigation = () => {
  // Find our navigational elements on the page.
  const navigation = document.querySelector('#primary-nav');
  const toggler = document.querySelector('#primary-toggler');

  // Add an event listner if we found the elements.
  if (navigation && toggler) {
    toggler.addEventListener('click', (e) => {
      // Prevent event bubbling.
      e.preventDefault();
      // Toggle the necessary CSS classes.
      navigation.classList.toggle(ACTIVE_NAV_CLASS);
      toggler.classList.toggle(ACTIVE_TOGGLE_CLASS)
    });
  }
}

if (document.readyState === 'loading') {
  // The DOM has not yet been loaded.
  document.addEventListener('DOMContentLoaded', initNavigation);
} else {
  // The DOM has already been loaded.
  initNavigation();
}
