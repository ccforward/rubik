import Card from './Card.vue'
import CardRow from './CardRow.vue'
import { createSimpleFunctional } from '../../util/tools'

const CardColumn = createSimpleFunctional('card-column')
const CardText = createSimpleFunctional('card-text')
const CardTitle = createSimpleFunctional('card-title')

export default {
  Card,
  CardRow,
  CardColumn,
  CardText,
  CardTitle
}