import Grid from './Grid'
import Alert from './Alert'
import Breadcrumb from './Breadcrumb'
import Tag from './Tag'
import Card from './Card'
import Slider from './Slider'
import Dropdown from './Dropdown'
import Tabs from './Tabs'
import Modal from './Modal'
import Button from './Button'
import Icon from './Icon'
import Loader from './Loader'
import Pagination from './Pagination'
import Form from './Form'


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
  Alert,
  Grid,
  Breadcrumb,
  Tag,
  Card,
  Slider,
  Dropdown,
  Tabs,
  Modal,
  Button,
  Icon,
  Loader,
  Pagination,
  Form
)