const style = (el, value) => {
  ['transform', 'webkitTransform'].forEach(i => {
    el.style[i] = value
  })
}

const waves = {
  show(e, el, binding){
    const doc = document
    const container = doc.createElement('span')
    const animation = doc.createElement('span')
    const color = binding.value ? binding.value.color : false
    const isLight = binding.modifiers.light

    container.appendChild(animation)
    container.className = 'waves-container'
    el.classList.add('relative')

    if(isLight){
      container.classList.add('light')
    }
    if (!isLight && color) {
      container.classList.add(`${color}-text`)
    }

    animation.className = 'waves-animation'
    animation.style.width = `${el.clientWidth * 2}px`
    animation.style.height = animation.style.width

    el.appendChild(container)

    const offset = el.getBoundingClientRect()
    const x = e.x - offset.left
    const y = e.y - offset.top

    animation.classList.add('waves-animation-enter')
    animation.classList.add('waves-animation-visible')
    style(animation, `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, 0) scale3d(.001, .001, 1)`)
    animation.dataset.activated = Date.now()

    setTimeout(_ => {
      animation.classList.remove('waves-animation-enter')
      style(animation, `translate3d(-50%, -50%, 0) translate3d(${x}px, ${y}px, 0)`)
    }, 0)
  },

  hide(el) {
    const waves = el.getElementsByClassName('waves-animation')

    if (waves.length === 0) return
    const animation = waves[waves.length - 1]
    const diff = Date.now() - Number(animation.dataset.activated)
    let delay = 500 - diff

    delay = delay < 0 ? 0 : delay

    setTimeout(_ => {
      animation.classList.remove('waves-animation-visible')

      setTimeout(_ => {
        animation.parentNode.remove()
        el.classList.remove('relavive')
      }, 300)
    }, delay)
  }
}

const directive = (el, binding, v) => {

  if ('ontouchstart' in window) {
    // el.addEventListener('touchstart', e => waves.show(e, el, binding), false)
    el.addEventListener('touchend', _ => waves.hide(el), false)
    el.addEventListener('touchcancel', _ => waves.hide(el), false)
  }
  el.addEventListener('mousedown', e => waves.show(e, el, binding), false)
  el.addEventListener('mouseup', _ => waves.hide(el), false)
  el.addEventListener('mouseleave', _ => waves.hide(el), false)
  

}

const unbind = (el, binding) => {
  // el.removeEventListener('touchstart', e => waves.show(e, el, binding), false)
  el.removeEventListener('mousedown', e => waves.show(e, el, binding), false)
  el.removeEventListener('touchend', _ => waves.hide(el), false)
  el.removeEventListener('touchcancel', _ => waves.hide(el), false)
  el.removeEventListener('mouseup', _ => waves.hide(el), false)
  el.removeEventListener('mouseleave', _ => waves.hide(el), false)
}

export default {
  bind: directive,
  unbind: unbind
}

