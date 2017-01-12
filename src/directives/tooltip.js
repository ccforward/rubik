import { directiveConfig } from '../util/tools'

function directive (el, binding) {
  const config = directiveConfig(
    binding,
    { top: true }
  )

  unbind(el, binding, config)
  el.dataset.tooltip = config.text
  el.dataset['tooltipPosition'] = config.value
}

function unbind (el, binding, config) {
  el.removeAttribute('data-tooltip')
  el.removeAttribute('data-tooltip-postion')
}

export default {
  bind: directive,
  updated: directive,
  componentUpdated: directive,
  unbind: unbind
}