const directive = (el, binding, v) => {
  el.dataset.modal = binding.arg

  el.onclick = e => {
    e.preventDefault()
    
    v.context.$rubik.bridge.pub(`modal:open:${binding.arg}`)
  }
}

export default {
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind (el) {
    el.removeAttribute('onclick')
    el.removeAttribute('data-modal')
  }
}
