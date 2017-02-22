import { createComponent, createVM, destroyVM } from '../vm'
import Component from 'src/components/Icon'
const Icon = Component.Icon

describe('Icon', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createComponent(Icon,true)
    expect(vm.$el.classList.contains('icon')).to.true
  })

  it('large', () => {
    vm = createVM({
      template: `<r-icon large>check</r-icon>`
    })
    expect(vm.$el.classList.contains('icon-large')).to.true
    expect(vm.$el.innerHTML).to.be.equal('check')
  })

});