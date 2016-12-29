import Card from './Card/index'
import Slider from './Slider'
import Button from './Button'
import Icon from './Icon'


function bootstrap (...components) {
  const entries = {}

  components.forEach(component => {
    Object.keys(component).forEach(key => {
      entries[`R${key}`] = component[key]
    })
  })

  return entries
}

export default bootstrap(
  Card,
  Slider,
  Button,
  Icon
)