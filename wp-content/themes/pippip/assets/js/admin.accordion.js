import Accordions from 'van11y-accessible-accordion-aria';

// Manually run accordion JS to work with GBerg previews
function initAccordion() {
  const accordion = van11yAccessibleAccordionAria({
    ACCORDION_JS: 'js-accordion',
  });
  accordion.attach();
}

if (window.acf) {
  // Initialize dynamic block preview (editor)
  document.addEventListener('DOMContentLoaded', function() {
    initAccordion();
  });
  window.acf.addAction('render_block_preview', initAccordion);
}
