import Accordions from 'van11y-accessible-accordion-aria';

// Manually run accordion JS to work with GBerg previews
function initAccordion() {
  const accordion = van11yAccessibleAccordionAria({
    ACCORDION_JS: 'js-accordion',
  });
  accordion.attach();
}

document.addEventListener('DOMContentLoaded', function() {
  initAccordion();
});

// Initialize dynamic block preview (editor)
if (window.acf) {
  window.acf.addAction('render_block_preview', initAccordion);
}
