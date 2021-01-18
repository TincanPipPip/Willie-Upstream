import BlockRestrictor from './BlockRestrictor'
import TemplateWhitelister from './TemplateWhitelister'

/*
 * Add a mapping of block names and what templates they are
 * restricted to.
 */
const blockTemplateRestrictions = {
    'acf/page-signpost': [
        'template-landing-page.php',
        'template-homepage.php',
    ],
    'acf/page-banner': 'template-homepage.php',
    'acf/page-members-panel': 'template-homepage.php',
    'acf/page-signposts': 'template-homepage.php',
    'acf/page-stories': 'template-homepage.php',
    'acf/page-text': [
      'default',
      'template-landing-page.php',
    ],
    'acf/page-accordion': 'template-default.php',
    'acf/page-video': 'template-default.php',
    'acf/page-gallery': 'template-default.php',
    'acf/page-image': 'template-default.php',
    'acf/page-downloads': 'template-default.php',
    'acf/page-embed': 'template-default.php',
    'acf/page-quote': 'template-default.php',
    'acf/page-linked-logos': 'template-default.php',
    'acf/page-cta': 'template-default.php',
    'acf/page-image-text': 'template-default.php',
    'acf/page-children': 'template-landing-page.php',
    'acf/listing-intro': 'template-listing-page.php',
    'acf/listing-archive': 'template-listing-page.php',
}

wp.domReady(() => {
    const restrictor = new BlockRestrictor(blockTemplateRestrictions)
    const templateWhitelister = new TemplateWhitelister(blockTemplateRestrictions)

    restrictor.run()
    templateWhitelister.run()
})
