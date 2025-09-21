document.addEventListener('DOMContentLoaded', () => {
  // --- Constants ---
  const THEME_STORAGE_KEY = 'theme-preference';
  const lightToggleButton = document.getElementById('theme-toggle-light');
  const darkToggleButton = document.getElementById('theme-toggle-dark');
  const htmlElement = document.documentElement;

  // --- State ---
  let currentTheme = 'light'; // Default theme

  // --- Functions ---

  /**
   * Applies the given theme to the document and saves the preference.
   * @param {string} theme - The theme to apply ('light' or 'dark').
   */
  const applyTheme = (theme) => {
    // Apply the theme to the <html> element
    htmlElement.dataset.theme = theme;

    // Show/hide the correct button
    if (theme === 'light') {
      lightToggleButton.hidden = true;
      darkToggleButton.hidden = false;
    } else {
      lightToggleButton.hidden = false;
      darkToggleButton.hidden = true;
    }

    // Save the preference to localStorage
    localStorage.setItem(THEME_STORAGE_KEY, theme);

    // Update the current theme state
    currentTheme = theme;
  };

  /**
   * Determines the initial theme based on stored preference or system settings.
   */
  const initializeTheme = () => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Priority: 1. localStorage, 2. System Preference, 3. Default (light)
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');

    applyTheme(initialTheme);
  };

  // --- Event Listeners ---

  // When the light mode (sun) button is clicked, switch to light theme.
  lightToggleButton.addEventListener('click', () => {
    applyTheme('light');
  });

  // When the dark mode (moon) button is clicked, switch to dark theme.
  darkToggleButton.addEventListener('click', () => {
    applyTheme('dark');
  });

  // --- Initialization ---
  initializeTheme();
});
