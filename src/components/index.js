import Grid from './Grid'
import Card from './Card'
import Slider from './Slider'
import Dropdown from './Dropdown'
import Tabs from './Tabs'
import Modal from './Modal'
import Button from './Button'
import Icon from './Icon'


function init (...components) {
  const com = {}

  components.forEach(c => {
    Object.keys(c).forEach(key => {
      com[`R${key}`] = c[key]
    })
  })

  return com
}

export default init(
  Grid,
  Card,
  Slider,
  Dropdown,
  Tabs,
  Modal,
  Button,
  Icon
)