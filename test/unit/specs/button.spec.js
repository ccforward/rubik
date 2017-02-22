import { createComponent, createVM, destroyVM } from '../vm'
import Component from 'src/components/Button'
const Btn = Component.Btn

describe('Button', () => {
  let vm
  afterEach(() => {
    destroyVM(vm)
  })

  it('create', () => {
    vm = createComponent(Btn,true)
    expect(vm.$el.classList.contains('btn')).to.true
  })

  it('link', done => {
    vm = createVM({
      template: `
        <r-btn link>link</r-btn>
      `
    }, true)

    vm.$nextTick( () => {
      expect(vm.$el.nodeName).to.equal('A')
      expect(vm.$el.getAttribute('href')).to.equal('#')
      done()
    })
  })

  it('icon', done => {
    vm = createVM({
      template: `
        <r-btn icon>
          <r-icon>face</r-icon>
        </r-btn>
      `
    }, true)

    vm.$nextTick( () => {
      expect(vm.$el.querySelector('.icon').innerHTML).to.be.equal('face')
      done()
    })

  });

});