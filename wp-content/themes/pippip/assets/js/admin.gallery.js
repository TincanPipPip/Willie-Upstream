import baguetteBox from 'baguettebox.js';

// Manually run accordion JS to work with GBerg previews
function initGallery() {
  if (document.querySelectorAll('.gallery')) {
    baguetteBox.run('.gallery');
  }
}

document.addEventListener('DOMContentLoaded', function() {
  initGallery();
});

// Initialize dynamic block preview (editor)
if (window.acf) {
  window.acf.addAction('render_block_preview', initGallery);
}
