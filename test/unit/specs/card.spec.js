import { createComponent, createVM, destroyVM } from '../vm'
import Component from 'src/components/Card'
const Card = Component.Card

describe('Card', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createComponent(Card,true)
    expect(vm.$el.classList.contains('card')).to.true
  })

  it('text', done => {
    vm = createVM({
      template: `
        <r-card>
          <r-card-text>
            <p>this is card</p>
          </r-card-text>
        </r-card>
      `
    }, true)

    vm.$nextTick( () => {
      expect(vm.$el.querySelector('.card-text p').innerHTML).to.equal('this is card')
      done()
    })
  })

});