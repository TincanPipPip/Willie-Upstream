import 'focus-visible'
import FocusWithin from 'focus-within'
import zenscroll from 'zenscroll'
import LazyLoad from 'vanilla-lazyload'

/**
 * Focus within polyfill
 */
FocusWithin(document, {
  attr: false,
  className: 'focus-within',
})

/*
  Automatically set external links to have nofollow/noopener attrs
*/
const links = document.querySelectorAll('a')

links.forEach(link => {
  if (link.hostname != window.location.hostname) {
    link.setAttribute('rel', 'nofollow noopener')
  }
})

// LazyLoad
const lazyLoadImages = new LazyLoad()

/*
  Zenscroll
  - Set edge offset to 0 to prevnet breaking tab order
*/
zenscroll.setup(null, 0)
