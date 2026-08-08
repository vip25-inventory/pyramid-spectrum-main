/**
 * Utility functions for working with Bootstrap components
 */

/**
 * Initializes Bootstrap accordions on the page
 * Call this function in useEffect after the component mounts
 */
export const initializeAccordions = (): void => {
  // Find all accordion buttons on the page
  const accordionButtons = document.querySelectorAll('.accordion-button');
  
  // Add click handlers if they don't already have them
  accordionButtons.forEach(button => {
    if (!button.getAttribute('data-initialized')) {
      button.addEventListener('click', (e) => {
        const target = e.currentTarget as HTMLElement;
        const collapseTarget = target.getAttribute('data-bs-target');
        
        if (collapseTarget) {
          const collapseElement = document.querySelector(collapseTarget);
          
          if (collapseElement) {
            // Toggle the collapsed state
            if (target.classList.contains('collapsed')) {
              target.classList.remove('collapsed');
              target.setAttribute('aria-expanded', 'true');
              collapseElement.classList.add('show');
            } else {
              target.classList.add('collapsed');
              target.setAttribute('aria-expanded', 'false');
              collapseElement.classList.remove('show');
            }
          }
        }
      });
      
      // Mark as initialized to avoid duplicate handlers
      button.setAttribute('data-initialized', 'true');
    }
  });
}; 