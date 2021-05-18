import Cookies from 'js-cookie'

const emergencyMessage = document.querySelector('.m-emmsg')

if (emergencyMessage != null) {
  if (!Cookies.get('theCourtauldHideEmmsg')) {
    emergencyMessage.setAttribute('data-state', 'visible')
  }

  const btn = document.querySelector('.m-emmsg__close')

  btn.addEventListener('click', function (e) {
    Cookies.set('theCourtauldHideEmmsg', 'true', { expires: 30 })
    emergencyMessage.setAttribute('data-state', 'hidden')

    e.preventDefault()
  })
}
