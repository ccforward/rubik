import Bridge from './bridge'

export default function () {
  const click = e => Bridge.pub('body:click', e)

  if (typeof window.orientation !== 'undefined') {
    document.body.addEventListener('touchstart', click, false)
  } else {
    document.body.addEventListener('click', click, false)
  }
}